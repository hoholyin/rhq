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
    doc.addImage(logoBase64, "png", 15, 37, 30, 30)
    doc.setFont('Courier', 'bold')
    doc.setFontSize(14)
    doc.text(order.code, 10, 10)
    doc.setFont('Courier', 'bold')
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
        if (e.match(/^(\d{6}|[sS]\d{6})$/g)) {
            return "S(" + e.match(/\d{6}/g)[0] + ")"
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
    formatted = formatted.join(" ").trim()
    // smart indent
    let lines = formatted.split("\n")
    let formattedLines = []
    lines.forEach((line) => {
        const words = line.split(" ")
        let window = ""
        let next = 0
        while (next !== -1) {
            while (next !== -1  && (window + " " + words[next]).length < 23) {
                window += " " + words[next]
                next = next >= words.length - 1 ? -1 : next + 1
            }
            formattedLines.push(window.trimLeft())
            window = ""
        }
    })
    formattedLines = formattedLines.filter(l => l !== "")
    return formattedLines.join("\n")
}
