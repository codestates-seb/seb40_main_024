import styled from 'styled-components';
import MainMiddle from '../../Component/Home/MainMiddle';
import MainSide from '../../Component/Home/MainSide';
import MainFooter from '../../Component/Home/MainFooter';
import { LongNavbarBox, MiniNavbarBox } from '../../Component/Common/Navbar';

const MainDiv = styled.div`
  background-color: #f8f8f8;
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
