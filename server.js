const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});


const user_input = "1450137600";
app.get('/user_input', (req, res) => {
  res.send('hey you');
});

app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}.`);
});
