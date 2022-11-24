import Quill from '../../Component/Common/Quill';
import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import { FreeBoardPatchBtn } from '../../Component/Common/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const Btn = styled.div`
  margin-top: 100px;
`;
const QuillBox = styled.div`
  display: flex;
  width: 800px;
  height: 300px;
`;

function ModifyBoard() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [getTitle, setGetTitle] = useState('');
  const [body, setBody] = useState('');
  const URL = process.env.REACT_APP_API_URL;
  const data = {
    title: getTitle,
    body: body,
  };

  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(`${URL}/board/${id}`);
        setGetTitle(res.data.title);
      } catch (e) {
        console.log(e);
      }
    };
    Get();
  }, []);

  const Patch = async () => {
    try {
      const res = await axios.patch(`${URL}/board/${id}`, data);
      console.log(res);
      navigate(`/boardcontentpage/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const TitleonChange = (e) => {
    setGetTitle(e.target.value);
  };

  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <MainPost>
        <H2>게시글 수정하기</H2>
        <Header>
          <Input
            onChange={TitleonChange}
            type="text"
            placeholder="수정할 제목을 입력해주세요"
            value={getTitle}
          />
        </Header>
        <QuillBox>
          <Quill setBody={setBody} />
        </QuillBox>
        <Btn>
          <FreeBoardPatchBtn Patch={Patch}></FreeBoardPatchBtn>
        </Btn>
      </MainPost>
    </>
  );
}

export default ModifyBoard;
