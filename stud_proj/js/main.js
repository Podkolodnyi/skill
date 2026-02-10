import activeMainMenu from "./components/activeMainMenu.js";
import activeLocation from "./components/activeLocation.js";
import renderCards from "./components/renderCards.js";
import getCards from "./components/request.js";
import filterCards from "./components/filterCards.js";
import activeBasket from "./components/activeBasket.js";
import activeAccordion from "./components/activeAccordion.js";
import renderSlider from "./components/slider.js";
import sendForm from "./components/sendForm.js";

window.addEventListener('DOMContentLoaded', () => {
    //запрос списка карточек
    let cardsList = getCards();
    //открыть, закрыть каталог
    activeMainMenu();
    //выбрать город
    activeLocation();
    //отрисовка карточек
    renderCards(cardsList);
    //фильтр карточек
    filterCards(cardsList);
    //открыть, закрыть корзину
    activeBasket();
    //открыть, закрыть аккордеон
    activeAccordion();
    //отрисовка товаров дня
    renderSlider(cardsList);
    //отправка формы
    sendForm();
});
