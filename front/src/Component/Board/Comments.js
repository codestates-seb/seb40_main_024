import styled from 'styled-components';

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

const ProfileIcon = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 70px;
  margin-top: 5px;
  /* position: absolute;
  top: 7%;
  left: 30%; */
  /* transform: translate(-50%,-50%) */
  /* padding: 130px; */
  border: solid 1px black;
  border-radius: 100%;
`;
const Contain = styled.div`
  display: flex;
  flex-direction: row;
`;

const Comments = () => {
  return (
    <BoardContentContain>
      <TotalComment>
        <span>댓글</span>
        <BtnContain>
          <WriteBtn>댓글 작성</WriteBtn>
        </BtnContain>
        <CommentBox></CommentBox>
        <Contain>
          <ProfileIcon></ProfileIcon>
          <Comment></Comment>
        </Contain>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Contain>
          <ProfileIcon></ProfileIcon>
          <Comment></Comment>{' '}
        </Contain>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Contain>
          <ProfileIcon></ProfileIcon>
          <Comment></Comment>{' '}
        </Contain>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
        <Contain>
          <ProfileIcon></ProfileIcon>
          <Comment></Comment>{' '}
        </Contain>
        <BtnContain>
          <ReviseBtn>수정</ReviseBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </BtnContain>
      </TotalComment>
    </BoardContentContain>
  );
};

export default Comments;
