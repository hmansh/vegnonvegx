import React from "react";
import { useSelector } from "react-redux";

const useStyle = {
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  cartContainer: {
    margin: "auto",
    maxWidth: "720px",
    padding: "1rem",
  },
  cartHeading: {
    display: "flex",
    justifyContent: "space-between",
  },
  productContainer: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid grey",
    padding: "1rem 0",
  },
  headingDiv: {
    width: "9rem",
  },
  div: {},
  divider: {
    borderBottom: "2px dashed grey",
  },
  table: {
    width: "100%",
  },
  tableRow: {},
  tableData: {},
  costColumn: {
    textAlign: "right",
  },
  button: {
    background: "#000",
    color: "white",
    width: "100%",
    height: "2rem",
    fontSize: "0.7rem",
    margin: "0.5rem 0",
  },
  redeemContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  redeemButton: {
    maxWidth: "20%",
  },
  input: {
    width: "75%",
    height: "2rem",
    margin: "0.5rem 0",
    padding: "10px",
    fontSize: "0.7rem",
    border: "none",
    color: "#000",
    outline: "none",
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: "5rem",
  },
};

const productRow = (item) => {
  return (
    <div style={useStyle.productContainer}>
      <div style={{ ...useStyle.headingDiv }}>
        <img src={item.imgUrl} style={useStyle.imageContainer} alt="ima" />
      </div>
      <div style={{ ...useStyle.headingDiv }}>{item.name}</div>
      <div style={{ ...useStyle.headingDiv }}>₹{item.price}</div>
      <div style={{ ...useStyle.headingDiv }}>{item.shoeSize}</div>
      <div style={{ ...useStyle.headingDiv }}>₹{item.price}</div>
    </div>
  );
};

const calcTotalValue = (cartItems) => {
  let sum = 0;
  cartItems.map((item) => {
    sum += item.price;
    return 0;
  });
  return sum;
};

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = calcTotalValue(cartItems);
  const totalTax = Math.floor(totalAmount * 0.12);

  return (
    <div style={useStyle.mainContainer}>
      <div style={useStyle.cartContainer}>
        <div style={useStyle.cartHeading}>
          <div style={{ ...useStyle.headingDiv }}>PRODUCT</div>
          <div style={{ ...useStyle.headingDiv }}>DESCRIPTION</div>
          <div style={{ ...useStyle.headingDiv }}>PRICE</div>
          <div style={{ ...useStyle.headingDiv }}>SIZE</div>
          <div style={{ ...useStyle.headingDiv }}>SUBTOTAL</div>
        </div>
        <div style={useStyle.productTable}>
          {cartItems.map((item) => {
            return productRow(item);
          })}
        </div>
        <div style={useStyle.divider}></div>
        <div style={useStyle.billContainer}>
          <table style={useStyle.table}>
            <tr style={useStyle.tableRow}>
              <td style={useStyle.tableData}>ITEMS</td>
              <td style={{ ...useStyle.tableData, ...useStyle.costColumn }}>
                {cartItems.length}
              </td>
            </tr>
            <tr>
              <td style={useStyle.tableData}>SUBTOTAL</td>
              <td style={{ ...useStyle.tableData, ...useStyle.costColumn }}>
                ₹{totalAmount}
              </td>
            </tr>
            <tr>
              <td style={useStyle.tableData}>DISCOUNT</td>
              <td style={{ ...useStyle.tableData, ...useStyle.costColumn }}>
                ₹0
              </td>
            </tr>
            <tr>
              <td style={useStyle.tableData}>TAX</td>
              <td style={{ ...useStyle.tableData, ...useStyle.costColumn }}>
                ₹{totalTax}
              </td>
            </tr>
            <tr>
              <td style={useStyle.tableData}>SHIPPING</td>
              <td style={{ ...useStyle.tableData, ...useStyle.costColumn }}>
                ₹0
              </td>
            </tr>
            <tr>
              <td style={useStyle.tableData}>TOTAL</td>
              <td style={{ ...useStyle.tableData, ...useStyle.costColumn }}>
                ₹{totalAmount + totalTax}
              </td>
            </tr>
          </table>
        </div>
        <div style={useStyle.redeemContainer}>
          <input
            type="text"
            placeholder="ENTER REDEEM CODE"
            style={useStyle.input}
          />
          <button style={{ ...useStyle.redeemButton, ...useStyle.button }}>
            APPLY
          </button>
        </div>
        <button style={useStyle.button}>CHECKOUT</button>
      </div>
    </div>
  );
}
