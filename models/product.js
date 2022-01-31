const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const {ObjectId} = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 40
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 40
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)