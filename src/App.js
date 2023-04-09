import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Items from "./pages/Products";
import AddItems from "./pages/AddItems";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      console.log(cartItems);
      setCart(cartItems);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage size={cart.length} />} />
        <Route
          path="/products"
          element={<Items handleClick={handleClick} size={cart.length} />}
        />
        <Route path="/additems" element={<AddItems />} />
        <Route path="/cart" element={<Cart size={cart.length} />} />
      </Routes>
    </div>
  );
}

export default App;
