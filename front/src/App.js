import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainHome from './Pages/MainHome';
import Asset from './Pages/Asset';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/asset" element={<Asset />} />
      </Routes>
    </div>
  );
}

export default App;
