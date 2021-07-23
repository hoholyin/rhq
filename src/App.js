import logo from './assets/logo_transparent.png';
import React, {useState} from "react";
import Home from "./Home";
import SubmitOrderPage from "./submitOrderPage";
import OrderSubmittedPage from "./orderSubmittedPage";

function App() {
    const setPage = (page) => {
        const res = page.split("/");
        const path = res[res.length - 1]
        switch (path) {
            case "":
                return (
                    <Home navigate={setCurrentPage} />
                )
            case "submitOrder":
                return (
                    <SubmitOrderPage navigate={setCurrentPage}/>
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
