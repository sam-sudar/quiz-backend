const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const PORT = 4000;

app.use(cors());

app.get("/scores", (req, res) => {
  fs.readFile("score.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read scores" });
    }
    res.setHeader("Cache-Control", "no-cache"); // force latest data
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Score backend running on http://localhost:${PORT}`);
});
