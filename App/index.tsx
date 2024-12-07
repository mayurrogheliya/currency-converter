import React from "react";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";

const App: React.FC = () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};

export default App;
