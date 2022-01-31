import React from 'react';

const UserDetails = ({user,getDetails}) => {
    let {id,name,username,email,phone,website} = user;
    return (
        <div className={`userDetails`}>
             {name}
            <br/>
            username: {username}
            <br/>
            email: {email}
            <br/>
            phone: {phone}
            <br/>
            website: {website}
            <br/>
            <button onClick={()=>getDetails(id)} className={`buttonUser`}> My posts </button>
        </div>
    );
};

export default UserDetails;