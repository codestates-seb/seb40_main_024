import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { SaveBtn } from '../Common/Button';
// import { useState } from 'react';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 500px;
  height: 580px;
  border: 8px solid #def5e5;
  .trashicon {
    margin-left: 350px;
  }
`;

const Header = styled.h3``;

const SettingInput = styled.input`
  box-sizing: border-box;
  width: 300px;
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

const TargetBox = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 60px;
  margin: 20px;
  font-size: 30px;
  color: red;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: 70px;
  width: 200px;
`;

const AssetSettingTest = ({ HandlerRemove, post }) => {
  // const [goal, setGoal] = useState(); // 명칭
  // const [extendedprice, setExtendedprice] = useState(); // 총금액
  // const [period, setPeriod] = useState(); // 기간
  // const [savings, setSavings] = useState(); // 저축금액

  return (
    <div>
      <ComponentContain>
        <br />{' '}
        <div className="trashicon">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon"
            size="lg"
            color="grey"
            cursor="pointer"
            onClick={() => {
              HandlerRemove(post);
            }}
          ></FontAwesomeIcon>
        </div>
        <Header>나의 목표</Header>
        <SettingInput placeholder="티끌모아 티끌" />
        목표 금액
        <SettingInput placeholder="1,200,000원" />
        목표 기간
        <SettingInput placeholder="3개월" />
        목표달성을 위한 매달 저축액은?
        <TextBox>
          <TargetBox>400,000원</TargetBox>
        </TextBox>
        입니다!
        <SaveBtn></SaveBtn>
      </ComponentContain>
    </div>
  );
};

export default AssetSettingTest;
