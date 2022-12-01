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

export const AssetBdata = ({ graphData }) => {
  // let monthly = Math.floor(extended / period);
  // if (isNaN(monthly)) {
  //   monthly = 0;
  // } else if (monthly === Infinity) {
  //   monthly = 0;
  // }

  // const testA = test.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  // let percentage = Math.floor((monthly / extended) * 100);
  // if (isNaN(percentage)) {
  //   percentage = 0;
  // }
  console.log(graphData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={1000}
        height={300}
        data={graphData}
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
