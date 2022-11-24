import Contents from '../../Component/Board/BoardContents';
import Comments from '../../Component/Board/BoardComments';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';

const MainPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoardContentPage = () => {
  return (
    <>
      <MainPost>
        <LongLoginNavbarBox />
        <MiniLoginNavbarBox />
        <Contents />
        <Comments />
      </MainPost>
    </>
  );
};

export default BoardContentPage;
