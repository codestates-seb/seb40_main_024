import styled from 'styled-components';

const PaymentContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ProgressContain = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 700px;
  width: 600px;
  position: absolute;
  top: 20%;
  left: 35%;
  border: solid 1px black;
`;

const PaymentPage = () => {
  return (
    <PaymentContain>
      <ProgressContain></ProgressContain>
    </PaymentContain>
  );
};

export default PaymentPage;
