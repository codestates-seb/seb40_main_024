import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import AllBoardList from './AllBoardList';
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

const Label = styled.label`
  display: flex;
  margin-top: 15px;
  span {
    color: #8ec3b0;
    font-size: 15px;
    font-weight: 500;
    margin-left: 100px;
  }
`;

const Select = styled.select`
  border: 2.5px solid #9ed5c5;
  box-sizing: border-box;
  color: #8ec3b0;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  outline: none;
  margin-left: 5px;
  margin-top: -2.5px;
`;

export const FreeBoardList = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [boardlist, setBoardlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get(`${URL}/board/all`);
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
        <Label>
          <span>페이지 당 표시할 게시물 수 :</span>
          <div> &nbsp;</div>
          <Select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Select>
        </Label>
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
            .map(
              (el, i) => (
                new Map([...boardlist.sort((a, b) => b.boardId - a.boardId)]),
                (
                  <AllBoardList
                    key={i}
                    id={el.boardId}
                    title={el.title}
                    body={el.body}
                    createdAt={el.createdAt}
                    like={el.like}
                    tag={el.tag}
                  ></AllBoardList>
                )
              )
            )
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
