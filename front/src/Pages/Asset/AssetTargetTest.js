import { useState } from 'react';
import styled from 'styled-components';
import { PlusBtn, SaveBtn } from '../../Component/Common/Button';
import { LongNavbarBox, MiniNavbarBox } from '../../Component/Common/Navbar';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 500px;
  height: 580px;
  border: 8px solid #def5e5;
  .trashicon {
    margin-left: 350px;
  }
`;

const Header = styled.h3``;

const SettingInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 60px;
  margin: 10px;
  font-size: 20px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #8ec3b0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;
// const TargetBox = styled.div`
//   box-sizing: border-box;
//   width: 300px;
//   height: 60px;
//   margin: 20px;
//   font-size: 30px;
//   color: red;
// `;

// const TextBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   box-sizing: border-box;
//   height: 70px;
//   width: 200px;
// `;

// ! 나눔!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ! 나눔!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const PageContain = styled.div`
  display: flex;
  flex-direction: row;
  /* display: inline-block; */
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .Contain {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 700px;
  }
`;
const ChartContain = styled.div`
  box-sizing: border-box;
  width: 700px;
  height: 300px;
  position: fixed !important;
  top: 300px !important;
  left: 50px;
`;

const BoxContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  width: 1100px;
  height: 1000px;
  top: 30px !important;
  left: 300px;
`;

// const PlusButton = styled.button`
//   width: 200px;
//   height: 60px;
//   margin-left: 680px;
// `;

const AssetSettingTest = ({ HandlerRemove, post }) => {
  const [goal, setGoal] = useState('현금'); // 명칭
  const [extended, setExtended] = useState(''); // 목표금액
  const [period, setPeriod] = useState(''); // 기간
  const [savings, setSavings] = useState(''); // 저축횟수

  let test = Math.floor(extended / period);
  if (isNaN(test)) {
    test = 0;
  } else if (test === Infinity) {
    test = 0;
  }

  const testA = test.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  let test2 = Math.floor((test / extended) * 100);
  if (isNaN(test2)) {
    test2 = 0;
  }

  console.log(`test2: ${test2}`);
  console.log(`goal: ${goal}`);
  console.log(`extended: ${extended}`);
  console.log(`period: ${period}`);
  // console.log(`savings: ${savings}`);
  const HandlerAddCount = () => {
    let countArr = countArr + 1;
    setSavings(countArr);
  };

  const data = [
    {
      name: goal,
      목표률: 100,
      현재률: test2,
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

  return (
    <>
      <div>
        <ComponentContain>
          <br />{' '}
          <div className="trashicon">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="icon"
              size="lg"
              color="grey"
              cursor="pointer"
              onClick={() => {
                HandlerRemove(post);
              }}
            ></FontAwesomeIcon>
          </div>
          <Header>나의 목표</Header>
          <SettingInput
            placeholder="티끌모아 티끌"
            type="text"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          목표 금액
          <SettingInput
            placeholder="1,200,000원"
            type="number"
            name="extended"
            value={extended}
            onChange={(e) => setExtended(e.target.value)}
          />
          목표 기간
          <SettingInput
            placeholder="1개월"
            type="number"
            name="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
          목표달성을 위한 매달 저축액은?
          <div>{testA}원</div>
          {/* <TextBox>
            <SettingInput
              placeholder="400,000원"
              type="number"
              name="savings"
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
            />
          </TextBox>
          입니다! */}
          <SaveBtn
            HandlerAddCount={HandlerAddCount}
            type="number"
            name="savings"
            value={savings}
          ></SaveBtn>
        </ComponentContain>
      </div>

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
          <Bar dataKey="현재률" fill="#b3ad2d" />
          <Bar dataKey="목표률" fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

const AssetTargetTest = () => {
  const [countList, setCountList] = useState([0]);

  const HandlerAdd = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };

  const HandlerRemove = (id) => {
    setCountList(countList.filter((user) => user.id !== id));
    console.log('handler', countList);
  };
  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <PageContain>
        <ChartContain className="ScrollActive">
          {/* <AssetBdataTest /> */}
        </ChartContain>
        <div className="Contain">
          <PlusBtn HandlerAdd={HandlerAdd} />
          <BoxContain>
            {countList.map((count, i) => (
              <AssetSettingTest
                count={count}
                key={i}
                HandlerRemove={HandlerRemove}
              />
            ))}
          </BoxContain>
        </div>
      </PageContain>
    </>
  );
};

export default AssetTargetTest;
