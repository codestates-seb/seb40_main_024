import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainAssetChange = styled.div`
  background-repeat: no-repeat;
`;

const Change = styled.div`
  display: flex;
  padding: 50px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  div {
  }
  .red {
    color: red;
  }
`;

function AssetChange() {
  const navigate = useNavigate();
  return (
    <MainAssetChange>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={() => navigate('/asset')}>자산페이지</button>
      <h2>자산 수정 페이지</h2>
      <Change>
        <div>
          현재 보유 현금은 : 10,000원 입니다 / 얼마로 수정하시겠습니까?{' '}
          <input />
        </div>
        <div className="red">수정입력된 금액은 xxxxxx원 입니다</div>
      </Change>
      <Change>
        <div>
          현재 보유 금은 : 10,000원 입니다 / 얼마로 수정하시겠습니까? <input />
        </div>
      </Change>
      <Change>
        <div>
          현재 보유 다이아몬드는 : 10,000원 입니다 / 얼마로 수정하시겠습니까?
          <input />
        </div>
      </Change>
      <Change>
        <div>
          현재 보유 주식은 : 10,000원 입니다 / 얼마로 수정하시겠습니까?{' '}
          <input />
        </div>
      </Change>
      <button>수정완료</button>
      <div>
        <h3>푸터부분 툴팁작성해주면 좋을듯?</h3>
        <div>자산수정은 원 단위로 가능합니다</div>
        <div>보유자산은 현재 회원만 조회 가능합니다</div>
        <div>등등 주의사항 작성</div>
      </div>
      <h3>자산관련 안내창</h3>
      <div>자산 입력 창 type=넘버로만 가능</div>
      <div>수정입력금액은 레드계열로 안내문구 형식</div>
    </MainAssetChange>
  );
}

export default AssetChange;
