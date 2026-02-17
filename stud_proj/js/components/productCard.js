import renderBasketCards from "./renderBasketCards.js";

export default function ProductCard(card) {
    const id = card.id;
    const name = card.name;
    const price = card.price;
    const image = card.image;
    const availability = card.availability;
    const type = card.type;
    const rating = card.rating;
    const goodsOfDay = card.goodsOfDay;

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productCardVisual = document.createElement("div");
    productCardVisual.classList.add("product-card__visual");
    productCard.append(productCardVisual);
    const productCardImg = document.createElement("img");
    productCardImg.classList.add("product-card__img");
    productCardImg.src = image;
    productCardImg.alt = "Изображение товара";
    productCardImg.style.width = "290px";
    productCardImg.style.height = "436px";
    productCardVisual.append(productCardImg);
    const productCardMore = document.createElement("div");
    productCardMore.classList.add("product-card__more");
    productCardVisual.append(productCardMore);
    const productCardLinkIcon = document.createElement("a");
    productCardLinkIcon.addEventListener("click", (e) => {
        renderBasketCards(card);
    })
    productCardLinkIcon.classList.add("product-card__link", "btn", "btn--icon");
    productCardLinkIcon.href = "#";
    productCardMore.append(productCardLinkIcon);
    const btnIconText = document.createElement("span");
    btnIconText.classList.add("btn__text");
    btnIconText.textContent = "В корзину";
    productCardLinkIcon.append(btnIconText);
    const iconBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    iconBasket.style.width = "24px";
    iconBasket.style.height = "24px";
    iconBasket.setAttribute("aria-hidden", "true");
    const useIconBasket = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useIconBasket.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-basket");
    iconBasket.append(useIconBasket);
    productCardLinkIcon.append(iconBasket);

    const productCardLinkText = document.createElement("a");
    productCardLinkText.classList.add("product-card__link", "btn", "btn--secondary");
    productCardLinkText.href = "#";
    productCardMore.append(productCardLinkText);
    const btnText = document.createElement("span");
    btnText.classList.add("btn__text");
    btnText.textContent = "Подробнее";
    productCardLinkText.append(btnText);
    const productCardInfo = document.createElement("div");
    productCardInfo.classList.add("product-card__info");
    productCard.append(productCardInfo);
    const productCardTitle = document.createElement("h2");
    productCardTitle.classList.add("product-card__title");
    productCardTitle.textContent = name;
    productCardInfo.append(productCardTitle);

    const productCardOld = document.createElement("span");
    productCardOld.classList.add("product-card__old");
    productCardInfo.append(productCardOld);
    const productCardOldNum = document.createElement("span");
    productCardOldNum.classList.add("product-card__old-number");
    productCardOldNum.textContent = price.old;
    productCardOld.append(productCardOldNum);
    const productCardOldAdd = document.createElement("span");
    productCardOldAdd.classList.add("product-card__old-add");
    productCardOldAdd.textContent = "₽";
    productCardOld.append(productCardOldAdd);

    const productCardPrice = document.createElement("span");
    productCardPrice.classList.add("product-card__price");
    productCardInfo.append(productCardPrice);
    const productCardPriceNum = document.createElement("span");
    productCardPriceNum.classList.add("product-card__price-number");
    productCardPrice.textContent = price.new;
    productCardPrice.append(productCardPriceNum);
    const productCardPriceAdd = document.createElement("span");
    productCardPriceAdd.classList.add("product-card__price-add");
    productCardPriceAdd.textContent = "₽";
    productCardPrice.append(productCardPriceAdd);

    const tooltip = document.createElement("div");
    tooltip.classList.add("product-card__tooltip", "tooltip");
    productCardInfo.append(tooltip);
    const tooltipBtn = document.createElement("button");
    tooltipBtn.classList.add("tooltip__btn");
    tooltipBtn.ariaLabel = "Показать подсказку";
    tooltip.append(tooltipBtn);

    const tooltipIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tooltipIcon.classList.add("tooltip__icon");
    tooltipIcon.style.width = "5px";
    tooltipIcon.style.height = "10px";
    tooltipIcon.setAttribute("aria-hidden", "true");

    const useIconI = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useIconI.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-i");
    tooltipIcon.append(useIconI);

    tooltipBtn.append(tooltipIcon);

    const tooltipContent = document.createElement("div");
    tooltipContent.classList.add("tooltip__content");
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltip__text");
    tooltipText.textContent = "Наличие товара по городам:";
    tooltipContent.append(tooltipText);
    const tooltipList = document.createElement("ul");
    tooltipList.classList.add("tooltip__list");
    tooltipContent.append(tooltipList);

    let tippyInstance;

    function getTippy() {
        tippyInstance = tippy(tooltipBtn, {
            content: tooltipContent,
            allowHTML: true,
            placement: 'top',
            animation: 'shift-away',
            trigger: 'click',
            appendTo: () => document.body,
            hideOnClick: true,
            delay: [100, 50],
            duration: [200, 150],
        });
    }

    getTippy();

    const tooltipMoscow = getTooltipEl("Москва", availability.moscow);
    const tooltipOrenburg = getTooltipEl("Оренбург", availability.orenburg);
    const tooltipSaintPetersburg = getTooltipEl("Санкт-Петербург", availability.saintPetersburg);

    function getTooltipEl(city, count) {
        const tooltipEl = document.createElement("li");
        tooltipEl.classList.add("tooltip__item");

        const tooltipElText = document.createElement("span");
        tooltipElText.classList.add("tooltip__text");
        tooltipElText.textContent = `${city}: `;

        const tooltipElCount = document.createElement("span");
        tooltipElCount.classList.add("tooltip__count");
        tooltipElCount.textContent = count;

        tooltipElText.appendChild(tooltipElCount);

        tooltipEl.appendChild(tooltipElText);
        tooltipList.append(tooltipEl);

        return tooltipEl;
    }

    return productCard;
}