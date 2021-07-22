//JWT
const {JWT} = require('google-auth-library')
const key = require('./auth.json')
const scope = ['https://www.googleapis.com/auth/spreadsheets']
const jwt = new JWT(key.client_email, null, key.private_key, scope)
//Google
const {google} = require('googleapis')
const sheets = google.sheets('v4')
const SHEET_ID = '1cOWV0hLj859ihSdxIi9m6tYERkYqWK1JTmuVNHirVlw'

exports.batchGet = function (ranges, callback) {
    jwt.authorize((err, result) => {
        sheets.spreadsheets.values.batchGet({
            auth: jwt,
            spreadsheetId: SHEET_ID,
            ranges: ranges
        }, callback)
    })
}

exports.batchUpdate = function(data, callback) {
    jwt.authorize((err, response) => {
        sheets.spreadsheets.values.batchUpdate({
            auth: jwt,
            spreadsheetId: SHEET_ID,
            resource: {
                valueInputOption: "USER_ENTERED",
                data: data
            }
        }, callback)
    })
}
