const express = require("express")
const {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController")

const router = express.Router()

// Get all orders
router.get("/", getOrders)

// Get order by ID
router.get("/:id", getOrderById)

// Create a new order
router.post("/", createOrder)

// Update an existing order
router.put("/:id", updateOrder)

// Delete an order
router.delete("/:id", deleteOrder)

module.exports = router
