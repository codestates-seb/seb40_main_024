import Contents from '../../Component/Board/BoardContents';
import Post from '../../Component/Board/BoardCommentPost';
import Comments from '../../Component/Board/BoardComments';
import {
  LongNavbarBox,
  MiniNavbarBox,
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
        <LongNavbarBox />
        <MiniNavbarBox />
        <Contents />
        <Post />
        <Comments />
      </MainPost>
    </>
  );
};

export default BoardContentPage;
