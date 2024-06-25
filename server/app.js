const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/login", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkEmail = await collection.findOne({ email: email });
    if (checkEmail) {
      res.json("User exists");
    } else {
      res.json("User Does Not exist");
    }
  } catch (error) {
    res.status(500).json("Error");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const userData = {
    email: email,
    password: password,
  };

  try {
    const checkEmail = await collection.findOne({ email: email });
    if (checkEmail) {
      res.json("User exists");
    } else {
      await collection.insertMany([userData]);
      res.json("User registered");
    }
  } catch (error) {
    res.status(500).json("Error");
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
