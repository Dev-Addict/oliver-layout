import {FC, useCallback, useMemo} from 'react';
import styled, {css} from 'styled-components';

import {useItems} from '../../../hooks/contexts/items.hook.ts';
import {Item as ItemType} from '../../../types/item.type.ts';

interface ContainerProps {
	item: ItemType;
	selected: boolean;
}

const Container = styled.div<ContainerProps>`
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

  ${({selected}) => selected && css`
    border: 1px solid ${({theme}) => theme.primary.m};
  `}
`;

const Text = styled.span`
  position: absolute;
`;

interface Props {
	item: ItemType;
}

export const Item: FC<Props> = ({item}) => {
	const {selectedItem, setSelectedItem} = useItems();

	const selected = useMemo(() => selectedItem === item, [selectedItem, item]);

	const onClick = useCallback(() => setSelectedItem(item), [item, setSelectedItem]);

	const renderChildren = () => item.children.map((child) => <Item item={child} />);

	return (
		<Container item={item}
							 onClick={onClick}
							 selected={selected}>
			<Text>
				{item.text}
			</Text>
			{renderChildren()}
		</Container>
	);
};
