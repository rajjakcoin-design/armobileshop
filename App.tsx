import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Buyback } from './pages/Buyback';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Concierge } from './components/Concierge';
import { CartProvider } from './context/CartContext';

// ScrollToTop component to fix scroll position on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-obsidian text-white font-sans antialiased selection:bg-gold selection:text-obsidian">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/buyback" element={<Buyback />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
          <Concierge />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
