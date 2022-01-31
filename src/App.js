import React, {useEffect, useState} from 'react';
import Form from "./Components/Form";
import Users from "./Components/Users";
import {UserService} from "./Services/UserServices";

const App = () => {
    let [user, setUser] = useState([])
    let [filterUser, setFilterUser] = useState([])
    useEffect(() => {
        UserService.getAll().then(value => {
            setUser([...value])
            setFilterUser([...value])
        })
    }, [])

    let filterForm = (data) => {
        let filter = [...user]
        if(data.name){filter = filter.filter(user=>user.name.includes(data.name))}
        if(data.username){filter = filter.filter(user=>user.username.includes(data.username))}
        if(data.email){filter = filter.filter(user=>user.email.includes(data.email))}
        setFilterUser(filter)
    }
    return (
        <div>
            <Form filterForm={filterForm}/>
            <Users filterUser={filterUser}/>
        </div>
    );
};

export default App;