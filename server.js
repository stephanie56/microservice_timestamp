const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get('/:param', (req, res) => {
  const userInput = req.params.param;
  if (!isNaN(userInput)) {
    res.send({
      "unix": userInput,
      "natural": new Date(userInput * 1000).toDateString()
    });
  }
  if (!isNaN(Date.parse(userInput))) {
    res.send({
      "unix": Date.parse(userInput),
      "natural": userInput
    });
  }
  res.send({
    "unix": null,
    "natural": null
  });
});

app.listen(PORT);
