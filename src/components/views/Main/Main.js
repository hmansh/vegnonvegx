import React from 'react';
import Product from '../../Product/Product';
import axios from 'axios';
import '../../../style/Main.css';

const useStyle = {
    mainContainer: {
        // display: "grid",
        // gridTemplateColumns: "repeat(4, 1fr)",
        // gridTemplateRows: "",
        // gridGap: '1rem',
        // padding: '1rem',
        // border: '1px solid red',
    }
}

export default function Main() {

    const [data, setData] = React.useState([{}]);

    React.useEffect(() => {
        const url = 'http://localhost:8081/getProductList.do/';
        axios.get(url).then(response => {
            setData(response.data);
            console.log(response.data);
            return;
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="mainContainer" id="main">
            {data.map(item => {
                return <Product data={item}/>
            })}
        </div>
    )
}
