import { useState } from 'react';
import styled from 'styled-components';
import { SaveBtn, EditGoalBtn, DeleteGoalBtn } from '../Common/Button';
import {
  GoalModifyModal,
  Modal,
  SavingModal,
} from '../../Component/Common/Modal';

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
  .smallP {
    margin-bottom: 5px;
    font-weight: 500;
    text-align: left;
    color: gray;
  }
`;

const Header = styled.h3`
  margin-bottom: 10px;
`;

const SettingInput = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 400px;
  height: 50px;
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

// const TextBox = styled.div`
//   box-sizing: border-box;
//   text-align: center;
//   width: 400px;
//   height: 60px;
//   margin: 10px;
//   font-size: 25px;
//   border-bottom: solid 2px #9ed5c5;
//   margin-top: 20px;
//   color: grey;
//   &:focus {
//     outline: none;
//     border-color: #8ec3b0;
//     box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
//   }
// `;
const CalcurlatedBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: auto;
  border: solid 2px rgba(188, 234, 213, 30%);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  background-color: rgba(188, 234, 213, 30%);
  :hover {
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
    .li {
      color: black;
      font-weight: 700;
    }
  }
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-left: 50px;
  .saving {
  }
`;

const UserInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 20px;
  .number {
    color: #8ec3b0;
  }
`;

const Input = styled.input`
  width: 230px;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #444;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #999;
  }
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 40px;
  gap: 10px;
  margin-left: 350px;
`;
const NewBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 40px;
  gap: 40px;
  /* margin-top: -20px; */
  margin-bottom: 10px;
`;
const UpBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: #bcead5;
  border-radius: 10%;
  color: grey;
  font-weight: 900;
`;
const DownBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: #bcead5;
  border-radius: 10%;
  color: grey;
  font-weight: 900;
`;
// const SavingInfoBox = styled.div`
//   box-sizing: border-box;
//   width: 200px;
//   height: 100%;
// `;

const SavingInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 5px;
  .number {
    color: #8ec3b0;
  }
`;

const AssetList = ({
  count,
  goalDelete,
  setGoal,
  setExtended,
  setPeriod,
  goal,
  extended,
  period,
  //   targetAmount,
  //   setTargetAmount,
  goalPatch,
  goalNameonChange,
  //   goalName,
  goalPriceonChange,
  //   goalPrice,
  targetLengthonChange,
  //   targetLength,
  goalUpPatch,
  up,
  goalDownPatch,
  id,
  //   remainingAmount,
}) => {
  const [save, setSave] = useState(false);
  const [Modify, setModify] = useState(false);
  const [Modalopen, setModalopen] = useState(false);

  const openSavingModal = () => {
    setSave(!save);
  };
  const openModal = () => {
    setModalopen(!Modalopen);
  };
  const closeModal = () => {
    setModalopen(false);
    setModify(false);
    setSave(false);
  };
  const openModify = () => {
    setModify(true);
  };
  //   let monthly = Math.ceil(goalPrice / targetLength);
  //   if (isNaN(monthly)) {
  //     monthly = 0;
  //   } else if (monthly === Infinity) {
  //     monthly = 0;
  //   }

  //   const targetAmount = monthly
  //     .toString()
  //     .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  //   console.log(count);
  //   console.log(count.calculatedPrice.toFixed());
  //   console.log(
  //     Math.ceil(Number(count.calculatedPrice))
  //       .toString()
  //       .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  //   );

  //   console.log(
  //     Number(count.calculatedPrice)
  //       .toFixed()
  //       .toString()
  //       .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  //   );
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ComponentContain>
          <br />
          <BtnBox>
            <EditGoalBtn
              openModify={openModify}
              id={count.goalId}
            ></EditGoalBtn>
            <DeleteGoalBtn
              goalDelete={goalDelete}
              id={count.goalId}
            ></DeleteGoalBtn>
          </BtnBox>
          <Header>나의 목표</Header>
          <SettingInput
            placeholder="자동차"
            type="text"
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
          >
            {count.goalName}
          </SettingInput>
          <p className="p">목표 금액</p>
          <SettingInput
            placeholder="30,000,000원"
            type="number"
            onChange={(e) => setExtended(e.target.value)}
            value={extended}
          >
            {count.goalPrice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
            원
          </SettingInput>
          <p className="p">목표 기간</p>
          <SettingInput
            placeholder="12개월"
            type="number"
            onChange={(e) => setPeriod(e.target.value)}
            value={period}
          >
            {count.targetLength} 개월
          </SettingInput>
          <CalcurlatedBox>
            <p className="smallP">
              <li>
                {' '}
                매달 저축액:{' '}
                {Number(count.calculatedPrice)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '}
                원
              </li>
            </p>
            {/* {count.calculatedPrice} */}
            <p className="smallP">
              <li>
                {' '}
                남은 금액:{' '}
                {
                  Number(Math.ceil(count.goalPrice)) <
                  (Number(count.targetLength) - up) *
                    Number(count.calculatedPrice)
                    ? Number(Math.ceil(count.goalPrice))
                    : (Number(count.targetLength) - up) *
                      Number(count.calculatedPrice)
                  //   : (Number(count.targetLength) - up) *
                  //     Number(count.calculatedPrice)
                  //       .toString()
                  //       .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                }{' '}
                {/* {isNaN(
                  (Number(count.targetLength) - up) *
                    Math.ceil(Number(count.calculatedPrice))
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                )
                  ? (Number(count.targetLength) - up) *
                    Math.ceil(Number(count.calculatedPrice))
                  : (Number(count.targetLength) - up) *
                    Math.ceil(Number(count.calculatedPrice))
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}{' '} */}
                원{' '}
              </li>
            </p>
            {/* {(Number(count.targetLength) - up) * Number(count.calculatedPrice)} */}
            <p className="smallP">
              <li className="savingContent">
                남은 기간:{' '}
                {isNaN(up)
                  ? Number(count.targetLength)
                  : Number(count.targetLength) - up}{' '}
                개월{' '}
              </li>
            </p>
          </CalcurlatedBox>
          <SaveBtn openSavingModal={openSavingModal}></SaveBtn>
          <GoalModifyModal
            id={count.goalId}
            open={Modify}
            close={openModal}
            header="목표자산 수정"
            goalPatch={goalPatch}
          >
            <Div>
              <ListContain>
                <UserInfo>
                  <div>
                    <UserInfoHead>목표자산 수정</UserInfoHead>
                    <Input
                      //   value={goalName}
                      onChange={goalNameonChange}
                      placeholder="나의 목표"
                    ></Input>
                    <Input
                      type="number"
                      //   value={goalPrice}
                      onChange={goalPriceonChange}
                      placeholder="금액"
                    />
                    <Input
                      type="number"
                      //   value={targetLength}
                      onChange={targetLengthonChange}
                      placeholder="기간"
                    />
                  </div>
                </UserInfo>
              </ListContain>
              <Modal
                open={Modalopen}
                close={closeModal}
                header="목표자산수정 알림"
              >
                목표자산이 수정되었습니다.
              </Modal>
            </Div>
          </GoalModifyModal>
          <SavingModal
            open={save}
            close={openModal}
            goalUpPatch={goalUpPatch}
            goalDownPatch={goalDownPatch}
            header="저축 기간"
          >
            <Div>
              <ListContain>
                <UserInfo>
                  <div className="saving">
                    {/* <SavingInfoBox> */}
                    <SavingInfoHead>
                      목표 기간:{' '}
                      <span className="number">{count.targetLength}</span>개월
                    </SavingInfoHead>
                    <SavingInfoHead>
                      저축 기간: <span className="number">{up}</span>개월
                    </SavingInfoHead>
                    <SavingInfoHead>
                      남은 금액:{' '}
                      <span className="number">
                        {Number(Math.ceil(count.goalPrice)) <
                        (Number(count.targetLength) - up) *
                          Number(count.calculatedPrice)
                          ? Number(Math.ceil(count.goalPrice))
                          : (Number(count.targetLength) - up) *
                            Number(count.calculatedPrice)}{' '}
                      </span>
                      원
                    </SavingInfoHead>
                    {/* </SavingInfoBox> */}

                    <NewBtnBox>
                      <UpBtn onClick={goalUpPatch} data-id={id}>
                        UP
                      </UpBtn>
                      <DownBtn onClick={goalDownPatch} data-id={id}>
                        DOWN
                      </DownBtn>
                    </NewBtnBox>
                  </div>
                </UserInfo>
              </ListContain>
              <Modal
                open={Modalopen}
                close={closeModal}
                header="저축기간 저장 알림"
              >
                저축 기간이 저장되었습니다.
              </Modal>
            </Div>
          </SavingModal>
        </ComponentContain>
      </div>
    </>
  );
};

export default AssetList;
