import ProductCard from "./ProductCard.js";

export default class DayProductCard extends ProductCard {
    constructor(card) {
        super(card);
        this.productCard.classList.add("product-card--small");
        this.productCardImg.style.width = "290px";
        this.productCardImg.style.height = "344px";
    }
}