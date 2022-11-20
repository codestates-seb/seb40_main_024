import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import {
  AssetchangeBtn,
  CashBtn,
  GoldBtn,
  DiamondBtn,
  StockBtn,
} from '../../Component/Common/Button';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import { Modal } from '../../Component/Common/Modal';

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainAssetChange = styled.div``;

const MainBox = styled.div`
  background: rgba(222, 245, 229, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 5px solid rgba(255, 255, 255, 0.18);
  padding: 10px 30px;
  z-index: 9999;
`;

const H1 = styled.h1`
  margin-bottom: 50px;
  color: #9ed5c5;
`;

const H3 = styled.h3`
  color: #9ed5c5;
`;

const P = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Input = styled.input`
  width: auto;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #9ed5c5;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  background: rgba(222, 245, 229, 0.15);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #9ed5c5;
  }
`;

// eslint-disable-next-line no-unused-vars
const Header = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 100px;
  h1 {
    color: #8ec3b0;
    margin-bottom: 10px;
  }
  P {
    font-size: 14px;
    font-weight: 600;
    color: #8ec3b0;
  }
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

  const openModal = () => {
    if (Cash) {
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
              {<CashBtn openModal={openModal}></CashBtn>}
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
              <GoldBtn openModal={openModal}></GoldBtn>
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
              <DiamondBtn openModal={openModal}></DiamondBtn>
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
              <StockBtn openModal={openModal}></StockBtn>
            </Div>
            {Stock ? (
              <Fade>
                <P>{`수정할 주식은 ${Stocktarget} 원 입니다.`}</P>
              </Fade>
            ) : null}
            <Btn>
              <AssetchangeBtn />
            </Btn>
          </MainBox>
        </MainAssetChange>
      </MainPage>
    </>
  );
}

export default AssetChange;
