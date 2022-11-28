import styled from 'styled-components';
import Profile from '../../Component/Member/Profile';
import {
  ReviseBtn,
  SignOutBtn,
  UnSubscript,
} from '../../Component/Common/Button';
import { Modal } from '../Common/Modal';
import AuthContext from '../../store/AuthContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyPageContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 100px;
`;

const PageHeader = styled.h1`
  margin-bottom: 70px;
  border-bottom: 5px solid #8ec3b0;
  color: #9ed5c5;
  width: 240px;
  font-size: 40px;
`;

const ListContain = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const UserInfo = styled.div`
  width: 300px;
  padding: 30px;
  margin-left: 50px;
`;

const UserInfoHead = styled.h4`
  color: #bcead5;
  font-size: 20px;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    color: #222;
    font-weight: 500;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DivBtn2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const MyInfoUpdate = () => {
  const URL = process.env.REACT_APP_API_URL;
  const authCtx = useContext(AuthContext);
  const [Decode] = useState(authCtx.parseJwt);
  const [Modalopen, setModalopen] = useState(false);
  const [unSub, setunSUb] = useState(false);
  const [errModalopen, seterrModalopen] = useState(false);
  const [username, setUsername] = useState();
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

  const closeModal = () => {
    setModalopen(false);
    setunSUb(false);
  };

  const errcloseModal = () => {
    seterrModalopen(false);
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
      const req = await axios.patch(`${URL}/member/update`, UpdateData);
      openModal();
      console.log(req);
    } catch (e) {
      openModal();
      console.log(e);
    }
  };

  const UserDelete = async () => {
    try {
      const req = await axios.delete(`${URL}/member/delete/${Decode.id}`);
      openModal();
      console.log(req);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const UserGet = async () => {
      try {
        const res = await axios.get(`${URL}/member/${Decode.id}`);
        setUsername(res.data.name);
        setUseremail(res.data.email);
      } catch (e) {
        console.log(e);
      }
    };
    UserGet();
  }, []);

  return (
    <MyPageContain>
      <PageHeader>회원정보수정</PageHeader>
      <Profile>profile</Profile>
      <Div>
        <ListContain>
          <UserInfo>
            <div>
              <UserInfoHead>회원정보 변경</UserInfoHead>
              <Input
                value={username}
                onChange={UserNameonChange}
                placeholder="이름"
              />
              <Input
                value={useremail}
                onChange={UserEmailonChange}
                placeholder="이메일"
              />
              <Input
                type="password"
                value={userpassword}
                onChange={UserPasswordonChange}
                placeholder="비밀번호"
              />
              <DivBtn>
                <ReviseBtn UserPatch={UserPatch} />
              </DivBtn>
            </div>
          </UserInfo>
        </ListContain>
        <UserInfo>
          <UserInfoHead>구독 현황 확인</UserInfoHead>
          <InfoBox>
            <span>경제신문 구독중</span>
            <UnSubscript openModal={openUnSub} />
          </InfoBox>
          <DivBtn2>
            <SignOutBtn UserDelete={UserDelete} />
          </DivBtn2>
        </UserInfo>
        <Modal open={Modalopen} close={closeModal} header="정보수정 알림">
          회원 정보가 수정되었습니다.
        </Modal>
        <Modal open={errModalopen} close={errcloseModal} header="오류 알림">
          회원 정보를 정확히 입력해주세요.
        </Modal>
        <Modal open={unSub} close={closeModal} header="구독 해지 알림">
          구독이 해지 되었습니다
        </Modal>
      </Div>
    </MyPageContain>
  );
};

export default MyInfoUpdate;
