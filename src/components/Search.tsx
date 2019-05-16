import React, { useState } from "react";

interface SearchResult {
  text: string;
  streetName: string;
}
const Search: React.FunctionComponent<any> = () => {
  const [value, setValue] = useState<string>("");
  const [addresses, setAddresses] = useState<SearchResult[]>([]);
  

  const handleOnChange = async (e: any) => {
    console.log(e.target.value)
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
    </div>
  );
};

export default Search;
