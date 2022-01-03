import React from 'react';
import { Link } from 'react-router-dom';
import Fav from "../../assets/favorite.svg";
import NotFav from "../../assets/favorite_border.svg";
import { useDispatch } from 'react-redux';
import '../../style/Product.css';

const useStyle = props => ({
    productImageContainer: {
        backgroundImage: `url(${props.imgUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    wishlistLogo: {
        backgroundImage: `url(${props.inWishlist ? NotFav : Fav})`,
        backgroundRepeat: "no-repeat",
    }
})


export default function Product(props) {
    
    const dispatch = useDispatch();
    const style = useStyle(props.data);

    return (
            <div className='productContainer'>
                <Link onClick={() => dispatch({type:"SET_PRODUCT_OBJ", payload: props.data})} 
                    to='/product' className='reactLink'>
                    <div style={style.productImageContainer} className='product_imageContainer'></div>
                </Link>
                <div id='product_lowerContainer'>
                    <div id='product_companyName'>{props.data.company}</div>
                    <div id='product_productName'>{props.data.name}</div>
                    <div id='product_priceWishlist'>
                        <div id='product_price'>₹{props.data.price}</div>
                        <div style={style.wishlistLogo} id='product_wishlist'></div>
                    </div>
                    {/* <div style={style.sizes}>{dummyData.sizes}</div> */}
                </div>
            </div>
    )
}
