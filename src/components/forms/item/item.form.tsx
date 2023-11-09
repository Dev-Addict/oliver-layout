import {FC} from 'react';
import {Form as FForm, Formik, FormikHelpers} from 'formik';
import styled from 'styled-components';

import {ItemBody} from './item-body.component';
import {validateItem} from './item.validator';
import {ItemFields} from './item.fields';
import {itemInitialValues} from './item.initial-values.ts';

const Form = styled(FForm)`
	width: 100%;
	height: 100%;
`;

interface Props {
	onSubmit?: (
		values: ItemFields,
		formikHelpers: FormikHelpers<ItemFields>,
	) => void | Promise<unknown>;
	initialValues?: ItemFields;
}

export const ItemForm: FC<Props> =
	({
		 onSubmit = () => {
		 },
		 initialValues = itemInitialValues,
	 }) => {
		return (
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validate={validateItem}
				enableReinitialize>
				<Form>
					<ItemBody />
				</Form>
			</Formik>
		);
	};
