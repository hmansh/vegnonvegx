import React from 'react';
import { Link } from 'react-router-dom';
import Fav from "../../assets/favorite.svg";
import NotFav from "../../assets/favorite_border.svg";
import { useDispatch } from 'react-redux';

const useStyle = props => ({
    productContainer: {
        height: '100%',
        width: '100%',
        maxHeight: "30rem",
        maxWidth: "40rem",
        minWidth: '20rem',
        minHeight: '20rem',
        padding: '1rem',
    },
    productPriceHover: {
        textAlign: 'center',
        display: 'inline',
        fontWeight: 600,
        color: 'black',
    },
    productImageContainer: {
        height: "80%",
        backgroundImage: `url(${props.imgUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    productImage: {
    },
    productDetailsContainerLower: {
        height: "20%",
        color: 'black',
        underline: 'none',
    },
    companyName: {
        textAlign: 'center',
        fontWeight: 700,
    },
    productName: {
        textAlign: 'center',
        maxHeight: '1.5rem',
        overflow:"hidden",
        whiteSpace:"nowrap",
        textOverflow:"ellipsis",
        width:"100%",
    },
    sizes: {
        textAlign: 'center',
    },
    wishlistLogo: {
        backgroundImage: `url(${props.inWishlist ? NotFav : Fav})`,
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
        marginLeft: '1rem',
    },
    priceAndWishlist: {
        display: 'flex',
        justifyContent: 'center',
    }
})


export default function Product(props) {
    
    const dispatch = useDispatch();
    const style = useStyle(props.data);

    return (
            <div style={style.productContainer} className='productContainer'>
                <Link onClick={() => dispatch({type:"SET_PRODUCT_OBJ", payload: props.data})} 
                    to='/product' className='reactLink'>
                    <div style={style.productImageContainer}></div>
                </Link>
                <div style={style.productDetailsContainerLower}>
                    <div style={style.companyName}>{props.data.company}</div>
                    <div style={style.productName}>{props.data.name}</div>
                    <div style={style.priceAndWishlist}>
                        <div style={style.productPriceHover}>₹{props.data.price}</div>
                        <div style={style.wishlistLogo}></div>
                    </div>
                    {/* <div style={style.sizes}>{dummyData.sizes}</div> */}
                </div>
            </div>
    )
}
