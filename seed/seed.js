const mongoose = require("mongoose");
const Recipe = require("../models/recipe");

main().catch(err => console.log(err));

// mongoose main function
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/food');
    console.log("Mongoose Connection Open")
}

async function seedDB() {
    console.log("here")

    const Laksa = new Recipe({
        name: "Chicken Laksa"
    })

    await Laksa.save()
}

seedDB().then(() => {
    console.log('Closing Mongo Connection')
    mongoose.connection.close()
})
