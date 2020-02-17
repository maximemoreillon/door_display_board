const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

var message = "Take stuff for dentist!"
const PORT = 7496


const app = express();
app.use(cors())





app.get('/message', (req, res) => {
  res.send(message)
})

app.post('/update_message', (req, res) => {
  message = req.body.message
  res.send('OK')
})


app.listen(PORT, () => console.log(`[Express] Display board listening on 0.0.0.0:${PORT}`))
