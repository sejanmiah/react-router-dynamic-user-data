import React from 'react';

const User = ({user}) => {
    const {name,email,phone} = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;