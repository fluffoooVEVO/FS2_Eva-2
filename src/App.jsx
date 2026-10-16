import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      {/* Temporal: Persona 1 reemplaza "/" por Home y agrega Navbar */}
      <Route path="/" element={<Catalog />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;