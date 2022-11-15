import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 400px;
  height: 450px;
  border: 1px solid black;
  .trashicon {
    margin-left: 270px;
  }
`;

const Header = styled.h3``;

const SettingInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 60px;
  margin: 10px;
`;
const Button = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
`;

const AssetSetting = () => {
  return (
    <div>
      <ComponentContain>
        <br />{' '}
        <div className="trashicon">
          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon"
            size="lg"
          ></FontAwesomeIcon>
        </div>
        <Header>목표명칭</Header>
        목표금액
        <SettingInput />
        목표기간
        <SettingInput />
        월 입금액
        <SettingInput />
        <Button>저장</Button>
      </ComponentContain>
    </div>
  );
};

export default AssetSetting;
