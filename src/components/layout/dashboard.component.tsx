import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
	width: 100%;
	height: 100%;
`;

const SideContainer = styled.div`
  width: 300px;
  background: ${({theme}) => theme.background.v1};
  overflow: auto;
`;

const LayoutContainer = styled.div`
  flex: 1;
  background: ${({theme}) => theme.background.m};
	overflow: auto;
`;

export const Dashboard = () => {
	return (
		<Container>
			<SideContainer></SideContainer>
			<LayoutContainer></LayoutContainer>
			<SideContainer></SideContainer>
		</Container>
	);
};
