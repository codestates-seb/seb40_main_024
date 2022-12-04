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
  AssetTextEditModal1,
  AssetTextEditModal2,
  AssetTextEditModal3,
  AssetTextEditModal4,
  AssetTextEditModal5,
  AssetTextEditModal6,
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

  const [PathText1, setPathText1] = useState(false);
  const [PathText2, setPathText2] = useState(false);
  const [PathText3, setPathText3] = useState(false);
  const [PathText4, setPathText4] = useState(false);
  const [PathText5, setPathText5] = useState(false);
  const [PathText6, setPathText6] = useState(false);
  // console.log('PathText1', PathText1);
  const [Cash, setCash] = useState('');
  const [Text, setText] = useState('');
  const [EditText, setEditText] = useState('');
  const [ZeroText, setZeroText] = useState(false);
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

  const openerrModal = () => {
    seterrModalopen(true);
  };

  const openerrDeletModal = () => {
    seterrDelModalopen(true);
  };

  const openZeroCashModal = () => {
    setModalopen(true);
  };
  const openerrZeroCashModal = () => {
    seterrTextModalopen(true);
  };

  const closeModal = () => {
    setModalopen(false);
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

  const TextonChange = (e) => {
    setText(e.target.value);
  };

  const EditTextonChange = (e) => {
    setEditText(e.target.value);
  };

  const CashonChange = (e) => {
    setCash(e.target.value);
  };
  const ZeroCashonChange = (e) => {
    setZeroText(e.target.value);
  };

  const assetData = [];
  {
    assetDatas
      ? assetDatas.map((el) =>
          el.memberPosted['id'] === memberid ? assetData.push(el) : null
        )
      : null;
  }

  const assetType = [];
  {
    assetData ? assetData.map((el) => assetType.push(el.assetType)) : null;
  }
  const AssetType = [...new Set(assetType)];
  // const FirstAssetTyle = [...new Set(assetType)];
  // console.log('FirstAssetTyle', FirstAssetTyle);
  if (AssetType.length > 7) {
    assetType.pop();
  }

  if (AssetType.length === 0) {
    for (let i = 1; i <= 6; i++) {
      AssetType.push('명칭');
    }
  }

  if (AssetType.length > 0 || AssetType.length < 7) {
    for (let i = 0; i <= 9 - AssetType.length; i++) {
      AssetType.push('명칭');
    }
  }

  if (AssetType.length >= 7) {
    for (let i = 0; i <= AssetType.length - 6; i++) {
      AssetType.pop();
    }
  }

  const openCashModal = () => {
    Text && Cash && isNaN(Cash) === false
      ? setModalopen(true)
      : AssetType.length >= 6 || Text || Cash || isNaN(Cash) === true
      ? seterrTextModalopen(true)
      : null;
  };

  const assetId = [];
  {
    assetDatas
      ? assetData.map((el) => {
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

  let assetData1 = [];
  let assetData2 = [];
  let assetData3 = [];
  let assetData4 = [];
  let assetData5 = [];
  let assetData6 = [];

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
  // console.log('assetData', assetData);
  // console.log('assetData1', assetData1);
  // console.log('assetData2', assetData2);
  // console.log('assetData3', assetData3);
  // console.log('assetData4', assetData4);
  // console.log('assetData5', assetData5);
  // console.log('assetData6', assetData6);

  const assetIdsBox = [];
  const assetIds1 = [];
  const assetIds2 = [];
  const assetIds3 = [];
  const assetIds4 = [];
  const assetIds5 = [];
  const assetIds6 = [];

  {
    assetData1.map((e) => {
      assetIds1.push(e.assetId);
      assetIdsBox.push(e.assetId);
    });
  }
  {
    assetData2.map((e) => {
      assetIds2.push(e.assetId);
      assetIdsBox.push(e.assetId);
    });
  }
  {
    assetData3.map((e) => {
      assetIds3.push(e.assetId);
      assetIdsBox.push(e.assetId);
    });
  }
  {
    assetData4.map((e) => {
      assetIds4.push(e.assetId);
      assetIdsBox.push(e.assetId);
    });
  }
  {
    assetData5.map((e) => {
      assetIds5.push(e.assetId);
      assetIdsBox.push(e.assetId);
    });
  }
  {
    assetData6.map((e) => {
      assetIds6.push(e.assetId);
      assetIdsBox.push(e.assetId);
    });
  }
  // console.log('assetIdsBox', assetIdsBox);
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

  if (assetValueBox.length >= 7) {
    assetValueBox.length = 6;
  }
  //************************************************************************************************ */

  //!
  let ChangeData1 = 0;

  assetData.map((el) => {
    for (let i = 0; i < assetData.length; i++) {
      assetIdsBox[i] !== el ? (ChangeData1 = el) : null;
    }
  });

  let RevassetData1 = [];
  let RevassetData2 = [];
  let RevassetData3 = [];
  let RevassetData4 = [];
  let RevassetData5 = [];
  let RevassetData6 = [];

  const PathTextHandler1 = () => {
    setPathText1(true);
    // RevassetData1.push(ChangeData1);
  };
  const PathTextHandler2 = () => {
    setPathText2(true);
    // RevassetData2.push(ChangeData1);
  };
  const PathTextHandler3 = () => {
    setPathText3(true);
    // RevassetData3.push(ChangeData1);
  };
  const PathTextHandler4 = () => {
    setPathText4(true);
    // RevassetData4.push(ChangeData1);
  };
  const PathTextHandler5 = () => {
    setPathText5(true);
    // RevassetData5.push(ChangeData1);
  };
  const PathTextHandler6 = () => {
    setPathText6(true);
    // RevassetData6.push(ChangeData1);
  };

  // console.log('ChangeData1', ChangeData1);
  //??????????????????????????????????????????????????????????????????????????????????????????
  RevassetData1.push(...assetData1);

  let LastRevassetDataassetType1 = '';
  ChangeData1 && assetData1
    ? (LastRevassetDataassetType1 =
        RevassetData1[RevassetData1.length - 1]?.assetType)
    : null;

  let LastRevassetDataassetId1 = '';
  ChangeData1 && assetData1
    ? (LastRevassetDataassetId1 =
        RevassetData1[RevassetData1.length - 1]?.assetId)
    : null;

  RevassetData1?.filter((e) =>
    Object.isExtensible(e) ? (e.assetType = LastRevassetDataassetType1) : null
  );

  if (ChangeData1.assetId === LastRevassetDataassetId1) {
    RevassetData1.pop();
  }

  // console.log('RevassetData1', RevassetData1);
  // console.log('LastRevassetDataassetType1', LastRevassetDataassetType1);
  // console.log('LastRevassetDataassetId1', LastRevassetDataassetId1);
  // console.log('ChangeData1', ChangeData1);
  // console.log('ChangeData1.assetId', ChangeData1.assetId);

  //??????????????????????????????????????????????????????????????????????????????????????????
  RevassetData2.push(...assetData2);

  let LastRevassetDataassetType2 = '';
  ChangeData1 && assetData2
    ? (LastRevassetDataassetType2 =
        RevassetData2[RevassetData2.length - 1]?.assetType)
    : null;

  let LastRevassetDataassetId2 = '';
  ChangeData1 && assetData2
    ? (LastRevassetDataassetId2 =
        RevassetData2[RevassetData2.length - 1]?.assetId)
    : null;

  RevassetData2?.filter((e) =>
    Object.isExtensible(e) ? (e.assetType = LastRevassetDataassetType2) : null
  );

  // if (ChangeData1.assetId === LastRevassetDataassetId2) {

  //   RevassetData2.pop();
  // }

  // console.log('RevassetData2', RevassetData2);
  // console.log('LastRevassetDataassetType2', LastRevassetDataassetType2);
  // console.log('LastRevassetDataassetId2', LastRevassetDataassetId2);
  // console.log('ChangeData1', ChangeData1);
  // console.log('ChangeData1.assetId', ChangeData1.assetId);
  //??????????????????????????????????????????????????????????????????????????????????????????
  RevassetData3.push(...assetData3);
  // console.log('assetData4', assetData4);

  let LastRevassetDataassetType3 = '';
  ChangeData1 && assetData3
    ? (LastRevassetDataassetType3 =
        RevassetData3[RevassetData3.length - 1]?.assetType)
    : null;

  let LastRevassetDataassetId3 = '';
  ChangeData1 && assetData3
    ? (LastRevassetDataassetId3 =
        RevassetData3[RevassetData3.length - 1]?.assetId)
    : null;

  RevassetData3?.filter((e) =>
    Object.isExtensible(e) ? (e.assetType = LastRevassetDataassetType3) : null
  );

  // if (ChangeData1.assetId === LastRevassetDataassetId3) {

  //   RevassetData3.pop();
  // }

  // console.log('RevassetData3', RevassetData3);
  // console.log('LastRevassetDataassetType3', LastRevassetDataassetType3);
  // console.log('LastRevassetDataassetId3', LastRevassetDataassetId3);
  // console.log('ChangeData1', ChangeData1);
  // console.log('ChangeData1.assetId', ChangeData1.assetId);
  //??????????????????????????????????????????????????????????????????????????????????????????
  RevassetData4.push(...assetData4);

  let LastRevassetDataassetType4 = '';
  ChangeData1 && assetData4
    ? (LastRevassetDataassetType4 =
        RevassetData4[RevassetData4.length - 1]?.assetType)
    : null;

  let LastRevassetDataassetId4 = '';
  ChangeData1 && assetData4
    ? (LastRevassetDataassetId4 =
        RevassetData4[RevassetData4.length - 1]?.assetId)
    : null;

  RevassetData4?.filter((e) =>
    Object.isExtensible(e) ? (e.assetType = LastRevassetDataassetType4) : null
  );

  // console.log('RevassetData4', RevassetData4);

  //   RevassetData4.pop();
  // }

  // console.log('RevassetData4', RevassetData4);
  // console.log('LastRevassetDataassetType4', LastRevassetDataassetType4);
  // console.log('LastRevassetDataassetId4', LastRevassetDataassetId4);
  // console.log('ChangeData1', ChangeData1);
  // console.log('ChangeData1.assetId', ChangeData1.assetId);
  // //??????????????????????????????????????????????????????????????????????????????????????????
  RevassetData5.push(...assetData5);

  let LastRevassetDataassetType5 = '';
  ChangeData1 && assetData5
    ? (LastRevassetDataassetType5 =
        RevassetData5[RevassetData5.length - 1]?.assetType)
    : null;

  let LastRevassetDataassetId5 = '';
  ChangeData1 && assetData5
    ? (LastRevassetDataassetId5 =
        RevassetData5[RevassetData5.length - 1]?.assetId)
    : null;

  RevassetData5?.filter((e) =>
    Object.isExtensible(e) ? (e.assetType = LastRevassetDataassetType5) : null
  );

  // if (ChangeData1.assetId === LastRevassetDataassetId5) {

  //   RevassetData5.pop();
  // }

  // console.log('RevassetData5', RevassetData5);
  // console.log('LastRevassetDataassetType5', LastRevassetDataassetType5);
  // console.log('LastRevassetDataassetId5', LastRevassetDataassetId5);
  // console.log('ChangeData1', ChangeData1);
  // console.log('ChangeData1.assetId', ChangeData1.assetId);
  // //??????????????????????????????????????????????????????????????????????????????????????????
  RevassetData6.push(...assetData6);

  let LastRevassetDataassetType6 = '';
  ChangeData1 && assetData6
    ? (LastRevassetDataassetType6 =
        RevassetData6[RevassetData6.length - 1]?.assetType)
    : null;

  let LastRevassetDataassetId6 = '';
  ChangeData1 && assetData6
    ? (LastRevassetDataassetId6 =
        RevassetData6[RevassetData6.length - 1]?.assetId)
    : null;

  RevassetData6?.filter((e) =>
    Object.isExtensible(e) ? (e.assetType = LastRevassetDataassetType6) : null
  );

  // if (ChangeData1.assetId === LastRevassetDataassetId6) {

  //   RevassetData6.pop();
  // }

  // console.log('RevassetData6', RevassetData6);
  // console.log('LastRevassetDataassetType6', LastRevassetDataassetType6);
  // console.log('LastRevassetDataassetId6', LastRevassetDataassetId6);
  // console.log('ChangeData1', ChangeData1);
  // console.log('ChangeData1.assetId', ChangeData1.assetId);
  // //??????????????????????????????????????????????????????????????????????????????????????????
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

  //? PATCH
  // eslint-disable-next-line no-unused-vars
  let Patchdata1 = {};
  let Patchdata2 = {};
  let Patchdata3 = {};
  let Patchdata4 = {};
  let Patchdata5 = {};
  let Patchdata6 = {};

  let patchdata1 = '';
  let patchdata2 = '';
  let patchdata3 = '';
  let patchdata4 = '';
  let patchdata5 = '';
  let patchdata6 = '';

  const Patchdata = {
    assetType: EditText,
    strValue: '+0',
  };
  // console.log(AssetDatas);
  EditText !== '명칭' ? (Patchdata1 = Patchdata) : null;

  {
    assetIds1.map((e) => {
      patchdata1 = String(e);
    });
  }
  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi1 = async () => {
    await axios
      .patch(`${URL}/asset/${patchdata1}`, Patchdata1, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?

  EditText !== '명칭' ? (Patchdata2 = Patchdata) : null;

  {
    assetIds2.map((e) => {
      patchdata2 = String(e);
    });
  }
  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi2 = async () => {
    await axios
      .patch(`${URL}/asset/${patchdata2}`, Patchdata2, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?
  //?

  EditText !== '명칭' ? (Patchdata3 = Patchdata) : null;
  {
    assetIds3.map((e) => {
      patchdata3 = String(e);
    });
  }
  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi3 = async () => {
    await axios
      .patch(`${URL}/asset/${patchdata3}`, Patchdata3, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?
  //?
  EditText !== '명칭' ? (Patchdata4 = Patchdata) : null;
  {
    assetIds4.map((e) => {
      patchdata4 = String(e);
    });
  }
  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi4 = async () => {
    await axios
      .patch(`${URL}/asset/${patchdata4}`, Patchdata4, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?
  //?
  EditText !== '명칭' ? (Patchdata5 = Patchdata) : null;
  {
    assetIds5.map((e) => {
      patchdata5 = String(e);
    });
  }
  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi5 = async () => {
    await axios
      .patch(`${URL}/asset/${patchdata5}`, Patchdata5, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?
  //?
  EditText !== '명칭' ? (Patchdata6 = Patchdata) : null;
  {
    assetIds6.map((e) => {
      patchdata6 = String(e);
    });
  }
  // eslint-disable-next-line no-unused-vars
  const patchAssetsApi6 = async () => {
    await axios
      .patch(`${URL}/asset/${patchdata6}`, Patchdata6, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrModal());
  };
  //?

  //? DELET
  let AssetTypeNonMyungching = 0;
  // eslint-disable-next-line no-unused-vars
  {
    AssetType.map((e) => {
      e !== '명칭' ? AssetTypeNonMyungching++ : null;
    });
  }
  // console.log(AssetTypeNonMungching);

  let DeleteLastdata = assetId[assetId.length - 1];

  const deletLastAssetApi1 = async () => {
    await axios
      .delete(`${URL}/asset/${DeleteLastdata}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata1 = '';
  {
    assetIds1.map((e) => {
      Deletedata1 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi1 = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata1}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata2 = '';
  {
    assetIds2.map((e) => {
      Deletedata2 = String(e);
    });
  }

  const deletAssetApi2 = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata2}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata3 = '';
  {
    assetIds3.map((e) => {
      Deletedata3 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi3 = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata3}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata4 = '';
  {
    assetIds4.map((e) => {
      Deletedata4 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi4 = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata4}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata5 = '';
  {
    assetIds5.map((e) => {
      Deletedata5 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi5 = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata5}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?
  //? DELET
  // eslint-disable-next-line no-unused-vars
  let Deletedata6 = '';
  {
    assetIds6.map((e) => {
      Deletedata6 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApi6 = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata6}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //?

  //? ZEROPOST1
  const PostplusZerodata1 = {
    assetType: ZeroText,
    assetValue: `+${Math.abs(assetValue1)}`,
  };

  const PostmiusZerodata1 = {
    assetType: ZeroText,
    assetValue: `-${assetValue1}`,
  };
  let PostZerodata1 = '';
  {
    assetValue1 > 0
      ? (PostZerodata1 = PostmiusZerodata1)
      : assetValue1 <= 0
      ? (PostZerodata1 = PostplusZerodata1)
      : null;
  }
  // console.log('ZeroText', ZeroText, 'PostZerodata1', PostZerodata1);
  // eslint-disable-next-line no-unused-vars
  const postZeroAssetApi1 = async () => {
    await axios
      .post(`${URL}/asset`, PostZerodata1, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openZeroCashModal())
      .catch((err) => openerrZeroCashModal());
  };
  //?
  //? ZEROPOST2
  const PostplusZerodata2 = {
    assetType: ZeroText,
    assetValue: `+${Math.abs(assetValue2)}`,
  };
  const PostmiusZerodata2 = {
    assetType: ZeroText,
    assetValue: `-${assetValue2}`,
  };
  let PostZerodata2 = '';
  {
    assetValue2 > 0
      ? (PostZerodata2 = PostmiusZerodata2)
      : assetValue2 <= 0
      ? (PostZerodata2 = PostplusZerodata2)
      : null;
  }
  // eslint-disable-next-line no-unused-vars
  const postZeroAssetApi2 = async () => {
    await axios
      .post(`${URL}/asset`, PostZerodata2, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openZeroCashModal())
      .catch((err) => openerrZeroCashModal());
  };
  //?
  //? ZEROPOST3
  const PostplusZerodata3 = {
    assetType: ZeroText,
    assetValue: `+${Math.abs(assetValue3)}`,
  };
  const PostmiusZerodata3 = {
    assetType: ZeroText,
    assetValue: `-${assetValue3}`,
  };
  let PostZerodata3 = '';
  {
    assetValue3 > 0
      ? (PostZerodata3 = PostmiusZerodata3)
      : assetValue3 <= 0
      ? (PostZerodata3 = PostplusZerodata3)
      : null;
  }
  // eslint-disable-next-line no-unused-vars
  const postZeroAssetApi3 = async () => {
    await axios
      .post(`${URL}/asset`, PostZerodata3, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openZeroCashModal())
      .catch((err) => openerrZeroCashModal());
  };
  //?
  //? ZEROPOST4
  const PostplusZerodata4 = {
    assetType: ZeroText,
    assetValue: `+${Math.abs(assetValue4)}`,
  };
  const PostmiusZerodata4 = {
    assetType: ZeroText,
    assetValue: `-${assetValue4}`,
  };
  let PostZerodata4 = '';
  {
    assetValue4 > 0
      ? (PostZerodata4 = PostmiusZerodata4)
      : assetValue4 <= 0
      ? (PostZerodata4 = PostplusZerodata4)
      : null;
  }

  // eslint-disable-next-line no-unused-vars
  const postZeroAssetApi4 = async () => {
    await axios
      .post(`${URL}/asset`, PostZerodata4, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openZeroCashModal())
      .catch((err) => openerrZeroCashModal());
  };
  //?
  //? ZEROPOST5
  const PostplusZerodata5 = {
    assetType: ZeroText,
    assetValue: `+${Math.abs(assetValue5)}`,
  };
  const PostmiusZerodata5 = {
    assetType: ZeroText,
    assetValue: `-${assetValue5}`,
  };
  let PostZerodata5 = '';
  {
    assetValue5 > 0
      ? (PostZerodata5 = PostmiusZerodata5)
      : assetValue5 <= 0
      ? (PostZerodata5 = PostplusZerodata5)
      : null;
  }
  // eslint-disable-next-line no-unused-vars
  const postZeroAssetApi5 = async () => {
    await axios
      .post(`${URL}/asset`, PostZerodata5, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openZeroCashModal())
      .catch((err) => openerrZeroCashModal());
  };
  //?
  //? ZEROPOST6
  const PostplusZerodata6 = {
    assetType: ZeroText,
    assetValue: `+${Math.abs(assetValue6)}`,
  };
  const PostmiusZerodata6 = {
    assetType: ZeroText,
    assetValue: `-${assetValue6}`,
  };
  let PostZerodata6 = '';
  {
    assetValue6 > 0
      ? (PostZerodata6 = PostmiusZerodata6)
      : assetValue6 <= 0
      ? (PostZerodata6 = PostplusZerodata6)
      : null;
  }

  // eslint-disable-next-line no-unused-vars
  const postZeroAssetApi6 = async () => {
    await axios
      .post(`${URL}/asset`, PostZerodata6, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => openZeroCashModal())
      .catch((err) => openerrZeroCashModal());
  };
  //?

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
  addData();

  // let PathTextBox = [
  //   `${PathText1}`,
  //   `${PathText2}`,
  //   `${PathText3}`,
  //   `${PathText4}`,
  //   `${PathText5}`,
  //   `${PathText6}`,
  // ];

  //!
  let Deletetest = '';
  {
    assetIds1.map((e) => {
      Deletedata1 = String(e);
    });
  }
  // console.log(`${Deletedata}`);

  const deletAssetApitest = async () => {
    await axios
      .delete(`${URL}/asset/${Deletedata1}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => closeModal())
      .catch((err) => openerrDeletModal());
  };
  //!

  const AssetList = AssetType.map((e, key) => (
    <AssetListBox key={key}>
      <H3Title style={{ marginTop: '10px' }}>{key + 1} &nbsp;)</H3Title>

      <H3Title>{e}</H3Title>
      {e === '명칭' ? (
        <H3>총 금액: 0원</H3>
      ) : (
        <H3>총 금액: {assetValueBox[key]} 원</H3>
      )}
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
                  api1={deletAssetApi1}
                  api2={deletAssetApitest}
                  AssetTypeNonMyungching={AssetTypeNonMyungching}
                >
                  <Div>
                    <p>1 선택하신 자산을 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal1>
                <AssetDeleteEditModal2
                  open={DelModalopen2}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api1={deletAssetApi2}
                  // api2={deletLastAssetApi1}
                  AssetTypeNonMyungching={AssetTypeNonMyungching}
                >
                  <Div>
                    <p>2 선택하신 자산을 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal2>
                <AssetDeleteEditModal3
                  open={DelModalopen3}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api1={deletAssetApi3}
                  // api2={deletLastAssetApi1}
                  AssetTypeNonMyungching={AssetTypeNonMyungching}
                >
                  <Div>
                    <p>3 선택하신 자산을 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal3>
                <AssetDeleteEditModal4
                  open={DelModalopen4}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api1={deletAssetApi4}
                  // api2={deletLastAssetApi1}
                  AssetTypeNonMyungching={AssetTypeNonMyungching}
                >
                  <Div>
                    <p>4 선택하신 자산을 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal4>
                <AssetDeleteEditModal5
                  open={DelModalopen5}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api1={deletAssetApi5}
                  // api2={deletLastAssetApi1}
                  AssetTypeNonMyungching={AssetTypeNonMyungching}
                  // AssetIds5={assetIds5}
                >
                  <Div>
                    <p>5 선택하신 자산을 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal5>
                <AssetDeleteEditModal6
                  open={DelModalopen6}
                  close={closeModal}
                  header="자산 종류 수정 알림"
                  api1={deletAssetApi6}
                  // api2={deletLastAssetApi1}
                  AssetTypeNonMyungching={AssetTypeNonMyungching}

                  // AssetIds6={assetIds6}
                >
                  <Div>
                    <p>6 선택하신 자산을 삭제하시겠습니까? </p>
                  </Div>
                </AssetDeleteEditModal6>
                <AssetTextEditModal1
                  header="자산 종류 수정 알림"
                  open={TextModalopen1}
                  api={patchAssetsApi1}
                  PathTextHandler1={PathTextHandler1}
                  close={closeModal}
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
                </AssetTextEditModal1>
                <AssetTextEditModal2
                  header="자산 종류 수정 알림"
                  open={TextModalopen2}
                  api={patchAssetsApi2}
                  PathTextHandler2={PathTextHandler2}
                  close={closeModal}
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
                </AssetTextEditModal2>
                <AssetTextEditModal3
                  header="자산 종류 수정 알림"
                  open={TextModalopen3}
                  api={patchAssetsApi3}
                  PathTextHandler3={PathTextHandler3}
                  close={closeModal}
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
                </AssetTextEditModal3>
                <AssetTextEditModal4
                  header="자산 종류 수정 알림"
                  open={TextModalopen4}
                  api={patchAssetsApi4}
                  PathTextHandler4={PathTextHandler4}
                  close={closeModal}
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
                </AssetTextEditModal4>
                <AssetTextEditModal5
                  header="자산 종류 수정 알림"
                  open={TextModalopen5}
                  api={patchAssetsApi5}
                  PathTextHandler5={PathTextHandler5}
                  close={closeModal}
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
                </AssetTextEditModal5>
                <AssetTextEditModal6
                  header="자산 종류 수정 알림"
                  open={TextModalopen6}
                  api={patchAssetsApi6}
                  PathTextHandler6={PathTextHandler6}
                  close={closeModal}
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
                </AssetTextEditModal6>
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
                {/* {AssetList} */}

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    1 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {RevassetData1[RevassetData1.length - 1]?.assetType ===
                    undefined ? (
                      <>명칭</>
                    ) : (
                      <>{RevassetData1[RevassetData1.length - 1]?.assetType}</>
                    )}
                    <EditButton className="1" onClick={openEditTextModal1}>
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton className="1" onClick={DelModalopenHandler1}>
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  {RevassetData1[RevassetData1.length - 1]?.assetValue ===
                  undefined ? (
                    <H3>총 금액: 0원</H3>
                  ) : (
                    <H3>총 금액: {assetValueBox[0]} 원</H3>
                  )}
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    2 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {RevassetData2[RevassetData2.length - 1]?.assetType ===
                    undefined ? (
                      <>명칭</>
                    ) : (
                      <>{RevassetData2[RevassetData2.length - 1]?.assetType}</>
                    )}
                    <EditButton className="1" onClick={openEditTextModal2}>
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton className="1" onClick={DelModalopenHandler2}>
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  {AssetType[1] === '명칭' ? (
                    <H3>총 금액: 0원</H3>
                  ) : (
                    <H3>총 금액: {assetValueBox[1]} 원</H3>
                  )}
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    3 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {RevassetData3[RevassetData3.length - 1]?.assetType ===
                    undefined ? (
                      <>명칭</>
                    ) : (
                      <>{RevassetData3[RevassetData3.length - 1]?.assetType}</>
                    )}
                    <EditButton className="1" onClick={openEditTextModal3}>
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton className="1" onClick={DelModalopenHandler3}>
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  {AssetType[2] === '명칭' ? (
                    <H3>총 금액: 0원</H3>
                  ) : (
                    <H3>총 금액: {assetValueBox[2]} 원</H3>
                  )}
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    4 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {RevassetData4[RevassetData4.length - 1]?.assetType ===
                    undefined ? (
                      <>명칭</>
                    ) : (
                      <>{RevassetData4[RevassetData4.length - 1]?.assetType}</>
                    )}
                    <EditButton className="1" onClick={openEditTextModal4}>
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton className="1" onClick={DelModalopenHandler4}>
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  {AssetType[3] === '명칭' ? (
                    <H3>총 금액: 0원</H3>
                  ) : (
                    <H3>총 금액: {assetValueBox[3]} 원</H3>
                  )}
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    5 &nbsp;) &nbsp;
                  </H3Title>
                  <H3Title>
                    {RevassetData5[RevassetData5.length - 1]?.assetType ===
                    undefined ? (
                      <>명칭</>
                    ) : (
                      <>{RevassetData5[RevassetData5.length - 1]?.assetType}</>
                    )}
                    <EditButton className="1" onClick={openEditTextModal5}>
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton className="1" onClick={DelModalopenHandler5}>
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  {AssetType[4] === '명칭' ? (
                    <H3>총 금액: 0원</H3>
                  ) : (
                    <H3>총 금액: {assetValueBox[4]} 원</H3>
                  )}
                </AssetListBox>

                <AssetListBox>
                  <H3Title style={{ marginTop: '10px' }}>
                    6 &nbsp;) &nbsp;
                  </H3Title>

                  <H3Title>
                    {/* {RevassetData6[RevassetData6.length - 1]?.assetType}&nbsp; */}
                    {RevassetData6[RevassetData6.length - 1]?.assetType ===
                    undefined ? (
                      <>명칭</>
                    ) : (
                      <>{RevassetData6[RevassetData6.length - 1]?.assetType}</>
                    )}
                    <EditButton className="1" onClick={openEditTextModal6}>
                      <FiEdit />
                    </EditButton>
                    &nbsp;
                    <EditButton className="1" onClick={DelModalopenHandler6}>
                      <FiDelete />
                    </EditButton>
                  </H3Title>
                  {AssetType[5] === '명칭' ? (
                    <H3>총 금액: 0원</H3>
                  ) : (
                    <H3>총 금액: {assetValueBox[5]} 원</H3>
                  )}
                </AssetListBox>

                <H2 style={{ width: '265px' }}>자산 금액 수정&nbsp;(+ / -)</H2>
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
                    <TitleCashBtn
                      Text={Text}
                      Cash={Cash}
                      postAssetApi={postAssetApi}
                    >
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
                <H2>자산 초기화</H2>
                <Div>
                  {ZeroText === false ? (
                    <Input
                      onChange={ZeroCashonChange}
                      value={''}
                      type="text"
                      placeholder="0원으로 초기화 하실 자산 명칭을 적어주세요."
                    />
                  ) : (
                    <Input
                      onChange={ZeroCashonChange}
                      value={ZeroText}
                      type="text"
                      placeholder="0원으로 초기화 하실 자산 명칭을 적어주세요."
                    />
                  )}
                  <div>
                    <ZeroCashBtn1
                      ZeroText={ZeroText}
                      postZEROAssetApi1={postZeroAssetApi1}
                      postZEROAssetApi2={postZeroAssetApi2}
                      postZEROAssetApi3={postZeroAssetApi3}
                      postZEROAssetApi4={postZeroAssetApi4}
                      postZEROAssetApi5={postZeroAssetApi5}
                      postZEROAssetApi6={postZeroAssetApi6}
                      AssetType={AssetType}
                    >
                      초기화
                    </ZeroCashBtn1>
                  </div>
                </Div>
                {ZeroText && AssetDatas ? (
                  <Fade>
                    {ZeroText === '명칭' ? (
                      <P
                        style={{ color: 'blue' }}
                      >{`🚨 위 항목에 없는 명칭이면 버튼 비활성화됩니다."`}</P>
                    ) : null}
                    <P>{`✨ 반영될 자산명칭: "${ZeroText}"`}</P>
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
