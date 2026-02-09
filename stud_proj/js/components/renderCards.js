import ProductCard from "./ProductCard.js";

export default async function renderCards(cardsList) {
    let cards = await cardsList;
    let catalogList = document.querySelector(".catalog__list");
    catalogList.innerHTML = "";
    cards.forEach((el) => {
        let catalogItem = document.createElement("li");
        catalogItem.classList.add("catalog__item");
        catalogList.append(catalogItem);
        let card = new ProductCard(el);
        catalogItem.append(card.getProductCard());
    })
}