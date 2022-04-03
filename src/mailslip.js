import {logoBase64} from "./common";

const { jsPDF } = require("jspdf")

export const generateMailSlip = (orders) => {
    if (orders.length === 0) {
        return
    }
    const filename = orders[0].invoice
    const doc = new jsPDF('l', "mm", [180, 105])
    populateMailSlip(doc, orders[0])
    orders.shift()

    orders.forEach((order) => {
        doc.addPage([180, 105], "l")
        populateMailSlip(doc, order)
    })
    doc.save(filename + ".pdf")
}

const populateMailSlip = (doc, order) => {
    doc.addImage(logoBase64, "png", 15, 37, 30, 30)
    doc.text("Mailing Address:\n\n" + formatAddress(order.addr), 48, 40)
}

const formatAddress = (addr) => {
    addr = addr.replace(",", " ")
    let formatted = addr.split(" ")
    formatted = formatted.map((e) => {
        e = e.trim()
        if (e.includes("#")) {
            return "\n" + e
        }
        if (e.includes("-") && e.charAt(0) !== '#') {
            return "\n#" + e
        }
        if (e.toUpperCase() === "SINGAPORE") {
            return ""
        }
        if (e.length === 6 && !isNaN(e)) {
            return "S(" + e + ")"
        }
        if (e.toUpperCase() === "BLK" || e.toUpperCase() === "BLOCK") {
            return "\n" + "Blk"
        }
        if (e.length > 0 && !isNaN(e.charAt(0))) {
            return e
        }
        return e.charAt(0).toUpperCase() + e.slice(1)
    })
    formatted = formatted.map((e) => {
        if (e.includes("(") && e.includes(")")) {
            return "\n" + e
        }
        return e
    })
    return formatted.join(" ").trim()
}
