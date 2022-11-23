import Quill from '../../Component/Common/Quill';
import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
// eslint-disable-next-line no-unused-vars
import { FreeBoardPostBtn } from '../../Component/Common/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MainPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #8ec3b0;
  font-weight: 700;
  border-bottom: 3px solid #bcead5;
  background: rgba(222, 245, 229, 0.15);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #8ec3b0;
    padding-left: 5px;
  }
`;

const H2 = styled.h2`
  margin-top: 150px;
  text-shadow: 3px 3px 3px 3px #8ec3b0;
  color: #9ed5c5;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  padding: 30px;
`;

const Select = styled.select`
  border: 2.5px solid #9ed5c5;
  box-sizing: border-box;
  color: #8ec3b0;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  outline: none;
  padding: 5px;
`;

const Btn = styled.div`
  margin-top: 100px;
`;
const QuillBox = styled.div`
  display: flex;
  width: 800px;
  height: 300px;
`;

function FreeCommunity() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const URL =
    'http://ec2-43-201-26-98.ap-northeast-2.compute.amazonaws.com:8080';
  const data = {
    title: title,
    body: body,
  };
  const Post = async () => {
    try {
      const res = await axios.post(`${URL}/board`, data);
      console.log(res);
      navigate('/freeboard');
    } catch (e) {
      console.log(e);
    }
  };

  const TitleonChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <MainPost>
        <H2>자유게시글 작성하기</H2>
        <Header>
          <Select name="1234">
            <option value="">카테고리</option>
            <option value="자유">자유</option>
            <option value="일상">일상</option>
            <option value="정보">정보</option>
          </Select>
          <Input
            onChange={TitleonChange}
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </Header>
        <QuillBox>
          <Quill setBody={setBody} />
        </QuillBox>
        <Btn>
          <button onClick={Post}>1234</button>
        </Btn>
      </MainPost>
    </>
  );
}

export default FreeCommunity;
