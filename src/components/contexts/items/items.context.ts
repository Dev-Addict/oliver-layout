import {createContext, Dispatch, SetStateAction} from 'react';

import {ItemType} from '../../../types/enums/item-type.enum.ts';
import {Item} from '../../../types/item.type.ts';
import {ItemFields} from '../../forms/item/item.fields.ts';

export interface ItemsContextType {
	items: Item[];
	setItems: Dispatch<SetStateAction<Item[]>>;
	addItem: (parent?: Item, itemType?: ItemType) => void;
	deleteItem: (item: Item) => void;
	updateItem: (item: Item, values: ItemFields) => void;
	selectedItem: Item | null;
	setSelectedItem: Dispatch<SetStateAction<Item | null>>;
}

export const ItemsContext = createContext<ItemsContextType>({
	items: [],
	setItems() {
	},
	addItem() {
	},
	deleteItem() {
	},
	updateItem() {
	},
	selectedItem: null,
	setSelectedItem() {
	},
});
