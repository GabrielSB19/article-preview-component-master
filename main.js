"use strict";

const button = document.querySelector(".card__content__button");
const socialIcon = document.querySelector(".card__content__social-icons");

button.addEventListener("click", ()=>{
    socialIcon.classList.toggle("show");
    button.classList.toggle("rotate");
})