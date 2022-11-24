import Contents from '../../Component/Board/BoardContents';
import Comments from '../../Component/Board/BoardComments';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MainPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BoardContentPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [createdAt, setcreatedAt] = useState();
  const [name, setName] = useState();
  const [boardId, setBoardId] = useState();
  const [like, setLike] = useState();

  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(`${URL}/board/${id}`);
        setBoardId(res.data.boardId);
        setTitle(res.data.title);
        setBody(res.data.body);
        setcreatedAt(res.data.createdAt);
        setName(res.data.memberPosted.name);
        setLike(res.data.like);
      } catch (e) {
        console.log(e);
      }
    };
    Get();
  }, []);

  return (
    <>
      <MainPost>
        <LongLoginNavbarBox />
        <MiniLoginNavbarBox />
        <Contents
          boardId={boardId}
          title={title}
          body={body}
          createdAt={createdAt}
          name={name}
          like={like}
        />
        <Comments />
      </MainPost>
    </>
  );
};

export default BoardContentPage;
