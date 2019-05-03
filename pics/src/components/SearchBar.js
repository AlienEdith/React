import React from 'react';


class SearchBar extends React.Component{
    state = {term : ""};

    // Longer call back function
    // 1. constructor: bind
    // 2. Use Arrow function: automatically bind "this" for all codes
    // onFormSubmit = (event) => {
    //     event.preventDefault(); //supress default form submit event: refresh the webpage automatically
    //     console.log(this.state.term);
    // }
    // 3. Arrow Function-2
    onFormSubmit(event){
        event.preventDefault(); 
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={(event) => this.onFormSubmit(event)}className="ui form" action="/" method="GET">
                    <div className="field">
                        <label>Image Search</label>
                        {/* To event hanlder function, call back function no ()!!! */}
                        {/* Controlled Component: the value was controlled by the component rerender */}
                        {/* store information inside of our components on state, not inside the DOM */}
                        {/* Advantage:  React Driving....customize user input (force UpperCase)... */}
                        <input type="text" name="imageSearch" 
                               value = {this.state.term}
                                // Short call back function    
                               onChange = {(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default SearchBar;