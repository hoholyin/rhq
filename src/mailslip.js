import {logoBase64} from "./common";

const { jsPDF } = require("jspdf")

export const generateMailSlip = (orders) => {
    if (orders.length === 0) {
        return
    }
    const filename = orders[0].invoice
    const doc = new jsPDF('l', "mm", [190, 105])
    populateMailSlip(doc, orders[0])
    orders.shift()

    orders.forEach((order) => {
        doc.addPage([190, 105], "l")
        populateMailSlip(doc, order)
    })
    doc.save(filename + ".pdf")
}

const populateMailSlip = (doc, order) => {
    console.log(order)
    doc.addImage(logoBase64, "png", 15, 37, 30, 30)
    doc.setFont('Helvetica')
    doc.setFontSize(8)
    doc.text(order.code, 48, 10)
    doc.setFont('Helvetica', 'bold')
    doc.setFontSize(28)
    const addr = order.addr ? order.addr : ""
    doc.text("Mailing Address:\n\n" + formatAddress(addr), 48, 20)
}

const formatAddress = (addr) => {
    addr = addr.replace(",", " ")
    addr = addr.replaceAll("//", "\n")
    console.log(addr)
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
        if ((e.length === 6 && !isNaN(e)) || (e.length === 7 && !isNaN(e.substring(1)))) {
            while (e.length > 6) {
                e = e.substring(1)
            }
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
