import React from "react";
import { IAddress } from "../../context/AddressContext";

const SelectedAddress: React.FunctionComponent<{
  selectedAddress: IAddress;
}> = ({ selectedAddress }) => {
  return (
    <h4>
      {selectedAddress.streetName} {selectedAddress.city}
    </h4>
  );
};

export default SelectedAddress;
