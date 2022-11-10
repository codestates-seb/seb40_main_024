import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 1000px;
  justify-content: left;
  border: 3px solid #800000;
`;

const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  justify-content: left;
  margin-top: 100px;
  padding: 20px;
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
      <PageContainer>
        <SidebarBox>
          {Lists.map((list, key) => {
            return <ListBox key={key}>{list}</ListBox>;
          })}
        </SidebarBox>
      </PageContainer>
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
