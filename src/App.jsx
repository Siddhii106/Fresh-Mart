import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"

const USER_KEY = "freshmart_user";
const CART_KEY = "freshmart_cart";

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem(USER_KEY)));
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem(CART_KEY)) || []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(id) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  function handleLogin(email) {
    const newUser = { email };
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    setUser(newUser);
  }

  function handleLogout() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  }

  return (
    <>
      <Topbar />
      <Navbar
        search={search}
        setSearch={setSearch}
        total={cartCount}
        user={user}
        onLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} user={user} clearCart={clearCart} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;