import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import Project from './blocks/Project/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:area" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
