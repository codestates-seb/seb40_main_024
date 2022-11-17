import { useState } from 'react';
import styled from 'styled-components';
import { AssetBdata } from '../../Component/Asset/Asset_B_Data';
import AssetSetting from '../../Component/Asset/AssetSetting';
import { PlusBtn } from '../../Component/Common/Button';
import {
  LongLoginNavbarBox,
  // ,MiniNavbarBox
} from '../../Component/Common/Navbar';

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

const AssetTargetPage = () => {
  const [countList, setCountList] = useState([0]);
  console.log('countList', countList.length);
  const HandlerAdd = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter.length); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    console.log('countArr', countArr);
    setCountList(countArr);
  };
  const HandlerRemove = (id) => {
    setCountList(countList.filter((user) => user.id !== id));
    console.log('handler', countList);
  };

  const [goal, setGoal] = useState('현금'); // 명칭
  const [extended, setExtended] = useState(''); // 목표금액
  const [period, setPeriod] = useState(''); // 기간
  const [savings, setSavings] = useState(''); // 저축횟수
  let monthly = Math.floor(extended / period);
  if (isNaN(monthly)) {
    monthly = 0;
  } else if (monthly === Infinity) {
    monthly = 0;
  }

  const target = monthly
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  let percentage = Math.floor((monthly / extended) * 100);
  if (isNaN(percentage)) {
    percentage = 0;
  }

  // console.log(`percentage: ${percentage}`);
  // console.log(`goal: ${goal}`);
  // console.log(`extended: ${extended}`);
  // console.log(`period: ${period}`);
  // console.log(`savings: ${savings}`);
  const HandlerAddCount = () => {
    let countArr = countArr + 1;
    setSavings(countArr);
  };

  return (
    <>
      <LongLoginNavbarBox />
      {/* <MiniNavbarBox /> */}
      <PageContain>
        <ChartContain className="ScrollActive">
          <AssetBdata
            goal={goal}
            monthly={monthly}
            extended={extended}
            period={period}
          />
        </ChartContain>
        <div className="Contain">
          {countList.length === 6 ? (
            <>
              <PlusBtn disabled />
            </>
          ) : (
            <>
              <PlusBtn HandlerAdd={HandlerAdd} />
            </>
          )}

          {/* <PlusBtn HandlerAdd={HandlerAdd} /> */}
          <BoxContain>
            {countList.map((count, id) => (
              <AssetSetting
                count={count}
                key={id}
                HandlerRemove={HandlerRemove}
                HandlerAddCount={HandlerAddCount}
                setGoal={setGoal}
                setExtended={setExtended}
                setPeriod={setPeriod}
                target={target}
                savings={savings}
              />
            ))}
          </BoxContain>
        </div>
      </PageContain>
    </>
  );
};

export default AssetTargetPage;
