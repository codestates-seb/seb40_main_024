import './App.css';
import { SignupBox } from './Pages/SignupBox';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';
import AssetChange from './Pages/AssetChange';
import { LoginBox } from './Pages/LoginBox';
import { ForgotPasswordBox } from './Pages/ForgotPasswordBox';
import FreeCommunity from './Pages/FreeCommunity';
import ShareCommunity from './Pages/ShareCommunity';

function App() {
  return (
    // <List /> 게시글 컨테이너

    <div>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/assetchange" element={<AssetChange />} />
        <Route path="/signup" element={<SignupBox />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/forgotpassword" element={<ForgotPasswordBox />} />
        <Route path="/freecommunitypost" element={<FreeCommunity />} />
        <Route path="/sharecommunitypost" element={<ShareCommunity />} />
      </Routes>
    </div>
  );
}

export default App;
