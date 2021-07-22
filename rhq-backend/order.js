
const RHQSheets = require('./RHQsheets')
const {getRange} = require("./common");
const SALES_SHEET_NAME = "Sales"

exports.createOrder = function (req, res) {
    const row = req.body.row_number
    const detailsBatch = getRange(SALES_SHEET_NAME, "A", "H", row)
    const qtyBatch = getRange(SALES_SHEET_NAME, "K", "K", row)
    const discountBatch = getRange(SALES_SHEET_NAME, "M", "M", row)
    const miscBatch = getRange(SALES_SHEET_NAME, "O", "Q", row)
    const data = [
        {
            range: detailsBatch,
            values: [[
                req.body.customer,
                req.body.invoice_number,
                req.body.invoice_date,
                req.body.category,
                req.body.brand,
                req.body.detailed,
                req.body.color,
                req.body.desc
            ]]
        },
        {
            range: qtyBatch,
            values: [[
                req.body.qty
            ]]
        },
        {
            range: discountBatch,
            values: [[
                req.body.discount
            ]]
        },
        {
            range: miscBatch,
            values: [[
                req.body.status,
                req.body.remarks,
                req.body.tips
            ]]
        }
    ]
    RHQSheets.batchUpdate(
        data,
        (err) => {
            if (err) {
                console.log('The API returned an error: ' + err)
                return
            }
            res.status(200).json({
                message: "OK"
            })
        }
    )
}
