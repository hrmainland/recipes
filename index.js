const express = require('express');
const path = require('path');
const slugify = require('slugify');
const ejsMate = require("ejs-mate")
const mongoose = require('mongoose');

const recipeRoutes = require("./routes/recipes");

const app = express();

// tell the app where to look for views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine("ejs", ejsMate);

// fire up the EXPRESS app
app.listen(3000, () => {
    console.log("Listening on port 3000")
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/recipes", recipeRoutes);
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res) => {
    res.render("home")
})

// add a document to the DB collection recording the click event
app.post('/clicked', (req, res) => {
    const click = { clickTime: new Date() };
    console.log(click);
    console.log(req)
    console.log(req.body)
    res.sendStatus(201);
});

// fire up MONGOOSE
main().catch(err => console.log(err));

// mongoose main function
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/food');
    console.log("Mongoose Connection Open")
}
