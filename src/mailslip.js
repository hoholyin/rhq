import {logoBase64} from "./common";

const { jsPDF } = require("jspdf")

export const generateMailSlip = (order) => {
    const doc = new jsPDF('l', "mm", [148, 105])

    doc.addImage(logoBase64, "png", 10, 32, 40, 40)
    doc.text("Mailing Address:\n\n" + formatAddress(order.addr), 60, 45)
    doc.save(order.invoice + ".pdf")
}

const formatAddress = (addr) => {
    let formatted = addr.split(" ")
    console.log(formatted)
    formatted = formatted.map((e) => {
        if (e.includes("-") && e.charAt(0) !== '#') {
            return "\n#" + e
        }
        if (e.toUpperCase() === "SINGAPORE") {
            return ""
        }
        if (e.length === 6 && !isNaN(e)) {
            return "S(" + e + ")"
        }
        return e
    })
    console.log(formatted)
    formatted = formatted.map((e) => {
        if (e.includes("(") && e.includes(")")) {
            return "\n" + e
        }
        return e
    })
    console.log(formatted)
    return formatted.join(" ")
}
