const pizzaForm = document.getElementById("pizza-form");
const pizzaType = document.getElementById("pizza-type");
const pizzaSize = document.getElementById("pizza-size");
const quantity = document.getElementById("quantity-input");
const total = document.getElementById("order-total");
 
const orderPizzas = [];
let orderTotal = 0;

 
pizzaForm.addEventListener("submit", (e) => {
   
    e.preventDefault();
 
    const pizzaTypePrice = parseInt(pizzaType.value.split("-")[1]);
    const pizzaName = pizzaType.value.split("-")[0]
    
    const pizzaSizePrice = parseInt(pizzaSize.value.split("-")[1]);
    const pizzaSizeName = pizzaSize.value.split("-")[0]
    

    const toppingArray = []
    let toppingsTotal = 0;

    const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked')

    checkedToppings.forEach((topping) => {
        const toppingValue = topping.value.split("-")
        const toppingName = toppingValue[0]
        const toppingPrice = parseInt(toppingValue[1])
        
        toppingArray.push({name: toppingName, price: toppingPrice})
        toppingsTotal += toppingPrice
    })

    const quantityNum = parseInt(quantity.value)

    // Total price
    let pizzaTotalPrice = (pizzaTypePrice + pizzaSizePrice + toppingsTotal) * quantityNum
    orderTotal += pizzaTotalPrice
    console.log(orderTotal)

    const pizzaOrder = {
    pizzaName: pizzaName,
    pizzaPrice: pizzaTypePrice,
    size: pizzaSizeName,
    sizePrice: pizzaSizePrice,
    toppings: toppingArray,
    toppingsPrice: toppingsTotal,
    quantity: quantityNum,
    pizzaTotalPrice: pizzaTotalPrice,
    };

    orderPizzas.push(pizzaOrder);
    console.log(pizzaOrder)
    console.log(orderPizzas)
    
    total.innerHTML = orderTotal
});

