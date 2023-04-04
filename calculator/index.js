"use strict";

const display = document.querySelector("#display-area");

function add(ele) {
    display.value += ele;
}

function clr() {
    display.value = " ";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function showRes() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Please enter a valid expression.");
    }
}