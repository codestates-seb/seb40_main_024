import { Link } from 'react-scroll';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1000px;

  cursor: pointer;
  .test {
    margin: 15px;
  }
`;

const TextType = styled.button`
  display: flex;
  line-height: normal;
  margin-left: 5px;
  margin-right: 15px;
  margin-bottom: auto;
  margin-top: auto;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: #444;
  vertical-align: bottom;
  z-index: 9999;
  cursor: pointer;
  :hover {
    color: #ffff;
  }
  :active {
    color: #9ed5c5;
  }
`;

const Side = () => {
  return (
    <Div>
      <Link to="1" spy={true} smooth={true} className="test">
        <TextType>호주머니</TextType>
      </Link>
      <Link to="2" spy={true} smooth={true} className="test">
        <TextType>시스템</TextType>
      </Link>
      <Link to="3" spy={true} smooth={true} className="test">
        <TextType>자산 관리</TextType>
      </Link>
      <Link to="4" spy={true} smooth={true} className="test">
        <TextType>커뮤니티</TextType>
      </Link>
      <Link to="5" spy={true} smooth={true} className="test">
        <TextType>출발하기</TextType>
      </Link>
    </Div>
  );
};

export default Side;
