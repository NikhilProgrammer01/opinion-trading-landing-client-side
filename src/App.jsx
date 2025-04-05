import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import LiveCoins from './components/LiveCoins/LiveCoins'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/live-coins" element={<LiveCoins />} />

      </Routes>
    </Router>
  );
}

export default App;
