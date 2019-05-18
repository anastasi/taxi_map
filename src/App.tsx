import React from "react";
import GoogleMap from "./components/googleMap/GoogleMap";
import Search from "./components/searchResut/Search";
import { AddressContextProvider } from "./context/AddressContext";
import { VehicleContextProvider } from "./context/VehicleContext";

const App: React.FC = () => {
  return (
    <AddressContextProvider>
      <VehicleContextProvider>
        <div className="App">
          <Search />
          <GoogleMap />
        </div>
      </VehicleContextProvider>
    </AddressContextProvider>
  );
};

export default App;
