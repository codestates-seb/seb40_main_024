import { Link } from 'react-scroll';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import mark from '../Common/Img/mark.png';
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
const MarkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 9999999;
  width: 50px;
  height: 50px;
  margin: 4px;
  /* border: 1px solid #ff8040; */
  background-image: url(${mark});
  background-position: top center;
  background-size: cover;
  cursor: pointer;
`;

const Side = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <MarkBox onClick={() => navigate('/')}></MarkBox>
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
