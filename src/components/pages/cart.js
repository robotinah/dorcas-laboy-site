import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import PayPalButton from "../paypal-button";

const Cart = () => {
  const { cart, total, removeFromCart, addToCart, decreaseQty } =
    useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">Tu carrito</h2>

      {cart.length === 0 && <p>No hay productos aún</p>}

      {cart.map((item, i) => (
        <div className="cart-item d-flex justify-content-between align-items-center mb-4 p-3">
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              alt=""
              className="cart-img me-3"
            />

            <div>
              <h6 className="mb-1">{item.name}</h6>
              <small className="text-muted">${item.price}</small>
            </div>
          </div>

          {/* 🔥 CONTROLES DE CANTIDAD */}
          <div className="d-flex align-items-center">
            <button
              className="qty-btn"
              onClick={() => decreaseQty(item.name)}
            >
              −
            </button>

            <span className="mx-3">{item.qty}</span>

            <button
              className="qty-btn"
              onClick={() => addToCart(item)}
            >
              +
            </button>
          </div>

          {/* 💰 SUBTOTAL */}
          <div className="text-end">
            <strong>${(item.price * item.qty).toFixed(2)}</strong>

            <div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(i)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* 💰 TOTAL */}
      <div className="mt-4 text-end">
        <h4>Total: ${total.toFixed(2)}</h4>

        <div className="mt-3" style={{ maxWidth: "300px", marginLeft: "auto" }}>
          <PayPalButton total={total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;