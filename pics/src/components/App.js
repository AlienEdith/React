import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// network request package: axios (npm)
class App extends React.Component{
    state = {response: []};
    // onSearchSubmit = /*async*/ (term) => {
    //     // const response = await axios.get(....)
    //     axios.get("https://api.unsplash.com/search/photos/", {
    //         params: { query: term },
    //         headers:{
    //             Authorization: "Client-ID 564c6f59fed346683780a958c6ea9614dc871569fc5b0f28c127dd89a89fa9ed"
    //         }
    //     }).then((response) => {
    //         this.setState({response: response.data.results});
    //         // Need to update Component
    //     });
    //     // console.log(response.data.results)
    // };
    
    // Refactor with axios.create()
    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('/search/photos',{
            params: { query: term }
        });
        this.setState({response: response.data.results});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList ImageData={this.state.response}/>
            </div>
        );
    }
}

export default App;