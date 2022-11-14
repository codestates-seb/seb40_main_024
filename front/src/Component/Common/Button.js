import styled from 'styled-components';

const ButtonAA = styled.button`
  width: 100px;
`;
const ButtonBB = styled.button`
  width: 200px;
`;
const ButtonCC = styled.button`
  width: 300px;
`;

export const ButtonA = () => {
  return <ButtonAA>로그인</ButtonAA>;
};

export const ButtonB = () => {
  return <ButtonBB>버튼 중</ButtonBB>;
};

export const ButtonC = () => {
  return <ButtonCC>버튼 상</ButtonCC>;
};
