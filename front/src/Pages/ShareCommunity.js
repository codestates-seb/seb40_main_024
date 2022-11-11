import { useNavigate } from 'react-router-dom';
import Quill from '../Component/Quill';
import styled from 'styled-components';

const Input = styled.input`
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  margin-top: 100px;
`;

function FreeCommunity() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h2>자산공유게시글 작성하기</h2>
        <button onClick={() => navigate('/')}>홈버튼</button>
        <br />
        <select name="1234">
          <option value="">카테고리 선택</option>
          <option value="자유">자유</option>
          <option value="일상">일상</option>
          <option value="정보">정보</option>
        </select>
        <span>제목을 입력해주세요</span>
        <Input type="text" placeholder="title..." />
        <br />
        <span>밑에는 바디</span>
        <Quill />
      </div>
      <Button>게시물 등록</Button>
    </>
  );
}

export default FreeCommunity;
