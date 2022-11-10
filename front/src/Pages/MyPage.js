import styled from 'styled-components';

const MyPageContain = styled.div`
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
  width: 200px;
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 50px;
`;

const Profile = styled.div`
  box-sizing: border-box;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 18%;
  left: 23%;
  /* transform: translate(-50%,-50%) */
  padding: 130px;
  border: solid 1px black;
  border-radius: 100%;
`;

const ListContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 950px;
  width: 600px;
  position: absolute;
  top: 30%;
  left: 45%;
  border: solid 1px black;
`;

const UserInfo = styled.div`
  box-sizing: border-box;
  margin-bottom: 30px;
  height: 280px;
  width: 550px;
  border: solid 1px black;
  span {
    margin: 0 0 0 10px;
  }
`;

const UserInfoHead = styled.div`
  box-sizing: border-box;
  height: 30px;
  width: 550px;
  border: solid 1px gray;
  background-color: gray;
`;

const InfoBox = styled.div`
  box-sizing: border-box;
  margin: 0 0 0 10px;
  height: 50px;
  width: 400px;
  border: solid 1px gray;
`;
const UpdateBtn = styled.button`
  margin: 0px;
  height: 100px;
  width: 100px;
  position: absolute;
  top: 18%;
  left: 70%;
  cursor: pointer;
`;

const MyPage = () => {
  return (
    <MyPageContain>
      <PageHeader>My Page</PageHeader>
      <Profile>profile</Profile>
      <UpdateBtn>회원정보수정버튼</UpdateBtn>
      <ListContain>
        <UserInfo>
          <UserInfoHead>회원정보내용</UserInfoHead>
          <span>아이디</span>
          <InfoBox></InfoBox>
          <span>이메일</span>
          <InfoBox></InfoBox>
          <span>비밀번호?</span>
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

export default MyPage;
