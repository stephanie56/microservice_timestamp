
const path = require('path'),
      join = path.join,
      resolve = path.resolve,
      VIEWS = join(__dirname, "views");

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

// static route
app.get('/', (req, res) => {
  res.sendFile(join(VIEWS, "index.html"));
});

// dynamic route
app.get('/:param', (req, res) => {
  // POST result based on req.url
  const userInput = req.params.param;
  const POST = {};
  
  // Condition: typeof unserInput
  // 1. userInput is a Number: (userInput) => natural(userInput)
  // 2. userInput is not a Number:
  //    a. Date.parse(userInput) is a Number: (userInput) => unix(userInput)
  //    b. Date.parse(userInput) is not a Number: send null
   
  if (!isNaN(userInput)) {
    res.send({
      "unix": userInput,
      "natural": new Date(userInput * 1000).toDateString()
    });
  }
  if (!isNaN(Date.parse(userInput))) {
    res.send({
      "unix": Date.parse(userInput) / 1000,
      "natural": userInput
    });
  }
  res.send({
    "unix": null,
    "natural": null
  });
});

app.listen(PORT);
