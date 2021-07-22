//JWT
const {JWT} = require('google-auth-library')
const key = require('./auth.json')
const scope = ['https://www.googleapis.com/auth/spreadsheets']
exports.jwt = new JWT(key.client_email, null, key.private_key, scope)
//Google
const {google} = require('googleapis')
exports.sheets = google.sheets('v4')
exports.SHEET_ID = '1cOWV0hLj859ihSdxIi9m6tYERkYqWK1JTmuVNHirVlw'

