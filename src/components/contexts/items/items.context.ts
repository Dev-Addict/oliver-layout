import {createContext, Dispatch, SetStateAction} from 'react';

import {Item} from '../../../types/item.type.ts';

export interface ItemsContextType {
	items: Item[];
	setItems: Dispatch<SetStateAction<Item[]>>;
}

export const ItemsContext = createContext<ItemsContextType>({
	items: [],
	setItems() {
	},
});
