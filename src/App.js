import './App.css';
import User from "./Components/User";
import Post from "./Components/Post";
import Comments from "./Components/Comments";

const App = () => {
    return (
        <div className={`styleDiv`}>
            <User/>
            <Post/>
            <Comments/>
        </div>
    );
};

export default App;
