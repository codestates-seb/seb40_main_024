import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LongNavbarBox } from '../../Component/Common/Navbar';
import { AssetchangeBtn, ModifyBtn } from '../../Component/Common/Button';

const MainAssetChange = styled.div`
  display: flex;
  justify-content: center;
`;

const MainBox = styled.div`
  background: rgba(222, 245, 229, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 5px solid rgba(255, 255, 255, 0.18);
  padding: 85px;
  z-index: 9999;
`;

const H1 = styled.h1`
  margin-bottom: 50px;
  color: #9ed5c5;
`;

const H3 = styled.h3`
  color: #9ed5c5;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Input = styled.input`
  width: auto;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #9ed5c5;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  background: rgba(222, 245, 229, 0.15);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #9ed5c5;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 100px;
  h1 {
    color: #8ec3b0;
    margin-bottom: 10px;
  }
  P {
    font-size: 14px;
    font-weight: 600;
    color: #8ec3b0;
  }
`;

function AssetChange() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  return (
    <>
      <LongNavbarBox />
      <Footer>
        <h1>🚨 주의사항 🚨</h1>
        <p>1. 모든 보유 자산은 원 단위로, 환산되어 보여집니다.</p>
        <p>
          2. 자산 수정시 바로 반영되며, 수정된 자산은 그래프로 확인이
          가능합니다.
        </p>
        <p>
          3. 현재 보유 자산은 회원 본인의 자산이며, 타인의 자산은 조회 불가능
          합니다.
        </p>
        <p>
          4. 자산 수정은 원 단위로 가능하며, 숫자를 제외한 나머지는 입력 불가능
          합니다.
        </p>
      </Footer>
      <MainAssetChange>
        <MainBox>
          <H1>현재 자산 수정하기</H1>
          <H3>현재 보유 현금: 10,000</H3>
          <Div>
            <Input type="number" placeholder="수정할 현금을 적어주세요" />
            <ModifyBtn>수정</ModifyBtn>
          </Div>
          <H3>현재 보유 금: 10,000</H3>
          <Div>
            <Input type="number" placeholder="수정할 현금을 적어주세요" />
            <ModifyBtn>수정</ModifyBtn>
          </Div>
          <H3>현재 보유 다이아몬드: 10,000</H3>
          <Div>
            <Input type="number" placeholder="수정할 현금을 적어주세요" />
            <ModifyBtn>수정</ModifyBtn>
          </Div>
          <H3>현재 보유 주식: 10,000</H3>
          <Div>
            <Input type="number" placeholder="수정할 현금을 적어주세요" />
            <ModifyBtn>수정</ModifyBtn>
          </Div>
          <Btn>
            <AssetchangeBtn />
          </Btn>
        </MainBox>
      </MainAssetChange>
    </>
  );
}

export default AssetChange;
