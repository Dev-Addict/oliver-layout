import {FC, useCallback, useState} from 'react';
import styled from 'styled-components';

import {PlusIcon} from '../assets/icons/plus.icon.tsx';
import {useItems} from '../../hooks/contexts/items.hook.ts';
import {Item} from '../../types/item.type.ts';
import {ItemType} from '../../types/enums/item-type.enum.ts';
import {useOutsideClick} from '../../hooks/outside-click.hook.ts';

interface ContainerProps {
	size: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  cursor: pointer;
`;

interface OptionsProps {
	isFocused: boolean;
}

const Options = styled.div<OptionsProps>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${({theme}) => theme.background.a};
  border: 1px solid ${({theme}) => theme.foreground.v1}33;
  border-radius: 4px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: ${({isFocused}) => isFocused ? 67 : 0}px;
  opacity: ${({isFocused}) => isFocused ? 1 : 0};
  overflow: hidden;
  transition: max-height 200ms ease-in-out, opacity 50ms ease-in-out;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.foreground.v1}33;
  }
`;

const Option = styled.button`
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    background-color: ${({theme}) => theme.primary.m}1A;
  }
`;

interface Props {
	parent?: Item;
	size?: number;
}

export const AddItem: FC<Props> = ({parent, size = 24}) => {
	const {addItem} = useItems();

	const [isFocused, setIsFocused] = useState(false);

	const onContainerClick = useCallback(() => setIsFocused(isFocused => !isFocused), []);

	const onOptionClick = useCallback((itemType: ItemType) => () => {
		addItem(parent, itemType);
		setIsFocused(false);
	}, [addItem, parent]);
	const onOutsideClick = useCallback(() => setIsFocused(false), []);

	const containerRef = useOutsideClick<HTMLDivElement>(onOutsideClick);

	return (
		<Container size={size} onClick={onContainerClick} ref={containerRef}>
			<PlusIcon size={size} />
			<Options isFocused={isFocused}>
				<Option onClick={onOptionClick(ItemType.CONTAINER)}>Container</Option>
				<Option onClick={onOptionClick(ItemType.BUTTON)}>Button</Option>
			</Options>
		</Container>
	);
};
