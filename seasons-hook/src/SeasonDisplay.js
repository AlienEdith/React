// Link CSS: webpack will take the css file, stick it to index.html
// Webpack: join different files together
import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer:{
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter:{
        text: "Burr, it is chilly",
        iconName: 'snowflake'        
    }
};

// Extract logic from component
const getSeason = (lat, month) => {
    if(month>2 && month<9){
        return lat>0? "summer" : "winter";
    } else {
        return lat<0? "summer" : "winter";
    }
} 

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // JS syntax
    const {text, iconName} = seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            {/*  JS syntax: `${ variable }`: turn var into a string*/}
            <i className={ `icon-left massive ${iconName} icon`}></i> 
            <h1>{text} </h1> 
            <i className={ "icon-right massive "+ iconName + " icon"}></i>
        </div>   
    );
};

export default SeasonDisplay;