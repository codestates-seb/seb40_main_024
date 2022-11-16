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
