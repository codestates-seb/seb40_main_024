import { useNavigate } from 'react-router-dom';

function AssetChange() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={() => navigate('/asset')}>자산페이지</button>
      <div>testtest</div>
      <div>123testtest</div>
    </div>
  );
}

export default AssetChange;
