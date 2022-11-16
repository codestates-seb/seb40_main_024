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
    목표금액: 10000,
    현재금액: 7000,
  },
  {
    name: '금',
    목표금액: 1000,
    현재금액: 7000,
  },
  {
    name: '다이아몬드',
    목표금액: 400,
    현재금액: 90,
  },
  {
    name: '주식',
    목표금액: 700,
    현재금액: 300,
  },
];

export const AssetBdata = () => {
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
        <XAxis dataKey="name" stroke="#bcead5" />
        <YAxis stroke="#bcead5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="현재금액" fill="#def5e5" />
        <Bar dataKey="목표금액" fill="#9ec3b0" />
      </BarChart>
    </ResponsiveContainer>
  );
};
