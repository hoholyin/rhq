const RHQSheets = require("./RHQsheets");
const {getRange} = require("./common");

const INVENTORY_SHEET_NAME = 'Inventory'

exports.getInventoryRow = function (req, res) {
    const CODE_COLUMN = INVENTORY_SHEET_NAME + "!F:F"
    const code = req.body.code
    RHQSheets.batchGet(
        [CODE_COLUMN],
        (err, result) => {
            if (err) {
                res.status(500).json({error: 'Internal server error'})
                return
            }
            const items = result.data.valueRanges[0].values.map(item => {
                if (item == null) {
                    return "0"
                }
                return item[0]
            })
            const row = items.indexOf(code) + 1
            res.status(200).json({
                message: "OK",
                data: {
                    row: row
                }
            })
        }
    )
}

exports.updateInventoryQty = function (req, res) {
    const row = req.body.row
    const stockOutBatch = getRange(INVENTORY_SHEET_NAME, "L", "L", row)
    const data = [
        {
            range: stockOutBatch,
            values: [[
                req.body.newQty
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

exports.getInventoryQty = function (req, res) {
    const row = req.body.row
    const inventoryRange = getRange(INVENTORY_SHEET_NAME, "K", "L", row)
    RHQSheets.batchGet(
        [inventoryRange],
        (err, result) => {
            if (err) {
                res.status(500).json({error: 'Internal server error'})
                return
            }
            const stockIn = result.data.valueRanges[0].values[0][0]
            const stockOut = result.data.valueRanges[0].values[0][1]
            res.status(200).json({
                message: "OK",
                data: {
                    stockIn: stockIn,
                    stockOut: stockOut
                }
            })
        }
    )
}
