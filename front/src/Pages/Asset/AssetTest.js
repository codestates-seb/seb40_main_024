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

import styled from 'styled-components';
import './asset.css';

const Main = styled.div`
  padding: 30px;
  .yAxis {
    background-color: red;
  }
`;

const data = [
  {
    name: '현금',
    목표금액: 100000000,
    현재금액: 60000000,
    amt: 2400,
  },
  {
    name: 'Page B',
    목표금액: 300000000,
    현재금액: 50502123,
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
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const AssetTest = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <Main>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ffff" />
          <XAxis dataKey="name" stroke="#82ca9d" />
          <YAxis stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar dataKey="현재금액" fill="#BCEAD5" />
          <Bar dataKey="목표금액" fill="#8EC3B0" />
        </BarChart>
      </Main>
    </ResponsiveContainer>
  );
};
