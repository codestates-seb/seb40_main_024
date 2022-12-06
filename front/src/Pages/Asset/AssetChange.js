/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import {
  LongNavbarBox,
  MiniNavbarBox,
} from '../../Component/Common/NavebarRev';
import { TitleCashBtn, ZeroCashBtn1 } from '../../Component/Common/Button';
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect, useContext } from 'react';
import {
  Modal,
  AutoModal,
  AssetListPostModal1,
  AssetTextEditModal1,
  AssetTextEditModal2,
  AssetTextEditModal3,
  AssetTextEditModal4,
  AssetTextEditModal5,
  AssetTextEditModal6,
  AssetDeleteModal1,
  AssetDeleteModal2,
  AssetDeleteModal3,
  AssetDeleteModal4,
  AssetDeleteModal5,
  AssetDeleteModal6,
} from '../../Component/Common/Modal';
import { AssetAdata, pieOptions } from '../../Component/Asset/Asset_A_Data';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { BsTerminal } from 'react-icons/bs';
import AuthContext from '../../store/AuthContext';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

ChartJS.register(ArcElement, Tooltip, Legend);

const URL = process.env.REACT_APP_API_URL;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1510px;
  margin-bottom: 60px;
  height: 100%;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
`;

const MainContain = styled.div`
  margin-left: 120px;
  padding-top: 40px;
`;

const ChartContain = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 800px;
  height: 800px;
  margin-right: 120px;

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

const TitleH1 = styled.h1`
  color: #9ed5c5;
  font-size: 55px;
  font-weight: bold;
  line-height: normal;
  align-items: center;
  margin-left: 13px;
  width: 60px;
  cursor: pointer;
  :hover {
    letter-spacing: 1px;
    transform: scale(1.5);
  }
  :active {
    color: orange;
  }
  :disabled {
    color: #9ed5c5;
  }
`;

const H2 = styled.h2`
  margin-bottom: 40px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  margin-left: 13px;
  width: 190px;
  margin-top: 80px;
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
  /* margin-top: -10px;
  margin-bottom: 15px;
  margin-left: 25px; */
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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ChartBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 450px;
  height: 500px;
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
  margin-top: 320px;
  margin-bottom: 150px;
  width: 450px;
  font-size: 50px;
  align-items: center;
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
  :disabled {
    color: #9ed5c5;
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
  const [PostListModalopen1, setPostListModalopen1] = useState(false);
  const [TextModalopen1, setTextModalopen1] = useState(false);
  const [TextModalopen2, setTextModalopen2] = useState(false);
  const [TextModalopen3, setTextModalopen3] = useState(false);
  const [TextModalopen4, setTextModalopen4] = useState(false);
  const [TextModalopen5, setTextModalopen5] = useState(false);
  const [TextModalopen6, setTextModalopen6] = useState(false);

  const [errTextModalopen, seterrTextModalopen] = useState(false);
  const [Modalopen, setModalopen] = useState(false);
  const [errModalopen, seterrModalopen] = useState(false);
  const [errDelModalopen, seterrDelModalopen] = useState(false);

  const [DelModalopen1, setDelModalopen1] = useState(false);
  const [DelModalopen2, setDelModalopen2] = useState(false);
  const [DelModalopen3, setDelModalopen3] = useState(false);
  const [DelModalopen4, setDelModalopen4] = useState(false);
  const [DelModalopen5, setDelModalopen5] = useState(false);
  const [DelModalopen6, setDelModalopen6] = useState(false);

  const [Cash, setCash] = useState('');
  const [Text, setText] = useState('');
  const [EditText, setEditText] = useState('');
  const [AssetDatas, setAssetDatas] = useState('');

  const memberid = authCtx.parseJwt.id;
  let test = AssetDatas.data;
  let assetDatas = '';
  let test1 = '';
  if (
    AssetDatas.data !== undefined ||
    AssetDatas.data !== null ||
    Object.values(test) !== undefined ||
    Object.values(test) !== null
  )
    test1 = Object.values(test || {});
  assetDatas = test1[0];

  if (assetDatas !== undefined && assetDatas.length >= 7) {
    assetDatas.pop();
  }

  let ListData = ['', '', '', '', ''];
  let ListTypeData = [];
  let ListValueData = [0, 0, 0, 0, 0];
  let TotalValueData = 0;
  let PerCentValueData = [];
  let ListidData = [0, 0, 0, 0, 0];
  let ListTextValue1 = '';
  let ListTextValue2 = '';
  let ListTextValue3 = '';
  let ListTextValue4 = '';
  let ListTextValue5 = '';
  let ListTextValue6 = '';
  let Cashtarget = '';
  let Reviewtarget = '';
  let AssetType = [];

  if (assetDatas !== undefined) {
    ListData = [
      assetDatas[0],
      assetDatas[1],
      assetDatas[2],
      assetDatas[3],
      assetDatas[4],
      assetDatas[5],
    ];
    if (ListData[0] === undefined) {
      ListData[0] = '';
    }
    if (ListData[1] === undefined) {
      ListData[1] = '';
    }
    if (ListData[2] === undefined) {
      ListData[2] = '';
    }
    if (ListData[3] === undefined) {
      ListData[3] = '';
    }
    if (ListData[4] === undefined) {
      ListData[4] = '';
    }
    if (ListData[5] === undefined) {
      ListData[5] = '';
    }

    //!
    ListTypeData = [
      ListData[0]['assetType'],
      ListData[1]['assetType'],
      ListData[2]['assetType'],
      ListData[3]['assetType'],
      ListData[4]['assetType'],
      ListData[5]['assetType'],
    ];

    if (ListTypeData[0] === undefined) {
      ListTypeData[0] = '명칭';
    }
    if (ListTypeData[1] === undefined) {
      ListTypeData[1] = '명칭';
    }
    if (ListTypeData[2] === undefined) {
      ListTypeData[2] = '명칭';
    }
    if (ListTypeData[3] === undefined) {
      ListTypeData[3] = '명칭';
    }
    if (ListTypeData[4] === undefined) {
      ListTypeData[4] = '명칭';
    }
    if (ListTypeData[5] === undefined) {
      ListTypeData[5] = '명칭';
    }
    //!
    ListValueData = [
      ListData[0]['assetValue'],
      ListData[1]['assetValue'],
      ListData[2]['assetValue'],
      ListData[3]['assetValue'],
      ListData[4]['assetValue'],
      ListData[5]['assetValue'],
    ];

    if (ListValueData[0] === undefined) {
      ListValueData[0] = 0;
    }
    if (ListValueData[1] === undefined) {
      ListValueData[1] = 0;
    }
    if (ListValueData[2] === undefined) {
      ListValueData[2] = 0;
    }
    if (ListValueData[3] === undefined) {
      ListValueData[3] = 0;
    }
    if (ListValueData[4] === undefined) {
      ListValueData[4] = 0;
    }
    if (ListValueData[5] === undefined) {
      ListValueData[5] = 0;
    }

    ListidData = [
      ListData[0]['assetId'],
      ListData[1]['assetId'],
      ListData[2]['assetId'],
      ListData[3]['assetId'],
      ListData[4]['assetId'],
      ListData[5]['assetId'],
    ];

    if (ListidData[0] === undefined) {
      ListidData[0] = 0;
    }
    if (ListidData[1] === undefined) {
      ListidData[1] = 0;
    }
    if (ListidData[2] === undefined) {
      ListidData[2] = 0;
    }
    if (ListidData[3] === undefined) {
      ListidData[3] = 0;
    }
    if (ListidData[4] === undefined) {
      ListidData[4] = 0;
    }
    if (ListidData[5] === undefined) {
      ListidData[5] = 0;
    }

    ListValueData.map((el) => (TotalValueData += el));
    ListValueData.map((el) =>
      PerCentValueData.push(((el / TotalValueData) * 100).toFixed(1))
    );

    ListTextValue1 = ListValueData[0]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    ListTextValue2 = ListValueData[1]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    ListTextValue3 = ListValueData[2]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    ListTextValue4 = ListValueData[3]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    ListTextValue5 = ListValueData[4]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    ListTextValue6 = ListValueData[5]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

    Cashtarget = Cash.toString().replace(
      /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
      ','
    );

    if (EditText === ListTypeData[0]) {
      Reviewtarget = Cash + ListValueData[0];
    }
  }

  //? GET
  const getAssetApi = async () => {
    await axios
      .get(`${URL}/asset`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => setAssetDatas(res))
      .catch((err) => console.log(err));
  };
  //?

  //? POST
  const Postdata = {
    assetType: Text,
    assetValue: Cash,
  };
  // eslint-disable-next-line no-unused-vars
  const postAssetApi = async () => {
    await axios
      .post(`${URL}/asset`, Postdata, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openCashModal())
      .catch((err) => openCashModal());
  };
  //?

  //? PATCH1

  const PPatchdata1 = {
    assetType: ListTypeData[0],
    strValue: `+${EditText}`,
  };
  const MPatchdata1 = {
    assetType: ListTypeData[0],
    strValue: `-${EditText}`,
  };

  const patchAssetsApiP1 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[0]}`, PPatchdata1, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  const patchAssetsApiM1 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[0]}`, MPatchdata1, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  //? PATCH2
  const PPatchdata2 = {
    assetType: ListTypeData[1],
    strValue: `+${EditText}`,
  };
  const MPatchdata2 = {
    assetType: ListTypeData[1],
    strValue: `-${EditText}`,
  };

  const patchAssetsApiP2 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[1]}`, PPatchdata2, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  const patchAssetsApiM2 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[1]}`, MPatchdata2, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?
  //? PATCH3
  const PPatchdata3 = {
    assetType: ListTypeData[2],
    strValue: `+${EditText}`,
  };
  const MPatchdata3 = {
    assetType: ListTypeData[2],
    strValue: `-${EditText}`,
  };

  const patchAssetsApiP3 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[2]}`, PPatchdata3, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  const patchAssetsApiM3 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[2]}`, MPatchdata3, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?
  //? PATCH4
  const PPatchdata4 = {
    assetType: ListTypeData[3],
    strValue: `+${EditText}`,
  };
  const MPatchdata4 = {
    assetType: ListTypeData[3],
    strValue: `-${EditText}`,
  };

  const patchAssetsApiP4 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[3]}`, PPatchdata4, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  const patchAssetsApiM4 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[3]}`, MPatchdata4, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?
  //? PATCH5
  const PPatchdata5 = {
    assetType: ListTypeData[4],
    strValue: `+${EditText}`,
  };
  const MPatchdata5 = {
    assetType: ListTypeData[4],
    strValue: `-${EditText}`,
  };

  const patchAssetsApiP5 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[4]}`, PPatchdata5, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  const patchAssetsApiM5 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[4]}`, MPatchdata5, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?
  //? PATCH6
  const PPatchdata6 = {
    assetType: ListTypeData[5],
    strValue: `+${EditText}`,
  };
  const MPatchdata6 = {
    assetType: ListTypeData[5],
    strValue: `-${EditText}`,
  };

  const patchAssetsApiP6 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[5]}`, PPatchdata6, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  const patchAssetsApiM6 = async () => {
    await axios
      .patch(`${URL}/asset/${ListidData[5]}`, MPatchdata6, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?
  // //?
  //!  //!  //!  //!  //!  //!  //!  //!  //!  //!  //!  //!
  //? DELET1

  const deletAssetApi1 = async () => {
    await axios
      .delete(`${URL}/asset/${ListidData[0]}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  //? DELET2

  const deletAssetApi2 = async () => {
    await axios
      .delete(`${URL}/asset/${ListidData[1]}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  //? DELET3

  const deletAssetApi3 = async () => {
    await axios
      .delete(`${URL}/asset/${ListidData[2]}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  //? DELET4

  const deletAssetApi4 = async () => {
    await axios
      .delete(`${URL}/asset/${ListidData[3]}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  //? DELET5

  const deletAssetApi5 = async () => {
    await axios
      .delete(`${URL}/asset/${ListidData[4]}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  //? DELET6

  const deletAssetApi6 = async () => {
    await axios
      .delete(`${URL}/asset/${ListidData[5]}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => console.log(err));
  };
  //?

  const TextonChange = (e) => {
    setText(e.target.value);
  };

  const EditTextonChange = (e) => {
    setEditText(e.target.value);
  };

  const CashonChange = (e) => {
    setCash(e.target.value);
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
    setPostListModalopen1(false);
    setTextModalopen1(false);
    setTextModalopen2(false);
    setTextModalopen3(false);
    setTextModalopen4(false);
    setTextModalopen5(false);
    setTextModalopen6(false);
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
  const openerrDelModalopen = () => {
    seterrDelModalopen(true);
  };
  const openPostListModal1 = () => {
    setPostListModalopen1(true);
  };

  const openPatchTextModalopenP1 = () => {
    patchAssetsApiP1();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenM1 = () => {
    patchAssetsApiM1();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };

  const openPatchTextModalopenP2 = () => {
    patchAssetsApiP2();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenM2 = () => {
    patchAssetsApiM2();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenP3 = () => {
    patchAssetsApiP3();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenM3 = () => {
    patchAssetsApiM3();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenP4 = () => {
    patchAssetsApiP4();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenM4 = () => {
    patchAssetsApiM4();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenP5 = () => {
    patchAssetsApiP5();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenM5 = () => {
    patchAssetsApiM5();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  const openPatchTextModalopenP6 = () => {
    patchAssetsApiP6();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };

  const openPatchTextModalopenM6 = () => {
    patchAssetsApiM6();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };

  const openEditTextModal1 = () => {
    setTextModalopen1(true);
  };
  const openEditTextModal2 = () => {
    setTextModalopen2(true);
  };
  const openEditTextModal3 = () => {
    setTextModalopen3(true);
  };
  const openEditTextModal4 = () => {
    setTextModalopen4(true);
  };
  const openEditTextModal5 = () => {
    setTextModalopen5(true);
  };
  const openEditTextModal6 = () => {
    setTextModalopen6(true);
  };

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

  useEffect(() => {
    getAssetApi();
  }, []);

  useEffect(() => {
    getAssetApi();
  }, [
    Modalopen,
    TextModalopen1,
    TextModalopen2,
    TextModalopen3,
    TextModalopen4,
    TextModalopen5,
    TextModalopen6,
    errTextModalopen,
    errModalopen,
    DelModalopen1,
    DelModalopen2,
    DelModalopen3,
    DelModalopen4,
    DelModalopen5,
    DelModalopen6,
    errDelModalopen,
  ]);
  PerCentValueData.map((el, key) => {
    if (isNaN(el)) {
      PerCentValueData[key] = 1;
    }
  });

  if (assetDatas !== undefined && ListData !== undefined) {
    AssetAdata.labels = ListTypeData;
  }
  AssetAdata.datasets[0].data = [];
  if (assetDatas !== undefined && ListData !== undefined) {
    PerCentValueData?.map((e) => {
      AssetAdata.datasets[0].data.push(e);
    });
  }
  ListTypeData.map((el) => {
    if (el !== '명칭') {
      AssetType.push(el);
    }
  });

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
                <AssetListPostModal1
                  header={`List :  ${AssetType.length} / 6`}
                  open={PostListModalopen1}
                  api={postAssetApi}
                  close={closeModal}
                >
                  <p
                    style={{
                      color: '#444',
                      marginTop: '10px',
                      marginBottom: '10px',
                      marginLeft: '10px',
                    }}
                  ></p>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      {ListTypeData[5] !== '명칭' ? (
                        <>
                          <Input
                            onChange={TextonChange}
                            value={Text}
                            type="text"
                            placeholder="리스트 생성은 최대 6개까지 가능합니다."
                            style={{ marginBottom: '15px' }}
                            disabled
                          />
                          <Input
                            onChange={CashonChange}
                            value={Cash}
                            type="number"
                            placeholder="리스트 생성은 최대 6개까지 가능합니다."
                            disabled
                          />
                        </>
                      ) : (
                        <>
                          <Div>
                            <Input
                              onChange={TextonChange}
                              value={Text}
                              type="text"
                              style={{ marginBottom: '5px' }}
                              placeholder="자산 명칭을 적어주세요. (ex. 다이아몬드)"
                            />
                          </Div>
                          {Text && ListTypeData ? (
                            <Fade>
                              {Text === '명칭' ? (
                                <P
                                  style={{ color: 'blue' }}
                                >{`🚨 자산명칭이 "명칭"이면 버튼 비활성화됩니다."`}</P>
                              ) : null}
                              <P
                                style={{ marginTop: '-5px' }}
                              >{`✨ 자산명칭: "${Text}"`}</P>
                            </Fade>
                          ) : null}

                          <Div>
                            <Input
                              onChange={CashonChange}
                              value={Cash}
                              type="number"
                              placeholder="숫자로만 금액을 적어주세요. (ex. 10000)"
                              style={{ marginBottom: '10px' }}
                            />
                          </Div>
                          <Div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            {Cash &&
                            ListValueData &&
                            Cashtarget.length <= 21 ? (
                              <Fade>
                                <P
                                  style={{ color: 'blue', marginTop: '-25px' }}
                                >{`✔ 금액 : "${Cashtarget}원"`}</P>

                                <P
                                  style={{ marginTop: '-5px' }}
                                >{`✔ 금액 자리수 : ${Cashtarget.length}자리`}</P>
                                <P
                                  style={{ marginTop: '4px' }}
                                >{`✔ 숫자만 기입 + " , " 포함 21자리까지 금액수정이 가능합니다.`}</P>
                              </Fade>
                            ) : Cash &&
                              AssetDatas &&
                              Cashtarget.length >= 22 ? (
                              <Fade>
                                <P>{`🚨 금액 자리수 : ${Cashtarget.length}자리`}</P>
                                <P
                                  style={{ color: 'blue' }}
                                >{`🚨 현재 금액 자리수가 22자리 이상입니다.`}</P>
                                <P
                                  style={{ color: 'blue' }}
                                >{`🚨 금액을 수정해주세요.`}</P>
                              </Fade>
                            ) : null}
                          </Div>
                        </>
                      )}
                    </Div>
                  </div>
                </AssetListPostModal1>

                <AssetTextEditModal1
                  header="자산 금액 변경"
                  open={TextModalopen1}
                  close={closeModal}
                  EditText={EditText}
                >
                  자산 금액 변경 ( 자산 명칭 : {ListTypeData[0]} )
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      <Input
                        onChange={EditTextonChange}
                        value={EditText}
                        type="number"
                        placeholder="변경하실 자산 금액을 적어주세요. (ex. 10000)"
                      />
                      <div style={{ color: '#444', fontSize: '12px' }}></div>
                    </Div>
                    <div style={{ marginLeft: '21px' }}>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenP1}
                        style={{ width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiPlusSm /> 수입
                      </button>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenM1}
                        style={{ marginTop: '10px', width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiMinusSm /> 지출
                      </button>
                    </div>
                  </div>
                </AssetTextEditModal1>

                <AssetTextEditModal2
                  header="자산 종류 수정 알림"
                  open={TextModalopen2}
                  close={closeModal}
                >
                  자산 금액 변경 ( 자산 명칭 : {ListTypeData[1]} )
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      <Input
                        onChange={EditTextonChange}
                        value={EditText}
                        type="text"
                        placeholder="변경하실 자산 금액을 적어주세요. (ex. 10000)"
                      />
                    </Div>
                    <div style={{ marginLeft: '21px' }}>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenP2}
                        style={{ width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiPlusSm /> 수입
                      </button>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenM2}
                        style={{ marginTop: '10px', width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiMinusSm /> 지출
                      </button>
                    </div>
                  </div>
                </AssetTextEditModal2>

                <AssetTextEditModal3
                  header="자산 종류 수정 알림"
                  open={TextModalopen3}
                  close={closeModal}
                >
                  자산 금액 변경 ( 자산 명칭 : {ListTypeData[2]} )
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      <Input
                        onChange={EditTextonChange}
                        value={EditText}
                        type="text"
                        placeholder="변경하실 자산 금액을 적어주세요. (ex. 10000)"
                      />
                    </Div>
                    <div style={{ marginLeft: '21px' }}>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenP3}
                        style={{ width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiPlusSm /> 수입
                      </button>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenM3}
                        style={{ marginTop: '10px', width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiMinusSm /> 지출
                      </button>
                    </div>
                  </div>
                </AssetTextEditModal3>

                <AssetTextEditModal4
                  header="자산 종류 수정 알림"
                  open={TextModalopen4}
                  close={closeModal}
                >
                  자산 금액 변경 ( 자산 명칭 : {ListTypeData[3]} )
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      <Input
                        onChange={EditTextonChange}
                        value={EditText}
                        type="text"
                        placeholder="변경하실 자산 금액을 적어주세요. (ex. 10000)"
                      />
                    </Div>
                    <div style={{ marginLeft: '21px' }}>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenP4}
                        style={{ width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiPlusSm /> 수입
                      </button>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenM4}
                        style={{ marginTop: '10px', width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiMinusSm /> 지출
                      </button>
                    </div>
                  </div>
                </AssetTextEditModal4>

                <AssetTextEditModal5
                  header="자산 종류 수정 알림"
                  open={TextModalopen5}
                  // api={patchAssetsApi5}
                  close={closeModal}
                >
                  자산 금액 변경 ( 자산 명칭 : {ListTypeData[4]} )
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      <Input
                        onChange={EditTextonChange}
                        value={EditText}
                        type="text"
                        placeholder="변경하실 자산 금액을 적어주세요. (ex. 10000)"
                      />
                    </Div>
                    <div style={{ marginLeft: '21px' }}>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenP5}
                        style={{ width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiPlusSm /> 수입
                      </button>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenM5}
                        style={{ marginTop: '10px', width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiMinusSm /> 지출
                      </button>
                    </div>
                  </div>
                </AssetTextEditModal5>

                <AssetTextEditModal6
                  header="자산 종류 수정 알림"
                  open={TextModalopen6}
                  // api={patchAssetsApi6}
                  close={closeModal}
                >
                  자산 금액 변경 ( 자산 명칭 : {ListTypeData[5]} )
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Div style={{ flexDirection: 'column' }}>
                      <Input
                        onChange={EditTextonChange}
                        value={EditText}
                        type="text"
                        placeholder="변경하실 자산 금액을 적어주세요. (ex. 10000)"
                      />
                    </Div>
                    <div style={{ marginLeft: '21px' }}>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenP6}
                        style={{ width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiPlusSm /> 수입
                      </button>
                      <button
                        className="edit"
                        onClick={openPatchTextModalopenM6}
                        style={{ marginTop: '10px', width: '65.52px' }}
                        disabled={EditText.length === 0}
                      >
                        <HiMinusSm /> 지출
                      </button>
                    </div>
                  </div>
                </AssetTextEditModal6>

                <AssetDeleteModal1
                  open={DelModalopen1}
                  close={closeModal}
                  header="자산 삭제 알림"
                  api1={deletAssetApi1}
                >
                  <Div style={{ flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                      1)&nbsp;자산명&nbsp;:&nbsp;{ListTypeData[0]}
                    </p>
                    <p>선택하신 자산을 삭제하시겠습니까?</p>
                  </Div>
                </AssetDeleteModal1>

                <AssetDeleteModal2
                  open={DelModalopen2}
                  close={closeModal}
                  header="자산 삭제 알림"
                  api2={deletAssetApi2}
                >
                  <Div style={{ flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                      2)&nbsp;자산명&nbsp;:&nbsp;{ListTypeData[1]}
                    </p>
                    <p>선택하신 자산을 삭제하시겠습니까?</p>
                  </Div>
                </AssetDeleteModal2>

                <AssetDeleteModal3
                  open={DelModalopen3}
                  close={closeModal}
                  header="자산 삭제 알림"
                  api3={deletAssetApi3}
                >
                  <Div style={{ flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                      3)&nbsp;자산명&nbsp;:&nbsp;{ListTypeData[2]}
                    </p>
                    <p>선택하신 자산을 삭제하시겠습니까?</p>
                  </Div>
                </AssetDeleteModal3>

                <AssetDeleteModal4
                  open={DelModalopen4}
                  close={closeModal}
                  header="자산 삭제 알림"
                  api4={deletAssetApi4}
                >
                  <Div style={{ flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                      4)&nbsp;자산명&nbsp;:&nbsp;{ListTypeData[3]}
                    </p>
                    <p>선택하신 자산을 삭제하시겠습니까?</p>
                  </Div>
                </AssetDeleteModal4>

                <AssetDeleteModal5
                  open={DelModalopen5}
                  close={closeModal}
                  header="자산 삭제 알림"
                  api5={deletAssetApi5}
                >
                  <Div style={{ flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                      5)&nbsp;자산명&nbsp;:&nbsp;{ListTypeData[4]}
                    </p>
                    <p>선택하신 자산을 삭제하시겠습니까?</p>
                  </Div>
                </AssetDeleteModal5>

                <AssetDeleteModal6
                  open={DelModalopen6}
                  close={closeModal}
                  header="자산 삭제 알림"
                  api6={deletAssetApi6}
                >
                  <Div style={{ flexDirection: 'column' }}>
                    <p style={{ marginBottom: '10px' }}>
                      6)&nbsp;자산명&nbsp;:&nbsp;{ListTypeData[5]}
                    </p>
                    <p>선택하신 자산을 삭제하시겠습니까?</p>
                  </Div>
                </AssetDeleteModal6>

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

                <Modal
                  open={errDelModalopen}
                  close={errcloseModal}
                  header="자산 리스트 생성 초과"
                >
                  <p>리스트는 최대 6개까지 입니다.</p>
                </Modal>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <TitleH1>
                    <BsTerminal onClick={openPostListModal1} />
                  </TitleH1>
                  <H1
                    style={{
                      width: '220px',
                      height: '50px',
                      paddingLeft: '10px',
                    }}
                  >
                    자산 리스트
                  </H1>
                </div>
                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    1 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {ListTypeData[0] === undefined ? (
                      <>명칭</>
                    ) : (
                      <>{ListTypeData[0]}</>
                    )}
                    <EditButton
                      className="1"
                      onClick={openEditTextModal1}
                      disabled={ListTypeData[0] === '명칭'}
                    >
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton
                      className="1"
                      onClick={DelModalopenHandler1}
                      disabled={ListTypeData[0] === '명칭'}
                    >
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  <H3>
                    {ListData[0] === undefined ? (
                      <>총 금액&nbsp;:&nbsp;0원</>
                    ) : (
                      <>
                        총 금액&nbsp;:&nbsp;
                        {ListTextValue1}
                        &nbsp;원
                      </>
                    )}
                  </H3>
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    2 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {ListTypeData[1] === undefined ? (
                      <>명칭</>
                    ) : (
                      <>{ListTypeData[1]}</>
                    )}
                    <EditButton
                      className="1"
                      onClick={openEditTextModal2}
                      disabled={ListTypeData[1] === '명칭'}
                    >
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton
                      className="1"
                      onClick={DelModalopenHandler2}
                      disabled={ListTypeData[1] === '명칭'}
                    >
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  <H3>
                    {ListData[1] === undefined ? (
                      <>총 금액&nbsp;:&nbsp;0원</>
                    ) : (
                      <>총 금액&nbsp;:&nbsp;{ListTextValue2}&nbsp;원</>
                    )}
                  </H3>
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    3 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {ListTypeData[2] === undefined ? (
                      <>명칭</>
                    ) : (
                      <>{ListTypeData[2]}</>
                    )}
                    <EditButton
                      className="1"
                      onClick={openEditTextModal3}
                      disabled={ListTypeData[2] === '명칭'}
                    >
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton
                      className="1"
                      onClick={DelModalopenHandler3}
                      disabled={ListTypeData[2] === '명칭'}
                    >
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  <H3>
                    {ListData[2] === undefined ? (
                      <>총 금액&nbsp;:&nbsp;0원</>
                    ) : (
                      <>총 금액&nbsp;:&nbsp;{ListTextValue3}&nbsp;원</>
                    )}
                  </H3>
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    4 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {ListTypeData[3] === undefined ? (
                      <>명칭</>
                    ) : (
                      <>{ListTypeData[3]}</>
                    )}
                    <EditButton
                      className="1"
                      onClick={openEditTextModal4}
                      disabled={ListTypeData[3] === '명칭'}
                    >
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton
                      className="1"
                      onClick={DelModalopenHandler4}
                      disabled={ListTypeData[3] === '명칭'}
                    >
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  <H3>
                    {ListData[3] === undefined ? (
                      <>총 금액&nbsp;:&nbsp;0원</>
                    ) : (
                      <>총 금액&nbsp;:&nbsp;{ListTextValue4}&nbsp;원</>
                    )}
                  </H3>
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    5 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {ListTypeData[4] === undefined ? (
                      <>명칭</>
                    ) : (
                      <>{ListTypeData[4]}</>
                    )}
                    <EditButton
                      className="1"
                      onClick={openEditTextModal5}
                      disabled={ListTypeData[4] === '명칭'}
                    >
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton
                      className="1"
                      onClick={DelModalopenHandler5}
                      disabled={ListTypeData[4] === '명칭'}
                    >
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  <H3>
                    {ListData[4] === undefined ? (
                      <>총 금액&nbsp;:&nbsp;0원</>
                    ) : (
                      <>총 금액&nbsp;:&nbsp;{ListTextValue5}&nbsp;원</>
                    )}
                  </H3>
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    6 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {ListTypeData[5] === undefined ? (
                      <>명칭</>
                    ) : (
                      <>{ListTypeData[5]}</>
                    )}
                    <EditButton
                      className="1"
                      onClick={openEditTextModal6}
                      disabled={ListTypeData[5] === '명칭'}
                    >
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton
                      className="1"
                      onClick={DelModalopenHandler6}
                      disabled={ListTypeData[5] === '명칭'}
                    >
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  <H3>
                    {ListData[5] === undefined ? (
                      <>총 금액&nbsp;:&nbsp;0원</>
                    ) : (
                      <>총 금액&nbsp;:&nbsp;{ListTextValue6}&nbsp;원</>
                    )}
                  </H3>
                </AssetListBox>

                <H2 style={{ width: '250px' }}>&nbsp;자산 리스트 추가&nbsp;</H2>
                <Div>
                  <Input
                    onChange={TextonChange}
                    value={Text}
                    type="text"
                    placeholder="자산 명칭을 적어주세요. (ex. 다이아몬드)"
                  />
                </Div>
                {Text && ListTypeData ? (
                  <Fade>
                    {Text === '명칭' ? (
                      <P
                        style={{ color: 'blue' }}
                      >{`🚨 자산명칭이 "명칭"이면 버튼 비활성화됩니다."`}</P>
                    ) : null}
                    <P>{`✨ 자산명칭: "${Text}"`}</P>
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
                    <TitleCashBtn
                      Text={Text}
                      Cash={Cash}
                      postAssetApi={postAssetApi}
                      listdata={ListTypeData}
                      openerrDelModalopen={openerrDelModalopen}
                    >
                      수정
                    </TitleCashBtn>
                  </div>
                </Div>
                {Cash && ListValueData && Cashtarget.length <= 21 ? (
                  <Fade>
                    <P
                      style={{ color: 'blue' }}
                    >{`✔ 금액 : "${Cashtarget}원"`}</P>
                    <P>{`✔ 금액 자리수 : ${Cashtarget.length}자리`}</P>
                    <P>{`✔ 숫자만 기입 + " , " 포함 21자리까지 금액수정이 가능합니다.`}</P>
                  </Fade>
                ) : Cash && AssetDatas && Cashtarget.length >= 22 ? (
                  <Fade>
                    <P>{`🚨 금액 자리수 : ${Cashtarget.length}자리`}</P>
                    <P
                      style={{ color: 'blue' }}
                    >{`🚨 현재 금액 자리수가 22자리 이상입니다.`}</P>
                    <P style={{ color: 'blue' }}>{`🚨 금액을 수정해주세요.`}</P>
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
