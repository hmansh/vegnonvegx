import React from "react";
import { useSelector } from "react-redux";
import "../../../style/ShoppingCart.css";

const productRow = (item) => {
  return (
    <div id="scart_productContainer">
      <div id="scart_headingDiv">
        <img src={item.imgUrl} id="scart_imageContainer" alt="ima" />
      </div>
      <div id="scart_headingDiv" >{item.name}</div>
      <div id="scart_headingDiv" >₹{item.price}</div>
      <div id="scart_headingDiv" >{item.shoeSize}</div>
      <div id="scart_headingDiv" >₹{item.price}</div>
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
  const cartItems = useSelector((state) => state.user.cartItems);
  const totalAmount = calcTotalValue(cartItems);
  const totalTax = Math.floor(totalAmount * 0.12);

  return (
    <div className="scart_container">
      <div id="scart_cartContainer">
        <div id="scart_cartHeading">
          <div id="scart_headingDiv">PRODUCT</div>
          <div id="scart_headingDiv">DESCRIPTION</div>
          <div id="scart_headingDiv">PRICE</div>
          <div id="scart_headingDiv">SIZE</div>
          <div id="scart_headingDiv">SUBTOTAL</div>
        </div>
        <div id="scart_productTable">
          {cartItems.map((item) => {
            return productRow(item);
          })}
        </div>
        <div id="scart_divider"></div>
        <div id="scart_billContainer">
          <table id="scart_table">
            <tr id="scart_tableRow">
              <td id="scart_tableData">ITEMS</td>
              <td id="scart_costColumn" >
                {cartItems.length}
              </td>
            </tr>
            <tr>
              <td  id="scart_tableData">SUBTOTAL</td>
              <td id="scart_costColumn">
                ₹{totalAmount}
              </td>
            </tr>
            <tr>
              <td  id="scart_tableData">DISCOUNT</td>
              <td id="scart_costColumn">
                ₹0
              </td>
            </tr>
            <tr>
              <td id="scart_tableData">TAX</td>
              <td id="scart_costColumn">
                ₹{totalTax}
              </td>
            </tr>
            <tr>
              <td id="scart_tableData">SHIPPING</td>
              <td id="scart_costColumn">
                ₹0
              </td>
            </tr>
            <tr>
              <td id="scart_tableData">TOTAL</td>
              <td id="scart_costColumn">
                ₹{totalAmount + totalTax}
              </td>
            </tr>
          </table>
        </div>
        <div id="scart_redeemContainer">
          <input
            type="text"
            placeholder="ENTER REDEEM CODE"
            id="scart_input"
          />
          <button id="scart_redeemButton">
            APPLY
          </button>
        </div>
        <button id="scart_button" >CHECKOUT</button>
      </div>
    </div>
  );
}
