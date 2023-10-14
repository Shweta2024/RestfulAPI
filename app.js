require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const app = express()

const db_url =  "mongodb+srv://admin-shweta:"
            +   `${process.env.DB_PASSWORD}`
            +   "@cluster0.vtowurn.mongodb.net/RestDB";
            
mongoose.connect(db_url)

app.listen(PORT, (req, res) => {
    console.log(`server started at port : ${PORT}`)
})

