import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { AddressContext } from "../../context/AddressContext";
import { VehicleContext } from "../../context/VehicleContext";
import currentMarker from "../../assets/icon_marker.svg";
import taxiMarker from "../../assets/taxi.svg";
import { GoogleMarker } from "./GoogleMarker";
import { fetchVehicles } from "../../api";

const SimpleMap: React.FunctionComponent = () => {
  const { selectedAddress } = useContext(AddressContext);
  const { vehicles, setVehicles } = useContext(VehicleContext);
  const initialDefaultProps = {
    center: {
      lat: selectedAddress.latitude,
      lng: selectedAddress.longitude
    },
    zoom: 14
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
      try {
        const vehicles = await fetchVehicles(selectedAddress);
        setVehicles(vehicles);

        poller = setInterval(async () => {
          if (isWorking) {
            return;
          }
          isWorking = true;

          const vehicles = await fetchVehicles(selectedAddress);
          setVehicles(vehicles);
          isWorking = false;
        }, 5000);
      } catch (error) {
        console.error("Error in fetch vehicles", error);
      }
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
        <GoogleMarker
          iconMarker={currentMarker}
          lat={selectedAddress.latitude}
          lng={selectedAddress.longitude}
        />
        {vehicles.map((item, index: number) => (
          <GoogleMarker
            iconMarker={taxiMarker}
            key={index}
            lat={item.lat}
            lng={item.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
