
// @flow 
import * as React from 'react';
import axios from "axios";

export const Home = () => {
    //eslint-disable-next-line
    const [state, setState] = React.useState({})

    const fetchData = async () => {
        const URI = "http://localhost:4000";
        const { data } = await axios.get(URI);
        console.log(data);
    }
    console.log("WASSAP");

    React.useState(() => {
        fetchData()
    },[])
    
    return (
        <div>
            
        </div>
    );
};