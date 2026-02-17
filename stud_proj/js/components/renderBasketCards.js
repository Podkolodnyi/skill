import basketCard from "./basketCard.js";
import basketCount from "./basketCount.js";

export default function renderBasketCards(card) {
    const basketList = document.querySelector(".basket__list");
    basketList.append(basketCard(card));

    basketCount();
}