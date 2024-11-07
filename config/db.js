const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB Connected successfully")
}).catch((err) => {
  console.log("MongoDB connection failed. Error:", err)
})

module.exports = connectDB