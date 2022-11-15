import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonAA = styled.button`
  width: 90px;
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
  background-color: #8ec3b0;
  :hover {
    letter-spacing: 1px;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ButtonBB = styled.button`
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
  background-color: #8ec3b0;
  :hover {
    letter-spacing: 1px;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ButtonCC = styled.button`
  width: 230px;
  height: 52px;
  position: relative;
  border: none;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 800;
  font-size: 20px;
  /* transition: 0.25s; */
  color: #444;
  stroke: #000000;
  background-color: #8ec3b0;
  :hover {
    letter-spacing: 1px;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ButtonA = () => {
  return <ButtonAA></ButtonAA>;
};

export const ButtonB = () => {
  return <ButtonBB>버튼 중</ButtonBB>;
};

export const NavForgotPasswordButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginRight: '20px', marginTop: '30px', borderRadius: '40px' }}
      onClick={() => navigate('/forgotpassword')}
    >
      비밀번호 찾기
    </ButtonCC>
  );
};

export const ForgotPasswordButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginRight: '20px', marginTop: '30px', borderRadius: '40px' }}
      onClick={() => navigate('/login')}
    >
      임시비밀번호 받기
    </ButtonCC>
  );
};

export const NavSignUpButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginLeft: '20px', marginTop: '30px', borderRadius: '40px' }}
      onClick={() => navigate('/signup')}
    >
      회원가입
    </ButtonCC>
  );
};

export const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginRight: '20px', marginTop: '10px', borderRadius: '40px' }}
      onClick={() => navigate('/login')}
    >
      회원가입하기
    </ButtonCC>
  );
};
