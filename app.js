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
    
    const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked')

    const toppingArray = []
    let toppingsTotal = 0;

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
    // console.log(orderTotal)

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

    pizzaForm.reset();
});

function updateOrderSummary() {
    const orderSummary = document.getElementById("order-list")

    orderSummary.innerHTML = "";

    orderPizzas.forEach((pizzaOrder) => {
        const listItem = document.createElement("li")
        listItem.textContent = `${pizzaOrder.quantity} x ${pizzaOrder.pizzaName} - ${pizzaOrder.pizzaTotalPrice} NOK`
        orderSummary.appendChild(listItem)
    })
}

pizzaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateOrderSummary()
});   

let creditCardInput = document.getElementById("credit-card")
const payButton = document.getElementById("submit-payment")
const paymentMessage = document.getElementById("payment-message")

function cleanCardNumber(cardNumber) {
    return cardNumber.replace(/\D/g, '');
}

function validateCreditCard(cardNumber) {
    if (cardNumber.length <= 15) {
        paymentMessage.innerHTML = "Too short"
        creditCardInput.style.borderColor = "red"
    } else if (cardNumber.length >= 17) {
        paymentMessage.innerHTML = "Too long"
        creditCardInput.style.borderColor = "red"
    } else if (luhnCheck(cardNumber)) {
        paymentMessage.innerHTML = "Success!"
        creditCardInput.style.borderColor = "green"
            if (creditCardInput.value.replace(" ","") != cardNumber) {
                paymentMessage.innerHTML = "Success! I think you're drunk, but close enough"
            creditCardInput.style = "color:purple"
            }
    } else {
        paymentMessage.innerHTML = "Incorrect card number"
    }
}

function luhnCheck(input) {
    const number = input.toString();
    const digits = number.split("").map(Number);
    let sum = 0;
    let isSecond = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = digits[i];
      if (isSecond) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isSecond = !isSecond;
    }

    return sum % 10 === 0;
  }

payButton.addEventListener("click", () => {

    
    const cardNumber = creditCardInput.value
    const cardNumberCleaned = cleanCardNumber(cardNumber)
    console.log(cardNumberCleaned)
    // validateCreditCard(cardNumberCleaned)
    validateCreditCard(cardNumberCleaned)
});

