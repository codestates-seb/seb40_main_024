import { useState } from 'react';
import styled from 'styled-components';
import { AssetBdata } from '../../Component/Asset/Asset_B_Data';
import AssetSetting from '../../Component/Asset/AssetSetting';
import { PlusBtn } from '../../Component/Common/Button';
import { LongNavbarBox, MiniNavbarBox } from '../../Component/Common/Navbar';

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

  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <PageContain>
        <ChartContain className="ScrollActive">
          <AssetBdata
            goal={goal}
            test={test}
            extended={extended}
            period={period}
          />
        </ChartContain>
        <div className="Contain">
          <PlusBtn HandlerAdd={HandlerAdd} />
          <BoxContain>
            {countList.map((count, i) => (
              <AssetSetting
                count={count}
                key={i}
                HandlerRemove={HandlerRemove}
                setGoal={setGoal}
                setExtended={setExtended}
                setPeriod={setPeriod}
                testA={testA}
                savings={savings}
                HandlerAddCount={HandlerAddCount}
              />
            ))}
          </BoxContain>
        </div>
      </PageContain>
    </>
  );
};

export default AssetTargetPage;
