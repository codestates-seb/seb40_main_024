import styled from 'styled-components';
import Profile from '../../Component/Member/Profile';
import {
  ReviseBtn,
  SignOutBtn,
  UnSubscript,
  NameUpdateBtn,
  SignOutMessgeBtn,
} from '../../Component/Common/Button';
import AuthContext from '../../store/AuthContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../Common/Modal';
import { useNavigate } from 'react-router-dom';

const MyPageContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 100px;
  .profileStyle {
    margin-top: 20px;
  }
`;

const PageHeader = styled.h1`
  margin-bottom: 50px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  width: 200px;
  font-size: 40px;
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivBox = styled.div`
  width: 300px;
  .input-box {
    position: relative;
    margin: 10px 0;
    display: flex;
  }
  .input-box > input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 20px 0px 5px 0px;
    font-size: 14pt;
    width: 100%;
  }
  input::placeholder {
    color: transparent;
  }
  input:placeholder-shown + label {
    color: #aaa;
    font-size: 14pt;
    top: 15px;
  }
  input:focus + label,
  label {
    color: #8aa1a1;
    font-size: 10pt;
    pointer-events: none;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
  input:focus,
  input:not(:placeholder-shown) {
    border-bottom: solid 1px #8ec3b0;
    outline: none;
  }
  input[type='submit'] {
    background-color: #8aa1a1;
    border: none;
    color: white;
    border-radius: 5px;
    width: 100%;
    height: 35px;
    font-size: 14pt;
    margin-top: 100px;
  }
`;

const UserInfo = styled.div`
  width: 300px;
  margin-left: 50px;
`;

const UserInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 20px;
`;

const InfoBox = styled.div``;

const Input = styled.input`
  width: 230px;
  height: 50px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  color: #444;
  font-weight: 700;
  border-bottom: 3px solid #9ed5c5;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: #999;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const MainBtn = styled.div`
  margin-top: 30px;
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SignOutMessge = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const MyInfo = () => {
  const URL = process.env.REACT_APP_API_URL;
  const authCtx = useContext(AuthContext);
  const [Decode] = useState(authCtx.parseJwt);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  // 모달관련
  const [unSub, setunSUb] = useState(false);
  const [Modify, setModify] = useState(false);
  const [SignOut, setSignOut] = useState(false);
  const [Modalopen, setModalopen] = useState(false);
  const [errSignOut, setErrSignOut] = useState(false);
  const [SuccessSignOut, setSuccessSignOut] = useState(false);
  const [errModalopen, seterrModalopen] = useState(false);
  const [errModalopenModify, seterrModalopenModify] = useState(false);

  // 회원정보
  const [username, setUsername] = useState();
  const [Dusername, setDUsername] = useState();
  const [useremail, setUseremail] = useState();
  const [userpassword, setUserpassword] = useState();

  const openModal = () => {
    if (username && useremail && userpassword) {
      setModalopen(true);
    } else {
      seterrModalopen(true);
    }
  };

  const openUnSub = () => {
    setunSUb(true);
  };

  const openSignOut = () => {
    setSignOut(true);
  };

  const openErrModify = () => {
    seterrModalopenModify(true);
  };

  const openErrSignOut = () => {
    setErrSignOut(true);
  };

  const openModify = () => {
    setModify(true);
  };

  const openSuccessSignOut = () => {
    setSuccessSignOut(true);
  };

  const closeModal = () => {
    setunSUb(false);
    setModify(false);
    setErrSignOut(false);
    seterrModalopen(false);
    seterrModalopenModify(false);
  };

  const closeModify = () => {
    setModalopen(false);
    setModify(false);
  };

  const closeSignOut = () => {
    setSignOut(false);
  };

  const closeSuccessSignOut = () => {
    setSuccessSignOut(false);
    navigate('/');
    window.location.reload();
  };

  const UserNameonChange = (e) => {
    setUsername(e.target.value);
  };

  const UserEmailonChange = (e) => {
    setUseremail(e.target.value);
  };

  const UserPasswordonChange = (e) => {
    setUserpassword(e.target.value);
  };

  const UpdateData = {
    email: useremail,
    name: username,
    password: userpassword,
  };

  const UserPatch = async () => {
    try {
      await axios.patch(`${URL}/member/update`, UpdateData, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      openModal();
      UserGet();
    } catch (e) {
      openErrModify();
      console.log(e);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const UserDelete = async () => {
    try {
      await axios.delete(`${URL}/member/delete`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      localStorage.removeItem('token');
      openSuccessSignOut();
    } catch (e) {
      openErrSignOut();
      console.log(e);
    }
  };

  const UserGet = async () => {
    try {
      const res = await axios.get(`${URL}/member/${Decode.id}`);
      setDUsername(res.data.name);
      setUseremail(res.data.email);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    UserGet();
  }, []);

  return (
    <MyPageContain>
      <PageHeader>마이페이지</PageHeader>
      <div className="profileStyle">
        <Profile>profile</Profile>
      </div>
      <Div>
        <ListContain>
          <UserInfo>
            <DivBox>
              <UserInfoHead>
                <span>회원정보</span>
              </UserInfoHead>
              <div className="input-box">
                <div>{Dusername}</div>
              </div>
              <div className="input-box">
                <div>{Decode.username}</div>
              </div>
              <MainBtn>
                <NameUpdateBtn openModify={openModify}>수정하기</NameUpdateBtn>
              </MainBtn>
              <MainBtn>
                <SignOutBtn openSignOut={openSignOut} />
              </MainBtn>
            </DivBox>
          </UserInfo>
          <Modal open={Modify} close={closeModal} header="회원정보 수정">
            <Div>
              <ListContain>
                <UserInfo>
                  <div>
                    <UserInfoHead>회원정보 변경</UserInfoHead>
                    <Input
                      value={useremail}
                      onChange={UserEmailonChange}
                      placeholder="이메일"
                      disabled
                    />
                    <Input onChange={UserNameonChange} placeholder="이름" />
                    <Input
                      type="password"
                      onChange={UserPasswordonChange}
                      placeholder="비밀번호"
                    />
                    <DivBtn>
                      <ReviseBtn UserPatch={UserPatch} />
                    </DivBtn>
                  </div>
                </UserInfo>
              </ListContain>
              <Modal
                open={Modalopen}
                close={closeModify}
                header="정보수정 알림"
              >
                회원 정보가 수정되었습니다.
              </Modal>
              <Modal open={errModalopen} close={closeModal} header="오류 알림">
                회원 정보를 정확히 입력해주세요.
              </Modal>
              <Modal
                open={errModalopenModify}
                close={closeModal}
                header="회원정보 오류알림"
              >
                이름과 비밀번호 8자이상 영문포함을 확인해 주세요.
                <br />
                회원정보가 정상적으로 수정되지 않았습니다.
              </Modal>
            </Div>
          </Modal>
        </ListContain>
        <UserInfo>
          <UserInfoHead>구독 현황 확인</UserInfoHead>
          <InfoBox>
            신문구독중
            <br /> 2022.11.01 ~ 2022.11.30
            <UnSubscript openModal={openUnSub} />
          </InfoBox>
          <Modal open={unSub} close={closeModal} header="에러 알림">
            기능 구현중입니다.
          </Modal>
          <Modal open={SignOut} close={closeSignOut} header="회원탈퇴 알림">
            <SignOutMessge>
              <span>
                회원탈퇴시 사용중인 자산정보도 전부 삭제됩니다.
                <br />
                진행하시겠습니까?
              </span>
              <SignOutMessgeBtn UserDelete={UserDelete} />
            </SignOutMessge>
          </Modal>
          <Modal
            open={SuccessSignOut}
            close={closeSuccessSignOut}
            header="회원탈퇴 알림"
          >
            회원탈퇴가 완료되었습니다.
          </Modal>
          <Modal
            open={errSignOut}
            close={closeModal}
            header="회원탈퇴 오류알림"
          >
            회원탈퇴가 정상적으로 처리되지 않았습니다.
          </Modal>
        </UserInfo>
      </Div>
    </MyPageContain>
  );
};

export default MyInfo;
