const mongoose = require("mongoose");
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Recipe must have a name']
    },
    slug: String,
    ingredients: [{
        name: {
            type: String,
            required: [true, 'Ingredient must have a name']
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity must be specified']
        },
        unit: String
    }],
    method: String,
})

module.exports = mongoose.model("Recipe", RecipeSchema);