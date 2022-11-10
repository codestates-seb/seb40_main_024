import styled from 'styled-components';
import MainMiddle from '../Component/MainMiddle';
import MainSide from '../Component/MainSide';
import MainFooter from '../Component/MainFooter';

const MainDiv = styled.div`
  margin: 3rem 5rem;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`;

const MainHome = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <MainMiddle />
        <MainSide />
      </ContentDiv>
      <MainFooter />
    </MainDiv>
  );
};

export default MainHome;
