import logo from "./assets/logo_transparent.png";
import InventoryList from "./InventoryList";
import {apiEndpoint} from "./common";
import {getRequest} from "./requestBuilder";
import {useEffect, useState} from "react";
import Loader from "./Loader";
import "./checkInventoryPage.css"

const CheckInventoryPage = (props) => {
    const [inventoryList, setInventoryList] = useState([]);
    const [allInventories, setAllInventories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function retrieveInventories() {
            setIsLoading(true)
            const inventoryListObject = await getRequest(apiEndpoint + '/inventory')
            const allInventories = inventoryListObject.data.allInventories
            allInventories.map((e) => {
                e.name = e.code
                e.name = e.name.replaceAll("NA", "")
                e.name = e.name.replaceAll("Phone accessories", "")
                e.name = e.name.replaceAll("Airpods case", "")
                e.name = e.name.replaceAll("Phone case", "")
                return e
            })
            setAllInventories(allInventories)
            setInventoryList(allInventories)
            setIsLoading(false)
        }

        retrieveInventories();
    }, [])

    const search = (searchQuery) => {
        const allWords = searchQuery.split(" ")
        console.log(allWords)
        const filteredItems = allInventories.filter((e) => {
            for (const word of allWords) {
                if (!e.code.toLowerCase().includes(word.toLowerCase())) {
                    return false
                }
            }
            return true
        })
        setInventoryList(filteredItems)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div onClick={() => props.navigate("")}>
                    <img src={logo} className="submit-order-app-logo" alt="logo"/>
                </div>
                <input className="input-box" type="text" onChange={e => search(e.target.value)}/>
                <div className="inventory-list-container">
                    {isLoading
                        ? <Loader />
                        :<InventoryList inventoryList={inventoryList}/>}
                </div>
            </header>
        </div>
    )
}

export default CheckInventoryPage;
