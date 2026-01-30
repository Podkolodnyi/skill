import activeMainMenu from "./components/activeMainMenu.js";
import activeLocation from "./components/activeLocation.js";
import getProductCard from "./components/ProductCard.js";

async function getCards() {
    let response = await fetch('./data/data.json');
    return await response.json();
}

function renderCards() {
    getCards().then((cards) => {
        cards.forEach((el) => {
            let catalogList = document.querySelector(".catalog__list");
            let catalogItem = document.createElement("li");
            catalogItem.classList.add("catalog__item");
            catalogList.append(catalogItem);
            let card = new getProductCard(el);
            catalogItem.append(card);
        })
    })
}


window.addEventListener('DOMContentLoaded', () => {
    //открыть, закрыть каталог
    activeMainMenu();
    //выбрать город
    activeLocation();

    renderCards();
});
