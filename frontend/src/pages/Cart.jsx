import { Link } from "react-router-dom";

function Cart({ products, cart, addToCart, removeFromCart }) {
  if(cart.length > 0 && products.length === 0) {
    return (
      <div className="cart-page">
        <p>Loading your cart...</p>
      </div>
    );
  }

  const items = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="cart-page cart-empty">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/" className="cart-back-btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your <em>Cart</em></h1>
      <p className="cart-summary">{totalItems} items</p>

      <ul className="cart-list">
        {items.map((item) => (
          <li className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.display_price}</p>
            </div>

            <div className="stepper">
              <button onClick={() => removeFromCart(item.id)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item.id)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <span>Total</span>
        <strong>₹{totalPrice}</strong>
      </div>

      <Link to="/checkout" className="cart-back-btn cart-checkout-btn">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;