import { useNavigate } from 'react-router-dom';

function FreeCommunity() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>자산공유게시판</h2>

      <button onClick={() => navigate('/')}>홈버튼</button>
    </div>
  );
}

export default FreeCommunity;
