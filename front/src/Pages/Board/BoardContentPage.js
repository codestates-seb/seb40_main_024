import Contents from '../../Component/Board/BoardContents';
import Comments from '../../Component/Board/BoardComments';
import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';

const MainPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
// const Div = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 70px;
//   .lds-ring {
//     display: inline-block;
//     position: relative;
//     width: 80px;
//     height: 80px;
//   }
//   .lds-ring div {
//     box-sizing: border-box;
//     display: block;
//     position: absolute;
//     width: 64px;
//     height: 64px;
//     margin: 8px;
//     border: 5px solid #8ec3b0;
//     border-radius: 50%;
//     animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
//     border-color: #8ec3b0 transparent transparent transparent;
//   }
//   .lds-ring div:nth-child(1) {
//     animation-delay: -0.45s;
//   }
//   .lds-ring div:nth-child(2) {
//     animation-delay: -0.3s;
//   }
//   .lds-ring div:nth-child(3) {
//     animation-delay: -0.15s;
//   }
//   @keyframes lds-ring {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

const BoardContentPage = () => {
  return (
    <>
      <MainPost>
        <LongNavbarBox />
        <MiniNavbarBox />
        <Contents />
        <Comments />
      </MainPost>
    </>
  );
};

export default BoardContentPage;
