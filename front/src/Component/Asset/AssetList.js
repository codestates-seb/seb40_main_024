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
// const Button = styled.button`
//   height: 50px;
//   width: 50px;
//   background-color: yellow;
//   border: black;
// `;

// const Button2 = styled.button`
//   height: 50px;
//   width: 50px;
//   background-color: blue;
//   border: black;
// `;

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
  width: 300px;
  margin-left: 50px;
`;

const UserInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 20px;
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

// const Text = styled.div`
//   width: 230px;
//   height: 50px;
//   border-top: none;
//   border-left: none;
//   border-right: none;
//   outline: none;
//   color: #444;
//   font-weight: 700;
//   border-bottom: 3px solid #9ed5c5;
//   ::-webkit-outer-spin-button,
//   ::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//   }
//   ::placeholder {
//     color: #999;
//   }
// `;
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
  width: 150px;
  height: 40px;
  gap: 10px;
  margin-top: -20px;
  margin-bottom: 10px;
`;
const UpBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: grey;
`;
const DownBtn = styled.button`
  width: 50px;
  height: 50px;
  background-color: grey;
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
  targetAmount,
  setTargetAmount,
  goalPatch,
  goalNameonChange,
  goalName,
  goalPriceonChange,
  goalPrice,
  targetLengthonChange,
  targetLength,
  goalUpPatch,
  up,
  goalDownPatch,
  id,
}) => {
  const [save, setSave] = useState(false);
  const [Modify, setModify] = useState(false);
  const [Modalopen, setModalopen] = useState(false);
  //   const [up, setUp] = useState(1);
  //   const [disabled, setDisabled] = useState(false);
  // const[numberUp, setNumberUp]= useState(1)

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

  //   const handlerNumberUp = ()
  //   const handlerCloseModal = () => {
  //     setSave(false);
  //   };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <ComponentContain>
          <br />
          <BtnBox>
            {/* <Button onClick={goalDelete} data-id={count.goalId}>
              {' '}
            </Button> */}
            <EditGoalBtn
              openModify={openModify}
              id={count.goalId}
            ></EditGoalBtn>
            <DeleteGoalBtn
              goalDelete={goalDelete}
              id={count.goalId}
            ></DeleteGoalBtn>
            {/* <Button2 onClick={openModify} data-id={count.goalId}></Button2> */}
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
            {count.goalPrice} 원
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
          <p className="p">목표달성을 위한 매달 저축액은?</p>
          <TextBox
            onChange={(e) => setTargetAmount(e.target.value)}
            value={targetAmount}
          >
            {count.calculatedPrice}원!
          </TextBox>
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
                      value={goalName}
                      onChange={goalNameonChange}
                      placeholder="나의 목표"
                    />
                    <Input
                      type="number"
                      value={goalPrice}
                      onChange={goalPriceonChange}
                      placeholder="금액"
                    />
                    <Input
                      type="number"
                      value={targetLength}
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
          <SavingModal open={save} close={openModal} header="납입 횟수">
            <Div>
              <ListContain>
                <UserInfo>
                  <div>
                    <UserInfoHead>납입횟수 {up}번</UserInfoHead>
                    <NewBtnBox>
                      <UpBtn onClick={goalUpPatch} data-id={id}>
                        UP
                      </UpBtn>
                      <DownBtn onClick={goalDownPatch} data-id={id}>
                        DOWN
                      </DownBtn>
                    </NewBtnBox>
                    <UserInfoHead>
                      목표기간 {count.targetLength}개월
                    </UserInfoHead>

                    {/* <Text
                      value={goalName}
                      onChange={goalNameonChange}
                      placeholder="숫자"
                    > */}
                    {/* <Button onClick={goalUpPatch} data-id={id}></Button>
                      <Button2 onClick={goalDownPatch} data-id={id}></Button2> */}
                    {/* </Text> */}
                  </div>
                </UserInfo>
              </ListContain>
              <Modal
                open={Modalopen}
                close={closeModal}
                header="납입횟수 저장 알림"
              >
                납입 횟수가 저장되었습니다.
              </Modal>
            </Div>
          </SavingModal>
        </ComponentContain>
      </div>
    </>
  );
};

export default AssetList;
