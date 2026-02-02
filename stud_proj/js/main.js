import activeMainMenu from "./components/activeMainMenu.js";
import activeLocation from "./components/activeLocation.js";
import renderCards from "./components/renderCards.js";
import getCards from "./components/request.js";
import getTypeCount from "./components/getTypeCount.js";

window.addEventListener('DOMContentLoaded', () => {
    //запрос списка карточек
    let cardsList = getCards();
    //открыть, закрыть каталог
    activeMainMenu();
    //выбрать город
    activeLocation();
    //отрисовка карточек
    renderCards(cardsList);
    //отобразить количество товаров по категориям
    getTypeCount(cardsList);
});
