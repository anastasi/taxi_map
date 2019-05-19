import React from "react";
import { IAddress } from "../../context/AddressContext";

const SelectedAddress: React.FunctionComponent<{
  selectedAddress: IAddress;
}> = ({ selectedAddress }) => {
  return (
    <h4>
      Your address:<span>{selectedAddress.streetName} {selectedAddress.city}</span>
    </h4>
  );
};

export default SelectedAddress;
