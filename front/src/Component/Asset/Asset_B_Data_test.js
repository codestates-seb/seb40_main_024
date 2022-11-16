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

const data = [
  {
    name: '현금',
    목표금액: 100,
    현재금액: 10,
    amt: 2400,
  },
  {
    name: 'Page B',
    목표금액: 100,
    현재금액: 10,
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

export const AssetBdataTest = () => {
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
        <CartesianGrid strokeDasharray="3 3" stroke="#ffff" />
        <XAxis dataKey="name" stroke="#333333" />
        <YAxis stroke="#333333" />
        <Tooltip />
        <Legend />
        <Bar dataKey="현재금액" fill="#b3ad2d" />
        <Bar dataKey="목표금액" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  );
};
