const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  if (req.method === 'OPTIONS') {
    res.end('')
  } else {
    next()
  }
})

const sliders = require('./mock/sliders')
app.get('/api/sliders', function(req, res) {
  res.json({
    code: 0,
    data: sliders
  })
})

app.listen(7001)