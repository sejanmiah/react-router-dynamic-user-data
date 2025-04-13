import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const posts = useLoaderData()
    console.log(posts);
    return (
        <div>
            <p>This are my post</p>
            <p>tottal post: {posts.length}</p>
            <div>
                {
                    posts.map(post => <SinglePost key={post.id} post={post}> </SinglePost> )
                }
            </div>
        </div>
    );
};

export default Post;