const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

let Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 40,
        trim: true
    },
    lastName: {
        type: String,
        maxlength: 40,
        trim: true
    },
    userInfo: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    encryptedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        required: true,
        default: 0
    },
    purchases: {
        type: Array,
        default: []
    }
}, { timestamps: true });

userSchema.virtual("password")
    .set(function (password){
        this._password = password;
        this.salt = uuidv1();
        this.encryptedPassword = this.securePassword(password);
    })
    .get(function (){
        return this._password;
    })

userSchema.method = {

    authenticate: function (plainPassword){
        return this.securePassword(plainPassword) === this.encryptedPassword;
    },

    securePassword: function (plainPassword){
        if(!plainPassword) return "";
        try{
            return crypto.createHmac('sha256', this.salt)
                .update(plainPassword)
                .digest('hex');
        } catch (e) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema)