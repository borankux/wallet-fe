const express = require('express')
const app = express()
const home = require('./home')

app.get("/", (req,res) => {
    res.json(home)
})

app.listen("8081")