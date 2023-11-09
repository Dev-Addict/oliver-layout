import {useCallback} from 'react';
import styled from 'styled-components';

import {Item} from './item.component.tsx';
import {PlusIcon} from '../../assets/icons/plus.icon.tsx';
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

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ItemsContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ItemsManager = () => {
	const {items, addItem} = useItems();

	const onAddItemClick = useCallback(() => addItem(), [addItem]);

	const renderItems = (list = items) => list.map((item) => <Item item={item} key={item.id} />,
	);

	return (
		<Container>
			<HeaderContainer>
				<span>Oliver Layout</span>
				<IconContainer onClick={onAddItemClick}>
					<PlusIcon size={24} />
				</IconContainer>
			</HeaderContainer>
			<ItemsContainer>{renderItems()}</ItemsContainer>
		</Container>
	);
};
