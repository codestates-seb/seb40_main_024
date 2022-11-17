import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { LongLoginNavbarBox } from '../../Component/Common/Navbar';
import { AssetBdata } from '../../Component/Asset/Asset_B_Data';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { AssetAdata } from '../../Component/Asset/Asset_A_Data';
import { AssetButton, Assettargetpage } from '../../Component/Common/Button';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainPie = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  div {
    position: fixed;
    right: 0;
    margin-right: 100px;
  }
`;

const H1 = styled.h1`
  text-shadow: 1px 1px 2px #bcead5;
  color: #bcead5;
`;

const FirstGraph = styled.div`
  display: flex;
  margin: 0 auto;
`;

const GraphPie = styled.div`
  display: flex;
  margin-top: 30px;
  width: 400px;
  div {
    display: flex;
  }
`;

const AssetExchange = styled.div`
  margin: 0 auto;
  color: #777;
  width: 1000px;
  height: 300px;
  padding: 10px;
  margin-top: 100px;
  /* background: rgba(237, 237, 237, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  .AssetExchangeBox {
    display: flex;
    flex-direction: column;
  }
`;

function Asset() {
  return (
    <MainPie>
      <LongLoginNavbarBox />
      <Header>
        <H1>자산현황</H1>
        <div>
          <AssetButton />
        </div>
      </Header>
      <FirstGraph>
        <GraphPie>
          <Pie data={AssetAdata} />
        </GraphPie>
      </FirstGraph>
      <Header>
        <H1>목표현황</H1>
        <div>
          <Assettargetpage />
        </div>
      </Header>
      <AssetExchange>
        <AssetBdata />
        {/* <h2>현재 자산을 다른 자산과 비교해보세요!</h2>
        <div className="AssetExchangeBox">
          <span>현재보유현금 : 10,000 / USD로 환산시 : 7.28$</span>
          <span>금</span>
          <span>다이아몬드</span>
          <span>주식</span>
        </div> */}
      </AssetExchange>
    </MainPie>
  );
}

export default Asset;
