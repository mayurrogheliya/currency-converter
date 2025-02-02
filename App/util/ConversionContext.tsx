import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./api";
import { Alert } from "react-native";

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
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  const setBaseCurrency = (currency: string) => {
    setIsLoading(true);
    return api(`/latestsdfs?base=${currency}`)
      .then((response) => {
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((error) => {
        Alert.alert("Sorry, something went wrong.", error.message);
      })
      .finally(() => {
        setIsLoading(false);
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
    isLoading,
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
