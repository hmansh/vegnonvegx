import React from 'react'

const useStyle = {
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
    title: {
        margin: 'auto',
        paddingTop: '2rem',
        paddingBottom: '0.5rem',
        maxWidth: '720px',
        fontSize: '1rem',
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
    },
    name: {
        maxWidth: '49%',
        margin: 0,
    },
}


export default function SignIn() {
    return (
        <div style={useStyle.mainContainer}>
            <div style={useStyle.title}>SIGN IN</div>
            <div style={useStyle.signinContainer}>
                <input type="text" style={useStyle.input} placeholder='EMAIL ADDRESS'/>
                <input type="password" style={useStyle.input} placeholder='PASSWORD'/>
                <button style={useStyle.forgetButton}>FORGOT PASSWORD?</button>
                <button style={useStyle.button}>SIGN IN</button>
            </div>
            <div style={useStyle.title}>JOIN</div>
            <div style={useStyle.joinContainer}>
                <div style={useStyle.names}>
                    <input style={{...useStyle.input, ...useStyle.name}} type="text" placeholder='FIRST NAME' />
                    <input style={{...useStyle.input, ...useStyle.name}} type="text" placeholder='LAST NAME' />
                </div>
                <input style={useStyle.input} type="text" placeholder='EMAIL ADDRESS'/>
                <input style={useStyle.input} type="text" placeholder='MOBILE'/>
                <input style={useStyle.input} type="password" placeholder='PASSWORD'/>
                <button style={useStyle.button}>REGISTER</button>
            </div>
        </div>
    )
}
