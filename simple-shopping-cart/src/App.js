import React, { useState, useEffect } from "react";
import "./App.css";
import productsData from "./data/products.json"; // import your JSON file

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load products from JSON
    setProducts(productsData.products);
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      // Increase quantity if item already in cart
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <h1>Simple Shopping Cart</h1>

      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Use process.env.PUBLIC_URL to load images from public folder */}
            <img
              src={process.env.PUBLIC_URL + product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <div className="cart">
        {cart.length === 0 && <p>Cart is empty</p>}
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
}

export default App;
