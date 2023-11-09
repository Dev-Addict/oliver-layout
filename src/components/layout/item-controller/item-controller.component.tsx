import {useCallback, useMemo} from 'react';
import {FormikHelpers} from 'formik';

import {NoItemSelectedMessage} from './no-item-selected-message.component.tsx';
import {useItems} from '../../../hooks/contexts/items.hook.ts';
import {generateItemInitialValues} from '../../forms/item/item.initial-values.ts';
import {ItemForm} from '../../forms/item/item.form.tsx';
import {ItemFields} from '../../forms/item/item.fields.ts';

export const ItemController = () => {
	const {updateItem, selectedItem} = useItems();

	const initialValues = useMemo(() => selectedItem ? generateItemInitialValues(selectedItem) : undefined, [selectedItem]);

	const onSubmit = useCallback((values: ItemFields, {setSubmitting}: FormikHelpers<ItemFields>) => {
		setSubmitting(true);

		updateItem(selectedItem!, values);

		setSubmitting(false);
	}, [selectedItem, updateItem])

	if (!selectedItem)
		return <NoItemSelectedMessage />;

	return (<ItemForm initialValues={initialValues} onSubmit={onSubmit} />);
};
