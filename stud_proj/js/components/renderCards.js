import getProductCard from "./ProductCard.js";

export default async function renderCards(cardsList) {
    let cards = await cardsList;
    cards.forEach((el) => {
        let catalogList = document.querySelector(".catalog__list");
        let catalogItem = document.createElement("li");
        catalogItem.classList.add("catalog__item");
        catalogList.append(catalogItem);
        let card = new getProductCard(el);
        catalogItem.append(card);
    })
}