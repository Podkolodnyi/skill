import BasketCard from "./BasketCard.js";
import basketCount from "./basketCount.js";

export default function renderBasketCards(card) {
    let basketList = document.querySelector(".basket__list");
    let basketCard = new BasketCard(card);
    basketList.append(basketCard);

    basketCount();
}