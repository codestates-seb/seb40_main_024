import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';
import { FreeBoardList } from '../../Component/Board/BoardFreeList';
import { NavFreeContentsButton } from '../../Component/Common/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: #8ec3b0;
  height: 100px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const PostListSpace = styled.div`
  display: flex;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  select {
    border: none;
    border-bottom: 3px solid #9ed5c5;
    box-sizing: border-box;
    color: #555;
    font-size: 14px;
    text-align: center;
    outline: none;
  }
  input {
    margin-left: 10px;
    min-width: 300px;
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    color: #555;
    border-bottom: 3px solid #9ed5c5;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    ::placeholder {
      color: #777;
    }
  }
`;

export const FreeBoardPage = () => {
  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <PageContainer>
        <Box>
          <PostListSpace>
            <TitleBox>커뮤니티</TitleBox>
            <HeaderBox>
              <SelectBox>
                <select name="1234" style={{ marginTop: '8px' }}>
                  <option value="">카테고리 선택</option>
                  <option value="자유">자유</option>
                  <option value="일상">일상</option>
                  <option value="정보">정보</option>
                </select>
                <input placeholder="검색어를 입력해주세요." />
              </SelectBox>
              <NavFreeContentsButton />
            </HeaderBox>
            <FreeBoardList />
          </PostListSpace>
        </Box>
      </PageContainer>
    </>
  );
};
