const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

// noinspection JSVoidFunctionReturnValueUsed
mongoose.connect(process.env.DATABASE,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected");
    }).catch(() => {
        console.log("DB Not Connected...");
})



const app = express();
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})
