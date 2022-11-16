import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/Navbar';
import styled from 'styled-components';
import { Sidebar } from '../../Component/Common/Sidebar';
import { BoardList } from '../../Component/Board/BoardList';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 100px;
`;

const SidebarSpace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 10px;
`;

const Box = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 50px;
  width: 100%;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: #8ec3b0;
  height: 100px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const PostListSpace = styled.div`
  display: flex;
  width: 100%;
  height: 1500px;
  flex-direction: column;
  justify-content: left;
  border: 3px solid #8ec3b0;
  border-top: none;
  border-bottom: none;
`;
export const FreeBoardPage = () => {
  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <PageContainer>
        <SidebarSpace>
          <Sidebar></Sidebar>
        </SidebarSpace>
        <Box>
          <PostListSpace>
            <TitleBox>자유 커뮤니티</TitleBox>
            <BoardList></BoardList>
          </PostListSpace>
        </Box>
      </PageContainer>
    </>
  );
};
