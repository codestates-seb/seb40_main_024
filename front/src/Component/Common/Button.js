import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ButtonAA = styled.button`
  z-index: 0;
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
  transition: 0.25s;
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

export const NavContentsButton = ({ ContentsButton }) => {
  return (
    <>
      <ButtonBB onClick={ContentsButton}>게시글 작성</ButtonBB>
    </>
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

export const SignUpButton = ({ disabled }) => {
  const navigate = useNavigate();
  return (
    <ButtonCC
      style={{ marginRight: '20px', marginTop: '10px', borderRadius: '40px' }}
      onClick={() => navigate('/login')}
      disabled={disabled}
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

export const ButtonCommunity = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      onClick={() => {
        navigate('/board');
      }}
    >
      커뮤니티
    </ButtonAA>
  );
};

export const ButtonAsset = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      onClick={() => {
        navigate('/assetchange');
      }}
    >
      자산관리
    </ButtonAA>
  );
};

export const ButtonGoal = () => {
  const navigate = useNavigate();
  return (
    <ButtonAA
      onClick={() => {
        navigate('/assettarget');
      }}
    >
      목표관리
    </ButtonAA>
  );
};

//목표수정 페이지
export const SaveBtn = ({ openSavingModal }) => {
  return (
    <ButtonCC onClick={openSavingModal} style={{ marginBottom: '30px' }}>
      Saving
    </ButtonCC>
  );
};

export const PlusBtn = ({ savings, goalPost }) => {
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      // setCheck(false);
      goalPost();
    }, 0);
    setTimeout(() => {
      window.location.reload();
    }, 2);
  };
  return (
    <ButtonCC
      type="number"
      name="savings"
      value={savings}
      style={{ marginBottom: '30px' }}
      onClick={goalPost}
      // onClick={(() => goalPost, checkHandler)}
    >
      START
    </ButtonCC>
  );
};

export const DisabledBtn = ({ savings, openModal }) => {
  return (
    <ButtonCC
      type="number"
      name="savings"
      value={savings}
      style={{ marginBottom: '30px' }}
      //모달로변경
      onClick={openModal}
      // onClick={(() => goalPost, checkHandler)}
    >
      START
    </ButtonCC>
  );
};
export const EditGoalBtn = ({ id, openModify }) => {
  return (
    <ButtonAA data-id={id} onClick={openModify}>
      수정
    </ButtonAA>
  );
};
export const DeleteGoalBtn = ({ id, goalDelete }) => {
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const checkHandler = () => {
    setCheck(true);
    setTimeout(() =>
      // setCheck(false);
      goalDelete()
    );
    setTimeout(() => window.location.reload(), 5);
  };

  return (
    <ButtonAA data-id={id} onClick={goalDelete}>
      삭제
    </ButtonAA>
  );
};
export const UpBtn = ({ id, goalUpPatch }) => {
  return (
    <ButtonAA data-id={id} onClick={goalUpPatch}>
      UP
    </ButtonAA>
  );
};

export const DownBtn = ({ id, goalDownPatch }) => {
  return (
    <ButtonAA data-id={id} onClick={goalDownPatch}>
      DOWN
    </ButtonAA>
  );
};

//마이페이지, 회원정보수정

export const SavingsBtn = () => {
  return <ButtonBB style={{ marginBottom: '30px' }}>저축하기</ButtonBB>;
};

// 회원 정보 수정
export const NameUpdateBtn = ({ openModify }) => {
  return <ButtonCC onClick={openModify}>회원정보 수정</ButtonCC>;
};

export const ProfileBtn = () => {
  return <ButtonBB>프로필 수정</ButtonBB>;
};

export const ReviseBtn = ({ UserPatch }) => {
  return <ButtonAA onClick={UserPatch}>변경</ButtonAA>;
};
export const SignOutMessgeBtn = ({ UserDelete }) => {
  return (
    <ButtonAA style={{ backgroundColor: '#9ed5cd' }} onClick={UserDelete}>
      탈퇴하기
    </ButtonAA>
  );
};
export const SignOutBtn = ({ openSignOut }) => {
  return <ButtonCC onClick={openSignOut}>회원 탈퇴</ButtonCC>;
};
export const AddCommentBtn = ({ commentPost }) => {
  return (
    <ButtonAA
      style={{ marginBottom: '10px' }}
      type="submit"
      onClick={commentPost}
    >
      작성
    </ButtonAA>
  );
};
export const ModifyCommentBtn = ({ Modify }) => {
  return (
    <ButtonAA style={{ marginBottom: '10px' }} onClick={Modify}>
      수정
    </ButtonAA>
  );
};
export const DeleteCommentBtn = ({ commentDelete }) => {
  return <ButtonAA onClick={commentDelete}>삭제</ButtonAA>;
};

export const CompleteBtn = ({ commentModify }) => {
  return (
    <ButtonAA style={{ marginRight: '35px' }} onClick={commentModify}>
      완료
    </ButtonAA>
  );
};

// 구독 해지 버튼
export const UnSubscript = ({ openModal }) => {
  return (
    <ButtonAA style={{ marginLeft: '5px' }} onClick={openModal}>
      해지
    </ButtonAA>
  );
};

export const AddContentBtn = () => {
  return <ButtonAA style={{ marginBottom: '10px' }}>작성</ButtonAA>;
};

// 게시글 상세 페이지 수정, 삭제 버튼
export const ModifyContentBtn = ({ ModifyButton }) => {
  return <ButtonAA onClick={ModifyButton}>수정</ButtonAA>;
};
export const DeleteContentBtn = ({ DeleteButton }) => {
  return <ButtonAA onClick={DeleteButton}>삭제</ButtonAA>;
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

export const BoardPostBtn = ({ Post }) => {
  return <ButtonCC onClick={Post}>작성하기</ButtonCC>;
};

export const BoardPatchBtn = ({ Patch }) => {
  return <ButtonCC onClick={Patch}>수정하기</ButtonCC>;
};

export const AssetBoardPostBtn = () => {
  const navigate = useNavigate();
  return <ButtonCC onClick={() => navigate('/assetboard')}>작성하기</ButtonCC>;
};

// 현재 자산 수정하기 페이지 버튼들
export const TitleCashBtn = ({
  // eslint-disable-next-line no-unused-vars
  postAssetApi,
  Text,
  Cash,
  // eslint-disable-next-line no-unused-vars
  listdata,
  // eslint-disable-next-line no-unused-vars
  openerrDelModalopen,
}) => {
  return Text === '' && Cash === '' ? (
    <ButtonAA disabled>추가</ButtonAA>
  ) : listdata[5] === '명칭' ? (
    <ButtonAA onClick={postAssetApi} disabled={String(Text) === '명칭'}>
      수정
    </ButtonAA>
  ) : (
    <ButtonAA onClick={openerrDelModalopen}>수정</ButtonAA>
  );
};

// || listdata[5] !== '명칭'
/* <ButtonAA
onClick={() => {
  postAssetApi();
}}
disabled={String(Text) === '명칭'}
> */

export const ZeroCashBtn1 = ({
  postZEROAssetApi1,
  postZEROAssetApi2,
  postZEROAssetApi3,
  postZEROAssetApi4,
  postZEROAssetApi5,
  postZEROAssetApi6,
  AssetType,
  ZeroText,
}) => {
  return ZeroText !== false && AssetType[0] === ZeroText ? (
    <ButtonAA
      onClick={() => {
        postZEROAssetApi1();
      }}
      disabled={String(ZeroText) === '명칭'}
    >
      초기화
    </ButtonAA>
  ) : ZeroText !== false && AssetType[1] === ZeroText ? (
    <ButtonAA
      onClick={() => {
        postZEROAssetApi2();
      }}
      disabled={String(ZeroText) === '명칭'}
    >
      초기화
    </ButtonAA>
  ) : ZeroText !== false && AssetType[2] === ZeroText ? (
    <ButtonAA
      onClick={() => {
        postZEROAssetApi3();
      }}
      disabled={String(ZeroText) === '명칭'}
    >
      초기화
    </ButtonAA>
  ) : ZeroText !== false && AssetType[3] === ZeroText ? (
    <ButtonAA
      onClick={() => {
        postZEROAssetApi4();
      }}
      disabled={String(ZeroText) === '명칭'}
    >
      초기화
    </ButtonAA>
  ) : ZeroText !== false && AssetType[4] === ZeroText ? (
    <ButtonAA
      onClick={() => {
        postZEROAssetApi5();
      }}
      disabled={String(ZeroText) === '명칭'}
    >
      초기화
    </ButtonAA>
  ) : ZeroText !== false && AssetType[5] === ZeroText ? (
    <ButtonAA
      onClick={() => {
        postZEROAssetApi6();
      }}
      disabled={String(ZeroText) === '명칭'}
    >
      초기화
    </ButtonAA>
  ) : ZeroText == false ||
    '명칭' === ZeroText ||
    ZeroText !== AssetType[0] ||
    ZeroText !== AssetType[1] ||
    ZeroText !== AssetType[2] ||
    ZeroText !== AssetType[3] ||
    ZeroText !== AssetType[4] ||
    ZeroText !== AssetType[5] ? (
    <ButtonAA disabled>초기화</ButtonAA>
  ) : (
    <ButtonAA disabled>초기화</ButtonAA>
  );
};
{
  /* <ButtonAA
onClick={() => {
  postZEROAssetApi1();
}}
disabled={String(ZeroText) === '명칭'}
>
초기화
</ButtonAA> */
}
export const GoldBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};

export const DiamondBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};

export const StockBtn = ({ openModal }) => {
  return <ButtonAA onClick={openModal}>수정</ButtonAA>;
};

// Error Page

export const ErrorBtn = () => {
  const navigate = useNavigate();
  return <ButtonCC onClick={() => navigate('/')}>나가기</ButtonCC>;
};
