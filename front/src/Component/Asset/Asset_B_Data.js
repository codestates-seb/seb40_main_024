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

export const AssetBdata = ({ GoalData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1000}
        height={300}
        data={GoalData}
        margin={{
          top: 10,
          right: 100,
          left: 100,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
        <XAxis dataKey="name" stroke="#8ec3b0" />
        <YAxis stroke="#8ec3b0" />
        <Tooltip />
        <Legend />
        <Bar dataKey="달성률" fill="#bcead5" />
        <Bar dataKey="목표율" fill="#9ec3b0" />
      </BarChart>
    </ResponsiveContainer>
  );
};
