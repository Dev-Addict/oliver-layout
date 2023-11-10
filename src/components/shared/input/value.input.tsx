import {DetailedHTMLProps, forwardRef, HTMLAttributes, useCallback, useMemo, useRef} from 'react';
import {FieldProps} from 'formik';
import styled from 'styled-components';

import {mergeRefs} from '../../../utils/merge-refs.util.ts';
import {ItemValueUnit} from '../../../types/enums/item-value-unit.enum.ts';

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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const Unit = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.foreground.v1};
	cursor: pointer;
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
`;

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		FieldProps<string> {
	label?: string;
	unitFieldName: string;
}

export const ValueInput = forwardRef<HTMLInputElement, Props>(
	function ValueInput(
		{label, unitFieldName, field, form: {touched, errors, values, setFieldValue}, ...props}, ref) {
		const inputRef = useRef<HTMLInputElement>(null);

		const unit = useMemo(() => values[unitFieldName] as ItemValueUnit, [unitFieldName, values]);

		const onInputWrapperClick = useCallback(() => inputRef.current?.focus(), []);
		const onUnitClick = useCallback(() => {
			const unitValues = Object.values(ItemValueUnit);

			void setFieldValue(unitFieldName, unitValues[(unitValues.indexOf(unit) + 1) % unitValues.length]);
		}, [setFieldValue, unit, unitFieldName]);

		return (
			<Container>
				{label && <Label htmlFor={field.name}>{label}</Label>}
				<InputWrapper onClick={onInputWrapperClick}>
					<Input autoComplete='off' {...props} {...field} ref={mergeRefs(inputRef, ref)} type="number" />
					<Unit onClick={onUnitClick}>{unit}</Unit>
				</InputWrapper>
				<Error>
					{(touched[field.name] && errors[field.name]) as string | undefined || <>&nbsp;</>}
				</Error>
			</Container>
		);
	});
