import styled from 'styled-components';

const ConfirmContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const PaymentBox = styled.div`
  box-sizing: border-box;
  padding: 20px;
  height: 700px;
  width: 600px;
  position: absolute;
  top: 20%;
  left: 35%;
  border: solid 1px black;
`;
const TopContain = styled.div`
  display: flex;
  flex-direction: column;
`;
const PaymentHeader = styled.h1`
  position: relative;
  top: 10%;
  left: 40%;
`;
const MonthBox = styled.div`
  box-sizing: border-box;
  height: 50px;
  width: 100px;
  position: relative;
  left: 43%;
  /* border: solid 1px black; */
  font-size: 30px;
  color: red;
  text-decoration: underline;
`;

const BtnContain = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 15%;
  left: 3%;
`;

const TransferBtn = styled.button`
  margin-bottom: 30px;
  height: 50px;
  width: 150px;
  position: relative;
  top: 65%;
  left: 35%;
  cursor: pointer;
`;

const PayConfirm = () => {
  return (
    <ConfirmContain>
      <PaymentBox>
        <TopContain>
          <PaymentHeader>결제완료!</PaymentHeader>
          <PaymentHeader>구독기간</PaymentHeader>
          <MonthBox>
            12<span>개월</span>
          </MonthBox>
          {/* <span>이제부터 게시판 사용이 가능합니다!</span> */}
        </TopContain>
        <BtnContain>
          <TransferBtn>자산목록페이지</TransferBtn>
          <TransferBtn>커뮤니티 게시판</TransferBtn>
        </BtnContain>
      </PaymentBox>
    </ConfirmContain>
  );
};

export default PayConfirm;
