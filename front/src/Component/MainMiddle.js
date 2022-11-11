import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MiddleDiv = styled.div`
  margin: 0 auto;
  div {
    height: 900px;
  }
  .div1 {
    text-align: center;
  }
  .div2 {
    text-align: center;
  }
  .div3 {
    display: flex;
    text-align: center;
  }
  .div4 {
    display: flex;
    text-align: center;
  }
  .div5 {
    text-align: center;
  }
`;

const Middle = () => {
  const navigate = useNavigate();
  return (
    <MiddleDiv>
      <div id="1" className="div1">
        <span>호주머니</span>
        <h2>
          누구나 꿈꾸는 자산전문가
          <br />
          이곳에서 저희와 함께 이루어 보세요
        </h2>
        <button onClick={() => navigate('/asset')}>테스트버튼 자산이동</button>
        <button onClick={() => navigate('/freeboardpost')}>
          테스트버튼 자유게시판 작성페이지
        </button>
        <button onClick={() => navigate('/shareboardpost')}>
          테스트버튼 자산공유게시판 작성페이지
        </button>
        <button onClick={() => navigate('/mypage')}>
          테스트버튼 마이페이지
        </button>
        <button onClick={() => navigate('/myinfopage')}>
          테스트버튼 내정보페이지
        </button>
        <button onClick={() => navigate('/boardcontentpage')}>
          테스트버튼 게시글상세페이지
        </button>
        <button onClick={() => navigate('/freeboard')}>
          테스트버튼 자유게시판 조회페이지
        </button>
        <button onClick={() => navigate('/assetboard')}>
          테스트버튼 자산공유게시판 조회페이지
        </button>
      </div>
      <div id="2" className="div2">
        <span>이미지?들어갈것같음</span>
        <h2>
          자산 관리의 모든것,
          <br />그 이상을 만들어내는 호주머니
          <br />
          대한민국 어디서나
          <br />
          함께 관리하고 즐기는
          <br />
          간편한 시스템
        </h2>
      </div>
      <div id="3" className="div3">
        <div>
          <span>자산관리채널</span>
          <h2>
            누구나 무료로 자산을 입력해
            <br />
            이용할수 있는 플랫폼
            <br />내 자산을 한눈에 확인하고
            <br />
            환율계산까지
          </h2>
        </div>
        <span>이미지 들어갈자리</span>
      </div>
      <div id="4" className="div4">
        <span>이미지 들어갈자리</span>
        <div>
          <span>커뮤니티</span>
          <h2>
            다양한 사람들과
            <br />
            자산을 공유하며
            <br />
            편리한 소통할 수 있는
            <br />
            안전한 플랫폼
          </h2>
        </div>
      </div>
      <div id="5" className="div5">
        <span>출발하기</span>
        <h2>
          지금바로 저희와 함께
          <br />
          부자가 되기위한
          <br />
          길을 떠나볼까요?
        </h2>
        <button onClick={() => navigate('login')}>로그인</button>
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </div>
    </MiddleDiv>
  );
};

export default Middle;
