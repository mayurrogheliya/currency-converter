import React, { useEffect } from "react";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";
import { api } from "./util/api";

const App: React.FC = () => {
  useEffect(() => {
    api("/latest?base=usd")
      .then((response) => {
        console.log("response: ", response);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  }, []);
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};

export default App;
