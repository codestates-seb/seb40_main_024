import Quill from '../../Component/Common/Quill';
import styled from 'styled-components';
import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import { BoardPostBtn } from '../../Component/Common/Button';
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
  const [selectCategory, setSelectCategory] = useState('');
  const URL = process.env.REACT_APP_API_URL;
  const data = {
    title: title,
    body: body,
    category: selectCategory,
  };

  const Post = async () => {
    try {
      const res = await axios.post(`${URL}/board`, data, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      console.log(res);
      navigate('/freeboard');
    } catch (e) {
      console.log(e);
    }
  };

  const TitleonChange = (e) => {
    setTitle(e.target.value);
  };

  const SelectTagonChange = (e) => {
    setSelectCategory(e.target.value);
  };

  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <MainPost>
        <H2>자유게시글 작성하기</H2>
        <Header>
          <Select name="1234" onChange={SelectTagonChange}>
            <option value="">카테고리</option>
            <option value="일반">일반</option>
            <option value="자산">자산</option>
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
          <BoardPostBtn Post={Post}></BoardPostBtn>
        </Btn>
      </MainPost>
    </>
  );
}

export default FreeCommunity;
