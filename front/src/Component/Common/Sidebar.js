import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  justify-content: left;
  margin-top: 120px;
  padding: 1px;
  /* border: 1px solid #8000ff; */
`;

const ListBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 50px;
  border: 1px solid #8ec3b0;
  border-radius: 4px;
  background-color: #bcead5;
  color: #444;
  font-weight: bold;
  font-size: 18px;
  margin-left: 9px;
  margin-bottom: 0.3px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:active {
    color: #9ed5c5;
  }
  &:focus-within {
    color: #fff;
    background-color: #8ec3b0;
  }
`;

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <SidebarBox>
        <ListBox onClick={() => navigate('/freeboard')}>자유게시판</ListBox>
        <ListBox onClick={() => navigate('/assetboard')}>
          자산공유 게시판
        </ListBox>
      </SidebarBox>
    </>
  );
};

{
  /* :
  <ListBox
  key={key}
  onClick={clickedSidebarHandler}
  style={{ background: '#0ea34e' }}
>
  {list}
</ListBox> */
}
