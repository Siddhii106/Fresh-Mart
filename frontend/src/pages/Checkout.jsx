import { useState } from "react";
import { Link } from "react-router-dom";

const ORDERS_KEY = "freshmart_orders";

function Checkout({ products, cart, user, clearCart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");
  const [error, setError] = useState("");
  const [placedOrder, setPlacedOrder] = useState(null);

  const items = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !phone || !address) {
      setError("Please fill in your name, phone number, and address.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (items.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      customer: { name, phone, address, email: user.email },
      payment,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
    };

    const saved = JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
    localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...saved]));

    clearCart();
    setPlacedOrder(order);
    setError("");
  }

  if (placedOrder) {
    return (
      <div className="checkout-page checkout-success">
        <h1>Order <em>Placed!</em></h1>
        <p>
          Thank you, {placedOrder.customer.name}. Your order #
          {String(placedOrder.id).slice(-6)} has been received.
        </p>
        <p>Total: ₹{placedOrder.total}</p>
        <Link to="/" className="cart-back-btn">Continue Shopping</Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="checkout-page checkout-success">
        <h1>Log in to <em>Checkout</em></h1>
        <p>You need an account to place an order.</p>
        <Link to="/login" className="cart-back-btn">Log In</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="checkout-page checkout-success">
        <h1>Your <em>Cart</em> is empty</h1>
        <p>Add some products before checking out.</p>
        <Link to="/" className="cart-back-btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Your <em>Checkout</em></h1>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        <div className="checkout-total">
          <span>Total</span>
          <strong>₹{total}</strong>
        </div>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Delivery Details</h2>

        <label className="field-label">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />

        <label className="field-label">Phone Number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10-digit number"
        />

        <label className="field-label">Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="House no., street, city, pincode"
          rows="3"
        />

        <h2>Payment</h2>
        <div className="payment-options">
          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={payment === "upi"}
              onChange={(e) => setPayment(e.target.value)}
            />
            UPI
          </label>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;