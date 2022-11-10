import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 1000px;
  /* align-items: center;
  justify-content: center; */
  border: 3px solid #800000;
`;

export const Sidebar = () => {
  return <PageContainer>사이드바</PageContainer>;
};
