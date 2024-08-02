import { useState } from "react";
import { CurrencySelector, TopOfBook } from "./components";
import { useOrderBook } from "./hooks";

const currencies = ["BTC-USD", "ETH-USD", "LTC-USD", "BCH-USD"];

export function Dashboard() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const orderBook = useOrderBook(selectedCurrency);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div>
      <CurrencySelector
        currencies={currencies}
        selectedCurrency={selectedCurrency}
        onSelect={handleCurrencyChange}
      />
      <TopOfBook orderBook={orderBook} />
    </div>
  );
}
