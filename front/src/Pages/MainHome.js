import styled from 'styled-components';
import MainMiddle from '../Component/MainMiddle';
import MainSide from '../Component/MainSide';
import MainFooter from '../Component/MainFooter';
import { LongNavbarBox, MiniNavbarBox } from '../Component/Navbar';

const MainDiv = styled.div`
  margin: 3rem 5rem;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`;

const TestDiv = styled.div`
  margin-bottom: 30px;
`;

const MainHome = () => {
  return (
    <MainDiv>
      <TestDiv>
        <LongNavbarBox />
        <MiniNavbarBox />
      </TestDiv>
      <ContentDiv>
        <MainMiddle />
        <MainSide />
      </ContentDiv>
      <MainFooter />
    </MainDiv>
  );
};

export default MainHome;
