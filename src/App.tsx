import React from "react";
import GoogleMap from "./components/googleMap/GoogleMap";
import Search from "./components/searchResut/Search";
import { AddressContextProvider, VehicleContextProvider } from "./context";
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
