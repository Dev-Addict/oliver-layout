import styled from 'styled-components';

import {Item} from './item.component.tsx';
import {useItems} from '../../../hooks/contexts/items.hook.ts';

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
`;

export const ItemDisplayer = () => {
	const {items} = useItems();

	const renderItems = () => items.map((item) => <Item item={item} />);

	return (
		<Container>
			{renderItems()}
		</Container>
	);
};
