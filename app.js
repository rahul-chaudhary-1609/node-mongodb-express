require("dotenv").config()
const express = require("express")

const app = express();
const PORT = process.env.PORT || 4321;


app.get("/", (req, res) => {
    res.send("Hello There...")
})


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error in starting the server!")
    }
    console.log(`Server Started successfully at ${PORT}`)
})