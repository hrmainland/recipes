const ingredients = [
    {
        name: 'Chicken Breast',
        quantity: 500,
        unit: 'grams',
    },
    {
        name: 'Alfredo Sauce',
        quantity: 1,
        unit: 'jar',
    },
    {
        name: 'Fettuccine Pasta',
        quantity: 1,
        unit: 'bag',
    }
]

console.log(ingredients.filter(elem => elem.name === "Fettuccine Pasta"))