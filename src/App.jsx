import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import StoreNavbar from './components/organisms/StoreNavbar';
import StoreFooter from './components/organisms/StoreFooter';
import Offers from './pages/Offers';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <StoreNavbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ofertas" element={<Offers />} />
        </Routes>
      </main>
      <StoreFooter />
    </div>
  );
}

export default App;