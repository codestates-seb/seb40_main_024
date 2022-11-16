import styled from 'styled-components';
import Profile from '../../Component/Member/Profile';
import {
  ProfileBtn,
  ReviseBtn,
  SignOutBtn,
} from '../../Component/Common/Button';

const InfoContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .profileStyle {
    margin-top: 130px;
    margin-left: -700px;
  }
`;

const PageHeader = styled.div`
  box-sizing: border-box;
  height: 150px;
  width: 300px;
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 50px;
`;

// const ProfileBtn = styled.button`
//   margin: 0px;
//   height: 50px;
//   width: 150px;
//   position: absolute;
//   top: 45%;
//   left: 35%;
//   cursor: pointer;
// `;

const ListContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 700px;
  width: 600px;
  position: absolute;
  top: 30%;
  left: 45%;
  border: thick double #def5e5;
  border-radius: 10px;
  outline: 1px solid #9ed5c5;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 7px;
  height: 280px;
  width: 550px;
  border: solid 5px #9ed5c5;
  border-radius: 10px;
  span {
    margin: 0 0 0 1px;
  }
`;
const UserInfoHead = styled.div`
  box-sizing: border-box;
  height: 30px;
  width: 540px;
  border: none;
  background-color: #bcead5;
`;
const InfoBoxContain = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: 60px;
  width: 350px;
`;
const InfoBox = styled.input`
  box-sizing: border-box;
  margin: 0 30 0 20px;
  height: 50px;
  width: 200px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: #8ec3b0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;

// const ReviseBtn = styled.button`
//   margin: 0 0 0 10px;
//   height: 50px;
//   width: 100px;

//   cursor: pointer;
// `;
// const OutBtn = styled.button`
//   height: 50px;
//   width: 150px;
//   cursor: pointer;
// `;
const ProfileStyle = styled.div`
  height: 50px;
  width: 150px;
  margin-top: 10px;
  margin-left: -400px;
`;

const MyInfoUpdate = () => {
  return (
    <>
      <InfoContain>
        <PageHeader>회원정보수정</PageHeader>
        <div className="profileStyle">
          <Profile>profile</Profile>
        </div>
        <ProfileStyle>
          <ProfileBtn />
        </ProfileStyle>

        <ListContain>
          <UserInfo>
            <UserInfoHead>회원정보 수정</UserInfoHead>
            <span>아이디 </span>
            <InfoBoxContain>
              <InfoBox></InfoBox>
              <ReviseBtn>변경</ReviseBtn>
            </InfoBoxContain>

            <span>비밀번호 </span>
            <InfoBoxContain>
              <InfoBox></InfoBox>
              <ReviseBtn>변경</ReviseBtn>
            </InfoBoxContain>
            <span>닉네임 </span>
            <InfoBoxContain>
              <InfoBox></InfoBox>
              <ReviseBtn>변경</ReviseBtn>
            </InfoBoxContain>
          </UserInfo>
          <UserInfo>
            <UserInfoHead>구독사항 변경</UserInfoHead>
          </UserInfo>
          <SignOutBtn />
        </ListContain>
      </InfoContain>
    </>
  );
};

export default MyInfoUpdate;
