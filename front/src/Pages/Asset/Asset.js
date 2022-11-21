import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
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
  margin-top: 100px;
  h1 {
    text-shadow: 1px 1px 2px #bcead5;
    color: #bcead5;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
  .AssetExchangeBox {
    display: flex;
    flex-direction: column;
  }
`;

function Asset() {
  return (
    <>
      <MainPie>
        <LongLoginNavbarBox />
        <MiniLoginNavbarBox />
        <Header>
          <h1>자산현황</h1>
        </Header>
        <FirstGraph>
          <GraphPie>
            <Pie data={AssetAdata} />
          </GraphPie>
        </FirstGraph>
        <Btn>
          <AssetButton />
        </Btn>
        <Header>
          <h1>목표현황</h1>
        </Header>
        <AssetExchange>
          <AssetBdata />
        </AssetExchange>
        <Btn>
          <Assettargetpage />
        </Btn>
      </MainPie>
    </>
  );
}

export default Asset;
