import { useContext, useState } from "react";
import { CartContext } from "./cartcontext";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { cart, total } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      {/* ICONO */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          background: "#C41E3A",
          color: "#fff",
          padding: "8px 14px",
          borderRadius: "30px",
        }}
      >
        🛒 {cart.length}
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50px",
            width: "300px",
            background: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            padding: "15px",
            zIndex: 999,
          }}
        >
          {cart.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} style={{ marginBottom: "10px" }}>
                  <strong>{item.name}</strong>
                  <div>${item.price}</div>
                </div>
              ))}

              <hr />
              <h5>Total: ${total.toFixed(2)}</h5>

              <button
                onClick={() => navigate("/cart")}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "30px",
                  border: "none",
                  marginTop: "10px",
                }}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartIcon;