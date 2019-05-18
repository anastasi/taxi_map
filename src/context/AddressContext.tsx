import React, { useState } from "react";

export interface IAddress {
  id: number;
  streetName: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface IAddressContext {
  selectedAddress: IAddress;
  setSelectedAddress: (selectedAddress: IAddress) => void;
  addresses: IAddress[];
  setAddresses: (addresses: IAddress[]) => void;
}

const initialState: IAddressContext = {
  selectedAddress: {
    id: 0,
    streetName: "",
    city: "",
    latitude: 59.334591,
    longitude: 18.06324
  },
  setSelectedAddress: () => {},
  addresses: [],
  setAddresses: () => {},
};

const AddressContext = React.createContext(initialState);

const AddressContextProvider: React.FunctionComponent = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(initialState.selectedAddress);
  const [addresses, setAddresses] = useState<IAddress[]>(initialState.addresses);

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
