const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/scores", (req, res) => {
  fs.readFile(__dirname + "/score.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read scores" });
    }
    res.setHeader("Cache-Control", "no-cache");
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Score backend running on http://localhost:${PORT}`);
});
