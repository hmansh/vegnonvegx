import React, { useState } from "react";
import "../../../style/SignIn.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState({
    first_name: "",
    last_name: "",
  });
  const [userMobile, setUserMobile] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = () => {
    dispatch({ type: "SIGNED_IN" });
    navigate("/account");
  };

  return (
    <div className="signin_container">
      <div id="signin_title">SIGN IN</div>
      <div id="signin_container">
        <input
          type="text"
          className="input"
          id="signin_input"
          placeholder="EMAIL ADDRESS"
        />
        <input
          type="password"
          className="input"
          id="signin_input"
          placeholder="PASSWORD"
        />
        <button className="btn" id="signin_forgetButton">
          FORGOT PASSWORD?
        </button>
        <button className="btn" id="signin_button" onClick={handleSignIn}>
          SIGN IN
        </button>
      </div>
      <div id="signin_title">JOIN</div>
      <div id="signin_joinContainer">
        <div id="signin_names">
          <input
            className="signin_name"
            id="signin_input"
            type="text"
            placeholder="FIRST NAME"
          />
          <input
            className="signin_name"
            id="signin_input"
            type="text"
            placeholder="LAST NAME"
          />
        </div>
        <input
          className="input"
          id="signin_input"
          type="text"
          placeholder="EMAIL ADDRESS"
        />
        <input
          className="input"
          id="signin_input"
          type="text"
          placeholder="MOBILE"
        />
        <input
          className="input"
          id="signin_input"
          type="password"
          placeholder="PASSWORD"
        />
        <button className="btn" id="signin_button">
          REGISTER
        </button>
      </div>
    </div>
  );
}
