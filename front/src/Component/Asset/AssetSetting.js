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
  text-align: center;
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
// const TargetBox = styled.div`
//   box-sizing: border-box;
//   width: 700px;
//   height: 60px;
//   /* margin: 20px 80px; */
//   font-size: 30px;
//   color: red;
// `;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  box-sizing: border-box;
  margin-left: 230px;
  height: 70px;
  width: 300px;
  color: red;
  font-size: 30px;
`;

const AssetSetting = ({
  HandlerRemove,
  post,
  setGoal,
  setExtended,
  setPeriod,
  target,
  goal,
  extended,
  period,
}) => {
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
        <SettingInput
          placeholder="자동차"
          type="text"
          onChange={(e) => setGoal(e.target.value)}
          value={goal}
        />
        목표 금액
        <SettingInput
          placeholder="30,000,000원"
          type="number"
          onChange={(e) => setExtended(e.target.value)}
          value={extended}
        />
        목표 기간
        <SettingInput
          placeholder="12개월"
          type="number"
          onChange={(e) => setPeriod(e.target.value)}
          value={period}
        />
        목표달성을 위한 매달 저축액은?
        <TextBox>{target}원!</TextBox>
        <SaveBtn></SaveBtn>
      </ComponentContain>
    </div>
  );
};

export default AssetSetting;
