//? Analysis
/*
1. get dom elements
2. get the variables from user
3. validation
4. program logic
5. print the result
*/

// 1.
const button = document.getElementById("button");

// 2.
button.addEventListener('click', function(){
    const userKm = document.getElementById("user-km");
    const userAge = document.getElementById("user-age");
    const printedPrice = document.querySelector(".printed-price");
    
    // 3. TO DO
    
    //4.
    let price = userKm.value * 0.21;
    if (userAge.value === "young") {
        price *= 0.8;
    } else if (userAge.value === "old") {
        price *= 0.6;
    }

    printedPrice.innerText = price.toFixed(2) + "€";
});

