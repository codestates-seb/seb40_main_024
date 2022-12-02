import axios from 'axios';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileIcon from '../Member/ProfileIcon';
import {
  ModifyCommentBtn,
  DeleteCommentBtn,
  CompleteBtn,
} from '../Common/Button';
import AuthContext from '../../store/AuthContext';

const TotalComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  border: 3px solid #9ed5c5;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 100px;
  }
`;

const CommentContain = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 5px;
  line-height: normal;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
`;

const CommentBox = styled.div`
  width: 100%;
  padding: 10px;
  h4 {
    padding-bottom: 10px;
    margin-bottom: 20px;
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

function Comment({ commentid, body, name, memberid }) {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  const [Decode] = useState(authCtx.parseJwt);

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
      await axios.patch(`${URL}/board/${id}/comment/${commentid}`, PatchData, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      window.location.reload();
    } catch (err) {
      console.log('deleteerror', err);
    }
  };

  const commentDelete = async () => {
    try {
      await axios.delete(`${URL}/board/${id}/comment/${commentid}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      window.location.reload();
    } catch (err) {
      console.log('deleteerror', err);
    }
  };

  return (
    <TotalComment>
      <CommentContain>
        <ImageBox>
          <ProfileIcon />
        </ImageBox>
        <CommentBox>
          <h4>{name}</h4>
          {isLogin}
          {isEdit ? (
            <MDBtn1>
              <ModifyInput placeholder={body} onChange={onChange1} />
              <CompleteBtn commentModify={commentModify}>완료</CompleteBtn>
            </MDBtn1>
          ) : (
            <div>{body}</div>
          )}
        </CommentBox>
        <MDBtn2>
          {memberid === Decode.id ? (
            <>
              {isEdit ? null : (
                <>
                  <ModifyCommentBtn Modify={Modify}></ModifyCommentBtn>
                  <DeleteCommentBtn
                    commentDelete={commentDelete}
                  ></DeleteCommentBtn>
                </>
              )}
            </>
          ) : null}
        </MDBtn2>
      </CommentContain>
    </TotalComment>
  );
}

export default Comment;
