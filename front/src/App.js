import './App.css';
<<<<<<< HEAD
import { SignupBox } from './component/SignupBox';
import { LoginBox } from './component/LoginBox';
import { ForgotPasswordBox } from './component/ForgotPasswordBox';
import { LongNavbarBox, MiniNavbarBox } from './component/Navbar';
import { List } from './component/List';
import { Sidebar } from './component/Sidbar';

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
    </>
=======
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';
import AssetChange from './Pages/AssetChange';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/assetchange" element={<AssetChange />} />
      </Routes>
    </div>
>>>>>>> ba8994dbca2594042ca9eb83f85a10614cc3f270
  );
}

export default App;
