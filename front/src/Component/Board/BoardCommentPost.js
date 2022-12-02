import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { AddCommentBtn } from '../Common/Button';
import { useParams } from 'react-router-dom';
import { Modal } from '../Common/Modal';

const TotalComment = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 850px;
  margin-top: 30px;
`;

const CommentInput = styled.input`
  width: 100%;
  border: 3px solid #def5e5;
  border-radius: 10px;
  padding: 15px;
  margin-right: 15px;
  :focus {
    outline: none;
  }
  font-size: 17px;
`;

function Post() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [inputPostValue, setInputPostValue] = useState('');
  const [errModalopen, setErrModalopen] = useState(false);

  const Modalopen = () => {
    setErrModalopen(true);
  };

  const errcloseModal = () => {
    setErrModalopen(false);
  };

  const commentPostValue = (e) => {
    setInputPostValue(e.target.value);
  };

  const PostData = {
    body: inputPostValue,
  };

  const commentPost = async () => {
    try {
      await axios.post(`${URL}/board/${id}/comment`, PostData, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      window.location.reload();
    } catch (e) {
      Modalopen();
    }
  };

  return (
    <TotalComment>
      <CommentInput
        type="text"
        placeholder="댓글을 작성해주세요."
        onChange={commentPostValue}
      ></CommentInput>
      <AddCommentBtn commentPost={commentPost} />
      <Modal open={errModalopen} close={errcloseModal} header="오류 알림">
        작성할 문구를 입력해주세요.
      </Modal>
    </TotalComment>
  );
}

export default Post;
