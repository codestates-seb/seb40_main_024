import styled from 'styled-components';
import axios from 'axios';
import { useState, useCallback, useContext } from 'react';
import { NavForgotPasswordButton, NavSignUpButton } from '../Common/Button';
import { Modal } from '../Common/Modal';
import AuthContext from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: 250px;
  width: 600px;
  height: 700px;
  border: 8px solid #def5e5;
  border-radius: 10px;
`;

const TitleBox = styled.div`
  margin-bottom: 30px;
  margin-left: 1px;
  width: 160px;
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
    margin-bottom: 15px;
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
  .message {
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -1px;
    &.success {
      color: #8ec3b0;
    }
    &.error {
      color: red;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
  padding: 5px;
  margin: 10px;
  /* border: 1px solid #0000ff; */
  button {
    width: 120px;
    height: 35px;
    position: relative;
    border: none;
    display: inline-block;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    color: #444;
    &.success {
      background-color: #8ec3b0;
      :hover {
        color: #fff;
        letter-spacing: 1px;
        transform: scale(1.1);
        cursor: pointer;
      }
      :active {
        position: relative;
        top: 3px;
      }
    }
    &.error {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Button2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginBox = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const URL = process.env.REACT_APP_API_URL;
  const [Modalopen, setModalopen] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const abc = !(isEmail && isPassword);
  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('정확한 이메일 형식입니다.');
      setIsEmail(true);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('영문, 숫자 조합으로 8자리 이상 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  }, []);

  const openModal = () => {
    setModalopen(true);
  };

  const closeModal = () => {
    setModalopen(false);
    navigate('/', { replace: true });
  };

  const DataLogin = {
    email: email,
    password: password,
  };
  const PostLogin = async () => {
    try {
      const req = await axios.post(`${URL}/member/login`, DataLogin);
      const reqToken = req.headers.get('authorization');
      authCtx.login(reqToken);
      openModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PageContainer>
      <Container>
        <TitleBox>로그인</TitleBox>
        <InputBox>
          <div className="input-box">
            <input
              id="useremail"
              type="text"
              name="useremail"
              placeholder="이메일"
              onChange={onChangeEmail}
            />
            <label htmlFor="useremail">이메일</label>
            {email.length > 0 && (
              <span className={`message ${isEmail ? 'success' : 'error'}`}>
                {emailMessage}
              </span>
            )}
          </div>
          <div className="input-box">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
            />
            <label htmlFor="password">비밀번호</label>
            {password.length > 0 && (
              <span className={`message ${isPassword ? 'success' : 'error'}`}>
                {passwordMessage}
              </span>
            )}
          </div>
        </InputBox>
        <ButtonBox>
          <Button>
            <button
              className={`message ${abc ? 'error' : 'success'}`}
              disabled={!(isEmail && isPassword)}
              onClick={PostLogin}
            >
              로그인 하기
            </button>
          </Button>
          <Button2>
            <NavForgotPasswordButton />
            <NavSignUpButton />
          </Button2>
        </ButtonBox>
        <Modal open={Modalopen} close={closeModal} header="로그인 알림">
          로그인 성공하셨습니다.
        </Modal>
      </Container>
    </PageContainer>
  );
};
