import React from 'react';
import { Link } from 'react-router-dom';
import Fav from "../../assets/favorite.svg";
import NotFav from "../../assets/favorite_border.svg";

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

    const style = useStyle(props.data);
    React.useEffect(() => {
        console.log(props);
    }, []);

    return (
        <Link to={{pathname: '/product',
                    query: {...props.data}}} className='reactLink'>
            <div style={style.productContainer} className='productContainer'>
                <div style={style.productImageContainer}></div>
                <div style={style.productDetailsContainerLower}>
                    <div style={style.companyName}>{props.data.company}</div>
                    <div style={style.productName}>{props.data.name}</div>
                    <div style={style.priceAndWishlist}>
                        <div style={style.productPriceHover}>${props.data.price}</div>
                        <div style={style.wishlistLogo}></div>
                    </div>
                    {/* <div style={style.sizes}>{dummyData.sizes}</div> */}
                </div>
            </div>
        </Link>
    )
}
