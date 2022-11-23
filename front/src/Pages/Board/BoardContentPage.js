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

  const URL =
    'http://ec2-43-201-26-98.ap-northeast-2.compute.amazonaws.com:8080';
  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(`${URL}/board/${id}`);
        setTitle(res.data.title);
        setBody(res.data.body);
        setcreatedAt(res.data.createdAt);
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
        <Contents title={title} body={body} createdAt={createdAt} />
        <Comments />
      </MainPost>
    </>
  );
};

export default BoardContentPage;
