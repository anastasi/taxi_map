import React from "react";
import GoogleMap from "./components/GoogleMap";
import Search from "./components/Search";
import "./App.css";
import { AddressContextProvider } from "./AddressContext";

const App: React.FC = () => {
  return (
    <AddressContextProvider>
      <div className="App">
        <Search />
        <GoogleMap />
      </div>
    </AddressContextProvider>
  );
};

export default App;
