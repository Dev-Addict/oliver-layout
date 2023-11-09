import styled from 'styled-components';
import {DiamondsFourIcon} from '../../assets/icons/diamonds-four.icon.tsx';

const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	font-size: 14px;
`;

const IconContainer = styled.div`
	width: 64px;
	height: 64px;
`;

export const NoItemSelectedMessage = () => {
	return (
		<Container>
			<IconContainer>
				<DiamondsFourIcon size={64}/>
			</IconContainer>
			<span>No Item Selected!</span>
		</Container>
	);
};
