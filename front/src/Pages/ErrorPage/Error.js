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
  font-size: 100px;
  font-weight: 700;
  font-style: italic;
`;

const ErrorBody = styled.div`
  font-size: 30px;
  font-style: italic;
`;

const ErrorFooter = styled.div`
  margin-top: 30px;
`;

export const Error = () => {
  return (
    <ErrorMain>
      <ErrorHeader>
        <p>4 0 4</p>
      </ErrorHeader>
      <ErrorBody>
        <p>Page not found</p>
      </ErrorBody>
      <ErrorFooter>
        <ErrorBtn />
      </ErrorFooter>
    </ErrorMain>
  );
};
