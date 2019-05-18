import { IAddress } from "../context/AddressContext";

export const fetchVehicles = async (selectedAddress: IAddress) => {
  const response = await fetch(
    `https://cabonline-frontend-test.herokuapp.com/vehicles?lat=${
      selectedAddress.latitude
    }&lng=${selectedAddress.longitude}`
  );
  return await response.json();
};
