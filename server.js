const express = require("express");
const path = require("path");
const api = require("/routes")

const PORT = process.env.port || 3001

const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use("/api", api)

app.use(express.static("public"));

//GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
)