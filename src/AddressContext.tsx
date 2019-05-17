import React, { useState } from "react";
import { any } from "prop-types";

export interface SearchResult {
  text: string;
  singleAddress: object;
  id: number;
  streetName: string;
  city: string;
  latitude: number;
  longtitude: number;
  selectedAddress: object;
  setSelectedAddress: Function;
  addresses: any;
  setAddresses: Function;
}

const initialState: any = {
  text: "",
  singleAddress: {},
  id: 0,
  streetName: "",
  city: "",
  latitude: 0,
  longtitude: 0,
  selectedAddress: {},
  setSelectedAddress: () => {},
  addresses: any,
  setAddresses: () => {}
};

const AddressContext = React.createContext(initialState);

const AddressContextProvider: React.FunctionComponent = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState({
    id: 0,
    streetName: "",
    city: "",
    latitude: 0,
    longtitude: 0
  });
  const [addresses, setAddresses] = useState<SearchResult[]>([]);
  return (
    <AddressContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        addresses,
        setAddresses
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressContextProvider };
