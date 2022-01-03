import React from 'react'
import colors from '../../../utils/themeUtils'

const useStyle = props => ({
    mainContainer: {
        height: '100%',
        width: '100%',
    },
    signinContainer: {
        margin: 'auto',
        maxWidth: '720px',
    },
    joinContainer: {
        margin: 'auto',
        maxWidth: '720px',
    },
    orderContainer: {
        margin: 'auto',
        maxWidth: '720px',
        background: colors.white,
        padding: '0.5rem',
        marginBottom: '0.5rem',
    },
    title: {
        margin: 'auto',
        paddingTop: '2rem',
        paddingBottom: '0.5rem',
        maxWidth: '720px',
        fontSize: '1rem',
        display: 'flex',
    },
    input: {
        width: '100%',
        height: '2rem',
        margin: '0.5rem auto',
        padding: '10px',
        fontSize: '0.7rem',
        border: "none",
        color: "#000",
        display: "block",
        outline: "none",
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "#fff",
    },
    forgetButton: {
        color: 'blue',
        width: '50%',
        height: '2rem',
        fontSize: '0.7rem',
        textAlign: 'left',
        background: 'none',
        border: 'none',
        outline: 'none',
    },
    button: {
        background: '#000',
        color: 'white',
        width: '100%',
        height: '2rem',
        fontSize: '0.7rem',
        margin: '0.5rem 0',
    },
    names: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    name: {
        maxWidth: '49%',
        margin: 0,
    },
    orderDetailsRow: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    productContainer: {
        display: 'flex',
        padding: '1rem 0',
        justifyContent: 'space-between',
    },
    productImage: {
        width: '30%',
        backgroundImage: `url(${props.imageLink})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    productDetails: {

    },
    divider: {
        borderBottom: '2px dashed grey'
    },
    table: {
        width: '100%',
    },
    tableRow: {

    },
    tableData: {
    },
    costColumn: {
        textAlign: 'right',
    },
    bold: {
        fontWeight: '600',
        cursor: 'pointer'
    },
    alt: {
        cursor: 'pointer'
    }
});

const basicDetails = (styles) => {
    return (
        <div style={styles.joinContainer}>
            <div style={styles.names}>
                <input style={{ ...styles.input, ...styles.name }} type="text" disabled placeholder='HIMANSHU' />
                <input style={{ ...styles.input, ...styles.name }} type="text" disabled placeholder='.' />
            </div>
            <input style={styles.input} type="text" disabled placeholder='himanshucasillas@gmail.com' />
            <input style={styles.input} type="text" disabled placeholder='+91-9677936677' />
            <button style={styles.button}>UPDATE</button>
        </div>
    )
};

const addressDetails = (styles) => {
    return (
        <div style={styles.signinContainer}>
            <div style={styles.names}>
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='COUNTRY *' />
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='STATE *' />
            </div>
            <div style={styles.names}>
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='FIRST NAME *' />
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='LAST NAME *' />
            </div>
            <div style={styles.names}>
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='COMPANY' />
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='MOBILE' />
            </div>
            <input style={styles.input} type="text" placeholder='ADDRESS 1 *' />
            <input style={styles.input} type="text" placeholder='ADDRESS 2' />
            <div style={styles.names}>
                <input style={{ ...styles.input, ...styles.name }} type="text" placeholder='CITY' />
                <input style={{ ...styles.input, ...styles.name }} type="number" placeholder='PINCODE' />
            </div>
            <button style={styles.button}>SUBMIT</button>
        </div>
    )
}

const orderComponent = (styles, show, handleOrderDetails) => {
    return (<div style={styles.orderContainer}>
        <div style={styles.orderComponent}>
            <div style={styles.orderDetailsRow}>
                <div>2022-01-02 02:10:03</div>
                <div>$10,000</div>
                <div>PAYMENT SUCCESS</div>
                <button onClick={handleOrderDetails}>V</button>
            </div>
            {show && <div>
                <div style={styles.productContainer}>
                    <div style={styles.productImage}></div>
                    <div style={styles.productDetails}>
                        <div>VEJA</div>
                        <div>CAMPO CHROMEFREE 'EXTRA-WHITE_ULTRAVIOLET_BLACK</div>
                        <div>SIZE: 6</div>
                        <div>QTY: 1</div>
                        <div>$10,000</div>
                    </div>
                </div>
                <div style={styles.divider}></div>
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <tr style={styles.tableRow}>
                            <td style={styles.tableData}>ITEMS</td>
                            <td style={{ ...styles.tableData, ...styles.costColumn }}>1</td>
                        </tr>
                        <tr>
                            <td style={styles.tableData}>SUBTOTAL</td>
                            <td style={{ ...styles.tableData, ...styles.costColumn }}>$9,980</td>
                        </tr>
                        <tr>
                            <td style={styles.tableData}>DISCOUNT</td>
                            <td style={{ ...styles.tableData, ...styles.costColumn }}>$0</td>
                        </tr>
                        <tr>
                            <td style={styles.tableData}>TAX</td>
                            <td style={{ ...styles.tableData, ...styles.costColumn }}>$20</td>
                        </tr>
                        <tr>
                            <td style={styles.tableData}>SHIPPING</td>
                            <td style={{ ...styles.tableData, ...styles.costColumn }}>$0</td>
                        </tr>
                        <tr>
                            <td style={styles.tableData}>TOTAL</td>
                            <td style={{ ...styles.tableData, ...styles.costColumn }}>$10,000</td>
                        </tr>
                    </table>
                </div>
            </div>}
        </div>
    </div>
    );
}

export default function Account() {
    const [tab, setTab] = React.useState('basic');
    const [showOrder, setShowOrder] = React.useState(false);

    const handleShowDetailView = () => {
        setShowOrder(prev => !prev);
    }

    const dummyData = {
        imageLink: 'https://d18o2ueeh72ibb.cloudfront.net/resized/300X/6255/campo-chromefree-extra-white-ultraviolet-black-61cd4ae7f0eb7.jpg',
    }

    const styles = useStyle(dummyData);

    const handleTabChange = (e) => {
        setTab(e);
    }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.title}>
                <div onClick={() => handleTabChange('basic')}
                    style={tab === 'basic' ? styles.bold : styles.alt}
                >BASIC DETAILS</div>
                /
                <div onClick={() => handleTabChange('order')}
                    style={tab === 'order' ? styles.bold : styles.alt}
                >ORDER DETAILS</div>
            </div>
            {tab === 'basic' && basicDetails(styles)}
            {tab === 'basic' && <div style={styles.title}>ADDRESS</div>}
            {tab === 'basic' && addressDetails(styles)}
            {tab === 'order' && orderComponent(styles, showOrder, handleShowDetailView)}
        </div>
    )
}
