import React, { useState } from "react";
import SelectedAddress from "./SelectedAddress";

interface SearchResult {
  text: string;
  singleAddress: object;
  id: number;
  streetName: string;
  city: string;
  latitude: number;
  longtitude: number;
}
const Search: React.FunctionComponent<any> = () => {
  const [value, setValue] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState({
    id: 0,
    streetName: "",
    city: "",
    latitude: 0,
    longtitude: 0
  });

  const [addresses, setAddresses] = useState<SearchResult[]>([]);

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
    const singleAddress = addresses.find(item => item.id === id);
    //Reshape selectedAddress for showing clicked address
    if (singleAddress) {
      setSelectedAddress({
        id: singleAddress.id,
        streetName: singleAddress.streetName,
        city: singleAddress.city,
        latitude: singleAddress.latitude,
        longtitude: singleAddress.longtitude
      });
      setSelectedAddress(singleAddress);
      setAddresses([]);
    }
  };
  console.log("SINGLE", selectedAddress);

  

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
          addresses.map(address => {
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
