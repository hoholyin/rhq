import {logoBase64} from "./common";

const { jsPDF } = require("jspdf")

export const generateMailSlip = (order) => {
    const doc = new jsPDF('l', "mm", [148, 105])

    doc.addImage(logoBase64, "png", 10, 37, 30, 30)
    doc.text("Mailing Address:\n\n" + formatAddress(order.addr), 43, 40)
    doc.save(order.invoice + ".pdf")
}

const formatAddress = (addr) => {
    let formatted = addr.split(" ")
    formatted = formatted.map((e) => {
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
