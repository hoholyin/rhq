import logo from './logo.svg';
import './App.css';
import {createRequestOptions} from "./requestBuilder";
import {generateCode, generateNextInvoiceNumber, generateTodayDate} from "./common";

function App() {

    const submitOrder = async () => {
        const code = generateCode('Phone case', 'Apple', '12 Pro max', 'Clear', '')
        const getItemRowRO = createRequestOptions('POST', {code: code})
        const itemRowPromise = await fetch('http://localhost:8080/api/inventoryRow', getItemRowRO)
        const itemRowResult = await itemRowPromise.json()
        const itemRow = itemRowResult.data.row

        const getItemQtyRO = createRequestOptions('POST', {row: itemRow})
        const itemQtyPromise = await fetch('http://localhost:8080/api/inventoryQty', getItemQtyRO)
        const itemQtyResult = await itemQtyPromise.json()
        const itemQty = itemQtyResult.data
        const stockIn = parseInt(itemQty.stockIn)
        const stockOut = parseInt(itemQty.stockOut)

        const updateItemQtyRO = createRequestOptions('POST', {row: itemRow, newQty: stockOut - 1})
        const updateItemQtyPromise = await fetch('http://localhost:8080/api/inventoryUpdateQty', updateItemQtyRO)

        const getOrdersInfoRO = createRequestOptions('GET')
        const ordersInfoPromise = await fetch('http://localhost:8080/api/orders', getOrdersInfoRO)
        const ordersInfoResult = await ordersInfoPromise.json()
        const ordersSize = parseInt(ordersInfoResult.data.size)
        const lastInvoiceNumber = ordersInfoResult.data.lastInvoiceNumber

        const nextOrderIndex = ordersSize + 1
        const nextOrderRow = nextOrderIndex + 1

        const currInvoiceNumber = generateNextInvoiceNumber(lastInvoiceNumber)
        const today = generateTodayDate()

        const order = {
            row_number: nextOrderRow,
            customer: 'test_name',
            invoice_number: currInvoiceNumber,
            invoice_date: today,
            category: 'test_cat',
            brand: 'test_brand',
            detailed: 'test_detailed',
            color: 'test_color',
            desc: 'test_desc',
            qty: '1',
            discount: '$0.01',
            status: 'PAID',
            remarks: 'test_remarks',
            tips: '$10',
        }
        const createOrderRO = createRequestOptions('POST', order)
        //await fetch('http://localhost:8080/api/order', createOrderRO)
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={() => submitOrder()}/>
        <span onClick={() => submitOrder()}>Hello</span>
      </header>
    </div>
  );
}

export default App;
