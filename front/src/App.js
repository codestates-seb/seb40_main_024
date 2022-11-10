import './App.css';
// import { SignupBox } from './component/SignupBox';
// import { LoginBox } from './component/LoginBox';
// import { ForgotPasswordBox } from './component/ForgotPasswordBox';
// import { LongNavbarBox, MiniNavbarBox } from './component/Navbar';
// import { List } from './component/List';
// import { Sidebar } from './component/Sidbar';

import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';
import AssetChange from './Pages/AssetChange';

function App() {
  return (
    // <LongNavbarBox />
    // <MiniNavbarBox />
    // <Sidebar />
    // <List />
    // <SignupBox />
    // <LoginBox />
    // <ForgotPasswordBox />

    <div>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/assetchange" element={<AssetChange />} />
      </Routes>
    </div>
  );
}

export default App;
