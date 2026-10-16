import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      {/* Temporal: Persona 1 reemplaza "/" por Home y agrega Navbar */}
      <Route path="/" element={<Catalog />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;