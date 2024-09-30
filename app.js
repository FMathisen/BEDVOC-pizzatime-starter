const pizzaForm = document.getElementById("pizza-form");
const pizzaType = document.getElementById("pizza-type");
const pizzaSize = document.getElementById("pizza-size");
 
const orderPizzas = [];
let orderTotal = 0;
 
 
 
 
pizzaForm.addEventListener("submit", (e) => {
   
    e.preventDefault();
 
    // pizza type price
    // console.log(pizzaType.value);
    const pizzaTypePrize = parseInt(pizzaType.value.split("-")[1]);
    // console.log(pizzaTypePrize);
 
    // pizza size price
    // console.log(pizzaSize.value);
    const pizzaSizePrize = parseInt(pizzaSize.value.split("-")[1]);
    // console.log(pizzaSizePrize);
})