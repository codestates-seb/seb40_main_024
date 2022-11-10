import { Link } from 'react-scroll';
import styled from 'styled-components';

const SideDiv = styled.div`
  width: 7%;
  position: fixed;
  right: 1rem;
  margin-top: 50px;
  div {
    display: flex;
    flex-direction: column;
    .link {
      margin-bottom: 20px;
    }
  }
`;

const Side = () => {
  return (
    <SideDiv>
      <div>
        <Link to="1" spy={true} smooth={true} className="link">
          <span>호주머니</span>
        </Link>
        <Link to="2" spy={true} smooth={true} className="link">
          <span>시스템</span>
        </Link>
        <Link to="3" spy={true} smooth={true} className="link">
          <span>자산 관리</span>
        </Link>
        <Link to="4" spy={true} smooth={true} className="link">
          <span>커뮤니티</span>
        </Link>
        <Link to="5" spy={true} smooth={true}>
          <span>출발하기</span>
        </Link>
      </div>
    </SideDiv>
  );
};

export default Side;
