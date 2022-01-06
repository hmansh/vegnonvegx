import React from "react";
import axios from "axios";
import Product from "../../Product/Product";
import "../../../style/Main.css";
import Loading from "../../../assets/loader.svg";
import { useDispatch, useSelector } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);

  React.useEffect(() => {
    const url = "http://localhost:8081/getProductList.do";
    if (data.length === 0) {
      axios
        .get(url)
        .then((response) => {
          dispatch({ type: "SET_DATA", payload: response.data });
          dispatch({ type: "LOADING_COMPLETE" });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, []);

  return (
    <div className="mainContainer" id="main">
      {loading
        ? <img src={Loading} alt="loading" />
        : data.map((item) => {
            return <Product data={item} />;
          })}
    </div>
  );
}
