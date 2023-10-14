require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const app = express()

//  import route
const postsRoute = require("./routes/posts")
app.use("/posts", postsRoute)

const db_url =  "mongodb+srv://admin-shweta:"
            +   `${process.env.DB_PASSWORD}`
            +   "@cluster0.vtowurn.mongodb.net/RestDB";

//  connect to db
mongoose.connect(db_url)

app.listen(PORT, (req, res) => {
    console.log(`server started at port : ${PORT}`)
})

