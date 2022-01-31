import React, {useEffect, useState} from 'react';

import {UserService} from "../Services/UserServices";
import User from "./User";

const Users = ({getUser}) => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getAll().then(value => setUsers(value))
    }, []);


    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;