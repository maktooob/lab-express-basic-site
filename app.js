const express = require('express');
const app = express();
app.listen(3001, () => console.log("express app listening in port 3001"));
app.use(express.static('public'))


app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
}) 

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get("/photo-gallery", (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})
