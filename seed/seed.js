const mongoose = require("mongoose");
const Recipe = require("../models/recipe");
const slugify = require("slugify");

main().catch(err => console.log(err));

// mongoose main function
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/food');
    console.log("Mongoose Connection Open")
}

async function seedDB() {
    await Recipe.deleteMany({});

    const name = "Chicken Laksa"

    const Laksa = new Recipe({
        name,
        slug: slugify(name, {lower: true})
    })

    await Laksa.save()
}

seedDB().then(() => {
    console.log('Closing Mongo Connection')
    mongoose.connection.close()
})
