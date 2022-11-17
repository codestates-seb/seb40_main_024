import styled from 'styled-components';
import MyInfo from '../../Component/Member/MyInfo';
import {
  LongNavbarBox,
  // , MiniNavbarBox
} from '../../Component/Common/Navbar';

const MyPageContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const MyPage = () => {
  return (
    <>
      <LongNavbarBox />
      {/* <MiniNavbarBox /> */}
      <MyPageContain>
        <MyInfo />
      </MyPageContain>
    </>
  );
};

export default MyPage;
