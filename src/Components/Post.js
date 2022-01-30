import React, {useEffect, useState} from 'react';

const Post = () => {
    let [post, setPost] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                setPost(value)
            })
    }, []);

    return (
        <div className={`post`}>
            {
                post.map(value => <p className={`p`} key = {value.id}>  ● "{value.title}"</p>)
            }
        </div>
    );
};

export default Post;