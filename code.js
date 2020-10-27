function pizzaCalc()
{
    // Get amount of pizzas
    var pizzas = prompt('How many pizzas are there?');
    // Parse to number
    pizzas = parseFloat(pizzas);
    // Get amount of toppings
    var toppings = prompt('How many toppings are there?');
    // Parse to number
    toppings = parseFloat(toppings);
    // Get number of people
    var people = prompt('How many people are there?');
    // Parse to number
    people = parseInt(people);
    // Calculate pizza cost
    var pizzaCost = pizzas * 15;
    // Calculate toppings cost
    var toppingCost = toppings * 1.25;
    // Calculate cost per person
    var costPerPerson = (pizzaCost + toppingCost) / people;
    // Display cost per person
    alert(`Each person will owe $${costPerPerson.toFixed(2)}.`);
}