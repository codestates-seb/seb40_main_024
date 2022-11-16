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

export const AssetBdata = ({ extended, period, goal }) => {
  let test = Math.floor(extended / period);
  if (isNaN(test)) {
    test = 0;
  } else if (test === Infinity) {
    test = 0;
  }

  // const testA = test.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  let test2 = Math.floor((test / extended) * 100);
  if (isNaN(test2)) {
    test2 = 0;
  }

  const data = [
    {
      name: goal,
      목표율: 100,
      현재: test2,
      amt: 2400,
    },
    {
      name: 'Page B',
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
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
        <Bar dataKey="현재" fill="#b3ad2d" />
        <Bar dataKey="목표율" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  );
};
// const data = [
//   {
//     name: goal,
//     목표금액: 100,
//     현재금액: test2,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     목표금액: 100,
//     현재금액: 10,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
