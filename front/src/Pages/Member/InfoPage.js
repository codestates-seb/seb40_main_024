import styled from 'styled-components';
import Profile from '../../Component/Member/Profile';

const InfoContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
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

const ProfileBtn = styled.button`
  margin: 0px;
  height: 50px;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 35%;
  cursor: pointer;
`;

const ListContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 700px;
  width: 600px;
  position: absolute;
  top: 30%;
  left: 45%;
  border: solid 1px black;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 30px;
  height: 280px;
  width: 550px;
  border: solid 1px black;
  span {
    margin: 0 0 0 1px;
  }
`;
const UserInfoHead = styled.div`
  box-sizing: border-box;
  height: 30px;
  width: 550px;
  border: solid 1px gray;
  background-color: gray;
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
  margin: 0 20 0 20px;
  height: 50px;
  width: 200px;
  border: solid 1px gray;
`;

const ReviseBtn = styled.button`
  margin: 0 0 0 10px;
  height: 50px;
  width: 100px;

  cursor: pointer;
`;
const OutBtn = styled.button`
  height: 50px;
  width: 150px;
  cursor: pointer;
`;

const InfoPage = () => {
  return (
    <InfoContain>
      <PageHeader>회원정보수정</PageHeader>
      <Profile></Profile>
      <ProfileBtn>프로필수정</ProfileBtn>
      <ListContain>
        <UserInfo>
          <UserInfoHead>회원정보 수정</UserInfoHead>
          <span>아이디 변경</span>
          <InfoBoxContain>
            <InfoBox></InfoBox> <ReviseBtn>변경</ReviseBtn>
          </InfoBoxContain>

          <span>비밀번호 변경</span>
          <InfoBoxContain>
            <InfoBox></InfoBox>
            <ReviseBtn>변경</ReviseBtn>
          </InfoBoxContain>
          <span>이메일 변경</span>
          <InfoBoxContain>
            <InfoBox></InfoBox>
            <ReviseBtn>변경</ReviseBtn>
          </InfoBoxContain>
        </UserInfo>
        <UserInfo>
          <UserInfoHead>구독사항 변경</UserInfoHead>
        </UserInfo>
        <OutBtn onClick={() => alert('탈퇴 완료')}>회원 탈퇴</OutBtn>
      </ListContain>
    </InfoContain>
  );
};

export default InfoPage;
