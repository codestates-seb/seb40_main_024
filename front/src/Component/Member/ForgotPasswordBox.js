import styled from 'styled-components';
import { ForgotPasswordButton } from '../Common/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4500px;
  align-items: center;
  /* border: 3px solid #800000; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 700px;
  padding: 30px;
  margin: 500px;
  justify-content: center;
  border: 10px solid #9ed5c5;
  border-radius: 50px;
  background-color: #def5e5;
  box-shadow: 10px 10px 8px #d1d1d1;
`;

const TitleBox = styled.div`
  /* position: fixed; */
  padding: 5px;
  margin: 10px;
  margin-bottom: 50px;
  margin-left: 50px;
  width: 350px;
  font-size: 45px;
  font-weight: bold;
  border-bottom: 5px solid #8ec3b0;
  color: #8ec3b0;
  border-radius: 1px;
  /* border: 1px solid black; */
`;

const TextBox = styled.input`
  display: flex;
  padding: 5px;
  margin-top: 25px;
  margin-left: 50px;
  margin-right: 50px;
  height: 40px;
  line-height: normal;
  font-weight: 800;
  font-size: 20px;
  border-radius: 8px;
  border: 3px solid #9ed5c5;
  color: #444;
  ::placeholder {
    font-size: 20px;
    padding-left: 8px;
  }
  :focus {
    outline: #8ec3b0;
    color: #444;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 10px;
  margin-top: 30px;
  /* border: 1px solid #0000ff; */
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 5px;
  margin: 10px;
  /* border: 1px solid #0000ff; */
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
            <Button>
              <ForgotPasswordButton />
            </Button>
          </ButtonBox>
        </Container>
      </PageContainer>
    </>
  );
};
