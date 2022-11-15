import { useState } from 'react';
import styled from 'styled-components';
import { AssetBdata } from '../../Component/Asset/Asset_B_Data';
import AssetSetting from '../../Component/Asset/AssetSetting';

const PageContain = styled.div`
  display: flex;
  flex-direction: row;
  /* display: inline-block; */
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .Contain {
    display: flex;
    flex-direction: column;
  }
`;
const ChartContain = styled.div`
  box-sizing: border-box;
  width: 700px;
  height: 300px;
`;

const BoxContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-block;
  align-items: center;
  box-sizing: border-box;
  width: 1000px;
  height: 1000px;
`;

const PlusButton = styled.button`
  width: 200px;
  height: 60px;
  margin-left: 680px;
`;

const AssetTargetPage = () => {
  const [countList, setCountList] = useState([0]);

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };
  return (
    <>
      <PageContain>
        <ChartContain>
          <AssetBdata />
        </ChartContain>
        <div className="Contain">
          <PlusButton onClick={onAddDetailDiv}>추가입력</PlusButton>

          <BoxContain>
            {countList.map((count, i) => (
              <AssetSetting count={count} key={i} />
            ))}
          </BoxContain>
        </div>
      </PageContain>
    </>
  );
};

export default AssetTargetPage;
{
  /* <AssetSetting countList={countList} /> */
}
