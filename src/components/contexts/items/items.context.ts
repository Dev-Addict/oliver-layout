import {createContext, Dispatch, SetStateAction} from 'react';

import {Item} from '../../../types/item.type.ts';

export interface ItemsContextType {
	items: Item[];
	setItems: Dispatch<SetStateAction<Item[]>>;
	addItem: (parent?: Item) => void;
	deleteItem: (item: Item) => void;
}

export const ItemsContext = createContext<ItemsContextType>({
	items: [],
	setItems() {
	},
	addItem() {
	},
	deleteItem() {
	},
});
