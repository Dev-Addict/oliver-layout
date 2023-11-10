import {FC, useCallback, useMemo} from 'react';
import styled, {css, WebTarget} from 'styled-components';

import {useItems} from '../../../hooks/contexts/items.hook.ts';
import {ItemType as ItemTypeEnum} from '../../../types/enums/item-type.enum.ts';
import {Item as ItemType} from '../../../types/item.type.ts';

interface ContainerProps {
	item: ItemType;
	selected: boolean;
}

const Container = (element: WebTarget) => styled(element)<ContainerProps>`
  width: ${({item}) => item.width.value + item.width.unit};
  height: ${({item}) => item.height.value + item.height.unit};
  background-color: ${({item}) => item.color};
  display: ${({item}) => item.display};
  position: ${({item}) => item.position};
  padding-top: ${({item}) => item.padding.top.value + item.padding.top.unit};
  padding-right: ${({item}) => item.padding.right.value + item.padding.right.unit};
  padding-bottom: ${({item}) => item.padding.bottom.value + item.padding.bottom.unit};
  padding-left: ${({item}) => item.padding.left.value + item.padding.left.unit};
  margin-top: ${({item}) => item.margin.top.value + item.margin.top.unit};
  margin-right: ${({item}) => item.margin.right.value + item.margin.right.unit};
  margin-bottom: ${({item}) => item.margin.bottom.value + item.margin.bottom.unit};
  margin-left: ${({item}) => item.margin.left.value + item.margin.left.unit};
	border: none;
	outline: none;

  ${({selected}) => selected && css`
    border: 1px solid ${({theme}) => theme.primary.m};
  `}
`;

interface TextProps {
	isButton: boolean;
}

const Text = styled.span<TextProps>`
	${({isButton}) => !isButton && css`
    position: absolute;
	`}
`;

interface Props {
	item: ItemType;
}

export const Item: FC<Props> = ({item}) => {
	const {selectedItem, setSelectedItem} = useItems();

	const selected = useMemo(() => selectedItem === item, [selectedItem, item]);
	const isButton = useMemo(() => item.type === ItemTypeEnum.BUTTON, [item]);
	const Element = Container(isButton ? 'button' : 'div');

	const onClick = useCallback(() => setSelectedItem(item), [item, setSelectedItem]);

	const renderChildren = () => item.children.map((child) => <Item item={child} />);

	return (
		<Element item={item}
						 onClick={onClick}
						 selected={selected}>
			{item.text &&
				<Text isButton={isButton}>{item.text}</Text>
			}
			{renderChildren()}
		</Element>
	);
};
