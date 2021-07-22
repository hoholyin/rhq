const RHQSheets = require('./RHQsheets')
const jwt = RHQSheets.jwt
const sheets = RHQSheets.sheets
const SHEET_ID = RHQSheets.SHEET_ID

const ordersSizeRange = 'RHQServer!A2:A2'

exports.getOrdersSize = function (req, res) {
    jwt.authorize((err, result) => {
        sheets.spreadsheets.values.batchGet({
            auth: jwt,
            spreadsheetId: SHEET_ID,
            ranges: [ordersSizeRange]
        }, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Internal server error'})
            }
            const size = result.data.valueRanges[0].values[0][0]
            res.status(200).json({
                message: "OK",
                data: size
            })
        })
    })
}
