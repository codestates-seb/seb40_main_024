import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TestBoardList from './AllBoardList';
import Pagination from './Pagination';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 5px solid #8ec3b0;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #8ec3b0 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FreeBoardList = () => {
  const URL = process.env.REACT_APP_API_URL;

  const [boardlist, setBoardlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(`${URL}/board/all`);
        console.log(res);
        setBoardlist(res.data._embedded.responseList);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    axiosData();
  }, []);

  return (
    <>
      <div>
        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
        {loading ? (
          <Div>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Div>
        ) : (
          boardlist &&
          boardlist
            .slice(offset, offset + limit)
            .map((el, i) => (
              <TestBoardList
                key={i}
                id={el.boardId}
                title={el.title}
                body={el.body}
                createdAt={el.createdAt}
                like={el.like}
              ></TestBoardList>
            ))
        )}
        <Pagination
          total={boardlist.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
};
