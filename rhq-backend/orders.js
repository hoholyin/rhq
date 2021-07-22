const RHQSheets = require('./RHQsheets')

const numberOfOrdersRange = 'RHQServer!A2:A2'
const lastInvoiceNumberRange = 'RHQServer!B2:B2'

exports.getOrdersInfo = function (req, res) {
    RHQSheets.batchGet(
        [numberOfOrdersRange, lastInvoiceNumberRange],
        (err, result) => {
            if (err) {
                res.status(500).json({error: 'Internal server error'})
            }
            const size = result.data.valueRanges[0].values[0][0]
            const lastInvoiceNumber = result.data.valueRanges[1].values[0][0]
            res.status(200).json({
                message: "OK",
                data: {
                    size: size,
                    lastInvoiceNumber: lastInvoiceNumber
                }
            })
        }
    )
}
