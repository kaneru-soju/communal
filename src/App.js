import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/watch" element={<Watch />} /> 
    </Routes>
  );
}

export default App;
