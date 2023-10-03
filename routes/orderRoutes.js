const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.post('/', orderController.addOrder);
router.get('/', orderController.getOrders);
router.get('/:id', orderController.getSingleOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;