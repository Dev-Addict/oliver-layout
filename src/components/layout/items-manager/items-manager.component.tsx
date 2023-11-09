import styled from 'styled-components';

import {Item} from './item.component.tsx';
import {AddItem} from '../../shared/add-item.component.tsx';
import {useItems} from '../../../hooks/contexts/items.hook.ts';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  user-select: none;
`;

const HeaderContainer = styled.div`
  margin: 0 16px 8px 16px;
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.foreground.v1};
  font-size: 18px;
  font-weight: bold;
`;

const ItemsContainer = styled.div`
	flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ItemsManager = () => {
	const {items} = useItems();

	const renderItems = (list = items) => list.map((item) => <Item item={item} key={item.id} />,
	);

	return (
		<Container>
			<HeaderContainer>
				<span>Oliver Layout</span>
				<AddItem />
			</HeaderContainer>
			<ItemsContainer>{renderItems()}</ItemsContainer>
		</Container>
	);
};
