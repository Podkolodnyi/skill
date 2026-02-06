import basketCount from "./basketCount.js";

export default class BasketCard {
    constructor(card) {
        this.name = card.name;
        this.price = card.price.new;
        this.image = card.image;

        this.basketItem = document.createElement("li");
        this.basketItem.classList.add("basket__item");

        this.basketImgBox = document.createElement("div");
        this.basketImgBox.classList.add("basket__img");

        this.basketImg = document.createElement("img");
        this.basketImg.src = this.image;
        this.basketImg.alt = "Фотография товара";
        this.basketImg.style.width = "60px";
        this.basketImg.style.height = "60px";
        this.basketImgBox.append(this.basketImg);

        this.basketName = document.createElement("span");
        this.basketName.classList.add("basket__name");
        this.basketName.textContent = this.name;

        this.basketPrice = document.createElement("span");
        this.basketPrice.classList.add("basket__price");
        this.basketPrice.textContent = `${this.price} руб`;

        this.basketItemClose = document.createElement("button");
        this.basketItemClose.classList.add("main-menu__close");
        this.basketItemClose.type = "button";
        this.basketItemClose.addEventListener("click", () => {
            this.basketItem.remove();
            basketCount();
        })

        this.iconCloseBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.iconCloseBasket.classList.add("main-menu__icon")
        this.iconCloseBasket.style.width = "24px";
        this.iconCloseBasket.style.height = "24px";
        this.iconCloseBasket.setAttribute("aria-hidden", "true");
        this.useIconCloseBasket = document.createElementNS("http://www.w3.org/2000/svg", "use");
        this.useIconCloseBasket.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-close");
        this.iconCloseBasket.append(this.useIconCloseBasket);
        this.basketItemClose.append(this.iconCloseBasket);

        this.basketItem.append(this.basketImgBox, this.basketName, this.basketPrice, this.basketItemClose);
        return this.basketItem;
    }
}