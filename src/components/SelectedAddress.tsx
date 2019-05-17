import React from "react";

const SelectedAddress: React.FunctionComponent<any> = ({ selectedAddress }) => {
  return (
    <h4>
      {selectedAddress.streetName} {selectedAddress.city}
    </h4>
  );
};

export default SelectedAddress;
