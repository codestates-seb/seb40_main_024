import styled from 'styled-components';

import {
  NavForgotPasswordButton,
  NavSignUpButton,
  NavAssetButton,
} from '../Common/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 700px;
  padding: 30px;
  margin: 200px;
`;

const TitleBox = styled.div`
  margin-bottom: 30px;
  margin-left: 1px;
  width: 130px;
  font-size: 40px;
  font-weight: bold;
  border-bottom: 5px solid #8ec3b0;
  color: #8ec3b0;
  border-radius: 1px;
`;

const InputBox = styled.div`
  .input-box {
    position: relative;
    margin: 10px 0;
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button1 = styled.div`
  display: flex;
  justify-content: center;
`;
const Button2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginBox = () => {
  return (
    <PageContainer>
      <Container>
        <TitleBox>로그인</TitleBox>
        <InputBox>
          <div className="input-box">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="아이디"
            />
            <label htmlFor="username">이메일</label>
          </div>

          <div className="input-box">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <label htmlFor="password">비밀번호</label>
          </div>
        </InputBox>
        <ButtonBox>
          <Button1>
            <NavAssetButton />
          </Button1>
          <Button2>
            <NavForgotPasswordButton />
            <NavSignUpButton />
          </Button2>
        </ButtonBox>
      </Container>
    </PageContainer>
  );
};
