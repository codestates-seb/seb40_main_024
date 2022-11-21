// import { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import {
  AddCommentBtn,
  ModifyCommentBtn,
  DeleteCommentBtn,
} from '../Common/Button';
// eslint-disable-next-line no-unused-vars
import ProfileIcon from '../Member/ProfileIcon';
import Quill from '../Common/Quill';
// import axios from 'axios';
// import { useEffect } from 'react';

// const CommentBox = styled.div`
//   display: flex;
//   height: 200px;
//   width: 700px;
//   /* border: solid 2px #9ed5c5;
//   border-radius: 10px;
//   font-size: 20px;
//   &:focus {
//     outline: none;
//     border-color: #8ec3b0;
//     box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
//   } */
// `;

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
const TotalComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 850px;
  min-height: 800px;
  margin-top: 100px;
  border: 3px solid #9ed5c5;
  border-radius: 10px;
`;
const BtnContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 700px;
  margin-bottom: 10px;
`;
const QuillContain = styled.div`
  display: flex;
  width: 800px;
  height: auto;
  margin-bottom: 20px;
`;
const CommentContain = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 5px;
  margin-top: 20px;
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
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  /* border: 1px solid black; */
`;
const IdEtcBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid #8ec3b0;
`;
const Id = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-left: 5px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const EtcBox = styled.div`
  display: flex;
  width: auto;
  height: 30px;
`;
const Date = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 20px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;
const At = styled.div`
  display: flex;
  width: auto;
  height: 30px;
  margin-right: 10px;
  line-height: normal;
  align-content: center;
  justify-content: center;
`;

const TextBox = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin-left: 5px;
  padding-top: 5px;
  overflow: auto;
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Comments = () => {
  // const data = {
  //   goalName: '미니 JCW',
  //   goalPrice: 10000000,
  //   targetLength: 40,
  // };
  // axios
  //   .delete('https://4de6-112-171-1-144.jp.ngrok.io/goal/1')
  //   .then((response) => {
  //     const { data } = response;
  //     console.log('응답', data);
  //   })
  //   .catch((error) => console.log('에러', error));

  return (
    <>
      <TotalComment>
        <BtnContain>
          <AddCommentBtn />
        </BtnContain>
        <QuillContain>
          <Quill />
        </QuillContain>
        <CommentContain>
          <ImageBox>
            <ProfileIcon />
          </ImageBox>
          <CommentBox>
            <IdEtcBox>
              <Id>여기에는 ID 입력</Id>
              <EtcBox>
                <Date>2022-11-01</Date>
                <At>22:12:12</At>
              </EtcBox>
            </IdEtcBox>
            <TextBox>
              여기에는 작성된 댓글보여주기
              {/* <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기
              <br />
              여기에는 작성된 댓글보여주기 */}
            </TextBox>
          </CommentBox>
          <BtnBox>
            <ModifyCommentBtn />
            <DeleteCommentBtn />
          </BtnBox>
        </CommentContain>
      </TotalComment>
    </>
  );
};

export default Comments;
