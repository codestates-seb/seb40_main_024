import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 1000px;
  align-items: center;
  justify-content: center;
  border: 3px solid #800000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 700px;
  padding: 30px;
  margin: auto;
  justify-content: center;
  border: 1px solid #0000ff;
`;

const TitleBox = styled.div`
  /* position: fixed; */
  padding: 5px;
  margin: 10px;
  margin-bottom: 50px;
  font-size: 35px;
  text-decoration: underline;
  text-underline-position: under;
  border-radius: 5px;
  border: 1px solid black;
`;

const TextBox = styled.input`
  display: flex;
  padding: 5px;
  margin: 10px;
  line-height: normal;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid black;
  ::placeholder {
    font-size: 18px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 10px;
  margin-top: 30px;
  border: 1px solid #0000ff;
`;

const Button = styled.button`
  display: flex;
  line-height: normal;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 5px;
  margin: 10px;
  font-size: 18px;
  color: #f9dd7d;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #13df6a;
  cursor: pointer;
  :hover {
    background-color: #0ea34e;
  }
  :active {
    background-color: #f4c00b;
  }
`;

export const ForgotPasswordBox = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <TitleBox>비밀번호 찾기</TitleBox>
          <TextBox placeholder="이메일"></TextBox>
          <TextBox placeholder="비밀번호"></TextBox>
          <ButtonBox>
            <Button>임시비밀번호 받기</Button>
          </ButtonBox>
        </Container>
      </PageContainer>
    </>
  );
};
