import basketCount from "./basketCount.js";

export default function BasketCard(card) {

    const name = card.name;
    const price = card.price.new;
    const image = card.image;

    const basketItem = document.createElement("li");
    basketItem.classList.add("basket__item");

    const basketImgBox = document.createElement("div");
    basketImgBox.classList.add("basket__img");

    const basketImg = document.createElement("img");
    basketImg.src = image;
    basketImg.alt = "Фотография товара";
    basketImg.style.width = "60px";
    basketImg.style.height = "60px";
    basketImgBox.append(basketImg);

    const basketName = document.createElement("span");
    basketName.classList.add("basket__name");
    basketName.textContent = name;

    const basketPrice = document.createElement("span");
    basketPrice.classList.add("basket__price");
    basketPrice.textContent = `${price} руб`;

    const basketItemClose = document.createElement("button");
    basketItemClose.classList.add("main-menu__close");
    basketItemClose.type = "button";
    basketItemClose.addEventListener("click", () => {
        basketItem.remove();
        basketCount();
    })

    const iconCloseBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconCloseBasket.classList.add("main-menu__icon")
    iconCloseBasket.style.width = "24px";
    iconCloseBasket.style.height = "24px";
    iconCloseBasket.setAttribute("aria-hidden", "true");
    const useIconCloseBasket = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useIconCloseBasket.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-close");
    iconCloseBasket.append(useIconCloseBasket);
    basketItemClose.append(iconCloseBasket);

    basketItem.append(basketImgBox, basketName, basketPrice, basketItemClose);
    return basketItem;

}