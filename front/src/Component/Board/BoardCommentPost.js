import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { AddCommentBtn } from '../Common/Button';
import { useParams } from 'react-router-dom';

const TotalComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  border: 3px solid #9ed5c5;
  border-radius: 10px;
  margin-top: 30px;
`;

const BtnContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 625px;
  margin-bottom: 10px;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 100px;
  border: 3px solid #def5e5;
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 15px;
  :focus {
    outline: none;
  }
  font-size: 17px;
`;

function Post() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [inputPostValue, setInputPostValue] = useState('');

  const commentPostValue = (e) => {
    setInputPostValue(e.target.value);
  };

  const PostData = {
    body: inputPostValue,
  };

  const commentPost = async () => {
    try {
      await axios.post(`${URL}/board/${id}/comment`, PostData);
      window.location.reload();
    } catch (err) {
      console.log('deleteerror', err);
    }
  };

  return (
    <TotalComment>
      <BtnContain>
        <AddCommentBtn commentPost={commentPost} />
      </BtnContain>

      <CommentInput
        type="text"
        placeholder="댓글을 작성해주세요."
        onChange={commentPostValue}
      ></CommentInput>
    </TotalComment>
  );
}

export default Post;
