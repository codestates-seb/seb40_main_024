/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import { TitleCashBtn } from '../../Component/Common/Button';
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect, useContext } from 'react';
import {
  Modal,
  AutoModal,
  AssetTextEditModal,
  AssetDeleteEditModal1,
  AssetDeleteEditModal2,
  AssetDeleteEditModal3,
  AssetDeleteEditModal4,
  AssetDeleteEditModal5,
  AssetDeleteEditModal6,
} from '../../Component/Common/Modal';
import { AssetAdata, pieOptions } from '../../Component/Asset/Asset_A_Data';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { FiEdit, FiDelete } from 'react-icons/fi';
import AuthContext from '../../store/AuthContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const URL = process.env.REACT_APP_API_URL;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
  width: 100%;
  min-width: 1510px;
  margin-bottom: 60px;
  height: 100%;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid green; */
`;

const BottomPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

const MainContain = styled.div`
  margin-left: 120px;
  /* border: 1px solid pink; */
  /* margin-top: 400px; */
`;

const ChartContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 800px;
  height: 800px;
  margin-right: 120px;
  /* border: 1px solid red; */
  div {
    width: 800px;
    height: 800px;
  }
`;

const H1 = styled.h1`
  margin-bottom: 50px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  margin-left: 13px;
  width: 200px;
`;

const H2 = styled.h2`
  margin-bottom: 40px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  margin-left: 13px;
  width: 190px;
  margin-top: 100px;
`;

const H3 = styled.h3`
  color: #9ed5c5;
  width: 300px;
  margin-left: 13px;
  margin-bottom: 10px;
  line-height: normal;
`;
const H3Title = styled.h3`
  color: orange;
  width: 300px;
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
  ::placeholder {
    color: #777;
    margin-top: 20px;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  margin-top: 300px;
  margin-bottom: 150px;
  width: 450px;
  font-size: 50px;
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
    letter-spacing: 1px;
    transform: scale(1.5);
  }

  :active {
    color: yellow;
  }
`;

const AssetListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  line-height: normal;
  border: 1px solid #9ed5c5;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
  :hover {
    color: #fff;
    letter-spacing: 1px;
    transform: scale(1.2);
  }
`;

export const AssetChange = () => {
  const authCtx = useContext(AuthContext);
  const [TextModalopen, setTextModalopen] = useState(false);
  const [errTextModalopen, seterrTextModalopen] = useState(false);
  const [Modalopen, setModalopen] = useState(false);
  const [errModalopen, seterrModalopen] = useState(false);
  const [DelModalopen1, setDelModalopen1] = useState(false);
  const [DelModalopen2, setDelModalopen2] = useState(false);
  const [DelModalopen3, setDelModalopen3] = useState(false);
  const [DelModalopen4, setDelModalopen4] = useState(false);
  const [DelModalopen5, setDelModalopen5] = useState(false);
  const [DelModalopen6, setDelModalopen6] = useState(false);
  const [errDelModalopen, seterrDelModalopen] = useState(false);
  const [check, setchecking] = useState(false);

  const [Cash, setCash] = useState('');
  const [Text, setText] = useState('');
  const [EditText, setEditText] = useState('');
  const [AssetDatas, setAssetDatas] = useState('');

  const memberid = authCtx.parseJwt.id;
  const assetDatas = AssetDatas.data;

  const DelModalopenHandler1 = () => {
    setDelModalopen1(true);
  };
  const DelModalopenHandler2 = () => {
    setDelModalopen2(true);
  };
  const DelModalopenHandler3 = () => {
    setDelModalopen3(true);
  };
  const DelModalopenHandler4 = () => {
    setDelModalopen4(true);
  };
  const DelModalopenHandler5 = () => {
    setDelModalopen5(true);
  };
  const DelModalopenHandler6 = () => {
    setDelModalopen6(true);
  };

  const openEditTextModal = () => {
    setTextModalopen(true);
  };
  const openerrModal = () => {
    seterrModalopen(true);
  };

  const openerrDeletModal = () => {
    seterrDelModalopen(true);
  };

  const openCashModal = () => {
    Text && Cash && isNaN(Cash) === false
      ? setModalopen(true)
      : Text || Cash || isNaN(Cash) === true
      ? seterrTextModalopen(true)
      : null;
  };

  const closeModal = () => {
    setModalopen(false);
    setTextModalopen(false);
    setDelModalopen1(false);
    setDelModalopen2(false);
    setDelModalopen3(false);
    setDelModalopen4(false);
    setDelModalopen5(false);
    setDelModalopen6(false);
  };

  const errcloseModal = () => {
    seterrModalopen(false);
    seterrTextModalopen(false);
    seterrDelModalopen(false);
  };

  const TextonChange = (e) => {
    setText(e.target.value);
  };

  const EditTextonChange = (e) => {
    setEditText(e.target.value);
  };

  const CashonChange = (e) => {
    setCash(e.target.value);
  };

  const assetData = [];
  {
    assetDatas
      ? assetDatas.forEach((el) =>
          el.memberPosted.id === memberid ? assetData.push(el) : null
        )
      : null;
  }
  // console.log('assetData', assetData);
  const assetType = [];
  {
    assetData ? assetData.forEach((el) => assetType.push(el.assetType)) : null;
  }
  const AssetType = [...new Set(assetType)];

  if (AssetType[0] !== undefined && AssetType.length < 7) {
    for (let i = 0; i <= 9 - AssetType.length; i++) {
      AssetType.push('명칭');
    }
  }

  const assetId = [];
  {
    assetDatas
      ? assetData.forEach((el) => {
          assetId.push(el.assetId);
        })
      : null;
  }

  const assetDataBox = [...assetData];

  if (assetData[0] !== undefined && assetDataBox.length < 7) {
    for (let i = 0; i <= 9 - assetDataBox.length; i++) {
      assetDataBox.push(undefined);
    }
  }

  if (assetDataBox.length === 0) {
    for (let i = 0; i <= 6; i++) {
      assetDataBox.push(undefined);
    }
  }

  const assetData1 = [];
  const assetData2 = [];
  const assetData3 = [];
  const assetData4 = [];
  const assetData5 = [];
  const assetData6 = [];

  {
    assetData.map((el) => {
      if (el !== undefined && el.assetType === AssetType[0]) {
        assetData1.push(el);
      }
    });
  }

  {
    assetData.map((el) => {
      if (el !== undefined && el.assetType === AssetType[1]) {
        assetData2.push(el);
      }
    });
  }
  {
    assetData.map((el) => {
      if (el !== undefined && el.assetType === AssetType[2]) {
        assetData3.push(el);
      }
    });
  }
  {
    assetData.map((el) => {
      if (el !== undefined && el.assetType === AssetType[3]) {
        assetData4.push(el);
      }
    });
  }
  {
    assetData.map((el) => {
      if (el !== undefined && el.assetType === AssetType[4]) {
        assetData5.push(el);
      }
    });
  }
  {
    assetData.map((el) => {
      if (el !== undefined && el.assetType === AssetType[5]) {
        assetData6.push(el);
      }
    });
  }

  const AssetIds1 = [];
  const AssetIds2 = [];
  const AssetIds3 = [];
  const AssetIds4 = [];
  const AssetIds5 = [];
  const AssetIds6 = [];

  {
    assetData1.map((e) => {
      AssetIds1.push(e.assetId);
    });
  }
  {
    assetData2.map((e) => {
      AssetIds2.push(e.assetId);
    });
  }
  {
    assetData3.map((e) => {
      AssetIds3.push(e.assetId);
    });
  }
  {
    assetData4.map((e) => {
      AssetIds4.push(e.assetId);
    });
  }
  {
    assetData5.map((e) => {
      AssetIds5.push(e.assetId);
    });
  }
  {
    assetData6.map((e) => {
      AssetIds6.push(e.assetId);
    });
  }

  const assetValueBox = [];
  const assetValueNumBox = [];
  let assetValue1 = 0;
  let assetValue2 = 0;
  let assetValue3 = 0;
  let assetValue4 = 0;
  let assetValue5 = 0;
  let assetValue6 = 0;

  {
    assetData1.map((el) => {
      if (el !== undefined) {
        assetValue1 += el.assetValue;
      }
    });
  }
  assetValueBox.push(
    assetValue1.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
  assetValueNumBox.push(assetValue1);

  {
    assetData2.map((el) => {
      if (el !== undefined) {
        assetValue2 += el.assetValue;
      }
    });
  }
  assetValueBox.push(
    assetValue2.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
  assetValueNumBox.push(assetValue2);
  {
    assetData3.map((el) => {
      if (el !== undefined) {
        assetValue3 += el.assetValue;
      }
    });
  }
  assetValueBox.push(
    assetValue3.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
  assetValueNumBox.push(assetValue3);
  {
    assetData4.map((el) => {
      if (el !== undefined) {
        assetValue4 += el.assetValue;
      }
    });
  }
  assetValueBox.push(
    assetValue4.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
  assetValueNumBox.push(assetValue4);
  {
    assetData5.map((el) => {
      if (el !== undefined) {
        assetValue5 += el.assetValue;
      }
    });
  }
  assetValueBox.push(
    assetValue5.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
  assetValueNumBox.push(assetValue5);
  {
    assetData6.map((el) => {
      if (el !== undefined) {
        assetValue6 += el.assetValue;
      }
    });
  }
  assetValueBox.push(
    assetValue6.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
  assetValueNumBox.push(assetValue6);

  const Cashtarget = Cash.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  let reviewcash = 0;
  {
    AssetType.map((el, key) => {
      if (el === Text) {
        reviewcash = assetValueNumBox[key];
      }
    });
  }

  let ReviewCash = reviewcash + Number(Cash);
  const Reviewtarget = ReviewCash.toString().replace(
    /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
    ','
  );

  if (AssetType.length === 0) {
    for (let i = 0; i <= 6; i++) {
      AssetType.push('명칭');
    }
  }

  if (assetValueBox.length >= 7) {
    assetValueBox.length = 6;
  }

  if (assetDataBox.length >= 7) {
    assetDataBox.length = 6;
  }

  if (AssetType.length >= 7) {
    AssetType.length = 6;
  }

  //? POST
  const Postdata = {
    assetType: Text,
    assetValue: Cash,
  };
  // eslint-disable-next-line no-unused-vars
  const postAssetApi = async () => {
    await axios
      .post(`${URL}/member/${memberid}/asset`, Postdata)
      .then((res) => openCashModal())
      .catch((err) => openCashModal());
  };
  //?

  //? PATCH
  // eslint-disable-next-line no-unused-vars
  const Patchdata = {
    assetType: EditText,
    strValue: '+1000',
  };

  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi = async () => {
    await axios
      .patch(`${URL}/member/${memberid}/asset/1`, Patchdata)
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?

  //? GET
  const getAssetApi = async () => {
    await axios
      .get(`${URL}/asset`)
      .then((res) => setAssetDatas(res))
      .catch((err) => console.log(err));
  };
  //?

  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata1 = '';
  {
    AssetIds1.forEach((e) => {
      Deletedata1 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi1 = async () => {
    await axios
      .delete(`${URL}/member/${memberid}/asset/${Deletedata1}`)
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata2 = '';
  {
    AssetIds2.forEach((e) => {
      Deletedata2 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi2 = async () => {
    await axios
      .delete(`${URL}/member/${memberid}/asset/${Deletedata2}`)
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata3 = '';
  {
    AssetIds3.forEach((e) => {
      Deletedata3 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi3 = async () => {
    await axios
      .delete(`${URL}/member/${memberid}/asset/${Deletedata3}`)
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata4 = '';
  {
    AssetIds4.forEach((e) => {
      Deletedata4 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi4 = async () => {
    await axios
      .delete(`${URL}/member/${memberid}/asset/${Deletedata4}`)
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata5 = '';
  {
    AssetIds5.forEach((e) => {
      Deletedata5 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi5 = async () => {
    await axios
      .delete(`${URL}/member/${memberid}/asset/${Deletedata5}`)
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata6 = '';
  {
    AssetIds6.forEach((e) => {
      Deletedata6 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi6 = async () => {
    await axios
      .delete(`${URL}/member/${memberid}/asset/${Deletedata6}`)
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?

  console.log('AssetIds1', AssetIds1);
  console.log('AssetIds2', AssetIds2);
  console.log('AssetIds3', AssetIds3);
  console.log('AssetIds4', AssetIds4);
  console.log('AssetIds5', AssetIds5);
  console.log('AssetIds6', AssetIds6);

  useEffect(() => {
    getAssetApi();
  }, []);

  useEffect(() => {
    getAssetApi();
  }, [
    Modalopen,
    TextModalopen,
    errTextModalopen,
    errModalopen,
    // DelModalopen,
    DelModalopen1,
    DelModalopen2,
    DelModalopen3,
    DelModalopen4,
    DelModalopen5,
    DelModalopen6,
    errDelModalopen,
  ]);

  const addData = () => {
    {
      AssetAdata.datasets[0].data = [];

      AssetAdata.labels = AssetType;
      PercentassetValueNumBox.map((e) => {
        AssetAdata.datasets[0].data.push(e);
      });
    }
  };
  let TotalassetValueNumBox = 0;
  {
    assetValueNumBox.map((e) => (TotalassetValueNumBox += e));
  }
  // console.log('TotalassetValueNumBox', TotalassetValueNumBox);
  if (TotalassetValueNumBox === 0) {
    assetValueNumBox.unshift(1);
  }

  let PercentassetValueNumBox = [];

  assetValueNumBox.map((e) => {
    let assetValueNum = (e / TotalassetValueNumBox) * 100;
    PercentassetValueNumBox.push(assetValueNum.toFixed(1));
  });

  if (
    PercentassetValueNumBox[0] === 'Infinity' ||
    isNaN(PercentassetValueNumBox[0]) === true
  ) {
    PercentassetValueNumBox.shift();
    PercentassetValueNumBox.unshift(1);
  }
  // console.log('assetDatas', assetDatas);
  addData();

  const AssetList = AssetType.map((e, key) => (
    <AssetListBox key={key}>
      <H3Title style={{ marginTop: '10px' }}>{key + 1} &nbsp;)</H3Title>
      <H3Title>
        {e}
        <EditButton onClick={openEditTextModal}>
          <FiEdit />
        </EditButton>
      </H3Title>
      <H3>총 금액: {assetValueBox[key]} 원</H3>
    </AssetListBox>
  ));

  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      {AssetDatas ? (
        <>
          <MainPage>
            <GraphH1>보유자산 현황</GraphH1>
            <TopPage>
              <ChartContain>
                <ChartBox>
                  <FirstGraph>
                    <GraphPie>
                      <Pie data={AssetAdata} options={pieOptions} />
                    </GraphPie>
                  </FirstGraph>
                </ChartBox>
              </ChartContain>

              <MainContain>
                <AssetDeleteEditModal1
                  open={DelModalopen1}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={deletAssetApi1}
                  AssetIds1={AssetIds1}
                >
                  <Div>
                    <p>1 선택하신 자산이 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal1>

                <AssetDeleteEditModal2
                  open={DelModalopen2}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={deletAssetApi2}
                  AssetIds2={AssetIds2}
                >
                  <Div>
                    <p>2 선택하신 자산이 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal2>

                <AssetDeleteEditModal3
                  open={DelModalopen3}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={deletAssetApi3}
                  AssetIds3={AssetIds3}
                >
                  <Div>
                    <p>3 선택하신 자산이 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal3>

                <AssetDeleteEditModal4
                  open={DelModalopen4}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={deletAssetApi4}
                  AssetIds4={AssetIds4}
                >
                  <Div>
                    <p>4 선택하신 자산이 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal4>

                <AssetDeleteEditModal5
                  open={DelModalopen5}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={deletAssetApi5}
                  AssetIds5={AssetIds5}
                >
                  <Div>
                    <p>5 선택하신 자산이 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal5>

                <AssetDeleteEditModal6
                  open={DelModalopen6}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={deletAssetApi6}
                  AssetIds6={AssetIds6}
                >
                  <Div>
                    <p>6 선택하신 자산이 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal6>

                <AssetTextEditModal
                  open={TextModalopen}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api={patchAssetsApi}
                >
                  변경할 자산 명칭 ( 현재 자산 명칭 : {EditText} )
                  <Div>
                    <Input
                      onChange={EditTextonChange}
                      value={EditText}
                      type="text"
                      placeholder="변경하실 자산 명칭을 적어주세요. (ex. 다이아몬드)"
                    />
                  </Div>
                </AssetTextEditModal>

                <AutoModal
                  open={Modalopen}
                  close={closeModal}
                  header="자산 금액 수정 알림"
                >
                  자산 금액이 수정 되었습니다.
                </AutoModal>

                <Modal
                  open={errTextModalopen}
                  close={errcloseModal}
                  header="자산 금액 오류 알림"
                >
                  <p>오류 : 수정할 자산명칭 및 자산 금액을 확인해 주시기 </p>
                  <p style={{ marginLeft: '42px', marginTop: '10px' }}>
                    바랍니다.
                  </p>
                </Modal>

                <Modal
                  open={errModalopen}
                  close={errcloseModal}
                  header="자산 종류 오류 알림"
                >
                  오류 : 수정할 자산 종류를 입력해주세요
                </Modal>

                <AutoModal
                  open={errDelModalopen}
                  close={errcloseModal}
                  header="자산 종류 오류 알림"
                >
                  <p>오류 : 현재 등록 된 자산 데이터가 없습니다. </p>
                  <p style={{ marginLeft: '42px', marginTop: '10px' }}>
                    아래 자산금액수정을 진행해 주시기 바랍니다.
                  </p>
                </AutoModal>

                <H1>자산 리스트</H1>
                {AssetList}
                <EditButton className="1" onClick={DelModalopenHandler1}>
                  1 <FiDelete />
                </EditButton>
                <EditButton className="2" onClick={DelModalopenHandler2}>
                  2 <FiDelete />
                </EditButton>
                <EditButton className="3" onClick={DelModalopenHandler3}>
                  3 <FiDelete />
                </EditButton>
                <EditButton className="4" onClick={DelModalopenHandler4}>
                  4 <FiDelete />
                </EditButton>
                <EditButton className="5" onClick={DelModalopenHandler5}>
                  5 <FiDelete />
                </EditButton>
                <EditButton className="6" onClick={DelModalopenHandler6}>
                  6 <FiDelete />
                </EditButton>
                <H2>자산 금액 수정</H2>
                <Div>
                  <Input
                    onChange={TextonChange}
                    value={Text}
                    type="text"
                    placeholder="자산 명칭을 적어주세요. (ex. 다이아몬드)"
                  />
                </Div>
                {Text && AssetDatas ? (
                  <Fade>
                    {Text === '명칭' ? (
                      <P
                        style={{ color: 'blue' }}
                      >{`🚨 반영될 자산명칭이 "명칭"이면 버튼 비활성화됩니다."`}</P>
                    ) : null}
                    <P>{`✨ 반영될 자산명칭: "${Text}"`}</P>
                  </Fade>
                ) : null}
                <Div>
                  <Input
                    onChange={CashonChange}
                    value={Cash}
                    type="text"
                    placeholder="숫자로만 금액을 적어주세요. (ex. 10000)"
                  />
                  <div>
                    <TitleCashBtn Text={Text} postAssetApi={postAssetApi}>
                      수정
                    </TitleCashBtn>
                  </div>
                </Div>
                {Cash && AssetDatas && Reviewtarget.length <= 21 ? (
                  <Fade>
                    <P
                      style={{ color: 'blue' }}
                    >{`✔ 반영될 금액 : "${Cashtarget}원"`}</P>
                    <P>{`✔ 수정 후 금액 : "${Reviewtarget}원"`}</P>
                    <P>{`✔ 수정 후 금액 자리수 : ${Reviewtarget.length}자리`}</P>
                    <P>{`✔ 숫자만 기입 + " , " 포함 21자리까지 금액수정이 가능합니다.`}</P>
                  </Fade>
                ) : Cash && AssetDatas && Reviewtarget.length >= 22 ? (
                  <Fade>
                    <P>{`🚨 수정 후 금액 자리수 : ${Reviewtarget.length}자리`}</P>
                    <P>{`🚨 " , " 포함 21자리까지 금액수정이 가능합니다.`}</P>
                    <P
                      style={{ color: 'blue' }}
                    >{`🚨 현재 수정금액 자리수가 22자리 이상입니다.`}</P>
                    <P
                      style={{ color: 'blue' }}
                    >{`🚨 반영금액을 수정해주세요.`}</P>
                  </Fade>
                ) : null}
              </MainContain>
            </TopPage>
          </MainPage>
        </>
      ) : (
        <>
          <LongNavbarBox />
          <MiniNavbarBox />
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
};
