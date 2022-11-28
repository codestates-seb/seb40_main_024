import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import mark from './Img/mark.png';
import AuthContext from '../../store/AuthContext';

const LongContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #8ec3b0;
  border-bottom: 3px solid #def5e5;
  position: fixed;
  z-index: 999990;
  top: 0;
`;
const MarkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 9999999;
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
  margin: 4px;
  background-image: url(${mark});
  background-position: top center;
  background-size: cover;
  cursor: pointer;
`;
const RowDropMenuBox = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 9999999;
  /* border: 1px solid red; */
`;
const HamburgerDropMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 57px;
  position: fixed;
  z-index: 9999999;
  /* border: 1px solid red; */
`;
const Menu = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  color: #444;
  list-style: none;
  padding-top: 25px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 17px;
  font-weight: bold;
  width: 115px;

  cursor: pointer;
  :hover {
    color: #ffff;
  }
  :active {
    color: #9ed5c5;
  }
`;
const MiniMenu = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  color: #444;
  list-style: none;
  padding-top: 25px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 17px;
  font-weight: bold;
  width: 135px;
  height: auto;
  background-color: #8ec3b0;
  border: 3px solid #8ec3b0;
  cursor: pointer;
  :hover {
    color: #ffff;
  }
  :active {
    color: #9ed5c5;
  }
`;
const MenuTopList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  background-color: #def5e5;
  border-top: #8ec3b0;
  border-left: 3px solid #8ec3b0;
  border-right: 3px solid #8ec3b0;
  border-bottom: 3px solid #8ec3b0;
  margin-top: 10px;
  border-end-start-radius: 5px;
  border-end-end-radius: 5px;
  color: #444;
`;
const MiniMenuTopList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  background-color: #def5e5;
  border-top: #8ec3b0;
  border-left: 3px solid #8ec3b0;
  border-right: 3px solid #8ec3b0;
  border-bottom: 3px solid #8ec3b0;
  margin-top: 10px;
  border-radius: 5px;
  color: #444;
`;
const MenuList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: normal;
  margin: 5px;
  padding: 5px;
  width: 115px;
  height: auto;
  color: #444;
  /* display: table-cell; */
  /* border: 1px solid green; */
  list-style: none;
  /* background-color: #8ec3b0; */
  :hover {
    background-color: #8ec3b0;
    border-radius: 5px;
  }
  :active {
    color: #9ed5c5;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: normal;
    text-align: center;
  }
`;

export const LongNavbarBox = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [Assetclicked, setAssetclicked] = useState(true);
  const [Infoclicked, setInfoclicked] = useState(true);
  console.log('authCtx', authCtx);

  const handleClickAsset = () => {
    setAssetclicked(!Assetclicked);
  };

  const handleClickInfo = () => {
    setAssetclicked(true);
    setInfoclicked(!Infoclicked);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  return (
    <>
      <MediaQuery minWidth={800} maxWidth={999999}>
        {!isLoggedIn && (
          <LongContainer>
            <MarkBox onClick={() => navigate('/')}></MarkBox>
            <RowDropMenuBox>
              <Menu onClick={() => navigate('/login')}>로그인</Menu>
              <Menu onClick={() => navigate('/signup')}>회원가입</Menu>
              {Assetclicked ? (
                <>
                  <Menu onClick={handleClickAsset}>자산&목표</Menu>
                </>
              ) : (
                <>
                  <Menu onClick={handleClickAsset}>
                    자산&목표
                    <MenuTopList>
                      <MenuList onClick={() => navigate('/assetchange')}>
                        자산현황
                      </MenuList>
                      <MenuList onClick={() => navigate('/assettargetpage')}>
                        목표현황
                      </MenuList>
                    </MenuTopList>
                  </Menu>
                </>
              )}
              <Menu onClick={() => navigate('/freeboard')}>커뮤니티</Menu>
            </RowDropMenuBox>
          </LongContainer>
        )}
        {isLoggedIn && (
          <LongContainer>
            <MarkBox onClick={() => navigate('/')}></MarkBox>
            <RowDropMenuBox>
              {Infoclicked ? (
                <>
                  <Menu onClick={handleClickInfo}>마이페이지</Menu>
                </>
              ) : (
                <>
                  <Menu onClick={handleClickInfo}>
                    마이페이지
                    <MenuTopList>
                      <MenuList onClick={() => navigate('/mypage')}>
                        마이페이지
                      </MenuList>
                      <MenuList onClick={() => navigate('/myinfopage')}>
                        회원정보수정
                      </MenuList>
                    </MenuTopList>
                  </Menu>
                </>
              )}
              {Assetclicked ? (
                <>
                  <Menu onClick={handleClickAsset}>자산&목표</Menu>
                </>
              ) : (
                <>
                  <Menu onClick={handleClickAsset}>
                    자산&목표
                    <MenuTopList>
                      <MenuList onClick={() => navigate('/assetchange')}>
                        자산현황
                      </MenuList>
                      <MenuList onClick={() => navigate('/assettargetpage')}>
                        목표현황
                      </MenuList>
                    </MenuTopList>
                  </Menu>
                </>
              )}
              <Menu onClick={() => navigate('/freeboard')}>커뮤니티</Menu>
              <Menu onClick={logoutHandler}>로그아웃</Menu>
            </RowDropMenuBox>
          </LongContainer>
        )}
      </MediaQuery>
    </>
  );
};

export const MiniNavbarBox = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  // eslint-disable-next-line no-unused-vars
  const [Infoclicked, setInfoclicked] = useState(true);
  const [Markclicked, setMarkclicked] = useState(true);
  const [Assetclicked, setAssetclicked] = useState(true);
  // const [Communityclicked, setCommunityclicked] = useState(true);
  // eslint-disable-next-line prettier/prettier
  const handleClickMark = () => {
    setAssetclicked(true);
    // setCommunityclicked(true);
    setMarkclicked(!Markclicked);
  };
  // const handleClickCommunity = () => {
  //   setAssetclicked(true);
  //   setCommunityclicked(!Communityclicked);
  // };
  const handleClickAsset = () => {
    // setCommunityclicked(true);
    setAssetclicked(!Assetclicked);
  };

  const handleClickInfo = () => {
    setAssetclicked(true);
    // setCommunityclicked(true);
    setInfoclicked(!Infoclicked);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  return (
    <>
      <MediaQuery minWidth={0} maxWidth={800}>
        {!isLoggedIn && (
          <LongContainer>
            <MarkBox onClick={handleClickMark}></MarkBox>
            {Markclicked ? null : (
              <>
                <HamburgerDropMenuBox>
                  <MiniMenu onClick={() => navigate('/')}>홈</MiniMenu>
                  <MiniMenu onClick={() => navigate('/login')}>로그인</MiniMenu>
                  <MiniMenu onClick={() => navigate('/signup')}>
                    회원가입
                  </MiniMenu>
                  {Assetclicked ? (
                    <>
                      <MiniMenu onClick={handleClickAsset}>자산&목표</MiniMenu>
                    </>
                  ) : (
                    <>
                      <MiniMenu onClick={handleClickAsset}>
                        자산&목표
                        <MiniMenuTopList>
                          <MenuList onClick={() => navigate('/assetchange')}>
                            자산현황
                          </MenuList>
                          <MenuList
                            onClick={() => navigate('/assettargetpage')}
                          >
                            목표현황
                          </MenuList>
                        </MiniMenuTopList>
                      </MiniMenu>
                    </>
                  )}
                  <MiniMenu
                    onClick={() => navigate('/freeboard')}
                    style={{
                      height: '85px',
                      borderEndEndRadius: '5px',
                      borderEndStartRadius: '5px',
                    }}
                  >
                    커뮤니티
                  </MiniMenu>
                </HamburgerDropMenuBox>
              </>
            )}
          </LongContainer>
        )}
        {isLoggedIn && (
          <LongContainer>
            <MarkBox onClick={handleClickMark}></MarkBox>
            {Markclicked ? null : (
              <>
                <HamburgerDropMenuBox>
                  <MiniMenu onClick={() => navigate('/')}>홈</MiniMenu>
                  {Infoclicked ? (
                    <>
                      <MiniMenu onClick={handleClickInfo}>마이페이지</MiniMenu>
                    </>
                  ) : (
                    <>
                      <MiniMenu onClick={handleClickInfo}>
                        마이페이지
                        <MenuTopList>
                          <MenuList onClick={() => navigate('/mypage')}>
                            마이페이지
                          </MenuList>
                          <MenuList onClick={() => navigate('/myinfopage')}>
                            회원정보수정
                          </MenuList>
                        </MenuTopList>
                      </MiniMenu>
                    </>
                  )}
                  {Assetclicked ? (
                    <>
                      <MiniMenu onClick={handleClickAsset}>자산&목표</MiniMenu>
                    </>
                  ) : (
                    <>
                      <MiniMenu onClick={handleClickAsset}>
                        자산&목표
                        <MiniMenuTopList>
                          <MenuList onClick={() => navigate('/assetchange')}>
                            자산현황
                          </MenuList>
                          <MenuList
                            onClick={() => navigate('/assettargetpage')}
                          >
                            목표현황
                          </MenuList>
                        </MiniMenuTopList>
                      </MiniMenu>
                    </>
                  )}
                  <MiniMenu onClick={() => navigate('/freeboard')}>
                    커뮤니티
                  </MiniMenu>
                  <MiniMenu
                    onClick={logoutHandler}
                    style={{
                      height: '85px',
                      borderEndEndRadius: '5px',
                      borderEndStartRadius: '5px',
                    }}
                  >
                    로그아웃
                  </MiniMenu>
                </HamburgerDropMenuBox>
              </>
            )}
          </LongContainer>
        )}
      </MediaQuery>
    </>
  );
};
