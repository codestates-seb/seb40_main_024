import styled from 'styled-components';

const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  justify-content: left;
  margin-top: 100px;
  padding: 1px;
  border: 1px solid #8000ff;
`;

const ListBox = styled.button`
  display: flex;
  width: auto;
  height: auto;
  padding: 5px;
  border: none;
  background-color: #13df6a;
  z-index: 9999;
  color: #f9dd7d;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #11c65e;
  }
  &:active {
    color: #f4c00b;
  }
  &:focus-within {
    background-color: #0ea34e;
  }
`;

const Lists = ['자유게시판', '자산공유'];

export const Sidebar = () => {
  return (
    <>
      <SidebarBox>
        {Lists.map((list, key) => {
          return <ListBox key={key}>{list}</ListBox>;
        })}
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
