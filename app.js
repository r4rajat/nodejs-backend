const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

const authenticationRoutes = require("./routes/auth")

// DB Connection
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

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

//Routes
app.use("/api", authenticationRoutes)


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is running at ${port}`)
})
