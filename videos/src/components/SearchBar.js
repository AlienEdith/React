import React, { Component } from 'react';

class SearchBar extends Component {
    state = {value: ""}

    onFormSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" name="Search" 
                            placeholder="Anything You want!" 
                            value = {this.state.value}
                            onChange = {(e) => this.setState({value: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
  }
}

export default SearchBar;
