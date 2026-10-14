import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Routes>
      {/* Temporal: Persona 1 reemplaza "/" por Home y agrega Navbar */}
      <Route path="/" element={<Catalog />} />
      <Route path="/products" element={<Catalog />} />
    </Routes>
  );
}

export default App;