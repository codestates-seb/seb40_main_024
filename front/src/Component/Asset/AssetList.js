import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { SaveBtn } from '../Common/Button';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 5px solid #def5e5;
  .trashicon {
    margin-left: 500px;
  }
  .p {
    font-size: 17px;
    font-weight: 500;
  }
`;

const Header = styled.h3`
  margin-bottom: 10px;
`;

const SettingInput = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 400px;
  height: 60px;
  margin: 10px;
  font-size: 25px;
  border-bottom: solid 2px #9ed5c5;
  margin-top: 20px;
  color: grey;
  &:focus {
    outline: none;
    border-color: #8ec3b0;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: normal;
  box-sizing: border-box;
  margin: auto;
  height: 70px;
  width: 300px;
  color: red;
  font-size: 30px;
`;

// const ModalSaving = styled.div`
//   display: flex;
//   flex-direction: column;
//   display: inline-flex;
//   align-items: center;
//   margin: 30px;
//   margin-top: 350px;
//   box-sizing: border-box;
//   width: 160px;
//   height: 160px;
//   border: 1px solid #def5e5;
//   border-radius: 50%;
//   background-color: #def5e5;
// `;
// const PeriodBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   line-height: normal;
//   box-sizing: border-box;
//   margin: auto;
//   margin-top: 3px;
//   height: 30px;
//   width: 150px;
//   color: black;
//   font-size: 16px;
// `;
const AssetList = ({
  //   HandlerRemove,
  //   post,
  count,
  goalDelete,
  setGoal,
  setExtended,
  setPeriod,
  id,
  goal,
  extended,
  period,
  targetAmount,
  setTargetAmount,
}) => {
  const [save, setSave] = useState(false);
  // const [count, setCount] = useState(1);
  //   const [disabled, setDisabled] = useState(false);
  // const[numberUp, setNumberUp]= useState(1)
  const handlerModal = () => {
    setSave(!save);
  };
  // const handlerCount = () => {
  //   setCount(count + 1);
  //   if (count + 1 === Number(period)) return alert('목표달성을 축하드립니다!');

  //   //수정필요
  // };

  //   const handlerNumberUp = ()
  //   const handlerCloseModal = () => {
  //     setSave(false);
  //   };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <ComponentContain>
          <br />
          <div className="trashicon">
            <FontAwesomeIcon
              icon={faTrashCan}
              className="icon"
              size="2x"
              color="grey"
              cursor="pointer"
              onClick={goalDelete}
              data-id={id}
              //   onClick={() => {
              //     HandlerRemove(post);
              //   }}
            ></FontAwesomeIcon>
          </div>
          <Header>나의 목표</Header>
          <SettingInput
            placeholder="자동차"
            type="text"
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
          >
            {count.goal}
          </SettingInput>
          <p className="p">목표 금액</p>
          <SettingInput
            placeholder="30,000,000원"
            type="number"
            onChange={(e) => setExtended(e.target.value)}
            value={extended}
          >
            {count.extended} 원
          </SettingInput>
          <p className="p">목표 기간</p>
          <SettingInput
            placeholder="12개월"
            type="number"
            onChange={(e) => setPeriod(e.target.value)}
            value={period}
          >
            {count.period} 개월
          </SettingInput>
          <p className="p">목표달성을 위한 매달 저축액은?</p>
          <TextBox
            onChange={(e) => setTargetAmount(e.target.value)}
            value={targetAmount}
          >
            {count.targetAmount}원!
          </TextBox>
          <SaveBtn handlerModal={handlerModal}></SaveBtn>
        </ComponentContain>
      </div>
    </>
  );
};

export default AssetList;
