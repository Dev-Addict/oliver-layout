import {FC, useCallback, useMemo, useState} from 'react';
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

interface ContainerProps {
	selected?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  font-size: 14px;
	background-color: ${({selected, theme}) => selected ? theme.primary.v2 : 'transparent'}1A;
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
	selected?: boolean;
}

const ChildrenContainer = styled.div<ChildrenContainerProps>`
  padding-left: 8px;
  width: 100%;
  height: ${({isOpen}) => isOpen ? 'auto' : 0};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({selected, theme}) => selected ? theme.secondary.v2 : 'transparent'}1A;
`;

interface Props {
	item: ItemType;
}

export const Item: FC<Props> = ({item}) => {
	const theme = useTheme() as Theme;

	const {items, addItem, deleteItem, selectedItem, setSelectedItem} = useItems();

	const [isOpen, setOpen] = useState(false);

	const selected = useMemo(() => item.id === selectedItem?.id, [item, selectedItem]);

	const onContainerClick = useCallback(() => setSelectedItem(item), [item, setSelectedItem]);
	const onDeleteClick = useCallback(() => deleteItem(item), [deleteItem, item]);
	const onAddClick = useCallback((parent: ItemType) => () => addItem(parent), [addItem]);
	const onChildrenClick = useCallback(() => setOpen(!isOpen), [isOpen]);

	const renderItems = (list = items) => list.map((item) => <Item item={item} key={item.id} />,
	);

	return (
		<Wrapper key={item.id}>
			<Container onClick={onContainerClick} selected={selected}>
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
				<ChildrenContainer isOpen={isOpen} selected={selected}>
					{renderItems(item.children)}
				</ChildrenContainer>
			)}
		</Wrapper>
	);
};
