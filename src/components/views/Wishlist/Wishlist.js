import React from 'react';
import Product from '../../Product/Product';
import '../../../style/Wishlist.css';
import axios from 'axios';

const useStyle = {};

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
        <div className='wishlist_container'>
            {data.map( item => 
                <Product data={item}/>
            )}
        </div>
    )
}
