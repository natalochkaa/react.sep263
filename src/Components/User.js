const User = ({user, getUser}) => {
    let {id, name} = user
    return (

        <div className={`styleDivUser`}> {id}. {name}
            <br/>
            <button onClick={() => getUser(user)} className={`buttonUser`}> Click me</button>
        </div>

    );
};

export default User;