import Quill from '../../Component/Common/Quill';
import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import { AssetBoardPostBtn } from '../../Component/Common/Button';

const MainPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-left: 15px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #9ed5c5;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  background: rgba(222, 245, 229, 0.15);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #9ed5c5;
  }
`;

const H2 = styled.h2`
  margin-top: 150px;
  text-shadow: 1px 1px 2px #bcead5;
  color: #bcead5;
`;

const Header = styled.div`
  display: flex;
  padding: 30px;
`;

const Select = styled.select`
  border: 2.5px solid #bcead5;
  box-sizing: border-box;
  color: #bcead5;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  outline: none;
`;

const Btn = styled.div`
  margin-top: 100px;
`;

function ShareCommunity() {
  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <MainPost>
        <H2>자산공유게시글 작성하기</H2>
        <Header>
          <Select name="1234">
            <option value="">카테고리 선택</option>
            <option value="자산">자산</option>
            <option value="정보">정보</option>
            <option value="뉴스">뉴스</option>
          </Select>
          <Input type="text" placeholder="제목을 입력해주세요" />
        </Header>
        <Quill />
        <Btn>
          <AssetBoardPostBtn />
        </Btn>
      </MainPost>
    </>
  );
}

export default ShareCommunity;
