import styled from 'styled-components';
import Profile from '../../Component/Member/Profile';
import {
  NameUpdateBtn,
  EmailUpdateBtn,
  PasswordUpdateBtn,
} from '../../Component/Common/Button';

const MyPageContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 100px;
  .profileStyle {
    margin-top: 20px;
  }
`;

const BtnStyle = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const PageHeader = styled.div`
  margin-bottom: 50px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  width: 180px;
  font-size: 40px;
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 300px;
  .input-box {
    position: relative;
    margin: 10px 0;
    display: flex;
  }
  .input-box > input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
  input::placeholder {
    color: transparent;
  }
  input:placeholder-shown + label {
    color: #aaa;
    font-size: 14pt;
    top: 15px;
  }
  input:focus + label,
  label {
    color: #8aa1a1;
    font-size: 10pt;
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }

  input:focus,
  input:not(:placeholder-shown) {
    border-bottom: solid 1px #8ec3b0;
    outline: none;
  }
  input[type='submit'] {
    background-color: #8aa1a1;
    border: none;
    color: white;
    border-radius: 5px;
    width: 100%;
    height: 35px;
    font-size: 14pt;
    margin-top: 100px;
  }
`;

const UserInfo = styled.div`
  width: 300px;
  margin-top: 20px;
  padding: 30px;
  margin-left: 50px;
`;

const UserInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 20px;
`;

const InfoBox = styled.div``;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MyInfo = () => {
  return (
    <MyPageContain>
      <PageHeader>My Page</PageHeader>
      <div className="profileStyle">
        <Profile>profile</Profile>
      </div>
      <Div>
        <ListContain>
          <UserInfo>
            <InputBox>
              <UserInfoHead>회원정보</UserInfoHead>
              <div className="input-box">
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="이름"
                />
                <label htmlFor="username">이름</label>
                <BtnStyle>
                  <NameUpdateBtn />
                </BtnStyle>
              </div>
              <div className="input-box">
                <input
                  id="useremail"
                  type="text"
                  name="useremail"
                  placeholder="이메일"
                />
                <label htmlFor="useremail">이메일</label>
                <BtnStyle>
                  <EmailUpdateBtn />
                </BtnStyle>
              </div>
              <div className="input-box">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                />
                <label htmlFor="password">비밀번호</label>
                <BtnStyle>
                  <PasswordUpdateBtn />
                </BtnStyle>
              </div>
            </InputBox>
          </UserInfo>
        </ListContain>
        <UserInfo>
          <UserInfoHead>구독 현황 확인</UserInfoHead>
          <InfoBox>2022.11.01 ~ 2022.11.30</InfoBox>
        </UserInfo>
        <UserInfo>
          <UserInfoHead>내가 쓴 글</UserInfoHead>
          <InfoBox>* 오늘 너무 빨리간다 시간이</InfoBox>
        </UserInfo>
      </Div>
    </MyPageContain>
  );
};

export default MyInfo;
