import './App.css';
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import Posts from "./Components/Posts";
import {useState} from "react";
import {PostServices} from "./Services/PostServices";

const App = () => {
    let [user, setUser] = useState(null);
    let [posts, setPosts] = useState(null);

    let getUser = (user) => {
        setUser(user)
    };
    let getDetails = (id) => {
        PostServices.getByUserID(id).then(value => setPosts([...value]))
    };
    return (
        <div>
            <div className={`www`}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getDetails={getDetails}/>}
            </div>
            {posts && <Posts posts={posts}/>}
        </div>
    );
};

export default App;
