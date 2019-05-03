import { useState, useEffect } from 'react';

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, seterrorMessage] = useState("");

    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude)
            },
            (error) => {
                seterrorMessage(error.message)
            }
        );
    },
    []  //only run once
    )

    // hook system: usually use array 
    return [lat, errorMessage]

}

export default useLocation