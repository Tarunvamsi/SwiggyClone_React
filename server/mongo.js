const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/swiggy-users")
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database connection failed");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
