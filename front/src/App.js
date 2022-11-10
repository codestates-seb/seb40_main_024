import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';
import AssetChange from './Pages/AssetChange';
import { SignupBox } from './Component/SignupBox';
import { LoginBox } from './Component/LoginBox';
import { ForgotPasswordBox } from './Component/ForgotPasswordBox';
import { LongNavbarBox, MiniNavbarBox } from './Component/Navbar';
import { List } from './Component/List';
import { Sidebar } from './Component/Sidebar';

function App() {
  return (
    <>
      <LongNavbarBox />
      <MiniNavbarBox />
      <Sidebar />
      <List />
      <SignupBox />
      <LoginBox />
      <ForgotPasswordBox />
      <div>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/asset" element={<Asset />} />
          <Route path="/assetchange" element={<AssetChange />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
