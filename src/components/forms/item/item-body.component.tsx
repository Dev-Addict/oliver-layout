import {Field} from 'formik';
import styled from 'styled-components';

import {TextInput} from '../../shared/input/text.input.tsx';
import {ColorInput} from '../../shared/input/color.input.tsx';
import {DropdownInput} from '../../shared/input/dropdown.input.tsx';
import {DISPLAY_OPTIONS} from '../../../constants/options/display.options.ts';
import {POSITION_OPTIONS} from '../../../constants/options/position.options.ts';
import {itemFields} from './item.fields.ts';
import {ValueInput} from '../../shared/input/value.input.tsx';

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

const Note = styled.div`
	font-size: 12px;
	color: ${({theme}) => theme.foreground.v1}80;
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
						component={ValueInput}
						name={itemFields.width}
						label='Width'
						unitFieldName={itemFields.widthUnit}
					/>
					<Field
						component={ValueInput}
						name={itemFields.height}
						label='Height'
						unitFieldName={itemFields.heightUnit}
					/>
				</InputGroup>
				<Field
					component={ColorInput}
					name={itemFields.color}
					label='Color'
				/>
				<Field
					component={DropdownInput}
					options={DISPLAY_OPTIONS}
					placeholder='Select display...'
					name={itemFields.display}
					label='Display'
				/>
				<Field
					component={DropdownInput}
					options={POSITION_OPTIONS}
					placeholder='Select position...'
					name={itemFields.position}
					label='Position'
				/>
				<InputGroupWrapper>
					<InputGroupLabel>Padding</InputGroupLabel>
					<InputGroup>
						<Field
							component={ValueInput}
							name={itemFields.paddingTop}
							label='Top'
							unitFieldName={itemFields.paddingTopUnit}
						/>
						<Field
							component={ValueInput}
							name={itemFields.paddingRight}
							label='Right'
							unitFieldName={itemFields.paddingRightUnit}
						/>
					</InputGroup>
					<InputGroup>
						<Field
							component={ValueInput}
							name={itemFields.paddingBottom}
							label='Bottom'
							unitFieldName={itemFields.paddingBottomUnit}
						/>
						<Field
							component={ValueInput}
							name={itemFields.paddingLeft}
							label='Left'
							unitFieldName={itemFields.paddingLeftUnit}
						/>
					</InputGroup>
				</InputGroupWrapper>
				<InputGroupWrapper>
					<InputGroupLabel>Margin</InputGroupLabel>
					<InputGroup>
						<Field
							component={ValueInput}
							name={itemFields.marginTop}
							label='Top'
							unitFieldName={itemFields.marginTopUnit}
						/>
						<Field
							component={ValueInput}
							name={itemFields.marginRight}
							label='Right'
							unitFieldName={itemFields.marginRightUnit}
						/>
					</InputGroup>
					<InputGroup>
						<Field
							component={ValueInput}
							name={itemFields.marginBottom}
							label='Bottom'
							unitFieldName={itemFields.marginBottomUnit}
						/>
						<Field
							component={ValueInput}
							name={itemFields.marginLeft}
							label='Left'
							unitFieldName={itemFields.marginLeftUnit}
						/>
					</InputGroup>
				</InputGroupWrapper>
				<Note>Click on units to switch between them</Note>
			</Inputs>
			<SubmitContainer>
				<Button type='submit'>Save</Button>
			</SubmitContainer>
		</Container>
	);
};
