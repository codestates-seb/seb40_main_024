import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Assetdata } from '../../Component/AssetData';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AssetTest } from '../Asset/AssetTest';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainPie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .pieheader {
    padding: 10px;
    color: #777;
    background: rgba(237, 237, 237, 0.75);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

const GraphPie = styled.div`
  display: flex;
  margin-top: 30px;
  width: 400px;
  background: rgba(237, 237, 237, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 15px;
`;

const AssetExchange = styled.div`
  color: #777;
  width: 1000px;
  height: 300px;
  padding: 10px;
  margin-top: 100px;
  background: rgba(237, 237, 237, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  .AssetExchangeBox {
    display: flex;
    flex-direction: column;
  }
`;

function Asset() {
  const navigate = useNavigate();
  return (
    <MainPie>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={() => navigate('/assetchange')}>자산변경페이지</button>
      <h2 className="pieheader">총 금액 확인하기</h2>
      <GraphPie>
        <Pie data={Assetdata} />
      </GraphPie>
      <AssetExchange>
        <AssetTest />
        <h2>현재 자산을 다른 자산과 비교해보세요!</h2>
        <div className="AssetExchangeBox">
          <span>현재보유현금 : 10,000 / USD로 환산시 : 7.28$</span>
          <span>금</span>
          <span>다이아몬드</span>
          <span>주식</span>
        </div>
      </AssetExchange>
    </MainPie>
  );
}

export default Asset;
