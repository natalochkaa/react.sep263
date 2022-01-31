import './App.css';
import {useEffect, useState} from "react";


const App = () => {
    let [flight, setFlight] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                let filter = value.filter(flight => flight.launch_year !== "2020");
                setFlight(filter);
            })
    },[]);
    return (
        <div className={`Card`}>
            <div className={`spaceX`}> SpaceX </div>
            {
                flight.map(value => <div className={`styleCard`} key ={value.flight_number}>
                    <img src={value.links.mission_patch_small} alt=""/>
                    <h1 className={`name`}>{value.mission_name}</h1>
                    <br/>
                    {value.launch_year}
                </div>)
            }
        </div>
    );
};

export default App;