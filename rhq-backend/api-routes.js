
let router = require('express').Router();
const order = require('./order');
const orders = require("./orders");
const inventory = require("./inventory");

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'welcome to backend'
    });
});

router.route('/order')
    .post(order.createOrder)

router.route('/orders')
    .get(orders.getOrdersInfo)

router.route('/inventoryRow')
    .post(inventory.getInventoryRow)

router.route('/inventoryQty')
    .post(inventory.getInventoryQty)

router.route('/inventoryUpdateQty')
    .post(inventory.updateInventoryQty)

//Export API routes
module.exports = router;
