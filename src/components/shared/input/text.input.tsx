import {DetailedHTMLProps, forwardRef, HTMLAttributes, useCallback, useRef} from 'react';
import {FieldProps} from 'formik';
import styled from 'styled-components';
import {mergeRefs} from '../../../utils/merge-refs.util.ts';

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

const Postfix = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => theme.foreground.v1};
`;

const Error = styled.div`
  font-size: 12px;
  color: red;
`;

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		FieldProps<string> {
	label?: string;
	postfix?: string;
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
	function TextInput(
		{label, field, form: {touched, errors}, postfix, ...props}, ref) {
		const inputRef = useRef<HTMLInputElement>(null);

		const onInputWrapperClick = useCallback(() => inputRef.current?.focus(), []);

		return (
			<Container>
				{label && <Label htmlFor={field.name}>{label}</Label>}
				<InputWrapper onClick={onInputWrapperClick}>
					<Input autoComplete="off" {...props} {...field} ref={mergeRefs(inputRef, ref)} />
					{postfix &&
						<Postfix>{postfix}</Postfix>
					}
				</InputWrapper>
				<Error>
					{(touched[field.name] && errors[field.name]) as string | undefined || <>&nbsp;</>}
				</Error>
			</Container>
		);
	});
