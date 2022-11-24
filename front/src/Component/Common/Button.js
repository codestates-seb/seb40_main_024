import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonAA = styled.button`
  width: 90px;
  height: 35px;
  position: relative;
  border: none;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  color: #444;
  background-color: #8ec3b0;
  :hover {
    color: #fff;
    letter-spacing: 1px;
    transform: scale(1.1);
    cursor: pointer;
  }
  :active {
    position: relative;
    top: 3px;
  }
`;
const ButtonBB = styled.button`
  width: 120px;
  height: 35px;
  position: relative;
  border: none;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  color: #444;
  background-color: #8ec3b0;
  :hover {
    color: #fff;
    letter-spacing: 1px;
    transform: scale(1.1);
    cursor: pointer;
  }
  :active {
    position: relative;
    top: 3px;
  }
`;
const ButtonCC = styled.button`
  width: 230px;
  height: 52px;
  position: relative;
  border: none;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 800;
  font-size: 20px;
  /* transition: 0.25s; */
  color: #444;
  stroke: #000000;
  background-color: #8ec3b0;
  :hover {
    color: #fff;
    letter-spacing: 1px;
    transform: scale(1.1);
    cursor: pointer;
  }
  :active {
    position: relative;
    top: 3px;
  }
`;

export const ButtonA = () => {
  return <ButtonAA></ButtonAA>;
};

export const ButtonB = () => {
  return <ButtonBB>버튼 중</ButtonBB>;
};

export const NavAssetContentsButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonBB
      onClick={() => navigate('/shareboardpost')}
      style={{ marginLeft: '100px' }}
    >
      <p style={{ width: '120px' }}>게시글 작성</p>
    </ButtonBB>
  );
};

export const NavFreeContentsButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonBB
      onClick={() => navigate('/freeboardpost')}
      style={{ marginLeft: '100px' }}
    >
      <p style={{ width: '120px' }}>게시글 작성</p>
    </ButtonBB>
  );
};

export const NavForgotPasswordButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{
        marginTop: '20px',
        marginLeft: '30px',
        borderRadius: '40px',
        height: '40px',
        width: '180px',
      }}
      onClick={() => navigate('/forgotpassword')}
    >
      비밀번호 찾기
    </ButtonCC>
  );
};

export const NavAssetButton = () => {
  // const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginTop: '65px', marginBottom: '65px', borderRadius: '40px' }}
      // onClick={() => navigate('/asset')}
    >
      로그인
    </ButtonCC>
  );
};

export const ForgotPasswordButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginRight: '20px', marginTop: '30px', borderRadius: '40px' }}
      onClick={() => navigate('/login')}
    >
      임시비밀번호 받기
    </ButtonCC>
  );
};

export const NavSignUpButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{
        marginTop: '20px',
        marginRight: '30px',
        borderRadius: '40px',
        height: '40px',
        width: '180px',
      }}
      onClick={() => navigate('/signup')}
    >
      회원가입
    </ButtonCC>
  );
};

export const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginRight: '20px', marginTop: '10px', borderRadius: '40px' }}
      onClick={() => navigate('/login')}
    >
      회원가입하기
    </ButtonCC>
  );
};

export const ButtonLogin = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      onClick={() => {
        navigate('/login');
      }}
    >
      로그인
    </ButtonAA>
  );
};

export const ButtonSignup = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      onClick={() => {
        navigate('/signup');
      }}
    >
      회원가입
    </ButtonAA>
  );
};

//목표수정 페이지
export const PlusBtn = ({ HandlerAdd }) => {
  return (
    <ButtonBB onClick={HandlerAdd} style={{ marginTop: '90px' }}>
      목표 추가
    </ButtonBB>
  );
};

export const SaveBtn = ({ savings, handlerModal }) => {
  return (
    <ButtonBB
      type="number"
      name="savings"
      value={savings}
      style={{ marginBottom: '30px' }}
      onClick={handlerModal}
    >
      START
    </ButtonBB>
  );
};
//마이페이지, 회원정보수정

export const SavingsBtn = () => {
  return <ButtonBB style={{ marginBottom: '30px' }}>저축하기</ButtonBB>;
};

// 회원 정보 수정
export const NameUpdateBtn = () => {
  const navigate = useNavigate();
  return (
    <ButtonBB
      onClick={() => {
        navigate('/myinfopage');
      }}
    >
      회원정보 수정
    </ButtonBB>
  );
};

export const ProfileBtn = () => {
  return <ButtonBB>프로필 수정</ButtonBB>;
};

export const ReviseBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>변경</ButtonAA>;
};
export const SignOutBtn = () => {
  return (
    <ButtonCC onClick={() => alert('탈퇴 하시겠습니까?')}>회원 탈퇴</ButtonCC>
  );
};
export const AddCommentBtn = () => {
  return <ButtonAA style={{ marginBottom: '10px' }}>작성</ButtonAA>;
};
export const ModifyCommentBtn = () => {
  return <ButtonAA style={{ marginBottom: '10px' }}>수정</ButtonAA>;
};
export const DeleteCommentBtn = () => {
  return <ButtonAA>삭제</ButtonAA>;
};

// 구독 해지 버튼
export const UnSubscript = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>해지</ButtonAA>;
};

export const AddContentBtn = () => {
  return <ButtonAA style={{ marginBottom: '10px' }}>작성</ButtonAA>;
};

// 게시글 상세 페이지 수정, 삭제 버튼
export const ModifyContentBtn = ({ boardId }) => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      style={{ marginBottom: '10px' }}
      onClick={() => navigate(`/modifyboard/${boardId}`)}
    >
      수정
    </ButtonAA>
  );
};
export const DeleteContentBtn = ({ Delete }) => {
  return (
    <ButtonAA style={{ marginBottom: '10px' }} onClick={Delete}>
      삭제
    </ButtonAA>
  );
};
// 자산 수정 버튼
export const AssetButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA onClick={() => navigate('/assetchange')}>자산 수정</ButtonAA>
  );
};

export const Assettargetpage = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      onClick={() => {
        navigate('/assettargetpage');
      }}
    >
      목표 확인
    </ButtonAA>
  );
};

//게시판 버튼들
export const AssetchangeBtn = () => {
  const navigate = useNavigate();
  return <ButtonAA onClick={() => navigate('/asset')}>자산 확인하기</ButtonAA>;
};

export const FreeBoardPostBtn = ({ Post }) => {
  return <ButtonCC onClick={Post}>작성하기</ButtonCC>;
};

export const FreeBoardPatchBtn = ({ Patch }) => {
  return <ButtonCC onClick={Patch}>수정하기</ButtonCC>;
};

export const AssetBoardPostBtn = () => {
  const navigate = useNavigate();
  return <ButtonCC onClick={() => navigate('/assetboard')}>작성하기</ButtonCC>;
};

// 현재 자산 수정하기 페이지 버튼들
export const CashBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};

export const GoldBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};

export const DiamondBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};

export const StockBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};
