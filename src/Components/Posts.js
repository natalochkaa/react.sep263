import React from 'react';
import Post from "./Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(Post => <Post key = {posts.id} post ={posts}/>)}
        </div>
    );
};

export default Posts;