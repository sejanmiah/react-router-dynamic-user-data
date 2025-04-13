import React from 'react';

const SinglePost = ({post}) => {
    const {id,title} = post;
    return (
        <div style={{border: '2px solid red'}}>
            <h2> {title} </h2>
            <Link to={`/post/${id}`} >Show Details</Link>
        </div>
    );
};

export default SinglePost;