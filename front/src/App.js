import './App.css';
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
  );
}

export default App;
