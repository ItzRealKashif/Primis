const express = require("express");
const app = express();
const PORT = 3003;

app.use('/app-v1', (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})