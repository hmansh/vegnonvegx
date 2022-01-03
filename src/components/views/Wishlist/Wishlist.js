import React from 'react';
import Product from '../../Product/Product';

const useStyle = {
    mainContainer: {
        border: '1px solid red',
        overflow: 'scroll',
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "",
        gridGap: '1rem',
        padding: '1rem',
        overflowX: 'hidden',
    },
};

export default function Wishlist() {
    return (
        <div style={useStyle.mainContainer}>
            {[1, 2, 4, 5, 7, 8, 9].map( item => 
                <Product/>
            )}
        </div>
    )
}
