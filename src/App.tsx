import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import DeleteAccount from './pages/DeleteAccount';
import SharedProtocol from './pages/SharedProtocol';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/excluir-conta" element={<DeleteAccount />} />
        <Route path="/p/:token" element={<SharedProtocol />} />
      </Routes>
    </Router>
  );
}

export default App;