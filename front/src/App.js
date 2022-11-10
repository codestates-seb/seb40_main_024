import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
