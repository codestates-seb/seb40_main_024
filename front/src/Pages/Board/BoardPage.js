import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';
import { FreeBoardList } from '../../Component/Board/BoardFreeList';
import { NavContentsButton } from '../../Component/Common/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: #8ec3b0;
  margin-top: 120px;
  margin-bottom: 20px;
`;

const PostListSpace = styled.div`
  display: flex;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 20px;
`;

export const BoardPage = () => {
  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <PageContainer>
        <Box>
          <PostListSpace>
            <TitleBox>커뮤니티</TitleBox>
            <HeaderBox>
              <NavContentsButton />
            </HeaderBox>
            <FreeBoardList />
          </PostListSpace>
        </Box>
      </PageContainer>
    </>
  );
};
