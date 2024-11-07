const express = require("express")
const { getAllOrders, getOrder, createOrder, updateOrderStatus, deleteOrder } = require("../controllers/orderController")

const router = express.Router()

router
  .route("/")
  .get(getAllOrders)
  .post(createOrder)

router
  .route("/:id")
  .get(getOrder)
  .patch(updateOrderStatus)
  .delete(deleteOrder)

module.exports = router
