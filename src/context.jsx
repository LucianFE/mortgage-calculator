/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setIntersetRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isError, setIsError] = useState([]);

  const interest = interestRate / (100 * 12);
  const period = mortgageTerm * 12;

  const monthlyPay =
    (mortgageAmount * interest * (1 + interest) ** period) /
    ((1 + interest) ** period - 1);
  const totalPay = monthlyPay * period;
  const monthlyInterest = monthlyPay - mortgageAmount / period;
  const totalInterest = totalPay - mortgageAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = [];

    if (mortgageAmount.trim().length < 1) {
      errors.push("mortgageAmount");
    }
    if (mortgageTerm.length < 1) {
      errors.push("mortgageTerm");
    }
    if (interestRate.length < 1) {
      errors.push("interestRate");
    }
    if (mortgageType.trim().length < 1) {
      errors.push("mortgageType");
    }

    if (errors.length > 0) {
      setIsError(errors);
    } else {
      setIsError([]);
      setIsCompleted(true);
    }
  };

  const handleClearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setIntersetRate("");
    setMortgageType("");
    setIsCompleted(false);
    setIsError([]);
  };
  const formatNumber = (num) => {
    if (!num) return "";
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <AppContext.Provider
      value={{
        mortgageAmount,
        setMortgageAmount,
        mortgageTerm,
        setMortgageTerm,
        interestRate,
        setIntersetRate,
        mortgageType,
        setMortgageType,
        isCompleted,
        setIsCompleted,
        isError,
        setIsError,
        handleSubmit,
        handleClearAll,
        monthlyPay,
        monthlyInterest,
        totalInterest,
        totalPay,
        formatNumber,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
