import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <div style={{ maxWidth: "260px" }}>
      <PayPalButtons id="paypal-btn"
        style={{
          layout: "vertical",
          height: 40,
          shape: "pill",     //  bordes redondeados
          color: "black",    
          label: "pay",      
        }}
        fundingSource="paypal" 
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "17.99",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Gracias por tu compra " + details.payer.name.given_name);
          });
        }}
      />
    </div>
  );
};

export default PayPalButton;

