import './App.css';
import { SignupBox } from './Pages/SignupBox';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';
import AssetChange from './Pages/AssetChange';
import { LoginPage } from './Pages/LoginPage';
import { SignupPage } from './Pages/SignupPage';
import { ForgotPasswordPage } from './Pages/ForgotPasswordPage';
import { FreeBoardPage } from './Pages/FreeBoardPage';
import { AssetBoardPage } from './Pages/AssetBoardPage';


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
      </Routes>
    </>
  );
}

export default App;
