import { Link } from 'react-scroll';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const Div = styled.div`
  display: flex;
  align-items: center;
  .test {
    margin: 15px;
  }
`;

const Side = () => {
  return (
    <Div>
      <ul>
        <Link to="1" spy={true} smooth={true} className="test">
          <span>호주머니</span>
        </Link>
        <Link to="2" spy={true} smooth={true} className="test">
          <span>시스템</span>
        </Link>
        <Link to="3" spy={true} smooth={true} className="test">
          <span>자산 관리</span>
        </Link>
        <Link to="4" spy={true} smooth={true} className="test">
          <span>커뮤니티</span>
        </Link>
        <Link to="5" spy={true} smooth={true} className="test">
          <span>출발하기</span>
        </Link>
      </ul>
    </Div>
  );
};

export default Side;
