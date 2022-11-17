import styled from 'styled-components';
import { useState } from 'react';
// import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import MainSide from '../Home/MainSide';

const MainLongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #8ec3b0;
  border-bottom: 3px solid #def5e5;
  z-index: 999998;
  top: 0;
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
  border-bottom: 3px solid #def5e5;
`;

// const MiniContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 900px;
//   height: 60px;
//   padding-left: 20px;
//   padding-right: 20px;
//   background-color: #8ec3b0;
//   border-bottom: 3px solid #def5e5;
// `;

const MarkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  width: 100px;
  height: 50px;
  border: 1px solid #ff8040;
  cursor: pointer;
`;

const HamburgerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 55px;
  height: 55px;
  background-color: #8ec3b0;
  border: 1px solid #bcead5;
  border-radius: 5px;
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
`;

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
  justify-content: center;
  align-items: center;
  float: left;
  margin-left: 20px;
  margin-top: -1px;
  width: 190px;
  height: 330px;
  border-radius: 2px;
  border: 3px solid #bcead5;
  background-color: #bcead5;
  cursor: pointer;
  z-index: 9999;
  position: absolute;
`;

const BurgerButton = styled.button`
  display: flex;
  line-height: normal;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 100%;
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #444;
  vertical-align: bottom;
  z-index: 9999;
  cursor: pointer;
  :hover {
    color: #fff;
    background-color: #8ec3b0;
  }
  :active {
    color: #9ed5c5;
  }
`;

export const MainLongNavbarBox = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setClicked(!clicked);
    console.log('눌림');
  };
  return (
    <>
      {/* <MediaQuery minWidth={966} maxWidth={999999}> */}
      <MainLongContainer>
        <HamburgerBox onClick={handleClick}>
          <Hamburger></Hamburger>
          <Hamburger></Hamburger>
          <Hamburger></Hamburger>
        </HamburgerBox>
        <MainSide />
        <MainButtonBox>
          <Button onClick={() => navigate('/login')}>로그인</Button>
          <Button onClick={() => navigate('/signup')}>회원가입</Button>
        </MainButtonBox>
      </MainLongContainer>
      {clicked ? (
        <>
          <HamburgerList>
            <BurgerButton onClick={() => navigate('/')}>홈</BurgerButton>
            <BurgerButton onClick={() => navigate('/login')}>
              로그인
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/signup')}>
              회원가입
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/asset')}>
              자산&목표
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/assetchange')}>
              자산수정
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/assettarget')}>
              목표수정
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/freeboard')}>
              커뮤니티
            </BurgerButton>
          </HamburgerList>
        </>
      ) : null}
      {/* </MediaQuery> */}
    </>
  );
};

export const LongNavbarBox = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setClicked(!clicked);
    console.log('눌림');
  };
  return (
    <>
      {/* <MediaQuery minWidth={966} maxWidth={999999}> */}
      <LongContainer>
        <HamburgerBox onClick={handleClick}>
          <Hamburger></Hamburger>
          <Hamburger></Hamburger>
          <Hamburger></Hamburger>
        </HamburgerBox>
        <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
        <ButtonBox>
          <Button onClick={() => navigate('/login')}>로그인</Button>
          <Button onClick={() => navigate('/signup')}>회원가입</Button>
        </ButtonBox>
      </LongContainer>
      {clicked ? (
        <>
          <HamburgerList>
            <BurgerButton onClick={() => navigate('/')}>홈</BurgerButton>
            <BurgerButton onClick={() => navigate('/login')}>
              로그인
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/signup')}>
              회원가입
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/asset')}>
              자산&목표
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/assetchange')}>
              자산수정
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/assettarget')}>
              목표수정
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/freeboard')}>
              커뮤니티
            </BurgerButton>
          </HamburgerList>
        </>
      ) : null}
      {/* </MediaQuery> */}
    </>
  );
};

export const LongLoginNavbarBox = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setClicked(!clicked);
    console.log('눌림');
  };

  return (
    <>
      {/* <MediaQuery minWidth={966} maxWidth={999999}> */}
      <LongContainer>
        <HamburgerBox onClick={handleClick}>
          <Hamburger></Hamburger>
          <Hamburger></Hamburger>
          <Hamburger></Hamburger>
        </HamburgerBox>
        <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
        <ButtonBox>
          <Button onClick={() => navigate('/freeboard')}>커뮤니티</Button>
          <Button onClick={() => navigate('/mypage')}>마이페이지</Button>
          <Button onClick={() => navigate('/login')}>로그아웃</Button>
        </ButtonBox>
      </LongContainer>
      {clicked ? (
        <>
          <HamburgerList>
            <BurgerButton onClick={() => navigate('/')}>홈</BurgerButton>
            <BurgerButton onClick={() => navigate('/mypage')}>
              마이페이지
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/asset')}>
              자산&목표
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/assetchange')}>
              자산수정
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/assettarget')}>
              목표수정
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/freeboard')}>
              커뮤니티
            </BurgerButton>
            <BurgerButton onClick={() => navigate('/login')}>
              로그아웃
            </BurgerButton>
          </HamburgerList>
        </>
      ) : null}
      {/* </MediaQuery> */}
    </>
  );
};

// export const MiniNavbarBox = () => {
//   const navigate = useNavigate();
//   const [clicked, setClicked] = useState(false);

//   console.log(clicked === true);
//   const handleClick = () => {
//     setClicked(!clicked);
//     console.log('눌림');
//   };

//   return (
//     <>
//       {/* <MediaQuery minWidth={0} maxWidth={965}> */}
//       <MiniContainer>
//         <HamburgerBox onClick={handleClick}>
//           <Hamburger></Hamburger>
//           <Hamburger></Hamburger>
//           <Hamburger></Hamburger>
//         </HamburgerBox>
//         <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
//       </MiniContainer>
//       {clicked ? (
//         <>
//           <HamburgerList>
//             <BurgerButton onClick={() => navigate('/')}>홈</BurgerButton>
//             <BurgerButton onClick={() => navigate('/login')}>
//               로그인
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/signup')}>
//               회원가입
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/asset')}>
//               자산&목표
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/assetchange')}>
//               자산수정
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/assettarget')}>
//               목표수정
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/freeboard')}>
//               커뮤니티
//             </BurgerButton>
//           </HamburgerList>
//         </>
//       ) : null}
//       {/* </MediaQuery> */}
//     </>
//   );
// };

// export const MiniLoginNavbarBox = () => {
//   const [clicked, setClicked] = useState(false);
//   const navigate = useNavigate();

//   console.log(clicked === true);
//   const handleClick = () => {
//     setClicked(!clicked);
//     console.log('눌림');
//   };

//   return (
//     <>
//       {/* <MediaQuery minWidth={0} maxWidth={965}> */}
//       <MiniContainer>
//         <HamburgerBox onClick={handleClick}>
//           <Hamburger></Hamburger>
//           <Hamburger></Hamburger>
//           <Hamburger></Hamburger>
//         </HamburgerBox>
//         <MarkBox onClick={() => navigate('/')}>마크</MarkBox>
//       </MiniContainer>
//       {clicked ? (
//         <>
//           <HamburgerList>
//             <BurgerButton onClick={() => navigate('/')}>홈</BurgerButton>
//             <BurgerButton onClick={() => navigate('/mypage')}>
//               마이페이지
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/asset')}>
//               자산&목표
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/assetchange')}>
//               자산수정
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/assettarget')}>
//               목표수정
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/freeboard')}>
//               커뮤니티
//             </BurgerButton>
//             <BurgerButton onClick={() => navigate('/login')}>
//               로그아웃
//             </BurgerButton>
//           </HamburgerList>
//         </>
//       ) : null}
//       {/* </MediaQuery> */}
//     </>
//   );
// };
