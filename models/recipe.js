const mongoose = require("mongoose");
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Recipe must have a name']
    }
})

module.exports = mongoose.model("Recipe", RecipeSchema);