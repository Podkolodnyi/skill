export default function getProductCard() {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productCardVisual = document.createElement("div");
    productCardVisual.classList.add("product-card__visual");
    productCard.append(productCardVisual);
    const productCardImg = document.createElement("img");
    productCardImg.classList.add("product-card__img");
    productCardImg.src = "images/item-1.png";
    productCardImg.height = "436";
    productCardImg.width = "290";
    productCardImg.alt = "Изображение товара";
    productCardVisual.append(productCardImg);
    const productCardMore = document.createElement("div");
    productCardMore.classList.add("product-card__more");
    productCardVisual.append(productCardMore);
    const productCardLinkIcon = document.createElement("a");
    productCardLinkIcon.classList.add("product-card__link", "btn", "btn--icon");
    productCardLinkIcon.href = "#";
    productCardMore.append(productCardLinkIcon);
    const btnIconText = document.createElement("span");
    btnIconText.classList.add("btn__text");
    btnIconText.textContent = "В корзину";
    productCardLinkIcon.append(btnIconText);
    const iconBasket = document.createElement("svg");
    iconBasket.innerHTML = "<use xlink:href=\"images/sprite.svg#icon-basket\"></use>";
    iconBasket.width = "24";
    iconBasket.height = "24";
    iconBasket.setAttribute("aria-hidden", "true");
    productCardLinkIcon.append(iconBasket);
    const productCardLinkText = document.createElement("a");
    productCardLinkText.classList.add("product-card__link", "btn", "btn--secondary");
    productCardLinkText.href = "#";
    productCardMore.append(productCardLinkText);
    const btnText = document.createElement("span");
    btnText.classList.add("btn__text");
    btnText.textContent ="Подробнее";
    productCardLinkText.append(btnText);
    const productCardInfo = document.createElement("div");
    productCardInfo.classList.add("product-card__info");
    productCard.append(productCardInfo);
    const productCardTitle = document.createElement("h2");
    productCardTitle.classList.add("product-card__title");
    productCardTitle.textContent = "Потолочная люстра Ornella A4059PL-4AB (Artelamp)";
    productCardInfo.append(productCardTitle);

    const productCardOld = document.createElement("span");
    productCardOld.classList.add("product-card__old");
    productCardInfo.append(productCardOld);
    const productCardOldNum = document.createElement("span");
    productCardOldNum.classList.add("product-card__old-number");
    productCardOld.append(productCardOldNum);
    const productCardOldAdd = document.createElement("span");
    productCardOldAdd.classList.add("product-card__old-add");
    productCardOld.append(productCardOldAdd);

    const productCardPrice = document.createElement("span");
    productCardPrice.classList.add("product-card__price");
    productCardInfo.append(productCardPrice);
    const productCardPriceNum = document.createElement("span");
    productCardPriceNum.classList.add("product-card__price-number");
    productCardPrice.append(productCardPriceNum);
    const productCardPriceAdd = document.createElement("span");
    productCardPriceAdd.classList.add("product-card__price-add");
    productCardPrice.append(productCardPriceAdd);

    const tooltip = document.createElement("div");
    tooltip.classList.add("product-card__tooltip", "tooltip");
    productCardInfo.append(tooltip);
    const tooltipBtn = document.createElement("button");
    tooltipBtn.classList.add("tooltip__btn");
    tooltipBtn.ariaLabel = "Показать подсказку";
    tooltip.append(tooltipBtn);
    const tooltipIcon = document.createElement("svg");
    tooltipIcon.classList.add("tooltip__icon");
    tooltipIcon.innerHTML = "<use xlink:href=\"images/sprite.svg#icon-i\"></use>";
    tooltipIcon.width = "5";
    tooltipIcon.height = "10";
    tooltipIcon.setAttribute("aria-hidden", "true");
    tooltipBtn.append(tooltipIcon);

    const tooltipContent = document.createElement("div");
    tooltipContent.classList.add("tooltip__content");
    tooltip.append(tooltipContent);
    const tooltipText = document.createElement("span");
    tooltipText.classList.add("tooltip__text");
    tooltipText.textContent = "Наличие товара по городам:";
    tooltipContent.append(tooltipText);
    const tooltipList = document.createElement("ul");
    tooltipList.classList.add("tooltip__list");
    tooltipContent.append(tooltipList);

    function getTooltipEl(city, count) {
        const tooltipEl = document.createElement("li");
        tooltipEl.classList.add("tooltip__item");
        tooltipList.append(tooltipEl);
        const tooltipElText = document.createElement("li");
        tooltipElText.classList.add("tooltip__text");
        tooltipElText.textContent = `${city}:`;
        tooltipEl.append(tooltipElText);
        const tooltipElCount = document.createElement("li");
        tooltipElCount.classList.add("tooltip__count");
        tooltipElCount.textContent = count;
        tooltipElText.append(tooltipElCount);
        return tooltipEl;
    }

    let tooltipMoscow = getTooltipEl("Москва", "454");
    let tooltipOrenburg = getTooltipEl("Оренбург", "381");
    let tooltipPiter = getTooltipEl("Санкт-Петербург", "15");

    return productCard;
}