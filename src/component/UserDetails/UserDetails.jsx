import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const { website } = user;
    console.log(user);
    return (
        <div>
            <h2>User details here</h2>
            <p>Website {website}</p>
        </div>
    );
};

export default UserDetails;