import styled from 'styled-components';
import Profile from '../../Component/Member/Profile';
import { UpdateBtn } from '../../Component/Common/Button';

const MyPageContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .profileStyle {
    margin-top: 100px;
    margin-left: -700px;
  }
`;

const BtnStyle = styled.div`
  margin-top: -110px;
  margin-left: -230px;
  margin-bottom: 20px;
  height: 40px;
  width: 40px;
`;

const PageHeader = styled.div`
  box-sizing: border-box;
  border: none;
  height: 80px;
  width: 280px;
  margin-top: 80px;
  margin-left: -1200px;
  font-size: 70px;
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 250px;
  padding: 20px;
  height: 750px;
  width: 600px;
  /* position: absolute;
  top: 40%;
  left: 45%; */
  border: thick double #def5e5;
  border-radius: 10px;
  outline: 1px solid #9ed5c5;
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 7px;
  height: 250px;
  width: 550px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
  span {
    margin: 0 0 0 10px;
    font-weight: 500;
  }
`;

const UserInfoHead = styled.div`
  box-sizing: border-box;
  margin-left: -7px;
  height: 30px;
  width: 550px;
  border: none;
  background-color: #bcead5;
  font-weight: 700;
`;

const InfoBox = styled.input`
  box-sizing: border-box;
  margin: 0 0 10px 20px;
  height: 50px;
  width: 400px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: #8ec3b0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;
// const UpdateBtn = styled.button`
//   margin: 0px;
//   height: 100px;
//   width: 100px;
//   position: absolute;
//   top: 18%;
//   left: 70%;
//   cursor: pointer;
// `;

const MyInfo = () => {
  return (
    <MyPageContain>
      <PageHeader>My Page</PageHeader>
      <div className="profileStyle">
        <Profile>profile</Profile>
      </div>
      <BtnStyle>
        <UpdateBtn />
      </BtnStyle>
      <ListContain>
        <UserInfo>
          <UserInfoHead>회원정보내용</UserInfoHead>
          <span className="listText">아이디</span>
          <InfoBox></InfoBox>
          <br />
          <span>이메일</span>
          <InfoBox></InfoBox>
          <br />
          <span>닉네임</span>
          <InfoBox></InfoBox>
        </UserInfo>
        <UserInfo>
          <UserInfoHead>구독 현황 확인</UserInfoHead>
          <InfoBox></InfoBox>
        </UserInfo>
        <UserInfo>
          <UserInfoHead>내가 쓴 글</UserInfoHead>
          <InfoBox></InfoBox>
        </UserInfo>
      </ListContain>
    </MyPageContain>
  );
};

export default MyInfo;
