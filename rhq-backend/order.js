const RHQSheets = require('./RHQsheets')
const jwt = RHQSheets.jwt
const sheets = RHQSheets.sheets
const SHEET_ID = RHQSheets.SHEET_ID

exports.createOrder = function (req, res) {
    jwt.authorize((err, response) => {
        sheets.spreadsheets.values.update({
            auth: jwt,
            spreadsheetId: SHEET_ID,
            range: 'test!A1:A1',
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [["hello"]]
            }
        }, (err) => {
            if (err) {
                console.log('The API returned an error: ' + err)
                return
            }
        }).then(r => {
            res.json({
                message: 'Message saved to excel',
                data: r
            })
        })
    })
}
