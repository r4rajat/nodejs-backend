const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 40,
        unique: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Category", categorySchema)