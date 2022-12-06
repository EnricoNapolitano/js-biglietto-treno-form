//? Analysis
/*
1. get dom elements
2. get the variables from user
3. validation
4. program logic
5. print the result
*/

// 1.
const printedPrice = document.querySelector(".printed-price");
const button = document.getElementById("button");

button.addEventListener('click', function(){
    const userKm = document.getElementById("user-km");
    const userAge = document.getElementById("user-age");
    console.log(userKm.value, userAge.value);
});