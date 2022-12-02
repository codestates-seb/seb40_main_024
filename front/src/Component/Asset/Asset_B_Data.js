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

  // const GoalData = [
  //   {
  //     name: countList.goalName,
  //     목표율: 100,
  //     달성률:
  //       (countList.calculatedPrice / countList.goalPrice) *
  //       100 *
  //       countList.completed,
  //     amt: 2400,
  //   },
  // ];

  // const GoalData = [
  //   {
  //     name: count.goalName,
  //     목표율: 100,
  //     현재: (count.calculatedPrice / count.goalPrice) * 100 * count.completed,
  //     amt: 2400,
  //   },
  // ];
  // console.log(countList);
  // console.log(countList[0].goalName);
  // console.log(
  //   (countList[0].calculatedPrice / countList[0].goalPrice) *
  //     100 *
  //     countList[0].completed
  // );

  // console.log(count.goalName);
  // console.log(
  //   (count.calculatedPrice / count.goalPrice) * 100 * count.completed
  // );
  // console.log(count.calculatedPrice);
  // console.log(count.goalPrice);
  // console.log(count.completed);
  //   {
  //     name: countList[0].goalName,
  //     목표율: 100,
  //     현재:
  //       (countList[0].calculatedPrice / countList[0].goalPrice) *
  //       100 *
  //       countList[0].completed,
  //     amt: 2400,
  //   },
  console.log(GoalData);
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
        <XAxis dataKey="name" stroke="#9ec3b0" />
        <YAxis stroke="#9ec3b0" />
        <Tooltip />
        <Legend />
        <Bar dataKey="달성률" fill="#bcead5" />
        <Bar dataKey="목표율" fill="#9ec3b0" />
      </BarChart>
    </ResponsiveContainer>
  );
};
