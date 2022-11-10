// import { ForgotPasswordBox } from './component/ForgotPasswordBox';
// import { LongNavbarBox, MiniNavbarBox } from './component/Navbar';
// import { List } from './Component/List';
// import { Sidebar } from './component/Sidbar';
import './App.css';
import { SignupBox } from './Component/SignupBox';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';
import AssetChange from './Pages/AssetChange';
import { LoginBox } from './Component/LoginBox';
import { ForgotPasswordBox } from './Component/ForgotPasswordBox';

function App() {
  return (
    // <List /> 게시글 컨테이너
    // <SignupBox /> 회원가입 페이지
    // <LoginBox /> 로그인 페이지
    // <ForgotPasswordBox /> 페스워드찾기 페이지

    <div>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/assetchange" element={<AssetChange />} />
        <Route path="/signup" element={<SignupBox />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/forgotpassword" element={<ForgotPasswordBox />} />
      </Routes>
    </div>
  );
}

export default App;
