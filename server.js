
const path = require('path'),
      join = path.join,
      resolve = path.resolve,
      VIEWS = join(__dirname, "views");

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();


/** HELPER FUNCTIONS **/

/** NUMBER_TO_DATE
input: Number (unix date)
expected output: String (natural date)
**/
function NUMBER_TO_DATE(num){
      return naturalDateString;
}

/** DATESTRING_TO_UNIX
input: String 
expected output: Number (unix date)
**/
function DATESTRING_TO_UNIX(datestring){
      return unixDate;
}

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
  
  // CASE 1: userInput is a Number: NUMBER_TO_DATE(userInput)
  if (!isNaN(userInput)) {
    POST.unix = userInput;
    POST.natural = NUMBER_TO_DATE(userInput);
    res.send(POST);
  } 
  // CASE 2: userInput is not a Number BUT Date.parse(userInput) is a Number: DATESTRING_TO_UNIX(userInput)
  else if (isNaN(userInput) && !isNaN(Date.parse(userInput))) {
    POST.unix = DATESTRING_TO_UNIX(userInput);
    POST.natural = userInput;
    res.send(POST);
  } 
  else {
    res.send(POST);
  }
});

app.listen(PORT);
