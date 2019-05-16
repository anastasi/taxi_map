import React, { useState } from "react";

interface SearchResult {
  text: string;
  streetName: string;
}
const Search: React.FunctionComponent<any> = () => {
  const [value, setValue] = useState<string>("");
  const [addresses, setAddresses] = useState<SearchResult[]>([]);

  const handleOnChange = async (e: any) => {
    setValue(e.target.value);
    if (!e.target.value) return;
    const response = await fetch(
      `https://cabonline-frontend-test.herokuapp.com/addresses?q=${e.target.value}`
    );
    const addresses = await response.json()
    setAddresses(addresses)
  };
  console.log("Addresses", addresses)

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

      <div>
        {value.length > 0 &&
          addresses.map(address => {
            console.log(address.streetName)
            return(
              <p>{address.streetName}</p>
            )
          })
        }
      </div>
    </div>
  );
};

export default Search;
