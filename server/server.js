const express = require("express");
const app = express();
const port = 3000;

// Define your routes here
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
