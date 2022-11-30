import axios from 'axios';
import { useEffect } from 'react';

function Exchange() {
  // 현재날짜 구하기
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + month + day;
  // 오픈API URL
  const AP01URL = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=GeAP6Dc6BVWZGjfzH3YwvFPvyHCplEVn&searchdate=${dateString}&data=AP01`;
  // API Get요청
  useEffect(() => {
    const AP01Get = async () => {
      try {
        const res = await axios.get(`${AP01URL}`);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };
    AP01Get();
  }, []);

  return (
    <>
      <div>1234</div>
    </>
  );
}

export default Exchange;
