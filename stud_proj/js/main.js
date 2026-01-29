import activeMainMenu from "./components/activeMainMenu.js";
import activeLocation from "./components/activeLocation.js";
import getProductCard from "./components/getProductCard.js";


window.addEventListener('DOMContentLoaded', () => {
    //открыть, закрыть каталог
    activeMainMenu();
    //выбрать город
    activeLocation();
let oko = document.querySelector(".catalog__item2");
oko.append(getProductCard())
});
