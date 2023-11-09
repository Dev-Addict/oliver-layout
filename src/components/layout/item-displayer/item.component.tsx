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
  width: ${({item}) => item.width}px;
  height: ${({item}) => item.height}px;
  background-color: ${({item}) => item.color};
  display: ${({item}) => item.display};
  position: ${({item}) => item.position};
  padding-top: ${({item}) => item.padding.top};
  padding-right: ${({item}) => item.padding.right};
  padding-bottom: ${({item}) => item.padding.bottom};
  padding-left: ${({item}) => item.padding.left};
  margin-top: ${({item}) => item.margin.top};
  margin-right: ${({item}) => item.margin.right};
  margin-bottom: ${({item}) => item.margin.bottom};
  margin-left: ${({item}) => item.margin.left};
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
