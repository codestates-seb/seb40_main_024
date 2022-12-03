import './App.css';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/Home/MainHome';
// import Asset from './Pages/Asset/Asset';
import { AssetChange } from './Pages/Asset/AssetChange';
import { LoginPage } from './Pages/Member/LoginPage';
import { SignupPage } from './Pages/Member/SignupPage';
import { ForgotPasswordPage } from './Pages/Member/ForgotPasswordPage';
import { BoardPage } from './Pages/Board/BoardPage';
import Board from './Pages/Board/Board';
import MyPage from './Pages/Member/MyPage';
import BoardContentPage from './Pages/Board/BoardContentPage';
import AssetTargetTest from './Pages/Asset/AssetTargetTest';
import AssetTartget from './Pages/Asset/AssetTargetPage';
import PaymentConfirmPage from './Pages/Pay/PaymentConfirmPage';
import PaymentPage from './Pages/Pay/PaymentPage';
import SubscriptionPage from './Pages/Pay/SubscriptionPage';
import ModifyBoard from './Pages/Board/ModifyBoard';
import AuthContext from './store/AuthContext';
import { Error } from './Pages/ErrorPage/Error';
// import AllBoardList from './Component/Board/AllBoardList';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="*" element={<Error />}></Route>
        <Route path="/" element={<MainHome />} />
        {/* <Route path="/asset" element={<Asset />} /> */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/boardcontentpage/:id" element={<BoardContentPage />} />

        {authCtx.isLoggedIn && (
          <Route path="/assetchange" element={<AssetChange />} />
        )}
        {authCtx.isLoggedIn && <Route path="/boardpost" element={<Board />} />}
        {authCtx.isLoggedIn && <Route path="/mypage" element={<MyPage />} />}
        {authCtx.isLoggedIn && (
          <Route path="/modifyboard/:id" element={<ModifyBoard />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/assettarget" element={<AssetTargetTest />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/assettargetpage" element={<AssetTartget />} />
        )}

        {/*
        subscriptionpage는 ?
        paymentpage는 결제하는 페이지
        paymentconfirmpage는 페이지 대신 모달로 대체

        네브바에 신문구독 같은 네이밍으로 넣어두고
        눌렀을때 -> 구독결제페이지로 이동, 구독을 이미 한 상태일 경우
        세부 구독 정보 페이지로 이동?
        -> 이렇게 할 경우 마이페이지에서 구독페이지 이동버튼이 있어야함
         */}
        <Route path="/paymentconfirmpage" element={<PaymentConfirmPage />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/subscriptionpage" element={<SubscriptionPage />} />
      </Routes>
    </>
  );
}

export default App;
