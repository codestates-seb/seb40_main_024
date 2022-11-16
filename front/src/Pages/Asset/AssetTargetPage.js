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
  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <PageContain>
        <ChartContain className="ScrollActive">
          <AssetBdata />
        </ChartContain>
        <div className="Contain">
          <PlusBtn HandlerAdd={HandlerAdd} />
          <BoxContain>
            {countList.map((count, i) => (
              <AssetSetting
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

export default AssetTargetPage;
