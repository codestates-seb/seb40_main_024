import styled from 'styled-components';
// import Profile from '../Component/Profile';

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

const TotalContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 400px;
  width: 750px;
  position: absolute;
  top: 15%;
  border: solid 1px black;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  height: 300px;
  width: 700px;
  border: solid 1px black;
`;
const TotalComment = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 800px;
  width: 750px;
  position: absolute;
  top: 70%;
  border: solid 1px black;
`;

const CommentBox = styled.div`
  box-sizing: border-box;
  height: 200px;
  width: 700px;
  border: solid 1px black;
`;
const BtnContain = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 270px;
  cursor: pointer;
`;
const ReviseBtn = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  height: 30px;
  width: 100px;
  cursor: pointer;
`;

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

const BoardContentPage = () => {
  return (
    <BoardContentContain>
      {/* <Profile className="image" /> */}
      <TotalContain>
        <span>게시글</span>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <ContentBox></ContentBox>
      </TotalContain>
      <TotalComment>
        <span>댓글</span>
        <BtnContain>
          <WriteBtn>댓글 작성</WriteBtn>
        </BtnContain>
        <CommentBox></CommentBox>
        <Comment></Comment>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Comment></Comment>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Comment></Comment>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Comment></Comment>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
      </TotalComment>
    </BoardContentContain>
  );
};

export default BoardContentPage;
