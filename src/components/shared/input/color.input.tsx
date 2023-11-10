import {DetailedHTMLProps, forwardRef, HTMLAttributes, useCallback, useRef, useState} from 'react';
import {FieldProps} from 'formik';
import styled from 'styled-components';
import {ColorChangeHandler, SketchPicker} from 'react-color';

import {mergeRefs} from '../../../utils/merge-refs.util.ts';
import {EyedropperSampleIcon} from '../../assets/icons/eyedropper-sample.icon.tsx';
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  border: 1px solid ${({theme}) => theme.foreground.v1}66;
  border-radius: 4px;
  cursor: text;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  flex: 1;
  background: transparent;
  min-width: 0;
  width: 0;
`;

const IconContainer = styled.div`
	position: relative;
  width: 16px;
  height: 16px;
	cursor: pointer;
`;

interface ColorPickerContainerProps {
	isOpen: boolean;
}

const ColorPickerContainer = styled.div<ColorPickerContainerProps>`
	position: absolute;
	top: 100%;
	right: 0;
	overflow: hidden;
	max-height: ${({isOpen}) => isOpen ? 300 : 0}px;
	opacity: ${({isOpen}) => isOpen ? 1 : 0};
	transition: max-height 300ms ease-in-out, opacity 50ms ease-in-out;
	z-index: 1;
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
`;

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		FieldProps<string> {
	label?: string;
}

export const ColorInput = forwardRef<HTMLInputElement, Props>(
	function ColorInput(
		{label, field, form: {touched, errors, setFieldValue}, ...props}, ref) {
		const inputRef = useRef<HTMLInputElement>(null);

		const [isPickerOpen, setPickerOpen] = useState(false);

		const onInputWrapperClick = useCallback(() => inputRef.current?.focus(), []);
		const onIconClick = useCallback(() => setPickerOpen((isOpen) => !isOpen), []);
		const onChangeComplete: ColorChangeHandler = useCallback((color) => setFieldValue(field.name, color.hex), [field.name, setFieldValue])

		const iconContainerRef = useOutsideClick<HTMLDivElement>(() => setPickerOpen(false));

		return (
			<Container>
				{label && <Label htmlFor={field.name}>{label}</Label>}
				<InputWrapper onClick={onInputWrapperClick}>
					<Input autoComplete='off' {...props} {...field} ref={mergeRefs(inputRef, ref)} />
					<IconContainer ref={iconContainerRef}>
						<EyedropperSampleIcon size={16} onClick={onIconClick} />
						<ColorPickerContainer isOpen={isPickerOpen}>
							<SketchPicker color={field.value} onChangeComplete={onChangeComplete}/>
						</ColorPickerContainer>
					</IconContainer>
				</InputWrapper>
				<Error>
					{(touched[field.name] && errors[field.name]) as string | undefined || <>&nbsp;</>}
				</Error>
			</Container>
		);
	});
