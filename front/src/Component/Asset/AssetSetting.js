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
// const Button = styled.button`
//   width: 200px;
//   height: 60px;
//   margin: 20px;
// `;

const AssetSetting = ({ HandlerRemove, post }) => {
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
        <Header>목표명칭</Header>
        <SettingInput placeholder="티끌모아 티끌" />
        목표금액
        <SettingInput placeholder="1,200,000원" />
        목표기간
        <SettingInput placeholder="3개월" />
        월 저축액
        <SettingInput placeholder="400,000원" />
        <SaveBtn></SaveBtn>
      </ComponentContain>
    </div>
  );
};

export default AssetSetting;
