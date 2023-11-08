import {FC, PropsWithChildren, useState} from 'react';

import {ItemsContext} from './items.context.ts';
import {Item} from '../../../types/item.type.ts';

export const ItemsProvider: FC<PropsWithChildren> = ({children}) => {
	const [items, setItems] = useState<Item[]>([]);

	return (
		<ItemsContext.Provider value={{items, setItems}}>
			{children}
		</ItemsContext.Provider>
	);
};
