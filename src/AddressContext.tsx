import React, { useState } from "react";
import { any } from "prop-types";

export interface SearchResult {
  text: string;
  singleAddress: object;
  id: number;
  streetName: string;
  city: string;
  latitude: number;
  longitude: number;
  selectedAddress: object;
  setSelectedAddress: Function;
  addresses: any;
  setAddresses: Function;
  vehicles: any;
  setVehicles: Function;
  brand: string;
  lat: number;
  lng: number;
}

const initialState: any = {
  text: "",
  singleAddress: {},
  id: 0,
  streetName: "",
  city: "",
  latitude: 0,
  longitude: 0,
  selectedAddress: {},
  setSelectedAddress: () => {},
  addresses: any,
  setAddresses: () => {},
  vehicles: any,
  setVehicles: () => {}
};

const AddressContext = React.createContext(initialState);

const AddressContextProvider: React.FunctionComponent = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState({
    id: 0,
    streetName: "",
    city: "",
    latitude: 59.334591,
    longitude: 18.06324
  });
  const [addresses, setAddresses] = useState<SearchResult[]>([]);
  const [vehicles, setVehicles] = useState<SearchResult[]>([]);

  return (
    <AddressContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        addresses,
        setAddresses,
        vehicles,
        setVehicles
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressContextProvider };
