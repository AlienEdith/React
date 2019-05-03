import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, KmlLayer, TrafficLayer } from 'react-google-maps';

class Map extends Component {
  render(){
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap 
          defaultCenter = { { lat: 30.294333, lng: -97.738517} }
          defaultZoom = { 14 }
        >
          <TrafficLayer autoUpdate />
          <KmlLayer
      // url="https://sites.google.com/site/allaboutaustinzipcodeskml/zipcodes/zip78701.kml"
      // url = "https://sites.google.com/site/allaboutaustinzipcodeskml/test/AustinZipcodes.kml"
      options={{ preserveViewport: true }}
    />
    {/* <HeatmapLayer /> */}
        </GoogleMap>
     ));

    return(
        <div>
            <GoogleMapExample
                containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
            />
        </div>
    );
  }
};
export default Map;