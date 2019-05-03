import React from 'react';
import './ImageList.css'

import ImageCard from './ImageCard';

class ImageList extends React.Component{
    render(){
        const images = this.props.ImageData.map((image) => {
            // Key for list items, avoid duplicate render
            return (
                <ImageCard key={image.id} image={image} />
            )
        });
        return(
            <div className="image-list">
                {images}
            </div>
        );
    };
}


export default ImageList;