import React from 'react';
import Product from '../../Product/Product';
import axios from 'axios';

const useStyle = {
    mainContainer: {
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
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const url = 'http://localhost:8081/getWishlist.do/';
        axios.get(url).then(response => {
            setData(response.data);
            console.log(response.data);
            return;
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div style={useStyle.mainContainer}>
            {data.map( item => 
                <Product data={item}/>
            )}
        </div>
    )
}
