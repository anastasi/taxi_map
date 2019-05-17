import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { AddressContext, SearchResult } from "../AddressContext";
import styled from "styled-components";
import marker from "../assets/marker-icon.png";

const Marker = styled.div`
  width: 50px;
`;

const CurrentPosition: React.FunctionComponent<any> = () => (
  <Marker>
    <img src={marker} alt="marker" />
  </Marker>
);

const VehiclesPosition: React.FunctionComponent<any> = () => (
  <Marker>
    <img src={marker} alt="marker" />
  </Marker>
);

const SimpleMap: React.FunctionComponent<any> = () => {
  const { selectedAddress, vehicles, setVehicles, addresses } = useContext(
    AddressContext
  );
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
    //Vehicles fetch
    let poller = 0;
    const vehiclesEffect = async () => {
      let isWorking = false;
      
      const response = await fetch(
        `https://cabonline-frontend-test.herokuapp.com/vehicles?lat=${
          selectedAddress.latitude
        }&lng=${selectedAddress.longitude}`
      );
      const vehicles = await response.json();
      setVehicles(vehicles);

      poller = setInterval(async () => {
        if (isWorking) {
          return;
        }

        isWorking = true;
        const response = await fetch(
          `https://cabonline-frontend-test.herokuapp.com/vehicles?lat=${
            selectedAddress.latitude
          }&lng=${selectedAddress.longitude}`
        );
        const vehicles = await response.json();
        setVehicles(vehicles);
        isWorking = false;
      }, 5000);
    };
    vehiclesEffect();
    return () => {
      if (poller) {
        clearInterval(poller);
      }
    };
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
        <CurrentPosition center={defaultProps.center} />
        {vehicles.map((item: SearchResult, index: number) => (
          <VehiclesPosition key={index} lat={item.lat} lng={item.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
