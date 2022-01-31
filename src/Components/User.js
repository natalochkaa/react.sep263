const User = ({user}) => {
    let {name,username,email} = user

    return (
        <div className={`styleDivUser`}> {name}. {username} - {email}</div>
    );
};

export default User;