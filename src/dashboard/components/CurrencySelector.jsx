// temporary dropdown for testing WebSocket
// will be replaced with MUI components

export function CurrencySelector({ currencies, selectedCurrency, onSelect }) {
  return (
    <div>
      <select
        value={selectedCurrency}
        onChange={(e) => onSelect(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
