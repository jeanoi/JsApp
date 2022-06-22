const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use('/static/', express.static('static'))


app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/views/home.html'));
});

app.get('/TvSearch',function(req,res) {
  res.sendFile(path.join(__dirname+'/views/TvSearch.html'));
});

app.get('/mine',function(req,res) {
  res.sendFile(path.join(__dirname+'/views/mine.html'));
});

app.get('/etch',function(req,res) {
  res.sendFile(path.join(__dirname+'/views/tictac.html'));
});

app.get('/backEnd', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/backEndHP.html'));
})

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/gamesHP.html'));
})

app.get('/gamesrps', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/rps.html'));
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})