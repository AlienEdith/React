import { useState, useEffect } from 'react';
import axios from 'axios';
// code reuse: pass different api request URL/parameters..., return the data 
const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async(resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }
    // Everytime mount/updated, call useEffect 

    useEffect( () =>{
        // fetchResource(props.resource);
        (async(resource) => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource)  //define a function then invoke it right away
    },
    [resource]  
    //check whether props.resource change!!!, if changed, rerun useEffect
    // if empty, run once! Must have this argument. otherwise, infinite loop
    )

    return resources;
}
 export default useResources;
