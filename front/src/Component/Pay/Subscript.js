import styled from 'styled-components';
const SubscriptContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const RegisterBox = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 700px;
  width: 600px;
  position: absolute;
  top: 20%;
  left: 35%;
  border: solid 1px black;
`;

const RegisterHeader = styled.h1`
  /* box-sizing: border-box;
  height: 100px;
  width: 200px; */
  position: absolute;
  top: 10%;
  left: 40%;
`;
const MonthContain = styled.div`
  display: flex;
  flex-direction: column;
`;
const MonthSelect = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 10px;
  height: 200px;
  width: 300px;
  position: absolute;
  top: 25%;
  left: 30%;
`;

const MonthAmount = styled.div`
  text-align: right;
  box-sizing: border-box;
  height: 70px;
  width: 200px;
  border: solid 1px black;
  font-size: 30px;
`;

const CheckContain = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 5%;
  height: 200px;
  width: 200px;
`;
const CheckBox = styled.input`
  margin-bottom: 10px;
  height: 70px;
  width: 200px;
`;
const RegisterBtn = styled.button`
  height: 50px;
  width: 150px;
  position: absolute;
  top: 65%;
  left: 35%;
  cursor: pointer;
`;

const Subscript = () => {
  return (
    <SubscriptContain>
      <RegisterBox>
        <RegisterHeader>구독신청</RegisterHeader>
        <MonthContain></MonthContain>
        <CheckContain>
          <CheckBox type="checkbox"></CheckBox>
          <CheckBox type="checkbox"></CheckBox>
        </CheckContain>
        <MonthSelect>
          <span>1개월</span>
          <MonthAmount>1,000원</MonthAmount>

          <span>12개월</span>
          <MonthAmount>10,000원</MonthAmount>
        </MonthSelect>
        <RegisterBtn>구독신청 하기</RegisterBtn>
      </RegisterBox>
    </SubscriptContain>
  );
};

export default Subscript;
