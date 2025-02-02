import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./api";

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

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTED_CURRENCY = "INR";

export const ConversionContextProvider: React.FC<
  ConversionContextProviderProps
> = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTED_CURRENCY);
  const [date, setDate] = useState<string | null>(null);
  const [rates, setRates] = useState<Record<string, number>>({});

  const setBaseCurrency = (currency: string) => {
    return api(`/latest?base=${currency}`)
      .then((response) => {
        console.log("response: ", response);
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((error) => {
        console.error("error: ", error);
      });
  };

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
    date,
    rates,
  };

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);
  }, []);

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
