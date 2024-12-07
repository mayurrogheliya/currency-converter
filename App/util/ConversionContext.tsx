import React, { createContext, ReactNode, useState } from "react";

interface ConversionContextType {
  baseCurrency: string;
  quoteCurrency: string;
  swapCurrency: () => void;
  setBaseCurrency: (currency: string) => void;
  setQuoteCurrency: (currency: string) => void;
}

export const ConversionContext = createContext<
  ConversionContextType | undefined
>(undefined);

interface ConversionContextProviderProps {
  children: ReactNode;
}

export const ConversionContextProvider: React.FC<
  ConversionContextProviderProps
> = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");

  const swapCurrency = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
