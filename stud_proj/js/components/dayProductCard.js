import productCard from "./productCard.js";

export default function dayProductCard(card) {
    const dayCard = productCard(card);
    const img = dayCard.querySelector(".product-card__img");
    dayCard.classList.add("product-card--small");
    img.style.width = "290px";
    img.style.height = "344px";

    return dayCard;
}