import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const LongContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: auto;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #0000ff;

`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #0000ff;
`;

const MarkBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 50px;
  border: 1px solid #ff8040;
`;

const HamburgerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #ff8040;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 2px;
  margin: 2px;
  background-color: #1a1a1a;
  border: 1px solid #1a1a1a;
  border-radius: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ff8040;
`;

const Button = styled.button`
  display: flex;
  line-height: normal;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 30px;
  padding-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #13df6a;
  vertical-align: bottom;
  z-index: 9999;
  cursor: pointer;
  :hover {
    color: #0ea34e;
  }
  :active {
    color: #f4c00b;
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

export const LongNavbarBox = () => {
  return (
    <>
      <MediaQuery minWidth={966} maxWidth={999999}>
        <LongContainer>
          <MarkBox>마크</MarkBox>
          <ButtonBox>
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </ButtonBox>
        </LongContainer>
      </MediaQuery>
    </>
  );
};

export const LongLoginNavbarBox = () => {
  return (
    <>
      <MediaQuery minWidth={966} maxWidth={999999}>
        <LongContainer>
          <MarkBox>마크</MarkBox>
          <ButtonBox>
            <Button>마이페이지</Button>
            <Button>로그아웃</Button>
          </ButtonBox>
        </LongContainer>
      </MediaQuery>
      :
    </>
  );
};

export const MiniNavbarBox = () => {
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
          <MarkBox>마크</MarkBox>
        </MiniContainer>
        {clicked ? (
          <>
            <HamburgerList>
              <BurgerButton>로그인</BurgerButton>
              <BurgerButton>회원가입</BurgerButton>
            </HamburgerList>
          </>
        ) : null}
      </MediaQuery>
    </>
  );
};

export const MiniLoginNavbarBox = () => {
  return (
    <>
      <MediaQuery minWidth={0} maxWidth={965}>
        <MiniContainer>
          <HamburgerBox>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
            <Hamburger></Hamburger>
          </HamburgerBox>
          <MarkBox>마크</MarkBox>
        </MiniContainer>
        {clicked ? (
          <>
            <HamburgerList>
              <BurgerButton>로그인</BurgerButton>
              <BurgerButton>회원가입</BurgerButton>
            </HamburgerList>
          </>
        ) : null}
      </MediaQuery>
    </>
  );
};

// export const LongNavbarBox = () => {

//   return(
//     <PageContainer>

//       <LongContainer>
//         <MarkBox></MarkBox>
//         <ButtonBox>
//           <Button>로그인</Button>
//           <Button>회원가입</Button>
//         </ButtonBox>
//       </LongContainer>

//       <MiniContainer style={{margin : "20px", border : "none"}}></MiniContainer>

//       <LongContainer>
//         <MarkBox></MarkBox>
//         <ButtonBox>
//           <Button>마이페이지</Button>
//           <Button>로그아웃</Button>
//         </ButtonBox>
//       </LongContainer>

//       <MiniContainer style={{margin : "20px", border : "none"}}></MiniContainer>

//       <MediaQuery minWidth={0} maxWidth={965}>
//         <MiniContainer>
//           <HamburgerBox>
//             <Hamburger></Hamburger>
//             <Hamburger></Hamburger>
//             <Hamburger></Hamburger>
//           </HamburgerBox>
//           <MarkBox></MarkBox>
//           <ButtonBox>
//             <Button>로그인</Button>
//             <Button>회원가입</Button>
//           </ButtonBox>
//         </MiniContainer>
//       </MediaQuery>

//       <MiniContainer style={{margin : "20px", border : "none"}}></MiniContainer>

//       <MediaQuery minWidth={0} maxWidth={965}>
//         <MiniContainer>
//           <HamburgerBox>
//             <Hamburger></Hamburger>
//             <Hamburger></Hamburger>
//             <Hamburger></Hamburger>
//           </HamburgerBox>
//           <MarkBox></MarkBox>
//           <ButtonBox>
//             <Button>마이페이지</Button>
//             <Button>로그아웃</Button>
//           </ButtonBox>
//         </MiniContainer>
//       </MediaQuery>

//     </PageContainer>
//   )
// }
