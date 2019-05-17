import React, { useState, useContext } from "react";
import SelectedAddress from "./SelectedAddress";
import { AddressContext, SearchResult } from "../AddressContext"


const Search: React.FunctionComponent<any> = () => {

const {addresses, setAddresses, setSelectedAddress,selectedAddress  } = useContext(AddressContext)
  
  const [value, setValue] = useState<string>("");
  const handleOnChange = async (e: any) => {
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

  const handleOnClick = (id: number) => {
    //Select one address
    const singleAddress = addresses.find((item: SearchResult) => item.id === id);
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

      {selectedAddress && (
        <SelectedAddress selectedAddress={selectedAddress} />
      )}

      <div>
        {value.length > 0 &&
          addresses.map((address: SearchResult)  => {
            return (
              <p key={address.id} onClick={() => handleOnClick(address.id)}>
                {address.streetName}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
