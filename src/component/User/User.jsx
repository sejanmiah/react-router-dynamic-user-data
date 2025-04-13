import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id, name,email,phone} = user;
    const userStyle = {
        border: '2px solid black',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h2><strong>Name:</strong> {name}</h2>
            <p><strong>Email:</strong>  {email}</p>
            <p> <strong>Phone:</strong> {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;