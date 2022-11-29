import styled from 'styled-components';
import { ErrorBtn } from '../../Component/Common/Button';

const ErrorMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorHeader = styled.div`
  font-size: 6em;
  text-align: center;
  font-style: italic;
  color: #def5e5;
  text-shadow: 5px 5px #8ec3b0;
  margin: 0;
  text-decoration: underline;
`;

const ErrorBody = styled.div`
  font-size: 30px;
  color: #8ec3b0;
  margin-top: 30px;
  font-weight: 700;
  span {
    display: flex;
    justify-content: center;
  }
`;

const ErrorFooter = styled.div`
  margin-top: 30px;
`;

export const Error = () => {
  return (
    <ErrorMain>
      <ErrorHeader>
        <p>404 Not Found</p>
      </ErrorHeader>
      <ErrorBody>
        <p>비정상적인 경로로 접근하셨습니다.</p>
        <span>로그인이 필요해요!</span>
      </ErrorBody>
      <ErrorFooter>
        <ErrorBtn />
      </ErrorFooter>
    </ErrorMain>
  );
};
