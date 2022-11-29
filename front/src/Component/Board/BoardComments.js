import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComTest2 from './BoardComment';

function Comments() {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const Get = async () => {
      try {
        const res = await axios.get(`${URL}/board/${id}`);
        console.log(res);
        setComments(res.data.commentsPosted);
      } catch (e) {
        console.log(e);
      }
    };
    Get();
  }, []);

  const SortComments = comments.sort((a, b) => b.commentId - a.commentId);

  return (
    <>
      {SortComments.map((el, i) => {
        return <ComTest2 key={i} commentid={el.commentId} body={el.body} />;
      })}
    </>
  );
}

export default Comments;
