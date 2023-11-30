const express = require('express');
const path = require('path');
const slugify = require('slugify');
const ejsMate = require("ejs-mate")
const mongoose = require('mongoose');

const Recipe = require("./models/recipe");

const app = express();

// tell the app where to look for views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine("ejs", ejsMate);

// fire up the EXPRESS app
app.listen(3000, () => {
    console.log("Listening on port 3000")
})

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/recipes", async (req, res) => {
    const recipes = await Recipe.find({})
    res.render("recipes/index", { recipes })
})

app.get("/recipes/:slug", async (req, res) => {
    const { slug } = req.params;
    const recipe = await Recipe.findOne({ slug: slug })
    res.render('recipes/show', { recipe });
})

// fire up MONGOOSE
main().catch(err => console.log(err));

// mongoose main function
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/food');
    console.log("Mongoose Connection Open")
}

// other mongoose code goes here
