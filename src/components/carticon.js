import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/cart")}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "#000",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "30px",
        cursor: "pointer",
        zIndex: 999,
      }}
    >
      🛒 {cart.length}
    </div>
  );
};

export default CartIcon;