const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get('/:id', (req, res) => {
  const userInput = req.params.id;
  if (!isNaN(userInput)){
    res.send({
      "unix": userInput,
      "natural": new Date(userInput).toString()
    });
  }
  else {
    res.send({
      "unix": null,
      "natural": null
    });
  }
});

app.listen(PORT);
