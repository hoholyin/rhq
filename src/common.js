import {createRequestOptions} from "./requestBuilder";

export const generateTodayDate = () => {
    const year = new Date().getFullYear().toString()
    const month = (new Date().getMonth() + 1).toString()
    const day = new Date().getDate().toString()
    return month + "/" + day + "/" + year
}
export const generateNextInvoiceNumber = (lastInvoiceNumber) => {
    const year = lastInvoiceNumber.substring(0, 4)
    const month = lastInvoiceNumber.substring(4, 6)
    let index = parseInt(lastInvoiceNumber.substring(6))

    const currYear = new Date().getFullYear().toString()
    let currMonth = (new Date().getMonth() + 1).toString()
    if (currMonth.length === 1) {
        currMonth = "0" + currMonth
    }

    if (year === currYear && month === currMonth) {
        index += 1
        index = index.toString()
        while (index.length < 3) {
            index = "0" + index
        }
        return year + month + index
    }
    return currYear + currMonth + "001"
}

export const generateNextCashInOutIndexNumber = (lastCashInIndex) => {
    let lastCashInIndexNumber = parseInt(lastCashInIndex.substring(2))
    lastCashInIndexNumber += 1
    lastCashInIndexNumber = lastCashInIndexNumber.toString()
    while (lastCashInIndexNumber.length < 3) {
        lastCashInIndexNumber = "0" + lastCashInIndexNumber
    }
    return lastCashInIndex.substring(0, 2) + lastCashInIndexNumber
}

export const itemExists = (row) => {
    return row >= 2
}

export const isPrice = (price) => {
    if (!price.startsWith("$")) {
        return false
    }
    try {
        const trimmed = price.substring(1)
        return !isNaN(trimmed)
    } catch (err) {
        return false
    }
}


export const addPrice = (p1, p2) => {
    if (!isPrice(p1) || !isPrice(p2)) {
        return "$0.00"
    }
    const p1Float = parseFloat(p1.substring(1))
    const p2Float = parseFloat(p2.substring(1))
    let totalFloat = (p1Float + p2Float).toString()
    if (!totalFloat.includes(".")) {
        totalFloat += ".00"
    }
    while (totalFloat.split(".")[1].length > 2) {
        totalFloat = totalFloat.slice(0, -1)
    }
    while (totalFloat.split(".")[1].length < 2) {
        totalFloat += "0"
    }
    return "$" + totalFloat
}

export const toLocObjectArray = (locString) => {
    if (locString === "NA") {
        return []
    }
    let parts = locString.split(",")
    return parts.map((e) => e.trim())
        .map((e) => {
            const name = e.split("(")[0]
            const qty = e.split("(")[1].split(")")[0]
            return {
                name: name,
                qty: parseInt(qty)
            }
        })
}

export const isInteger = (num) => {
    return !isNaN(parseInt(num))
}

export const toLocString = (locObjectArray) => {
    if (locObjectArray.length === 0) {
        return "NA"
    }
    return locObjectArray.map((e) => {
        return e.name + "(" + e.qty + ")"
    }).join(", ")
}

export const apiEndpoint = "https://rhq-backend.herokuapp.com/api"

export const appleDetailedList = [
    "Airpods 1/2",
    "Airpods Pro",
    "12",
    "12/ 12 Pro",
    "12 Pro max",
    "12 Pro",
    "11",
    "11 Pro",
    "11 Pro max",
    "X/XS",
    "38mm-40mm",
    "40mm-42mm",
]
export const appleCategoryList = [
    "Phone case",
    "Airpods case",
    "Screen protector",
    "Watch Strap"
]

export const samsungDetailedList = [
    "S21",
    "S21 Plus",
    "S21 Ultra",
    "Note 20",
    "Note 20 Ultra"
]

export const samsungCategoryList = [
    "Phone case",
    "Screen protector"
]

export const naDetailedList = [
    "Selfie ring light",
    "Magnetic car mount stand ring",
]

export const naCategoryList = [
    "Phone accessories"
]

export const defaultColorList = [
    "Azure",
    "Black",
    "Silver",
    "White",
    "Red",
    "Pink",
    "Clear",
    "Blue",
    "Gold",
    "NA"
]

export const defaultDescList = [
    "Border",
    "Matt",
    "Ultra thick",
    "Camera cover",
    "Milanese loop",
    "NA"
]

export const isBossCorrect = async (bossName) => {
    const getBossNamesRO = createRequestOptions('GET')
    const bossNamesPromise = await fetch(apiEndpoint + '/bossNames', getBossNamesRO)
    const bossNamesResult = await bossNamesPromise.json()
    const bossNames = bossNamesResult.data.bossNames
    for (const index in bossNames) {
        if (bossNames[index].toUpperCase() === bossName.toUpperCase()) {
            return true
        }
    }
    return false
}

export const updatePrice = (price, callback) => {
    if (!price.startsWith("$")) {
        callback("$")
        return
    }
    callback(price)
}

