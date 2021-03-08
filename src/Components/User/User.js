import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    // console.log(props.user);
    const{name,email,id} = props.user;
    const userStyle ={
        border:'1px solid tomato',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    const style = {
        textDecoration:'none'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>id:{id} <Link style={style} to ={`/friend/${id}`}><button>Show Details</button></Link> </p>
        </div>
    );
};

export default User;