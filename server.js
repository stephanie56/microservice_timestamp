
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
  const POST = {
   "unix": null,
   "natural": null
  };
  
  // Condition: is unserInput or Date.parse(userInput) a Number?
  // 1. userInput is a Number: (userInput) => NUMBER_TO_DATE(userInput)
  // 2. userInput is not a Number:
  //    a. Date.parse(userInput) is a Number: (userInput) => unix(userInput)
  //    b. Date.parse(userInput) is not a Number: send null
  
  // userInput is a Number: 
  if (!isNaN(userInput)) {
    POST.unix = userInput;
    POST.natural = NUMBER_TO_DATE(userInput);
  }
  
  // userInput is not a Number && Date.parse(userInput) is a Number: 
  if (isNaN(userInput) && !isNaN(Date.parse(userInput))) {
    POST.unix = DATESTRING_TO_UNIX(userInput);
    POST.natural = userInput;;
  }
      
  res.send(POST);
      
});

app.listen(PORT);
