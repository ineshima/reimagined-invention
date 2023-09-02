const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, "public");

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.listen("3000", () => {
    console.log('listening......');
})