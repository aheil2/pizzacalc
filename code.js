$(document).ready(function () {
    // event handlers
    $("button").click(pizzaCalc);

    function pizzaCalc() {
        // Get amount of pizzas
        var pizzas = $("pizzas").val();
        // Parse to number
        pizzas = parseFloat(pizzas);
        // Get amount of toppings
        var toppings = $("toppings").val();
        // Parse to number
        toppings = parseFloat(toppings);
        // Get number of people
        var people = $("persons").val();
        // Parse to number
        people = parseInt(people);
        // Calculate pizza cost
        var pizzaCost = pizzas * 15;
        // Calculate toppings cost
        var toppingCost = toppings * 1.25;
        // Calculate cost per person
        var costPerPerson = (pizzaCost + toppingCost) / people;
        // Display cost per person
        $("#personCost").text(costPerPerson.toFixed(2));
        // Unhide the results div
        $(".output").show();
    }
});