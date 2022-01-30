import React, {useEffect, useState} from 'react';

const Comments = () => {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    }, []);

    return (
        <div className={`comments`}>
            {
                comments.map(value => <p key = {value.id}> text: "{value.body}"</p>)
            }
        </div>
    );
};

export default Comments;