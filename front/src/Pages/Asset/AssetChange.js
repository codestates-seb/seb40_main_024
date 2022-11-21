import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import {
  CashBtn,
  GoldBtn,
  DiamondBtn,
  StockBtn,
} from '../../Component/Common/Button';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import { Modal } from '../../Component/Common/Modal';
import { AssetAdata } from '../../Component/Asset/Asset_A_Data';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainAssetChange = styled.div`
  margin-top: 150px;
  margin-left: 100px;
`;

const MainBox = styled.div``;

const H1 = styled.h1`
  margin-bottom: 50px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  margin-left: 13px;
  width: 270px;
`;

const H3 = styled.h3`
  color: #9ed5c5;
  margin-left: 13px;
`;

const P = styled.p`
  color: red;
  margin-bottom: 10px;
  margin-left: 13px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  div {
    margin-left: 20px;
  }
`;

// const Btn = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 40px;
// `;

const Input = styled.input`
  width: 300px;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #9ed5c5;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #777;
  }
`;
const ChartContain = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  height: 600px;
  margin-top: 100px;
  /* margin-left: 120px; */
  /* top: 300px !important; */
`;

const ChartBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 450px;
  height: 500px;
  /* margin-left: 120px; */
  /* top: 300px !important; */
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

const GraphH1 = styled.h1`
  box-sizing: border-box;
  height: 50px;
  width: 450px;
  align-items: center;
  /* color: #9ed5c5; */
  text-align: center;
  text-shadow: 1px 1px 2px #bcead5;
  color: #bcead5;
`;

function AssetChange() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [Modalopen, setModalopen] = useState(false);
  const [errModalopen, seterrModalopen] = useState(false);
  const [Cash, setCash] = useState('');
  const [Diamond, setDiamond] = useState('');
  const [Gold, setGodl] = useState('');
  const [Stock, setStock] = useState('');

  const openCashModal = () => {
    if (Cash) {
      setModalopen(true);
    } else {
      seterrModalopen(true);
    }
  };
  const openGoldModal = () => {
    if (Gold) {
      setModalopen(true);
    } else {
      seterrModalopen(true);
    }
  };
  const openDiamondModal = () => {
    if (Diamond) {
      setModalopen(true);
    } else {
      seterrModalopen(true);
    }
  };
  const openStockModal = () => {
    if (Stock) {
      setModalopen(true);
    } else {
      seterrModalopen(true);
    }
  };
  const closeModal = () => {
    setModalopen(false);
  };

  const errcloseModal = () => {
    seterrModalopen(false);
  };

  const CashonChange = (e) => {
    setCash(e.target.value);
  };
  const DiamondonChange = (e) => {
    setDiamond(e.target.value);
  };
  const GoldonChange = (e) => {
    setGodl(e.target.value);
  };
  const StockonChange = (e) => {
    setStock(e.target.value);
  };

  const Cashtarget = Cash.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const Diamondtarget = Diamond.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const Goldtarget = Gold.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const Stocktarget = Stock.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      <MainPage>
        <ChartContain>
          <ChartBox>
            <FirstGraph>
              <GraphPie>
                <Pie data={AssetAdata} />
              </GraphPie>
            </FirstGraph>
          </ChartBox>
          <GraphH1>보유자산 현황</GraphH1>
        </ChartContain>

        <MainAssetChange>
          <MainBox>
            <Modal open={Modalopen} close={closeModal} header="자산 수정 알림">
              자산이 수정 되었습니다.
            </Modal>
            <Modal open={errModalopen} close={errcloseModal} header="오류 알림">
              수정할 자산을 입력해주세요
            </Modal>
            <H1>현재 자산 수정하기</H1>
            <H3>현재 보유 현금: 10,000</H3>
            <Div>
              <Input
                onChange={CashonChange}
                value={Cash}
                type="number"
                placeholder="수정할 현금을 적어주세요"
              />
              <div>
                <CashBtn openModal={openCashModal}></CashBtn>
              </div>
            </Div>
            {Cash ? (
              <Fade>
                <P>{`수정할 현금은 ${Cashtarget} 원 입니다.`}</P>
              </Fade>
            ) : null}
            <H3>현재 보유 금: 10,000</H3>
            <Div>
              <Input
                onChange={GoldonChange}
                value={Gold}
                type="number"
                placeholder="수정할 현금을 적어주세요"
              />
              <div>
                <GoldBtn openModal={openGoldModal}></GoldBtn>
              </div>
            </Div>
            {Gold ? (
              <Fade>
                <P>{`수정할 금 은 ${Goldtarget} 원 입니다.`}</P>
              </Fade>
            ) : null}
            <H3>현재 보유 다이아몬드: 10,000</H3>
            <Div>
              <Input
                onChange={DiamondonChange}
                value={Diamond}
                type="number"
                placeholder="수정할 현금을 적어주세요"
              />
              <div>
                <DiamondBtn openModal={openDiamondModal}></DiamondBtn>
              </div>
            </Div>
            {Diamond ? (
              <Fade>
                <P>{`수정할 다이아몬드는 ${Diamondtarget} 원 입니다.`}</P>
              </Fade>
            ) : null}
            <H3>현재 보유 주식: 10,000</H3>
            <Div>
              <Input
                onChange={StockonChange}
                value={Stock}
                type="number"
                placeholder="수정할 현금을 적어주세요"
              />
              <div>
                <StockBtn openModal={openStockModal}></StockBtn>
              </div>
            </Div>
            {Stock ? (
              <Fade>
                <P>{`수정할 주식은 ${Stocktarget} 원 입니다.`}</P>
              </Fade>
            ) : null}
            {/* <Btn>
              <AssetchangeBtn />
            </Btn> */}
          </MainBox>
        </MainAssetChange>
      </MainPage>
    </>
  );
}

export default AssetChange;
