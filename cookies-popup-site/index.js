"use strict";


const cookiesBox = document.querySelector(".cookies-box");
const customizeBox = document.querySelector(".customize-box");
const customizeBtn = document.querySelector(".btn-customize");
const allowBtn = document.querySelector(".btn-allow");
const declineBtn = document.querySelector(".decline-cookies");
const backBtn = document.querySelector(".back-btn");
const savePreferencesBtn = document.querySelector(".save-preferences");
const cookieBtn = document.querySelector("#logo");
const bg = document.querySelector(".bg");
const cookieBg = document.querySelector(".cookie-bg");


const showCookies = () => {
    cookiesBox.classList.remove("hidden");
    bg.classList.add("bg-blur");
}

const showCustomization = () => {
    customizeBox.classList.remove("hidden");
    cookieBg.classList.add("cookie-blur");
}

const hideCookies = () => {
    cookiesBox.classList.add("hidden");
    bg.classList.remove("bg-blur");
}

const hideCustomization = () => {
    customizeBox.classList.add("hidden");
    cookieBg.classList.remove("cookie-blur");
}

cookieBtn.addEventListener("click", showCookies);
customizeBtn.addEventListener("click", showCustomization);

allowBtn.addEventListener("click", hideCookies);
declineBtn.addEventListener("click", hideCookies);

backBtn.addEventListener("click", hideCustomization);
savePreferencesBtn.addEventListener("click", hideCustomization);
savePreferencesBtn.addEventListener("click", hideCookies);

window.onload = function () {
    setTimeout(showCookies, 3000);
}
