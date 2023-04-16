"use strict";
const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const finalPrice = document.querySelector(".final-price");
const savings = document.querySelector(".savings");

const calculateSavings = (pr, ds) => {
    return (pr / 100) * ds;
}
const calculateFinalPrice = (original, final) => {
    return parseFloat(original - final);
}

function calculate(val) {
    if (val === "price") {
        if (discount.value == "") {
            finalPrice.textContent = (price.value != "") ? price.value : "0";
            savings.textContent = "0";
        } else {
            if (price.value == "") {
                finalPrice.textContent = "0";
                savings.textContent = "0";
                return;
            }
            const saveMoney = calculateSavings(parseFloat(price.value), parseFloat(discount.value));
            const final = calculateFinalPrice(parseFloat(price.value), saveMoney);
            finalPrice.textContent = final.toFixed(2);
            savings.textContent = saveMoney.toFixed(2);
        }
    } else if (val === "discount") {
        if (price.value == "") {
            finalPrice.textContent = "0";
            savings.textContent = "0";
        } else {
            if (discount.value == "") {
                finalPrice.textContent = price.value;
                savings.textContent = "0";
                return;
            }
            const saveMoney = calculateSavings(parseFloat(price.value), parseFloat(discount.value));
            const final = calculateFinalPrice(parseFloat(price.value), saveMoney);
            finalPrice.textContent = final.toFixed(2);
            savings.textContent = saveMoney.toFixed(2);
        }
    }
}