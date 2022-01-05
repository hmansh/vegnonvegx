import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Fav from '../../assets/favorite.svg';
import NotFav from '../../assets/favorite_border.svg';
import '../../style/Product.css';

const useStyle = (data) => ({
  productImageContainer: {
    backgroundImage: `url(${data.imgUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  wishlistLogo: {
    backgroundImage: `url(${data.inWishlist ? NotFav : Fav})`,
    backgroundRepeat: 'no-repeat'
  }
});

export default function Product(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const style = useStyle(data);

  return (
    <div className="productContainer">
      <Link
        onClick={() => dispatch({ type: 'SET_PRODUCT_OBJ', payload: data })}
        to="/product"
        className="reactLink">
        <div style={style.productImageContainer} className="product_imageContainer"></div>
      </Link>
      <div id="product_lowerContainer">
        <div id="product_companyName">{data.company}</div>
        <div id="product_productName">{data.name}</div>
        <div id="product_priceWishlist">
          <div id="product_price">₹{data.price}</div>
          <div style={style.wishlistLogo} id="product_wishlist"></div>
        </div>
        {/* <div style={style.sizes}>{dummyData.sizes}</div> */}
      </div>
    </div>
  );
}

Product.propTypes = PropTypes.shape({
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}).isRequired;
