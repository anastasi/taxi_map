import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { AddressContext } from "../AddressContext";
import styled from "styled-components";
import marker from "../assets/marker-icon.png"

const Marker = styled.div`
  width: 50px;
`;

const CurrentPosition: React.FunctionComponent<any> = () => (
  <Marker>
    <img src={marker} alt="marker"/>
  </Marker>
);

const SimpleMap: React.FunctionComponent<any> = () => {
  const { selectedAddress } = useContext(AddressContext);
  const initialDefaultProps = {
    center: {
      lat: selectedAddress.latitude,
      lng: selectedAddress.longitude
    },
    zoom: 11
  };

  const [defaultProps, setDefaultProps] = useState(initialDefaultProps);
  useEffect(() => {
    setDefaultProps({
      ...defaultProps,
      center: {
        lat: selectedAddress.latitude,
        lng: selectedAddress.longitude
      }
    });
    console.log("COORD", selectedAddress )
  }, [selectedAddress.latitude, selectedAddress.longitude]);

  const apiId = "AIzaSyDKE24SaYeYPDx6LDmngAFuCOzl333mwDg";

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiId }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        <CurrentPosition
          center={defaultProps.center}
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
