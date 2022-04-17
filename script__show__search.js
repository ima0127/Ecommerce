
const searchBtn = document.querySelector(".fa-magnifying-glass");

const header = document.querySelector(".header");
const inputSearch = document.querySelector(".search__display");


searchBtn.addEventListener("click", function(){
    header.classList.toggle("mostrar__search");
    inputSearch.focus()
})