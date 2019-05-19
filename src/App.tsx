import React, { useContext } from "react";
import GoogleMap from "./components/googleMap/GoogleMap";
import Search from "./components/searchResut/Search";
import { AddressContextProvider } from "./context/AddressContext";
import { VehicleContextProvider } from "./context/VehicleContext";
import Header from "./common/Header";

const App: React.FC = () => {
  return (
    <AddressContextProvider>
      <VehicleContextProvider>
        <div className="App">
          <Header />
          <Search />
          <GoogleMap />
        </div>
      </VehicleContextProvider>
    </AddressContextProvider>
  );
};

export default App;
