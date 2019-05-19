import React, { useState, useContext } from "react";
import SelectedAddress from "./SelectedAddress";
import { AddressContext } from "../../context/AddressContext";
import AddressesList from "./AddressesList";
import { fetchAddress } from "../../api";
import Loading from "../Loading";
import { Container, List } from "./StyledSearch";

const Search: React.FunctionComponent<any> = () => {
  const {
    addresses,
    setAddresses,
    setSelectedAddress,
    selectedAddress
  } = useContext(AddressContext);

  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!e.target.value) return;
    try {
      setIsLoading(true);
      const addresses = await fetchAddress(e.target.value);
      setAddresses(addresses);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleOnClick = (id: number) => {
    //Select one address
    const singleAddress = addresses.find(item => item.id === id);
    //Reshape selectedAddress for showing clicked address
    if (singleAddress) {
      setSelectedAddress(singleAddress);
      setAddresses([]);
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const firstAddress = addresses[0];
    if (firstAddress) {
      setSelectedAddress(firstAddress);
      setAddresses([]);
    }
  };

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <div className="form-wrapper">
          <input
            type="text"
            value={value}
            placeholder="Find your address..."
            onChange={handleOnChange}
            required
          />
          <button type="submit">Search</button>
          {isLoading && <Loading />}

          {isError ? (
            <p className="error">Address is not found</p>
          ) : (
            <List>
              {value.length > 0 &&
                addresses.map(address => {
                  return (
                    <AddressesList
                      address={address}
                      onClick={() => handleOnClick(address.id)}
                    />
                  );
                })}
            </List>
          )}
          {selectedAddress.streetName && (
            <SelectedAddress selectedAddress={selectedAddress} />
          )}
        </div>
      </form>
    </Container>
  );
};

export default Search;
