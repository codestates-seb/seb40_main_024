/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import MainMiddle from '../../Component/Home/MainMiddle';
import MainFooter from '../../Component/Home/MainFooter';
import {
  MiniNavbarBox,
  LongNavbarBox,
} from '../../Component/Common/NavebarRev';

const MainDiv = styled.div`
  background-color: #f8f8f8;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`;

const Marginb = styled.div`
  margin-bottom: 30px;
`;

const MainHome = () => {
  return (
    <MainDiv>
      <Marginb>
        <LongNavbarBox />
        <MiniNavbarBox />
      </Marginb>
      <ContentDiv>
        <MainMiddle />
      </ContentDiv>
      <MainFooter />
    </MainDiv>
  );
};

export default MainHome;
