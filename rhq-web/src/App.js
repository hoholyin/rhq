import logo from './logo.svg';
import './App.css';
import {createRequestOptions} from "./requestBuilder";

function App() {
    const type = async () => {
        const getOrderSizeRO = createRequestOptions('GET')
        const orderSizePromise = await fetch('http://localhost:8080/api/orders', getOrderSizeRO)
        const orderSizeResult = await orderSizePromise.json()
        const orderSize = orderSizeResult.data
        console.log(orderSize)

        const nextOrderIndex = orderSize + 1
        const nextOrderRow = nextOrderIndex + 1
        // const createOrderRO = createRequestOptions('POST')
        //await fetch('http://localhost:8080/api/order', createOrderRO)
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={() => type()}/>
        <span onClick={() => type()}>Hello</span>
      </header>
    </div>
  );
}

export default App;
