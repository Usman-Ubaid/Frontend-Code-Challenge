import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import AddItems from "./pages/AddItems";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addItemsToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      alert("Item Already Added");
    } else {
      setCart([...cart, item]);
    }
  };

  const changeItemQuantity = (item, operator, id) => {
    const index = cart.findIndex((cartItem) => cartItem.id === id);

    if (operator === "+") {
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      cart[index].quantity = cart[index].quantity - 1;
    }
    setCart([...cart]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      setCart(cartItems);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage size={cart.length} />} />
        <Route
          path="/products"
          element={<Products onClick={addItemsToCart} size={cart.length} />}
        />
        <Route path="/additems" element={<AddItems />} />
        <Route
          path="/cart"
          element={
            <Cart
              size={cart.length}
              cart={cart}
              setCart={setCart}
              onClick={changeItemQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
