const express = require("express")
const router = express.Router();
const {logout, signup, login} = require("../controllers/auth")
const {check} = require("express-validator");

router.post("/signup",[
    check("firstName", "First Name should be at least 3 character long").isLength({min: 3}),
    check("email", "Email is Required").isEmail(),
    check("password", "Password should be at least 5 character long").isLength({min: 5})
], signup)

router.post("/login",[
    check("email", "Email is Required").isEmail(),
    check("password", "Password field is Required").isLength({min: 1})
], login)

router.get("/logout", logout)

module.exports = router;