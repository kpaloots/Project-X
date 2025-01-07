const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test API
app.get("/api/test", (req, res) => {
    res.json({ message: "Node.js backend töötab!" });
});

app.listen(PORT, () => {
    console.log(`Server töötab pordil ${PORT}`);
});
