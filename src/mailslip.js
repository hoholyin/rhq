import {logoBase64} from "./common";

const { jsPDF } = require("jspdf")

export const generateMailSlip = (order) => {
    const doc = new jsPDF('l', "mm", [148, 105])

    doc.addImage(logoBase64, "png", 10, 32, 40, 40)
    doc.text("Mailing Address:\n\n" + order.addr, 60, 45)
    doc.save(order.invoice + ".pdf")
}
