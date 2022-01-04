import React from 'react';
import axios from 'axios';
import Product from '../../Product/Product';
import '../../../style/Wishlist.css';

export default function Wishlist() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const url = 'http://localhost:8081/getWishlist.do/';
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="wishlist_container">
      {data.map((item) => (
        <Product data={item} />
      ))}
    </div>
  );
}
