import Quill from '../../Component/Common/Quill';
import styled from 'styled-components';
import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import { BoardPatchBtn } from '../../Component/Common/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Modal } from '../../Component/Common/Modal';

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
  const [Modalopen, setModalopen] = useState(false);
  const [errModalopen, setErrModalopen] = useState(false);
  const SuccessModalopen = () => {
    setModalopen(true);
  };

  const UnerrModalopen = () => {
    setErrModalopen(true);
  };

  const closeModal = () => {
    setErrModalopen(false);
  };

  const SuccesscloseModal = () => {
    setModalopen(false);
    navigate(`/boardcontentpage/${id}`);
  };
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
      await axios.patch(`${URL}/board/${id}`, data, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      SuccessModalopen();
    } catch (e) {
      UnerrModalopen();
    }
  };

  const TitleonChange = (e) => {
    setGetTitle(e.target.value);
  };

  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
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
          <BoardPatchBtn Patch={Patch}></BoardPatchBtn>
        </Btn>
        <Modal
          open={Modalopen}
          close={SuccesscloseModal}
          header="게시물 수정 알림"
        >
          게시물 수정이 완료되었습니다.
        </Modal>
        <Modal open={errModalopen} close={closeModal} header="오류 알림">
          카테고리, 제목, 내용 10자 이상을 정확히 입력해주세요.
        </Modal>
      </MainPost>
    </>
  );
}

export default ModifyBoard;
