const User = require("../models/user")
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")

exports.signup = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg,
            parametersAffecting: errors.array()[0].param
        })
    }
    const user = new User(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                message: "Not able to save User in database",
                cause: err
            })
        }
        res.status(200).json({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
    });
}

exports.login = (req, res) => {
    const {email, password} = req.body;
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg,
            parametersAffecting: errors.array()[0].param
        })
    }
    User.findOne({"email": email}, (err, user) => {
        if(!user){
            return res.status(400).json({
                error: "User Email does not exists",
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Email and Password do not Match",
            })
        }
        if (err){
            return res.status(400).json({
                error: "Error Occurred",
                cause: err
            })
        }
        const token = jwt.sign({_id: user._id}, process.env.SECRET)
        res.cookie("token", token, {expire: new Date() + 9999})
        const {_id, firstName, lastName, email, role} = user;
        return res.status(200).json({
            token, user: {
                _id, firstName, lastName, email, role
            }
        })
    })
};

exports.logout = (req, res) => {
    res.clearCookie("token")
    res.status(200).json({
        message: "User Logged Out Successfully"
    })
};