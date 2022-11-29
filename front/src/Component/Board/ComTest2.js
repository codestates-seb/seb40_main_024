import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileIcon from '../Member/ProfileIcon';
import {
  ModifyCommentBtn,
  DeleteCommentBtn,
  CompleteBtn,
} from '../Common/Button';

const TotalComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  border: 3px solid #9ed5c5;
  border-radius: 10px;
  margin-top: 30px;
`;

const CommentContain = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 5px;
  border-top: 3px solid #def5e5;
  border-bottom: 3px solid #def5e5;
  line-height: normal;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;

const CommentBox = styled.div`
  width: 100%;
  padding: 10px;
  h4 {
    margin-bottom: 30px;
    border-bottom: 3px solid #def5e5;
  }
`;

const MDBtn1 = styled.div`
  display: flex;
`;
const MDBtn2 = styled.div``;

const ModifyInput = styled.input`
  width: 100%;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

function ComTest2({ key, commentid, body }) {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  // useState 관련
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const Modify = () => {
    setIsEdit(true);
  };

  const onChange1 = (e) => {
    setInputValue(e.target.value);
  };

  const PatchData = {
    body: inputValue,
  };

  const commentModify = async () => {
    try {
      await axios.patch(`${URL}/board/${id}/comment/${commentid}`, PatchData);
      setIsEdit(false);
      window.location.reload();
    } catch (err) {
      console.log('deleteerror', err);
    }
  };

  const commentDelete = async () => {
    try {
      const res = await axios.delete(`${URL}/board/${id}/comment/${commentid}`);
      console.log(res);
      setIsEdit(false);
      window.location.reload();
    } catch (err) {
      console.log('deleteerror', err);
    }
  };

  return (
    <TotalComment>
      <CommentContain key={key}>
        <ImageBox>
          <ProfileIcon />
        </ImageBox>
        <CommentBox>
          <h4>아이디 : {id}</h4>
          {isEdit ? (
            <MDBtn1>
              <ModifyInput placeholder={body} onChange={onChange1} />
              <CompleteBtn commentModify={commentModify}>완료</CompleteBtn>
            </MDBtn1>
          ) : (
            <div>{body}</div>
          )}
        </CommentBox>
        {isEdit ? null : (
          <MDBtn2>
            <ModifyCommentBtn Modify={Modify}></ModifyCommentBtn>
            <DeleteCommentBtn commentDelete={commentDelete}></DeleteCommentBtn>
          </MDBtn2>
        )}
      </CommentContain>
    </TotalComment>
  );
}

export default ComTest2;
