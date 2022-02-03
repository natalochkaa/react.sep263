
import User from "./User";

const Users = ({filterUser}) => {

    return (
        <div>
            {filterUser.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;