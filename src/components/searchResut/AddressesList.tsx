import React from "react";
import { IAddress } from "../../context/AddressContext";

interface IAddressListProps {
  address: IAddress;
  onClick: () => void;
}
const AddressesList: React.FunctionComponent<IAddressListProps> = ({
  address,
  onClick
}) => {
  return (
    <div className="list-item" key={address.id} onClick={onClick}>
      <p>
        {address.streetName}
        <span>{address.city}</span>
      </p>
    </div>
  );
};

export default AddressesList;
