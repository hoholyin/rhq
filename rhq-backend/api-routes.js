
let router = require('express').Router();
const order = require('./order');
const orders = require("./orders");

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'welcome to backend'
    });
});

router.route('/order')
    .post(order.createOrder)

router.route('/orders')
    .get(orders.getOrdersSize)

//Export API routes
module.exports = router;
