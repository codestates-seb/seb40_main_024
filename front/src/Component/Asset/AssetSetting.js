import styled from 'styled-components';
import { PlusBtn } from '../Common/Button';
// import { Modal } from '../Common/Modal';
// import { useState } from 'react';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 5px solid #9ed5c5;
  .trashicon {
    margin-left: 500px;
  }
  .p {
    font-size: 17px;
    font-weight: 500;
  }
`;

const Header = styled.h3`
  margin-top: 30px;
`;

const SettingInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  width: 350px;
  height: 60px;
  margin: 10px;
  font-size: 20px;
  border: solid 2px #9ed5c5;
  border-radius: 10px;
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

const AssetSetting = ({
  targetAmount,
  goal,
  extended,
  period,
  countList,
  goalPost,
  handlerGoal,
  handlerExtended,
  handlerPeriod,
}) => {
  // const [Modalopen, setModalopen] = useState(false);
  // const openModal = () => {
  //   setModalopen(!Modalopen);
  // };
  // const closeModal = () => {
  //   setModalopen(false);
  // };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ComponentContain>
          <br />
          <Header>나의 목표</Header>
          <SettingInput
            placeholder="자동차"
            type="text"
            onChange={handlerGoal}
            value={goal}
          />
          <p className="p">목표 금액(원)</p>
          <SettingInput
            placeholder="30,000,000원"
            type="number"
            onChange={handlerExtended}
            value={extended}
          />
          <p className="p">목표 기간(개월)</p>
          <SettingInput
            placeholder="12개월"
            type="number"
            onChange={handlerPeriod}
            value={period}
          />
          <p className="p">목표달성을 위한 매달 저축액은?</p>
          <TextBox>{targetAmount}원!</TextBox>
          {countList.length === 6 ? (
            <>
              {' '}
              <PlusBtn disabled></PlusBtn>
            </>
          ) : (
            <>
              <PlusBtn goalPost={goalPost} />
            </>
          )}
        </ComponentContain>
      </div>
    </>
  );
};

export default AssetSetting;
