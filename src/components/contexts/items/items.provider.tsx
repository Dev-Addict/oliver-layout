import {FC, PropsWithChildren, useCallback, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import {useTheme} from 'styled-components';

import {ItemsContext} from './items.context.ts';
import {ItemType} from '../../../types/enums/item-type.enum.ts';
import {Item} from '../../../types/item.type.ts';
import {Theme} from '../../../types/theme/theme.type.ts';
import {ItemFields} from '../../forms/item/item.fields.ts';
import {ItemValueUnit} from '../../../types/enums/item-value-unit.enum.ts';

export const ItemsProvider: FC<PropsWithChildren> = ({children}) => {
	const theme = useTheme() as Theme;

	const [items, setItems] = useState<Item[]>([]);
	const [totalItemsCreated, setTotalItemsCreated] = useState(0);
	const [selectedItem, setSelectedItem] = useState<Item | null>(null);

	const addItem = useCallback((parent?: Item, itemType = ItemType.CONTAINER) => {
		const item: Item = {
			id: uuid(),
			type: itemType,
			name: 'Item #' + (totalItemsCreated + 1),
			width: {value: itemType === ItemType.CONTAINER ? 200 : 120, unit: ItemValueUnit.PIXEL},
			height: {value: itemType === ItemType.CONTAINER ? 200 : 40, unit: ItemValueUnit.PIXEL},
			display: 'block',
			position: 'relative',
			color: theme.neutral.v1,
			padding: {
				top: {value: 0, unit: ItemValueUnit.PIXEL},
				right: {value: 0, unit: ItemValueUnit.PIXEL},
				bottom: {value: 0, unit: ItemValueUnit.PIXEL},
				left: {value: 0, unit: ItemValueUnit.PIXEL},
			},
			margin: {
				top: {value: 0, unit: ItemValueUnit.PIXEL},
				right: {value: 0, unit: ItemValueUnit.PIXEL},
				bottom: {value: 0, unit: ItemValueUnit.PIXEL},
				left: {value: 0, unit: ItemValueUnit.PIXEL},
			},
			text: itemType === ItemType.BUTTON ? 'Item #' + (totalItemsCreated + 1) : '',
			children: [],
		};

		if (parent) {
			parent.children.push(item);
			setItems(items => [...items]);
		} else {
			setItems(items => [...items, item]);
		}

		setTotalItemsCreated(totalItemsCreated + 1);
	}, [theme.neutral.v1, totalItemsCreated]);
	const deleteItemFromChildren = useCallback((item: Item, children: Item[]) => {
		for (let i = 0; i < children.length; i++) {
			if (children[i].id === item.id) {
				children.splice(i, 1);
				return true;
			} else if (children[i].children.length > 0)
				if (deleteItemFromChildren(item, children[i].children))
					return true;
		}

		return false;
	}, []);
	const deleteItem = useCallback((item: Item) => {
		if (deleteItemFromChildren(item, items))
			setItems(items => [...items]);
	}, [deleteItemFromChildren, items]);
	const updateItem = useCallback((item: Item, values: ItemFields) => {
		item.name = values.name;
		item.width = {value: +values.width, unit: values.widthUnit};
		item.height = {value: +values.height, unit: values.heightUnit};
		item.display = values.display;
		item.position = values.position;
		item.color = values.color;
		item.padding = {
			top: {value: +values.paddingTop, unit: values.paddingTopUnit},
			right: {value: +values.paddingRight, unit: values.paddingRightUnit},
			bottom: {value: +values.paddingBottom, unit: values.paddingBottomUnit},
			left: {value: +values.paddingLeft, unit: values.paddingLeftUnit}
		};
		item.margin = {
			top: {value: +values.marginTop, unit: values.marginTopUnit},
			right: {value: +values.marginRight, unit: values.marginRightUnit},
			bottom: {value: +values.marginBottom, unit: values.marginBottomUnit},
			left: {value: +values.marginLeft, unit: values.marginLeftUnit}
		};
		item.text = values.text;

		setItems(items => [...items]);
	}, []);

	const doesItemExist = useCallback((item: Item, children: Item[]) => {
		for (let i = 0; i < children.length; i++) {
			if (children[i].id === item.id) {
				return true;
			} else if (children[i].children.length > 0)
				if (doesItemExist(item, children[i].children))
					return true;
		}

		return false;
	}, []);

	useEffect(() => {
		if (selectedItem && !doesItemExist(selectedItem, items))
			setSelectedItem(null);
	}, [doesItemExist, items, selectedItem]);

	return (
		<ItemsContext.Provider value={{items, setItems, addItem, deleteItem, updateItem, selectedItem, setSelectedItem}}>
			{children}
		</ItemsContext.Provider>
	);
};
