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

export const generateCode = (category, brand, detailed, color, desc) => {
    return category + brand + detailed + color + desc
}
