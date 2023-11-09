import {useContext} from 'react';

import {ItemsContext} from '../../components/contexts/items/items.context.ts';

export const useItems = () => useContext(ItemsContext);
