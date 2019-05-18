import React, { useState, useContext } from "react";
import SelectedAddress from "./SelectedAddress";
import { AddressContext } from "../../context/AddressContext";
import AddressesList from "./AddressesList"

const Search: React.FunctionComponent<any> = () => {
  const {
    addresses,
    setAddresses,
    setSelectedAddress,
    selectedAddress,
  } = useContext(AddressContext);

  const [value, setValue] = useState<string>("");
  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value) return;
    const response = await fetch(
      `https://cabonline-frontend-test.herokuapp.com/addresses?q=${
        e.target.value
      }`
    );
    const addresses = await response.json();
    setAddresses(addresses);
  };

  const handleOnClick = async (id: number) => {
    //Select one address
    const singleAddress = addresses.find(
      (item) => item.id === id
    );
    //Reshape selectedAddress for showing clicked address
    if (singleAddress) {
      setSelectedAddress({
        id: singleAddress.id,
        streetName: singleAddress.streetName,
        city: singleAddress.city,
        latitude: singleAddress.latitude,
        longitude: singleAddress.longitude
      });
      setSelectedAddress(singleAddress);
      setAddresses([]);
    }
  };
  return (
    <div>
      <h1>Search</h1>
      <form>
        <input
          type="text"
          value={value}
          placeholder="Search address..."
          onChange={handleOnChange}
          required
        />
        <button type="submit">Search</button>
      </form>

      {selectedAddress && <SelectedAddress selectedAddress={selectedAddress} />}
      <div>
        {value.length > 0 &&
          addresses.map((address) => {
            return (
              <AddressesList address={address} onClick={() => handleOnClick(address.id)} />
            );
          })}
      </div>
    </div>
  );
};

export default Search;
