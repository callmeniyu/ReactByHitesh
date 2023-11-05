import { useState } from "react"
import { InputComp } from "./components/index.js"
import  useCurrencyInfo  from "./hooks/useCurrencyInfo.js"
import "./App.css"

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [convertedCurrency, setCOnvertedCurrency] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = useCurrencyInfo(currency);
  // const options = Object.keys(currencyInfo);
  

    return (
        <div className="base">
        <InputComp
          label="from" 
          amount={amount}
          currency={currency}
          convertedAmount={convertedAmount}
          convertedCurrency={convertedCurrency}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setCurrency(currency)}
          // options={options}
        />
            <button className="swap">Swap</button>
            <InputComp label="to" />
            <button className="main-btn" type="submit">
                Convert to
            </button>
        </div>
    )
}

export default App
