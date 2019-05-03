// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText(){
    return 'Click on Me';
}
// Create a React component
const App = () => {
    var buttonText = "Click Me!";   // JSX reference: could be String, number, array
    var buttonTextObject = {        // Can't be Object
        text: "Click Me"            // If want to refer, object.key
    };
    var buttonStyle = {
        backgroundColor: 'steelblue', 
        color: 'white'
    };
    return (
        // JSX 
        <div>
            <label htmlFor="name" className="label">Enter name:</label>
            <input id="name" type="text" />
            <button style={ buttonStyle /*{backgroundColor: 'steelblue', color: 'white'}*/}>
                { buttonTextObject.text /*getButtonText()*/ }
            </button>
        </div>
        // JSX
    );
}


// Take the React component and show it on the screen (inside the tag in index.html)
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);