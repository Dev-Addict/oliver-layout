import {Field} from 'formik';
import styled from 'styled-components';

import {TextInput} from '../../shared/input/text.input.tsx';
import {ColorInput} from '../../shared/input/color.input.tsx';
import {itemFields} from './item.fields.ts';

const Container = styled.div`
	display: flex;
	flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
	overflow: hidden auto;
`;

const Inputs = styled.div`
  display: flex;
	flex: 1;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
`;

const InputGroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  & > * {
    flex: 1;
  }
`;

const InputGroupLabel = styled.label`
  font-size: 18px;
`;

const SubmitContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  outline: none;
  background-color: ${({theme}) => theme.primary.m};
  color: ${({theme}) => theme.primary.c};
  border-radius: 4px;
  cursor: pointer;
	transition: opacity 0.2s ease-in-out;
	
	&:hover {
		opacity: 0.7;
  }
`;

export const ItemBody = () => {
	return (
		<Container>
			<Inputs>
				<Field
					component={TextInput}
					name={itemFields.name}
					label='Name'
				/>
				<Field
					component={TextInput}
					name={itemFields.text}
					label='Text'
				/>
				<InputGroup>
					<Field
						component={TextInput}
						name={itemFields.width}
						label='Width'
						postfix='px'
					/>
					<Field
						component={TextInput}
						name={itemFields.height}
						label='Height'
						postfix='px'
					/>
				</InputGroup>
				<Field
					component={ColorInput}
					name={itemFields.color}
					label='Color'
				/>
				<Field
					component={TextInput}
					name={itemFields.display}
					label='Display'
				/>
				<Field
					component={TextInput}
					name={itemFields.position}
					label='Position'
				/>
				<InputGroupWrapper>
					<InputGroupLabel>Padding</InputGroupLabel>
					<InputGroup>
						<Field
							component={TextInput}
							name={itemFields.paddingTop}
							label='Top'
							postfix='px'
						/>
						<Field
							component={TextInput}
							name={itemFields.paddingRight}
							label='Right'
							postfix='px'
						/>
					</InputGroup>
					<InputGroup>
						<Field
							component={TextInput}
							name={itemFields.paddingBottom}
							label='Bottom'
							postfix='px'
						/>
						<Field
							component={TextInput}
							name={itemFields.paddingLeft}
							label='Left'
							postfix='px'
						/>
					</InputGroup>
				</InputGroupWrapper>
				<InputGroupWrapper>
					<InputGroupLabel>Margin</InputGroupLabel>
					<InputGroup>
						<Field
							component={TextInput}
							name={itemFields.marginTop}
							label='Top'
							postfix='px'
						/>
						<Field
							component={TextInput}
							name={itemFields.marginRight}
							label='Right'
							postfix='px'
						/>
					</InputGroup>
					<InputGroup>
						<Field
							component={TextInput}
							name={itemFields.marginBottom}
							label='Bottom'
							postfix='px'
						/>
						<Field
							component={TextInput}
							name={itemFields.marginLeft}
							label='Left'
							postfix='px'
						/>
					</InputGroup>
				</InputGroupWrapper>
			</Inputs>
			<SubmitContainer>
				<Button type='submit'>Save</Button>
			</SubmitContainer>
		</Container>
	);
};
