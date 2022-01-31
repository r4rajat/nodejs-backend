const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const {ObjectId} = mongoose.Schema;

const productCartSchema = new Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: {
      type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
});

const orderSchema = new Schema({
    products: [productCartSchema],
    transaction_id: {},
    amount: {
        type: Number
    },
    address: {
        type: String,
        maxlength: 2000
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);
const ProductCart = mongoose.model("ProductCart", productCartSchema);

module.exports = {Order, ProductCart};