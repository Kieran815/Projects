import React from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

  render() {
    const style = {
      width: "25em",
      height: "20em"
    }
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.long
        }}
        zoom={16}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBUTgyLvwoEUylFXTa0gG9heCDcCqCahEc")
})(MapContainer)
