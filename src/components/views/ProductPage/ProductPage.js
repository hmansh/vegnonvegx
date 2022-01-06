import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../style/ProductPage.css";
import { currencyFormatter } from "../../../utils/themeUtils";

export default function ProductPage() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.currProductObj);
  const [size, setSize] = React.useState({selected: false, size: null});

  const handleUpdateShoeSize = (s) => {
    setSize({selected : true, size: s});
    productData.shoeSize = s;
  };

  const addToCart = () => {
    if (size.selected) {
      dispatch({ type: "ADD_TO_CART", payload: productData });
    }
  };

  return (
    <div className="ppageContainer">
      <div id="ppage_upperContainer">
        <div id="ppage_productCrousel">
          <img src={productData.imgUrl} alt="imag" id="ppage_productImage" />
        </div>
        <div id="ppage_productDetails">
          <div id="ppage_information">
            <div id="ppage_company">{productData.company}</div>
            <div id="ppage_name">{productData.name}</div>
            <div id="ppage_price">₹{currencyFormatter(productData.price)}</div>
            <div id="ppage_desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos tempore similique totam. Nam nesciunt libero
              consequuntur ipsam optio sint et quo culpa, error laudantium
              maiores, deserunt corporis aspernatur nemo dolorem. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Dignissimos tempore
              similique totam. Nam nesciunt libero consequuntur ipsam optio sint
              et quo culpa, error laudantium maiores, deserunt corporis
              aspernatur nemo dolorem.
            </div>
          </div>
          <div id="ppage_sizes">
            {productData.sizes.split(",").map((item) => {
              return (
                <button
                  onClick={() => handleUpdateShoeSize(item)}
                  id="ppage_sizeButtons"
                >
                  {item === "" ? "OUT OF STOCK" : item}
                </button>
              );
            })}
          </div>
          <div id="ppage_optionsButtons">
            <button className="btn" id="ppage_button">
              Wishlist
            </button>
            <button className="btn" id="ppage_button" onClick={addToCart}>
              Add to Cart {size.selected && `( ${size?.size} )`}
            </button>
          </div>
        </div>
      </div>
      {/* <div id='ppage_lowerContainer'></div> */}
    </div>
  );
}
