import React, {useState} from "react";
import Home from "./Home";
import SubmitOrderPage from "./pages/submitOrderPage";
import OrderSubmittedPage from "./pages/orderSubmittedPage";
import CheckInventoryPage from "./pages/checkInventoryPage";
import AddExpensesPage from "./pages/addExpensesPage";
import AddPurchasePage from "./pages/addPurchasePage";
import PendingOrdersPage from "./pages/pendingOrdersPage";

function App() {
    const setPage = (page) => {
        const res = page.split("/");
        const path = res[res.length - 1]
        switch (path) {
            case "":
                return (
                    <Home navigate={setCurrentPage} />
                )
            case "checkInventory":
                return (
                    <CheckInventoryPage navigate={setCurrentPage}/>
                )
            case "pendingOrders":
                return (
                    <PendingOrdersPage navigate={setCurrentPage}/>
                )
            case "submitOrder":
                return (
                    <SubmitOrderPage navigate={setCurrentPage}/>
                )
            case "addExpenses":
                return (
                    <AddExpensesPage navigate={setCurrentPage}/>
                )
            case "addPurchase":
                return (
                    <AddPurchasePage navigate={setCurrentPage}/>
                )
            case "orderSubmitted":
                return (
                    <OrderSubmittedPage navigate={setCurrentPage}/>
                )
           default:
               return (
                   <Home navigate={setCurrentPage} />
               )
        }
    }

    const getPage = () => {
        const url = window.location.href.split("/");
        return url[url.length - 1];
    }

    const [currentPage, setCurrentPage] = useState(getPage());

    return (
    <div className="App">
        {setPage(currentPage)}
    </div>
  );
}

export default App;
