import React from 'react';

const Post = ({post:{title,body}}) => {
    return (
        <div>
            title: "{title}"
            <br/>
            body: {body}
        </div>
    );
};

export default Post;