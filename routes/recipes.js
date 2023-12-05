const express = require('express');
const Recipe = require("../models/recipe");
const router = express.Router();

// function editEventListener(){
//     const editButtons = document.gert
// }

router.get("/", async (req, res) => {
    const recipes = await Recipe.find({})
    res.render("recipes/index", { recipes })
})

// This should only be hit by my UI at the moment, with redirect handled on the server side
router.post("/:slug/update", async (req, res) => {
    const { slug } = req.params
    const { name, quantity, unit } = req.body;
    const referrer = req.get('Referrer')
    await Recipe.findOneAndUpdate({ slug: slug, 'ingredients.name': name },
        {
            $set: {
                'ingredients.$.quantity': quantity,
                'ingredients.$.unit': unit
            }
        },
    );
    return res.json({ redirect: `/recipes/${slug}` });
})

router.post("/:slug/update-method", async (req, res) => {
    const { slug } = req.params
    const { method } = req.body;
    const recipe = await Recipe.findOneAndUpdate(
        { slug: slug },
        { $set: { method: method } },
        { new: true }, // Set to true to return the modified document
    );
    res.redirect(`/recipes/${slug}`)
});

router.get("/:slug", async (req, res) => {
    const { slug } = req.params;
    const recipe = await Recipe.findOne({ slug: slug })
    res.render('recipes/show', { recipe, slug });
})

router.post("/:slug", async (req, res) => {
    const { slug } = req.params;
    const { method } = req.body;
    const recipe = await Recipe.findOne({ slug: slug })
    recipe.method = method
    await recipe.save()
    res.redirect(`${slug}`)
})

router.delete("/:slug", async (req, res) => {
    const { slug } = req.params;
    const recipe = await Recipe.findOneAndDelete({ slug: slug });
    res.redirect("/recipes");
})

module.exports = router;