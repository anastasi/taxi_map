import React, { useState } from "react";

export interface IVehicle {
  brand: string;
  lat: number;
  lng: number;
}
export interface IVehicleContext {
  vehicles: IVehicle[];
  setVehicles: (vehicles: IVehicle[]) => void;
}

const initialState: IVehicleContext = {
  vehicles: [],
  setVehicles: () => {}
};

const VehicleContext = React.createContext(initialState);

const VehicleContextProvider: React.FunctionComponent = ({ children }) => {
  const [vehicles, setVehicles] = useState<IVehicle[]>(initialState.vehicles);

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        setVehicles
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export { VehicleContext, VehicleContextProvider };
