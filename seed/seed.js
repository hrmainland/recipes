const mongoose = require("mongoose");
const Recipe = require("../models/recipe");
const slugify = require("slugify");

main().catch(err => console.log(err));

// mongoose main function
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/food');
    console.log("Mongoose Connection Open")
}

const recipes = [
    {
        name: 'Spaghetti Bolognese',
        slug: 'spaghetti-bolognese',
        ingredients: [
            { name: 'Ground Beef', quantity: 1, unit: 'lb' },
            { name: 'Tomato Sauce', quantity: 2, unit: 'cups' },
            { name: 'Spaghetti Pasta', quantity: 1.5, unit: 'bags' },
            // Add more ingredients as needed
        ],
        method: `1. Brown ground beef in a pan.
        2. Add tomato sauce and simmer.
        3. Cook spaghetti pasta according to package instructions.
        4. Serve the Bolognese sauce over the cooked spaghetti.`,
    },
    {
        name: 'Chicken Alfredo',
        slug: 'chicken-alfredo',
        ingredients: [
            { name: 'Chicken Breast', quantity: 500, unit: 'grams' },
            { name: 'Alfredo Sauce', quantity: 1, unit: 'jar' },
            { name: 'Fettuccine Pasta', quantity: 1, unit: 'bag' },
            // Add more ingredients as needed
        ],
        method: `1. Season and cook chicken breast until fully cooked.
        2. Heat Alfredo sauce in a separate pan.
        3. Cook fettuccine pasta according to package instructions.
        4. Slice the cooked chicken and serve it over the fettuccine with Alfredo sauce.`,
    },
    {
        name: 'Vegetarian Stir Fry',
        slug: 'vegetarian-stir-fry',
        ingredients: [
            { name: 'Tofu', quantity: 1, unit: 'block' },
            { name: 'Broccoli', quantity: 2, unit: 'cups' },
            { name: 'Carrots', quantity: 1 },
            // Add more ingredients as needed
        ],
        method: `1. Press and cube tofu; stir fry until golden.
        2. Add broccoli and carrots, stir fry until vegetables are tender.
        3. Season with soy sauce or your preferred stir fry sauce.
        4. Serve over rice or noodles.`,
    },
    {
        name: 'Margherita Pizza',
        slug: 'margherita-pizza',
        ingredients: [
            { name: 'Pizza Dough', quantity: 1, unit: 'ball' },
            { name: 'Tomatoes', quantity: 3 },
            { name: 'Fresh Mozzarella', quantity: 8, unit: 'oz' },
            // Add more ingredients as needed
        ],
        method: `1. Roll out pizza dough and place it on a baking sheet.
        2. Spread sliced tomatoes over the dough.
        3. Add slices of fresh mozzarella.
        4. Bake in a preheated oven until the crust is golden and the cheese is melted.`,
    },
    // Add more recipe objects as needed
    // ...
];

async function seedDB() {
    await Recipe.deleteMany({});
    await Recipe.insertMany(recipes)
}


seedDB().then(() => {
    console.log('Closing Mongo Connection')
    mongoose.connection.close()
})
