import styled from 'styled-components';
import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import MainSide from '../Home/MainSide';

const MainLongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 63px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #8ec3b0;
  border-bottom: 3px solid #def5e5;
`;

const LongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #8ec3b0;
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #8ec3b0;
`;

const MarkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  width: 100px;
  height: 50px;
  border: 1px solid #ff8040;
`;

const HamburgerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 50px;
  background-color: #8ec3b0;
  border: 1px solid #bcead5;
  border-radius: 10px;
  /* border: 1px solid #ff8040; */
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 2px;
  margin: 2px;
  background-color: #444;
  border: 1px solid #444;
  border-radius: 20px;
`;

const MainButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid #ff8040; */
`;

// const MainButton = styled.button`
//   display: flex;
//   line-height: normal;
//   font-size: 15px;
//   font-weight: bold;
//   border: none;
//   border-radius: 5px;
//   padding: 5px;
//   background-color: transparent;
//   cursor: pointer;
//   :hover {
//     color: #fff;
//   }
//   :active {
//     color: #f4c00b;
//   }
// `;

const Button = styled.button`
  display: flex;
  line-height: normal;
  margin-left: 5px;
  margin-right: 25px;
  margin-bottom: auto;
  margin-top: auto;
  font-size: 17px;
  font-weight: bold;
  width: 90px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #444;
  vertical-align: bottom;
  z-index: 9999;
  cursor: pointer;
  :hover {
    color: #ffff;
  }
  :active {
    color: #9ed5c5;
  }
`;

const HamburgerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  margin-left: 10px;
  width: auto;
  height: auto;
  border-radius: 5px;
  /* border: 1px solid #ff8040; */
  background-color: #13df6a;
  cursor: pointer;
  position: fixed;
  z-index: 9999;
`;

const BurgerButton = styled.button`
  display: flex;
  line-height: normal;
  margin: 5px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #f9dd7d;
  vertical-align: bottom;
  z-index: 9999;
  cursor: pointer;
  :hover {
    background-color: #0ea34e;
  }
  :active {
    color: #f4c00b;
  }
`;

export const MainLongNavbarBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <MediaQuery minWidth={966} maxWidth={999999}>
        <MainLongContainer>
          <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
          <MainSide />
          <MainButtonBox>
            <Button onClick={() => navigate('/login')}>로그인</Button>
            <Button onClick={() => navigate('/signup')}>회원가입</Button>
          </MainButtonBox>
        </MainLongContainer>
      </MediaQuery>
    </>
  );
};

export const LongNavbarBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <MediaQuery minWidth={966} maxWidth={999999}>
        <LongContainer>
          <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
          <ButtonBox>
            <Button onClick={() => navigate('/login')}>로그인</Button>
            <Button onClick={() => navigate('/signup')}>회원가입</Button>
          </ButtonBox>
        </LongContainer>
      </MediaQuery>
    </>
  );
};

export const LongLoginNavbarBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <MediaQuery minWidth={966} maxWidth={999999}>
        <LongContainer>
          <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
          <ButtonBox>
            <Button>마이페이지</Button>
            <Button>로그아웃</Button>
          </ButtonBox>
        </LongContainer>
      </MediaQuery>
    </>
  );
};

export const MiniNavbarBox = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  console.log(clicked === true);
  const handleClick = () => {
    setClicked(!clicked);
    console.log('눌림');
  };

  return (
    <>
      <MediaQuery minWidth={0} maxWidth={965}>
        <MiniContainer>
          <HamburgerBox onClick={handleClick}>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
          </HamburgerBox>
          <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
        </MiniContainer>
        {clicked ? (
          <>
            <HamburgerList>
              <BurgerButton onClick={() => navigate('/login')}>
                로그인
              </BurgerButton>
              <BurgerButton onClick={() => navigate('/signup')}>
                회원가입
              </BurgerButton>
            </HamburgerList>
          </>
        ) : null}
      </MediaQuery>
    </>
  );
};

export const MiniLoginNavbarBox = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  console.log(clicked === true);
  const handleClick = () => {
    setClicked(!clicked);
    console.log('눌림');
  };

  return (
    <>
      <MediaQuery minWidth={0} maxWidth={965}>
        <MiniContainer>
          <HamburgerBox onClick={handleClick}>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
          </HamburgerBox>
          <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
        </MiniContainer>
        {clicked ? (
          <>
            <HamburgerList>
              <BurgerButton onClick={() => navigate('/login')}>
                마이페이지
              </BurgerButton>
              <BurgerButton onClick={() => navigate('/signup')}>
                로그아웃
              </BurgerButton>
            </HamburgerList>
          </>
        ) : null}
      </MediaQuery>
    </>
  );
};
