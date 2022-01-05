import React from 'react';
import axios from 'axios';
import Product from '../../Product/Product';
import '../../../style/Main.css';

export default function Main() {
  const [data, setData] = React.useState([{}]);

  React.useEffect(() => {
    const url = 'http://localhost:8081/getProductList.do';
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="mainContainer" id="main">
      {data.map((item) => {
        return <Product data={item} />;
      })}
    </div>
  );
}
