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
  const AP01URL = `https://apis.data.go.kr/1220000/retrieveTrifFxrtInfo/getRetrieveTrifFxrtInfo?serviceKey=zzn8WtcjldC9QRm6IbpT8rfhEjqOPLiv1WB7qKlBLV1WwjrZewYPXLns4m1i%2FcvGx%2FuV4tjLznWK8B41GzwnpA%3D%3D&aplyBgnDt=${dateString}&weekFxrtTpcd=1`;
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
