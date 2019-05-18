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
    <p key={address.id} onClick={onClick}>
      {address.streetName}
    </p>
  );
};

export default AddressesList;
