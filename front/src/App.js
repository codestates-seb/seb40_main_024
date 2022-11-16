import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/Home/MainHome';
import Asset from './Pages/Asset/Asset';
import AssetChange from './Pages/Asset/AssetChange';
import { LoginPage } from './Pages/Member/LoginPage';
import { SignupPage } from './Pages/Member/SignupPage';
import { ForgotPasswordPage } from './Pages/Member/ForgotPasswordPage';
import { FreeBoardPage } from './Pages/Board/FreeBoardPage';
import { AssetBoardPage } from './Pages/Board/AssetBoardPage';
import FreeBoard from './Pages/Board/FreeBoard';
import ShareBoard from './Pages/Board/ShareBoard';
import MyPage from './Pages/Member/MyPage';
import InfoPage from './Pages/Member/InfoPage';
import BoardContentPage from './Pages/Board/BoardContentPage';
import AssetTartgetPage from './Pages/Asset/AssetTargetPage';
import AssetTartgetTest from './Pages/Asset/AssetTargetTest';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/assetchange" element={<AssetChange />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/freeboard" element={<FreeBoardPage />} />
        <Route path="/assetboard" element={<AssetBoardPage />} />
        <Route path="/freeboardpost" element={<FreeBoard />} />
        <Route path="/shareboardpost" element={<ShareBoard />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/myinfopage" element={<InfoPage />} />
        <Route path="/boardcontentpage" element={<BoardContentPage />} />
        <Route path="/assettarget" element={<AssetTartgetPage />} />
        <Route path="/assettargettest" element={<AssetTartgetTest />} />
      </Routes>
    </>
  );
}

export default App;
