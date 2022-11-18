import styled from 'styled-components';
import { ModifyBtn, DeleteBtn } from '../Common/Button';
import ProfileIcon from '../Member/ProfileIcon';
import axios from 'axios';
// import { useEffect } from 'react';

const BoardContentContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* image {
    height: 50px;
    width: 50px;
  } */
`;

const TotalComment = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 800px;
  width: 750px;
  margin-top: 100px;

  border: thick double #9ed5c5;
  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 10px 5px 10px #d1d1d1;
`;

const CommentBox = styled.input`
  box-sizing: border-box;
  height: 200px;
  width: 700px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
  font-size: 20px;
  &:focus {
    outline: none;
    border-color: #8ec3b0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;
const BtnContain = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 270px;
  cursor: pointer;
`;
// const ReviseBtn = styled.button`
//   height: 30px;
//   width: 100px;
//   cursor: pointer;
// `;

// const DeleteBtn = styled.button`
//   height: 30px;
//   width: 100px;
//   cursor: pointer;
// `;

const WriteBtn = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
`;

const Comment = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  height: 60px;
  width: 500px;
  margin: 10px;
`;

// const ProfileIcon = styled.div`
//   box-sizing: border-box;
//   height: 70px;
//   width: 70px;
//   margin-top: 5px;
/* position: absolute;
  top: 7%;
  left: 30%; */
/* transform: translate(-50%,-50%) */
/* padding: 130px; */
/* border: solid 1px black;
  border-radius: 100%; */
// `;
const Contain = styled.div`
  display: flex;
  flex-direction: row;
`;

const Comments = () => {
  // const data = {
  //   goalName: '미니 JCW',
  //   goalPrice: 10000000,
  //   targetLength: 40,
  // };
  axios
    .delete('https://4de6-112-171-1-144.jp.ngrok.io/goal/1')
    .then((response) => {
      const { data } = response;
      console.log('응답', data);
    })
    .catch((error) => console.log('에러', error));

  return (
    <BoardContentContain>
      <TotalComment>
        <span>댓글</span>
        <BtnContain>
          <WriteBtn>댓글 작성</WriteBtn>
        </BtnContain>
        <CommentBox></CommentBox>
        <Contain>
          <ProfileIcon />
          <Comment></Comment>
        </Contain>
        <BtnContain>
          <ModifyBtn>수정</ModifyBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Contain>
          <ProfileIcon />
          <Comment></Comment>{' '}
        </Contain>
        <BtnContain>
          <ModifyBtn>수정</ModifyBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Contain>
          <ProfileIcon />
          <Comment></Comment>{' '}
        </Contain>
        <BtnContain>
          <ModifyBtn>수정</ModifyBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Contain>
          <ProfileIcon />
          <Comment></Comment>{' '}
        </Contain>
        <BtnContain>
          <ModifyBtn>수정</ModifyBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
      </TotalComment>
    </BoardContentContain>
  );
};

export default Comments;
