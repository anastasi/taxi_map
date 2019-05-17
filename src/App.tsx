import React from "react";
import GoogleMap from "./components/GoogleMap";
import Search from "./components/Search";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Search />
      <GoogleMap />
    </div>
  );
};

export default App;
