// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
let port = 8080;
const cors = require('cors');
let apiRoutes = require('./api-routes')

app.use(cors())
app.use(express.json())
app.use('/api', apiRoutes)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running backend on port " + port);
});
