import React from "react";
import GoogleApiWrapper from "../APIs/mapsAPI";

const LocationData = props => {
  return (
    <div>
      <GoogleApiWrapper
        lat={props.lat}
        long={props.long}
      />
    </div>
  );
};

export default LocationData;
