import React, { useState } from "react";

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
    const singleAddress = addresses.find(item => item.id === id);
    if (singleAddress) {
      setSelectedAddress({
        id: singleAddress.id,
        streetName: singleAddress.streetName,
        city: singleAddress.city,
        latitude: singleAddress.latitude,
        longtitude: singleAddress.longtitude
      });
      setSelectedAddress(singleAddress);
      setAddresses([])
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
        <div>
          <h4 key={selectedAddress.id}>
            {selectedAddress.streetName} {selectedAddress.city}
          </h4>
        </div>
      )}

      <div>
        {value.length > 0 &&
          addresses.map(address => {
            return (
              <p onClick={() => handleOnClick(address.id)}>
                {address.streetName}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
