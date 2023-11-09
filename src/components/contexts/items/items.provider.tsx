import {FC, PropsWithChildren, useCallback, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import {useTheme} from 'styled-components';

import {ItemsContext} from './items.context.ts';
import {Item} from '../../../types/item.type.ts';
import {Theme} from '../../../types/theme/theme.type.ts';
import {ItemFields} from '../../forms/item/item.fields.ts';

export const ItemsProvider: FC<PropsWithChildren> = ({children}) => {
	const theme = useTheme() as Theme;

	const [items, setItems] = useState<Item[]>([]);
	const [totalItemsCreated, setTotalItemsCreated] = useState(0);
	const [selectedItem, setSelectedItem] = useState<Item | null>(null);

	const addItem = useCallback((parent?: Item) => {
		const item: Item = {
			id: uuid(),
			name: 'Item #' + (totalItemsCreated + 1),
			width: 200,
			height: 200,
			display: 'block',
			position: 'relative',
			color: theme.neutral.v1,
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
			margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			},
			text: 'Item #' + (totalItemsCreated + 1),
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
		item.width = +values.width;
		item.height = +values.height;
		item.display = values.display;
		item.position = values.position;
		item.color = values.color;
		item.padding = {
			top: +values.paddingTop,
			right: +values.paddingRight,
			bottom: +values.paddingBottom,
			left: +values.paddingLeft,
		};
		item.margin = {
			top: +values.marginTop,
			right: +values.marginRight,
			bottom: +values.marginBottom,
			left: +values.marginLeft,
		};
		item.text = values.text;

		setItems(items => [...items]);
	}, [])

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
