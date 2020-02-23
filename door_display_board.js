const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');

var message = "Take stuff for dentist!"
const PORT = 7496


const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));





app.get('/message', (req, res) => {
  fs.readFile('message.json', (err, data) => {
    if (err) throw err;
    let message = JSON.parse(data).message;
    res.send(message)
  });

})

app.post('/update_message', (req, res) => {
  let data = JSON.stringify(req.body, null, 2);

  fs.writeFile('message.json', data, (err) => {
      if (err) throw err;
      res.send(req.body.message)
  });



})


app.listen(PORT, () => console.log(`[Express] Display board listening on 0.0.0.0:${PORT}`))
