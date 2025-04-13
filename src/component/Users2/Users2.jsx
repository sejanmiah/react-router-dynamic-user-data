import React, { use } from 'react';

const Users2 = ({ userPromise }) => {
    const users = use(userPromise);
    console.log('users2 suspense data', users);
    return (
        <div>
            <p>This is users2</p>
        </div>
    );
};

export default Users2;