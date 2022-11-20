import styled from 'styled-components';
import ProfileIcon from '../Member/ProfileIcon';

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
const Contain = styled.div`
  box-sizing: border-box;
  padding: 0px;
  height: 420px;
  width: 750px;
  margin-top: 50px;
`;
const TotalContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 400px;
  width: 750px;
  border: solid 5px #9ed5c5;
  border-radius: 10px;
  background-color: #ffff;
  box-shadow: 10px 5px 10px #d1d1d1;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  height: 300px;
  width: 700px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
  background-color: #f8f8f8;
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

const BoardContents = () => {
  return (
    <BoardContentContain>
      <Contain>
        <br />
        <ProfileIcon></ProfileIcon>
        <br />
        <TotalContain>
          <span>게시글</span>
          <BtnContain>
            <ReviseBtn>수정</ReviseBtn>
            <DeleteBtn>삭제</DeleteBtn>
          </BtnContain>
          <ContentBox></ContentBox>
        </TotalContain>
      </Contain>
    </BoardContentContain>
  );
};

export default BoardContents;
