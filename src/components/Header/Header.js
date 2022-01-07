import React from 'react';
import Logo from "../../assets/logo.svg";
import Favorite from "../../assets/favorite.svg";
import Person from "../../assets/person.svg";
import Bag from "../../assets/shopping_bag.svg";
import { colors } from './../../utils/themeUtils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = {
    headerContainer: {
        height: "8vh",
        width: "100vw",
        display: "flex",
        background: colors.white
    },
    logoContainer: {
        position: "absolute",
        right: "50%",
        left: "48%",
        top: '2%',
        backgroundImage: `url(${Logo})`,
        backgroundRepeat: "no-repeat",
        height: "2rem",
        width: "4rem"
    },
    toolsContainer: {
        position: "absolute",
        right: 0,
        top: "2%",
        display: "flex",
        paddingRight: "2rem"
    },
    accountLogo: {
        backgroundImage: `url(${Person})`,
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
        marginRight: '1rem',
    },
    wishlistLogo: {
        backgroundImage: `url(${Favorite})`,
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
        marginRight: '1rem',
    },
    basketLogo: {
        backgroundImage: `url(${Bag})`,
        backgroundRepeat: "no-repeat",
        height: "1.5rem",
        width: "1.5rem",
        paddingRight: "1rem",
    }
};

export default function Header() {

    const userSignedIn = useSelector(state => state.userSignedIn);

    const handleWishlistRedirection = () => {

    };

    const handleAccountRedirection = () => {

    };

    const handleShoppingCardRedirection = () => {

    };

    return (
        <div style={useStyles.headerContainer}>
            <Link to='/'>
                <div style={useStyles.logoContainer}></div>
            </Link>
            <div style={useStyles.toolsContainer}>
                <Link to={ userSignedIn ? '/account' : '/signin'}>
                    <div style={useStyles.accountLogo} onClick={handleAccountRedirection}></div>
                </Link>
                <Link to={ userSignedIn ? '/wishlist' : '/signin'}>
                    <div style={useStyles.wishlistLogo} onClick={handleWishlistRedirection}></div>
                </Link>
                <Link to='/cart'>
                    <div style={useStyles.basketLogo} onClick={handleShoppingCardRedirection}></div>
                </Link>
            </div>
        </div>
    )
}
