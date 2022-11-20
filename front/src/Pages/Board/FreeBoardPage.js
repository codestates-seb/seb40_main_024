import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';
import { Sidebar } from '../../Component/Common/Sidebar';
import { FreeBoardList } from '../../Component/Board/FreeBoardList';
import { NavFreeContentsButton } from '../../Component/Common/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-right: 100px; */
`;

const SidebarSpace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 300px;
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
  width: 60%;
  min-width: 600px;
  height: 1800px;
  flex-direction: column;
  justify-content: left;
  border: 5px solid #def5e5;
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'right',
                marginRight: '10px',
                // border: '1px solid red',
              }}
            >
              <NavFreeContentsButton />
            </div>
            <FreeBoardList />
          </PostListSpace>
        </Box>
      </PageContainer>
    </>
  );
};
