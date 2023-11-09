import {FC, useCallback, useState} from 'react';
import styled, {useTheme} from 'styled-components';

import {DiamondsFourIcon} from '../../assets/icons/diamonds-four.icon.tsx';
import {PlusIcon} from '../../assets/icons/plus.icon.tsx';
import {CaretDownIcon} from '../../assets/icons/caret-down.icon.tsx';
import {TrashIcon} from '../../assets/icons/trash.icon.tsx';
import {useItems} from '../../../hooks/contexts/items.hook.ts';
import {Item as ItemType} from '../../../types/item.type.ts';
import {Theme} from '../../../types/theme/theme.type.ts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
`;

interface IconContainerProps {
	disabled?: boolean;
	rotate?: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  opacity: ${({disabled}) => disabled ? 0.5 : 1};
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};

  & > svg {
    transform: ${({rotate}) => rotate ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const ActionContainer = styled.div`
  width: 64px;
  height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

interface ChildrenContainerProps {
	isOpen: boolean;
}

const ChildrenContainer = styled.div<ChildrenContainerProps>`
  padding-left: 8px;
  width: 100%;
  height: ${({isOpen}) => isOpen ? 'auto' : 0};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

interface Props {
	item: ItemType;
}

export const Item: FC<Props> = ({item}) => {
	const theme = useTheme() as Theme;

	const {items, addItem, deleteItem} = useItems();

	const [isOpen, setOpen] = useState(false);

	const onDeleteClick = useCallback(() => deleteItem(item), [deleteItem, item]);
	const onAddClick = useCallback((parent: ItemType) => () => addItem(parent), [addItem]);
	const onChildrenClick = useCallback(() => setOpen(!isOpen), [isOpen]);

	const renderItems = (list = items) => list.map((item) => <Item item={item} key={item.id} />,
	);

	return (
		<Wrapper key={item.id}>
			<Container>
				<IconContainer>
					<DiamondsFourIcon size={16} color={theme.primary.v1} />
				</IconContainer>
				<span>{item.name}</span>
				<ActionContainer>
					<IconContainer onClick={onDeleteClick}>
						<TrashIcon size={16} color={theme.secondary.v1} />
					</IconContainer>
					<IconContainer onClick={onAddClick(item)}>
						<PlusIcon size={16} />
					</IconContainer>
					<IconContainer disabled={!item.children.length} onClick={onChildrenClick} rotate={isOpen}>
						<CaretDownIcon size={16} />
					</IconContainer>
				</ActionContainer>
			</Container>
			{item.children.length > 0 && (
				<ChildrenContainer isOpen={isOpen}>
					{renderItems(item.children)}
				</ChildrenContainer>
			)}
		</Wrapper>
	);
};
