import BoardContents from '../../Component/Board/BoardContents';
import BoardComments from '../../Component/Board/BoardComments';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';

const BoardContentPage = () => {
  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <BoardContents />
      <BoardComments />
    </>
  );
};

export default BoardContentPage;
