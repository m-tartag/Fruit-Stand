const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

var fruitStand = {
    name: "Felicia's Fruit Stand",
    location: "Providence, RI",
    motto: '"Buy Felicia!"',
    products: ["Apple", "Orange", "Peach", "Pear"],
    prices: [.50, .75, .75, .75]


};

/*document.getElementById("title").innerText = fruitStand.name;

document.getElementById("motto").innerText = fruitStand.motto;*/



// Products

document.getElementById("product1").innerText = fruitStand.products[0] + ": " + formatter.format(fruitStand.prices[0]);
document.getElementById("product2").innerText = fruitStand.products[1] + ": " + formatter.format(fruitStand.prices[1]);
document.getElementById("product3").innerText = fruitStand.products[2] + ": " + formatter.format(fruitStand.prices[2]);
document.getElementById("product4").innerText = fruitStand.products[3] + ": " + formatter.format(fruitStand.prices[3]);






console.log(10);