import React from "react";
import "../../../style/Account.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const useStyle = (props) => ({
  productImage: {
    width: "30%",
    backgroundImage: `url(${props.imageLink})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  bold: {
    fontWeight: "600",
    cursor: "pointer",
  },
  alt: {
    cursor: "pointer",
  },
});

const basicDetails = (userDetails) => {
  return (
    <div id="account_joinContainer">
      <div id="account_name">
        <input
          id="account_input_half"
          type="text"
          disabled
          placeholder="FIRST NAME"
          value={userDetails?.first_name}
        />
        <input
          id="account_input_half"
          type="text"
          disabled
          placeholder="LAST NAME"
          value={userDetails?.last_name}
        />
      </div>
      <input
        type="text"
        disabled
        placeholder="EMAIL ID"
        value={userDetails?.email_id}
        id="account_input"
      />
      <input
        type="text"
        disabled
        placeholder="PHONE NUMBER"
        value={userDetails?.phone_number}
        id="account_input"
      />
      <button id="account_button">UPDATE</button>
    </div>
  );
};

const addressDetails = (userAddress) => {
  return (
    <div id="account_signinContainer">
      <div id="account_name">
        <input
          id="account_input_half"
          type="text"
          placeholder="COUNTRY *"
          value={userAddress?.country}
        />
        <input
          id="account_input_half"
          type="text"
          placeholder="STATE *"
          value={userAddress?.state}
        />
      </div>
      <div id="account_name">
        <input
          id="account_input_half"
          type="text"
          placeholder="FIRST NAME *"
          value={userAddress?.first_name}
        />
        <input
          id="account_input_half"
          type="text"
          placeholder="LAST NAME *"
          value={userAddress?.last_name}
        />
      </div>
      <div id="account_name">
        <input
          id="account_input_half"
          type="text"
          placeholder="COMPANY"
          value={userAddress?.company_name}
        />
        <input
          id="account_input_half"
          type="text"
          placeholder="MOBILE"
          value={userAddress?.mobile_number}
        />
      </div>
      <input
        id="account_input"
        type="text"
        placeholder="ADDRESS 1 *"
        value={userAddress?.address_1}
      />
      <input
        id="account_input"
        type="text"
        placeholder="ADDRESS 2"
        value={userAddress?.address_2}
      />
      <div id="account_name">
        <input
          id="account_input_half"
          type="text"
          placeholder="CITY"
          value={userAddress?.city}
        />
        <input
          id="account_input_half"
          type="number"
          placeholder="PINCODE"
          value={userAddress?.pincode}
        />
      </div>
      <button id="account_button">SUBMIT</button>
    </div>
  );
};

const orderComponent = (styles, show, handleOrderDetails) => {
  return (
    <div id="account_orderContainer">
      <div id="account_orderComponent">
        <div id="account_orderDetailsRow">
          <div>2022-01-02 02:10:03</div>
          <div>$10,000</div>
          <div>PAYMENT SUCCESS</div>
          <button onClick={handleOrderDetails}>V</button>
        </div>
        {show && (
          <div>
            <div id="account_productContainer">
              <div style={styles.productImage} id="account_productImage"></div>
              <div id="account_productDetails">
                <div>VEJA</div>
                <div>CAMPO CHROMEFREE EXTRA-WHITE_ULTRAVIOLET_BLACK</div>
                <div>SIZE: 6</div>
                <div>QTY: 1</div>
                <div>$10,000</div>
              </div>
            </div>
            <div id="account_divider"></div>
            <div id="account_tableContainer">
              <table id="account_table">
                <tr id="account_tableRow">
                  <td id="account_tableData">ITEMS</td>
                  <td id="account_costColumn">1</td>
                </tr>
                <tr>
                  <td id="account_tableData">SUBTOTAL</td>
                  <td id="account_costColumn">$9,980</td>
                </tr>
                <tr>
                  <td id="account_tableData">DISCOUNT</td>
                  <td id="account_costColumn">$0</td>
                </tr>
                <tr>
                  <td id="account_tableData">TAX</td>
                  <td id="account_costColumn">$20</td>
                </tr>
                <tr>
                  <td id="account_tableData">SHIPPING</td>
                  <td id="account_costColumn">$0</td>
                </tr>
                <tr>
                  <td id="account_tableData">TOTAL</td>
                  <td id="account_costColumn">$10,000</td>
                </tr>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Account() {
  const [tab, setTab] = React.useState("basic");
  const [showOrder, setShowOrder] = React.useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (true) {
      axios
        .get("http://localhost:8081/getUserDetails.do/")
        .then((response) => {
          console.log(response.data[0])
          dispatch({
            type: "SET_USER_DETAILS",
            payload: response.data['0'],
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleShowDetailView = () => {
    setShowOrder((prev) => !prev);
  };

  const dummyData = {
    imageLink:
      "https://d18o2ueeh72ibb.cloudfront.net/resized/300X/6255/campo-chromefree-extra-white-ultraviolet-black-61cd4ae7f0eb7.jpg",
  };

  const styles = useStyle(dummyData);

  const handleTabChange = (e) => {
    setTab(e);
  };

  return (
    <div className="account_container">
      <div id="account_title">
        <div
          onClick={() => handleTabChange("basic")}
          style={tab === "basic" ? styles.bold : styles.alt}
        >
          BASIC DETAILS
        </div>
        /
        <div
          onClick={() => handleTabChange("order")}
          style={tab === "order" ? styles.bold : styles.alt}
        >
          ORDER DETAILS
        </div>
      </div>
      {tab === "basic" && basicDetails(user.details)}
      {tab === "basic" && <div id="account_title">ADDRESS</div>}
      {tab === "basic" && addressDetails(user.address)}
      {tab === "order" &&
        orderComponent(styles, showOrder, handleShowDetailView)}
    </div>
  );
}
