/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  LongLoginNavbarBox,
  MiniLoginNavbarBox,
} from '../../Component/Common/NavebarRev';
import {
  CashBtn,
  // GoldBtn,
  // DiamondBtn,
  // eslint-disable-next-line no-unused-vars
  // StockBtn,
} from '../../Component/Common/Button';
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';
import { Modal } from '../../Component/Common/Modal';
import { AssetAdata } from '../../Component/Asset/Asset_A_Data';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { fireEvent } from '@testing-library/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const URL = process.env.REACT_APP_API_URL;

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  width: auto;
`;

const MainAssetChange = styled.div`
  margin-left: 100px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const MainContain = styled.div`
  border: 1px solid blue;
  margin-top: 165px;
  margin-bottom: 165px;
`;

const H1 = styled.h1`
  margin-bottom: 50px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  margin-left: 13px;
  width: 170px;
`;

const H2 = styled.h2`
  margin-bottom: 40px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  margin-left: 13px;
  width: 180px;
  margin-top: 100px;
`;

const H3 = styled.h3`
  color: #9ed5c5;
  margin-left: 13px;
  margin-bottom: 10px;
  line-height: normal;
`;
const H3Title = styled.h3`
  color: orange;
  margin-left: 13px;
  margin-bottom: 10px;
  line-height: normal;
  div {
    cursor: pointer;
  }
`;

const P = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 15px;
  margin-left: 25px;
  font-size: 12px;
`;

const Div = styled.div`
  display: flex;
  align-items: left;
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
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-left: 5px;
  padding-right: 5px;
  outline: none;
  color: #9ed5c5;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  /* ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  } */
  ::placeholder {
    color: #777;
    margin-top: 20px;
  }
`;
const ChartContain = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 450px;
  height: 600px;
  margin-top: 100px;
  border: 1px solid red;
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
const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 5px solid #8ec3b0;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #8ec3b0 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EditButton = styled.button`
  color: orange;
  background-color: transparent;
  font-weight: bold;
  font-size: 18px;
  border: none;
  line-height: normal;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    color: #9ed5c5;
  }
  :active {
    color: yellow;
  }
`;

function AssetChange() {
  const [TextModalopen, setTextModalopen] = useState(false);
  const [errTextModalopen, seterrTextModalopen] = useState(false);
  const [Modalopen, setModalopen] = useState(false);
  const [errModalopen, seterrModalopen] = useState(false);
  const [Cash, setCash] = useState('');
  // const [Diamond, setDiamond] = useState('');
  // const [Gold, setGodl] = useState('');
  // const [Stock, setStock] = useState('');
  const [Text, setText] = useState('');
  const [Data, setData] = useState('');
  console.log('Data', Data);
  // console.log(Data.map((data) => console.log(data)));
  //

  //? POST
  const data1 = {
    // eslint-disable-next-line prettier/prettier
    assetType: '비상금',
    assetValue: '100000',
  };
  // eslint-disable-next-line no-unused-vars
  async function patchApi() {
    await axios
      .post(`${URL}/member/1/asset/`, data1)
      .then((res) => console.log('post', res.data))
      .catch((err) => console.log(err));
  }

  patchApi();

  //? PATCH
  // eslint-disable-next-line no-unused-vars
  // const data2 = {
  //   // eslint-disable-next-line prettier/prettier
  //   title: "dsf222233",
  //   // eslint-disable-next-line prettier/prettier
  //   body: "asdfasdfasf222dfd222544",
  // };
  // // eslint-disable-next-line no-unused-vars
  // const patchApi = async () => {
  //   await axios
  //     .patch(`${URL}/board/33`, data2)
  //     .then((res) => console.log('res', res))
  //     .catch((err) => console.log(err));
  // };
  //?

  //? GET
  // eslint-disable-next-line no-unused-vars
  const getAssets = async () => {
    const Datas = await axios.get(`${URL}/asset`);
    setData(Datas.data);
    console.log('res', Datas);
  };

  useEffect(() => {
    getAssets();
    // patchApi();
  }, []);

  //?

  //? DELET
  // eslint-disable-next-line no-unused-vars
  // async function deletApi() {
  //   await axios
  //     .delete('board/37')
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }
  //?

  const openTextModal = () => {
    if (Text) {
      setTextModalopen(true);
    } else {
      seterrTextModalopen(true);
    }
  };
  const openCashModal = () => {
    if (Cash) {
      setModalopen(true);
    } else {
      seterrModalopen(true);
    }
  };
  // const openGoldModal = () => {
  //   if (Gold) {
  //     setModalopen(true);
  //   } else {
  //     seterrModalopen(true);
  //   }
  // };
  // const openDiamondModal = () => {
  //   if (Diamond) {
  //     setModalopen(true);
  //   } else {
  //     seterrModalopen(true);
  //   }
  // };
  // const openStockModal = () => {
  //   if (Stock) {
  //     setModalopen(true);
  //   } else {
  //     seterrModalopen(true);
  //   }
  // };
  const closeModal = () => {
    setModalopen(false);
    setTextModalopen(false);
  };
  const errcloseModal = () => {
    seterrModalopen(false);
    seterrTextModalopen(false);
  };

  const TextonChange = (e) => {
    setText(e.target.value);
  };

  const CashonChange = (e) => {
    setCash(e.target.value);
  };
  // const DiamondonChange = (e) => {
  //   setDiamond(e.target.value);
  // };
  // const GoldonChange = (e) => {
  //   setGodl(e.target.value);
  // };
  // const StockonChange = (e) => {
  //   setStock(e.target.value);
  // };
  // Number(Data[0].assetValue) +
  const Cashtarget = Cash.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  let ReviewCash = 0;
  if (Cashtarget) {
    ReviewCash = Data[0].assetValue + Number(Cash);
  }
  const Reviewtarget = ReviewCash.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  let OneAssetValues = 0;
  let TwoAssetValues = 0;
  let ThreeAssetValues = 0;
  let FourAssetValues = 0;
  let FiveAssetValues = 0;
  let SixAssetValues = 0;

  let title = [];

  {
    Data
      ? Data.map((data) => {
          title.push(data.assetType);
          console.log('title', title);
        })
      : null;
  }
  const AssetTitle = [...new Set(title)];
  console.log('AssetTitle', AssetTitle[4]);

  {
    Data
      ? Data.map((data) => {
          return data.assetType === AssetTitle[0]
            ? (OneAssetValues += data.assetValue)
            : data.assetType === AssetTitle[1]
            ? (TwoAssetValues += data.assetValue)
            : data.assetType === AssetTitle[2]
            ? (ThreeAssetValues += data.assetValue)
            : data.assetType === AssetTitle[3]
            ? (FourAssetValues += data.assetValue)
            : data.assetType === AssetTitle[4]
            ? (FiveAssetValues += data.assetValue)
            : data.assetType === AssetTitle[5]
            ? (SixAssetValues += data.assetValue)
            : null;
        })
      : null;
  }

  const OneAssetValuestarget = OneAssetValues.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const TwoAssetValuestarget = TwoAssetValues.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const ThreeAssetValuestarget = ThreeAssetValues.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const FourAssetValuestarget = FourAssetValues.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const FiveAssetValuestarget = FiveAssetValues.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );
  const SixAssetValuestarget = SixAssetValues.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  // const Diamondtarget = Diamond.toString().replace(
  //   /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
  //   ','
  // );
  // const Goldtarget = Gold.toString().replace(
  //   /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
  //   ','
  // );
  // const Stocktarget = Stock.toString().replace(
  //   /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
  //   ','
  // Data.map((data) => {
  //   <>
  //     <div key={data.assetId}>{console.log(data)}</div>
  //   </>;
  // });
  return (
    <>
      <LongLoginNavbarBox />
      <MiniLoginNavbarBox />
      {Data ? (
        <>
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
              <MainContain>
                <Modal
                  open={Modalopen}
                  close={closeModal}
                  header="자산 금액 수정 알림"
                >
                  자산 금액이 수정 되었습니다.
                </Modal>
                <Modal
                  open={errModalopen}
                  close={errcloseModal}
                  header="자산 금액 오류 알림"
                >
                  수정할 자산 금액을 숫자로만 입력해주세요
                </Modal>
                <Modal
                  open={TextModalopen}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                >
                  자산 종류가 수정 되었습니다.
                </Modal>
                <Modal
                  open={errTextModalopen}
                  close={errcloseModal}
                  header="자산 종류 오류 알림"
                >
                  수정할 자산 종류를 입력해주세요
                </Modal>
                <H1>현재 자산</H1>
                {Data ? (
                  <>
                    <H3Title> 1 &nbsp;) </H3Title>
                    {AssetTitle[0] === undefined ? (
                      <H3Title>
                        명칭
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    ) : (
                      <H3Title>
                        {AssetTitle[0]}
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    )}
                    <H3>총 금액: &nbsp;{OneAssetValuestarget}원</H3>

                    <H3Title> 2 &nbsp;) </H3Title>
                    {AssetTitle[1] === undefined ? (
                      <H3Title>
                        명칭
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    ) : (
                      <H3Title>
                        {AssetTitle[1]}
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    )}
                    <H3>총 금액: &nbsp;{TwoAssetValuestarget}원</H3>

                    <H3Title> 3 &nbsp;) </H3Title>
                    {AssetTitle[2] === undefined ? (
                      <H3Title>
                        명칭
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    ) : (
                      <H3Title>
                        {AssetTitle[2]}
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    )}
                    <H3>총 금액: &nbsp;{ThreeAssetValuestarget}원</H3>

                    <H3Title> 4 &nbsp;) </H3Title>
                    {AssetTitle[3] === undefined ? (
                      <H3Title>
                        명칭
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    ) : (
                      <H3Title>
                        {AssetTitle[3]}
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    )}
                    <H3>총 금액: &nbsp;{FourAssetValuestarget}원</H3>

                    <H3Title> 5 &nbsp;) </H3Title>
                    {AssetTitle[4] === undefined ? (
                      <H3Title>
                        명칭
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    ) : (
                      <H3Title>
                        {AssetTitle[4]}
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    )}
                    <H3>총 금액: &nbsp;{FiveAssetValuestarget}원</H3>

                    <H3Title> 6 &nbsp;) </H3Title>
                    {AssetTitle[5] === undefined ? (
                      <H3Title>
                        명칭
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    ) : (
                      <H3Title>
                        {AssetTitle[5]}
                        <EditButton onClick={openTextModal}>
                          <FiEdit />
                        </EditButton>
                      </H3Title>
                    )}
                    <H3>총 금액: &nbsp;{SixAssetValuestarget}원</H3>
                  </>
                ) : null}
                {/* // (
                  //   <>
                  //     <H3> 1 &nbsp;) </H3>
                  //     <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                  //     <H3>&nbsp;총 금액: 0원</H3>
                  //     <H3> 2 &nbsp;) </H3>
                  //     <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                  //     <H3>&nbsp;총 금액: 0원</H3>
                  //     <H3> 3 &nbsp;) </H3>
                  //     <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                  //     <H3>&nbsp;총 금액: 0원</H3>
                  //     <H3> 4 &nbsp;) </H3>
                  //     <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                  //     <H3>&nbsp;총 금액: 0원</H3>
                  //     <H3> 5 &nbsp;) </H3>
                  //     <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                  //     <H3>&nbsp;총 금액: 0원</H3>
                  //     <H3> 6 &nbsp;) </H3>
                  //     <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                  //     <H3>&nbsp;총 금액: 0원</H3>
                  //   </>
                  // ) */}

                {/* <H1>현재 자산</H1> */}
                <H2>현재 자산 수정</H2>
                <Div>
                  <Input
                    onChange={TextonChange}
                    value={Text}
                    type="text"
                    placeholder="자산 명칭을 적어주세요. (ex. 다이아몬드)"
                  />
                </Div>
                {Text && Data ? (
                  <Fade>
                    {/* <P
                      style={{ color: 'blue' }}
                    >{`* 변경 전 자산명칭 : "${Data[0].assetType}"`}</P> */}
                    <P>{`* 반영될 자산명칭: "${Text}"`}</P>
                  </Fade>
                ) : null}
                <Div>
                  <Input
                    onChange={CashonChange}
                    value={Cash}
                    type="number"
                    placeholder="숫자로만 금액을 적어주세요. (ex. 10000)"
                  />
                  <div>
                    <CashBtn openModal={openCashModal}>수정</CashBtn>
                  </div>
                </Div>
                {Cash && Data && Reviewtarget.length <= 21 ? (
                  <Fade>
                    <P
                      style={{ color: 'blue' }}
                    >{`✔ 반영될 금액 : "${Cashtarget}원"`}</P>
                    <P>{`✔ 수정 후 금액 : "${Reviewtarget}원"`}</P>
                    <P>{`✔ 수정 후 금액 자리수 : ${Reviewtarget.length}자리`}</P>
                    <P>{`✔ 숫자만 기입 + " , " 포함 21자리까지 금액수정이 가능합니다.`}</P>
                  </Fade>
                ) : Cash && Data && Reviewtarget.length >= 22 ? (
                  <Fade>
                    <P>{`✔ 수정 후 금액 자리수 : ${Reviewtarget.length}자리`}</P>
                    <P>{`✔ " , " 포함 21자리까지 금액수정이 가능합니다.`}</P>
                    <P
                      style={{ color: 'blue' }}
                    >{`✔   현재 수정금액 자리수가 22자리 이상입니다.`}</P>
                    <P
                      style={{ color: 'blue' }}
                    >{`✔  반영금액을 수정해주세요.`}</P>
                  </Fade>
                ) : null}
              </MainContain>
              {/* <MainContain>
                <>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                  <div>ㅇㅇ</div>
                </>
              </MainContain> */}
            </MainAssetChange>
          </MainPage>
        </>
      ) : (
        <>
          <LongLoginNavbarBox />
          <MiniLoginNavbarBox />
          <LoadingDiv>
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </LoadingDiv>
        </>
      )}
    </>
  );
}

export default AssetChange;

// {
/* <H3>현재 보유 금: 90,000</H3>
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
            ) : null} */
// }
// {
/* <Btn>
              <AssetchangeBtn />
            </Btn> */
// }

// {
/* {Data.map((data) => {
                  if (data.assetType === '현금') {
                    CashAssetValues += data.assetValue;
                  }
                })}
                <div>띄어쓰기</div>
                {Data.map((data) => (
                  <>
                    <H3>{data.assetType}</H3>
                    <H3>총 금액: {data.assetValue}원</H3>
                  </>
                ))} */
// }
// {
/* {Data ? (
                  Data.map((data) => {
                    <>
                      <div key={data.assetId}>
                        <H3>{data.assetType}</H3>
                        <H3>총 금액: {data.assetValue}원</H3>
                      </div>
                    </>;
                  })
                ) : (
                  <>
                    <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                    <H3>&nbsp;총 금액: 0원</H3>
                  </>
                )} */
// }
// {
/* 
                {Data ? (
                  <>
                    <H3>{Data[1].assetType}</H3>
                    <H3>총 금액: {Data[1].assetValue}원</H3>
                  </>
                ) : (
                  <>
                    <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                    <H3>&nbsp;총 금액: 0원</H3>
                  </>
                )}

                {Data ? (
                  <>
                    <H3>{Data[2].assetType}</H3>
                    <H3>총 금액: {Data[2].assetValue}원</H3>
                  </>
                ) : (
                  <>
                    <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                    <H3>&nbsp;총 금액: 0원</H3>
                  </>
                )}

                {Data ? (
                  <>
                    <H3>{Data[3].assetType}</H3>
                    <H3>총 금액: {Data[3].assetValue}원</H3>
                  </>
                ) : (
                  <>
                    <H3>&nbsp;&lt;&nbsp;자산명칭&nbsp;&gt;&nbsp;</H3>
                    <H3>&nbsp;총 금액: 0원</H3>
                  </>
                )} */
// }
