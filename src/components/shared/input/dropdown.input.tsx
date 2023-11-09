import {DetailedHTMLProps, forwardRef, HTMLAttributes, useCallback, useEffect, useState} from 'react';
import {FieldProps} from 'formik';
import styled from 'styled-components';

import {DropdownOption} from '../../../types/dropdown-option.type.ts';
import {CaretDownIcon} from '../../assets/icons/caret-down.icon.tsx';
import {useOutsideClick} from '../../../hooks/outside-click.hook.ts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  border: 1px solid ${({theme}) => theme.foreground.v1}66;
  border-radius: 4px;
  cursor: text;
`;

const Value = styled.span`
  flex: 1;
`;

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

interface OptionsProps {
	isOpen: boolean;
}

const Options = styled.div<OptionsProps>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: ${({theme}) => theme.background.a};
  border: 1px solid ${({theme}) => theme.foreground.v1}33;
  border-radius: 4px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: ${({isOpen}) => isOpen ? 200 : 0}px;
  opacity: ${({isOpen}) => isOpen ? 1 : 0};
  overflow: hidden auto;
  transition: max-height 200ms ease-in-out, opacity 50ms ease-in-out;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.foreground.v1}33;
  }
`;

interface OptionProps {
	isSelected: boolean;
}

const Option = styled.button<OptionProps>`
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: ${({isSelected, theme}) => isSelected ? `${theme.primary.m}1A` : 'transparent'};
  border: none;
  outline: none;

  &:hover {
    background-color: ${({theme}) => theme.primary.m}1A;
  }
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
`;

interface Props<T>
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		FieldProps<string> {
	label?: string;
	placeholder?: string;
	options: DropdownOption<T>[];
}

export const DropdownInput = forwardRef<HTMLDivElement, Props<unknown>>(
	function DropdownInput(
		{label, placeholder, field: {name, value}, form: {touched, errors, setFieldValue}, options, ...props}, ref) {
		const [selectedOption, setSelectedOption] = useState<DropdownOption<unknown> | null>(null);

		const [isOpen, setOpen] = useState(false);

		const onIconClick = useCallback(() => setOpen(isOpen => !isOpen), []);
		const onOptionClick = useCallback((option: DropdownOption<unknown>) => () => setFieldValue(name, option.value), [name, setFieldValue]);

		const inputWrapperRef = useOutsideClick<HTMLDivElement>(() => setOpen(false));

		const renderOptions = () => options.map((option) => (
			<Option key={option.key} isSelected={selectedOption?.value === option.value}
							onClick={onOptionClick(option)}>{option.label}</Option>
		));

		useEffect(() => {
			setSelectedOption(options.find(option => option.value === value) || null);
		}, [options, value]);

		return (
			<Container ref={ref} {...props}>
				{label && <Label htmlFor={name}>{label}</Label>}
				<InputWrapper onClick={onIconClick} ref={inputWrapperRef}>
					<Value>{selectedOption?.label || placeholder}</Value>
					<IconContainer>
						<CaretDownIcon size={16} />
					</IconContainer>
					<Options isOpen={isOpen}>{renderOptions()}</Options>
				</InputWrapper>
				<Error>
					{(touched[name] && errors[name]) as string | undefined || <>&nbsp;</>}
				</Error>
			</Container>
		);
	});
