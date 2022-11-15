import styled from 'styled-components';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  border: 1px solid black;
`;

const Header = styled.h3``;

const SettingInput = styled.input`
  box-sizing: border-box;
  width: 200px;
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
    <ComponentContain>
      <Header>목표명칭</Header>
      목표금액
      <SettingInput />
      목표기간
      <SettingInput />
      월 입금액
      <SettingInput />
      <Button>저장</Button>
    </ComponentContain>
  );
};

export default AssetSetting;
