export const generateTodayDate = () => {
    const year = new Date().getFullYear().toString()
    const month = (new Date().getMonth() + 1).toString()
    const day = new Date().getDate().toString()
    return day + "/" + month + "/" + year
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

export const generateNextCashInIndexNumber = (lastCashInIndexNumber) => {
    lastCashInIndexNumber += 1
    lastCashInIndexNumber = lastCashInIndexNumber.toString()
    while (lastCashInIndexNumber.length < 3) {
        lastCashInIndexNumber = "0" + lastCashInIndexNumber
    }
    return "CI" + lastCashInIndexNumber
}

export const generateCode = (category, brand, detailed, color, desc) => {
    return category + brand + detailed + color + desc
}

export const itemExists = (row) => {
    return row >= 4
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
    "X/XS"
]
export const appleCategoryList = [
    "Phone case",
    "Airpods case",
    "Screen protector"
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
    "NA"
]
