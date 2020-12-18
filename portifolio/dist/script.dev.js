"use strict";

var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function() {
    return document.querySelector(".container").classList.toggle("show-menu");
});