import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import MyInfoUpdate from '../../Component/Member/MyInfoUpdate';

const InfoContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .profileStyle {
    margin-top: 130px;
    margin-left: -700px;
  }
`;

const InfoPage = () => {
  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <InfoContain>
        <MyInfoUpdate />
      </InfoContain>
    </>
  );
};

export default InfoPage;
