import React from 'react';
import ReactDOM from 'react-dom';

import useLocation from './useLocation';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {

    const [lat, errorMessage] = useLocation(); 

    let content;
    if(errorMessage){
        content = <div>Error: {errorMessage}</div>
    } else if (lat){
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Spinner message="Please Accept Location Request"/>;
    }

    return(
        <div>
            { content }
        </div>
    );
}

// const App_function = () => {
//     // Geolocation API, take time
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {
//             latitude = position.coords.latitude;
//             longitude = position.coords.longitude;
//         },
//         (error) => console.log(error)
//     );
//     console.log(latitude+" "+longitude);
//     // Before Geolocation get the data
//     // already return and then render the HTML
//     //  => with state
//     return (
//         <div>Latitude: </div>
//     );
// };

// var latitude;
// var longitude;
// class App extends React.Component {
//     // initialize state with constructor
//     // constructor(props){
//     //     super(props);   // MUST. call constructor of React.Component
//     //     this.state = {
//     //         lat: null,
//     //         errorMessage: ""
//     //     };
//     // }
//     // initialzie state outside constructor
//     state = {
//         lat: null,
//         errorMessage: ""       
//     }
    
//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 // Can be partially updated, other stay unchanged
//                 this.setState({ //Object
//                     lat: position.coords.latitude,
//             },
//             (error) => {
//                 this.setState({
//                     errorMessage: error.message
//                 })
//             }
//         );
//     }

//     componentDidUpdate(){
//         console.log('My component was just updated - it rerendered');
//     }

//     // Required function
//     // Avoid logic in render() function, add a helper function
//     renderContent() {
//         if(this.state.errorMessage && !this.state.lat){
//             return <div>Error: {this.state.errorMessage}</div>;
//         }
//         if(!this.state.errorMessage && this.state.lat){
//             return (
//                 <div>
//                     <SeasonDisplay lat= {this.state.lat}/>
//                 </div>
//             );
//         }
//         return <Spinner message="Please Accept Location Request"/>;
//     }

//     render(){
//         return(
//             <div>
//                 { this.renderContent() }
//             </div>
//         );
//     }
// }




ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

