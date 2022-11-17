import BoardContents from '../../Component/Board/BoardContents';
import BoardComments from '../../Component/Board/BoardComments';
import {
  LongNavbarBox,
  // , MiniNavbarBox
} from '../../Component/Common/Navbar';

const BoardContentPage = () => {
  return (
    <>
      <LongNavbarBox />
      {/* <MiniNavbarBox /> */}
      <BoardContents />
      <BoardComments />
    </>
  );
};

export default BoardContentPage;
