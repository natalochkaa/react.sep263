import React, {useEffect, useState} from 'react';

const User = () => {
    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUser(value);
            })
    }, []);

    return (
        <div className={`user`}>
            {
                user.map(value => <p key={value.id}> {value.id}. {value.name}
                    <br/>
                    ☏ phone - {value.phone}</p>)
            }
        </div>
    );
};

export default User;