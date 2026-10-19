import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Checkout from './pages/Checkout';
import CheckoutResult from './pages/CheckoutResult';
import StoreNavbar from './components/organisms/StoreNavbar';
import StoreFooter from './components/organisms/StoreFooter';

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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/exito" element={<CheckoutResult status="success" />} />
          <Route path="/checkout/error" element={<CheckoutResult status="error" />} />
        </Routes>
      </main>
      <StoreFooter />
    </div>
  );
}

export default App;