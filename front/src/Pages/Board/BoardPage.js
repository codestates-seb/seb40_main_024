import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';
import { FreeBoardList } from '../../Component/Board/BoardFreeList';
import { useContext, useState } from 'react';
import AuthContext from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../Component/Common/Modal';
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
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;

  const [Modalopen, setModalopen] = useState(false);

  const openModal = () => {
    setModalopen(true);
  };

  const closeModal = () => {
    setModalopen(false);
    navigate('/login');
  };

  const ContentsButton = () => {
    if (isLogin) {
      navigate('/boardpost');
    } else {
      openModal();
    }
  };

  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <PageContainer>
        <Box>
          <PostListSpace>
            <TitleBox>커뮤니티</TitleBox>
            <HeaderBox>
              <NavContentsButton
                ContentsButton={ContentsButton}
              ></NavContentsButton>
              <Modal open={Modalopen} close={closeModal} header="오류 알림">
                게시물 작성은 로그인이 필요합니다!
              </Modal>
            </HeaderBox>
            <FreeBoardList />
          </PostListSpace>
        </Box>
      </PageContainer>
    </>
  );
};
