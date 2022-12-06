//? Analysis
/*
1. get dom elements
2. get the variables from user
3. validation
4. program logic
5. print the result
*/

// getting button element from DOM
const button = document.getElementById("button");

// getting variables from user - click function
button.addEventListener('click', function(){
    const userKm = document.getElementById("user-km");
    const userAge = document.getElementById("user-age");
    const buyTicket = document.getElementById("buy-ticket");
    const printedPrice = document.querySelector(".printed-price");
    let price = userKm.value * 0.21; 
    
    // Validation input value
    if (!price) {
        alert("Attenzione, devi inserire un valore numerico!");
    } else {
        const discountYoungMessage = document.querySelector(".discount-young");
        const discountOldMessage = document.querySelector(".discount-old");
        
        //Price & Discount & Message
        if (userAge.value === "young") {
            price *= 0.8;
            discountYoungMessage.classList.add("d-block");
            discountOldMessage.classList.remove("d-block");
        } else if (userAge.value === "old") {
            price *= 0.6;
            discountOldMessage.classList.add("d-block");
            discountYoungMessage.classList.remove("d-block");
        }
        
        //Reset input value
        userKm.value = "";

        //Printing on page main message
        printedPrice.innerHTML = `Il tuo biglietto costa <span class="price-style">${price.toFixed(2)} €</span>`

        //Button buy ticket
        buyTicket.classList.add("d-block");
    }

});

