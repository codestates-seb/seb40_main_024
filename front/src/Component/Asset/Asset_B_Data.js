import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useEffect } from 'react';
import axios from 'axios';

export const AssetBdata = ({ extended, period, goal }) => {
  let monthly = Math.floor(extended / period);
  if (isNaN(monthly)) {
    monthly = 0;
  } else if (monthly === Infinity) {
    monthly = 0;
  }

  // const testA = test.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  let percentage = Math.floor((monthly / extended) * 100);
  if (isNaN(percentage)) {
    percentage = 0;
  }

  const data = [
    {
      name: goal,
      목표율: 100,
      현재: percentage,
      amt: 2400,
    },
    {
      name: '목표2',
      목표율: 100,
      현재: 10,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  const url = process.env.REACT_APP_API_URL;

  const tokenAxios = () => {
    const loginData = {
      email: 'hoju5@gmail.com',
      password: 'password5',
    };

    axios.post(`${url}/member/login`, loginData).then((res) => {
      const { accessToken } = res.headers.authorization;
      // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      console.log(res.headers.authorization);
    });
  };

  useEffect(() => {
    const graphGet = async () => {
      try {
        const res = await axios.get(`${url}/1/goal`);

        console.log('graphget', res);
        console.log('responseList', res.data._embedded.responseList);
      } catch (err) {
        console.log('error', err);
      }
    };
    graphGet();
    tokenAxios();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 100,
          left: 100,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
        <XAxis dataKey="name" stroke="#9ec3b0" />
        <YAxis stroke="#9ec3b0" />
        <Tooltip />
        <Legend />
        <Bar dataKey="현재" fill="#def5e5" />
        <Bar dataKey="목표율" fill="#9ec3b0" />
      </BarChart>
    </ResponsiveContainer>
  );
};
