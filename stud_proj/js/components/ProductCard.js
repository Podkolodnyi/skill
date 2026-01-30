export default class ProductCard {
    constructor(card) {
        this.id = card.id;
        this.name = card.name;
        this.price = card.price;
        this.image = card.image;
        this.availability = card.availability;
        this.type = card.type;
        this.rating = card.rating;
        this.goodsOfDay = card.goodsOfDay;

        this.productCard = document.createElement("div");
        this.productCard.classList.add("product-card");
        this.productCardVisual = document.createElement("div");
        this.productCardVisual.classList.add("product-card__visual");
        this.productCard.append(this.productCardVisual);
        this.productCardImg = document.createElement("img");
        this.productCardImg.classList.add("product-card__img");
        this.productCardImg.src = this.image;
        this.productCardImg.alt = "Изображение товара";
        this.productCardVisual.append(this.productCardImg);
        this.productCardMore = document.createElement("div");
        this.productCardMore.classList.add("product-card__more");
        this.productCardVisual.append(this.productCardMore);
        this.productCardLinkIcon = document.createElement("a");
        this.productCardLinkIcon.classList.add("product-card__link", "btn", "btn--icon");
        this.productCardLinkIcon.href = "#";
        this.productCardMore.append(this.productCardLinkIcon);
        this.btnIconText = document.createElement("span");
        this.btnIconText.classList.add("btn__text");
        this.btnIconText.textContent = "В корзину";
        this.productCardLinkIcon.append(this.btnIconText);
        this.iconBasket = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.iconBasket.style.width = "24px";
        this.iconBasket.style.height = "24px";
        this.iconBasket.setAttribute("aria-hidden", "true");
        this.useIconBasket = document.createElementNS("http://www.w3.org/2000/svg", "use");
        this.useIconBasket.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-basket");
        this.iconBasket.append(this.useIconBasket);
        this.productCardLinkIcon.append(this.iconBasket);

        this.productCardLinkText = document.createElement("a");
        this.productCardLinkText.classList.add("product-card__link", "btn", "btn--secondary");
        this.productCardLinkText.href = "#";
        this.productCardMore.append(this.productCardLinkText);
        this.btnText = document.createElement("span");
        this.btnText.classList.add("btn__text");
        this.btnText.textContent = "Подробнее";
        this.productCardLinkText.append(this.btnText);
        this.productCardInfo = document.createElement("div");
        this.productCardInfo.classList.add("product-card__info");
        this.productCard.append(this.productCardInfo);
        this.productCardTitle = document.createElement("h2");
        this.productCardTitle.classList.add("product-card__title");
        this.productCardTitle.textContent = this.name;
        this.productCardInfo.append(this.productCardTitle);

        this.productCardOld = document.createElement("span");
        this.productCardOld.classList.add("product-card__old");
        this.productCardInfo.append(this.productCardOld);
        this.productCardOldNum = document.createElement("span");
        this.productCardOldNum.classList.add("product-card__old-number");
        this.productCardOldNum.textContent = this.price.old;
        this.productCardOld.append(this.productCardOldNum);
        this.productCardOldAdd = document.createElement("span");
        this.productCardOldAdd.classList.add("product-card__old-add");
        this.productCardOldAdd.textContent = "₽";
        this.productCardOld.append(this.productCardOldAdd);

        this.productCardPrice = document.createElement("span");
        this.productCardPrice.classList.add("product-card__price");
        this.productCardInfo.append(this.productCardPrice);
        this.productCardPriceNum = document.createElement("span");
        this.productCardPriceNum.classList.add("product-card__price-number");
        this.productCardPrice.textContent = this.price.new;
        this.productCardPrice.append(this.productCardPriceNum);
        this.productCardPriceAdd = document.createElement("span");
        this.productCardPriceAdd.classList.add("product-card__price-add");
        this.productCardPriceAdd.textContent = "₽";
        this.productCardPrice.append(this.productCardPriceAdd);

        this.tooltip = document.createElement("div");
        this.tooltip.classList.add("product-card__tooltip", "tooltip");
        this.productCardInfo.append(this.tooltip);
        this.tooltipBtn = document.createElement("button");
        this.tooltipBtn.classList.add("tooltip__btn");
        this.tooltipBtn.ariaLabel = "Показать подсказку";
        this.tooltip.append(this.tooltipBtn);

        this.tooltipIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.tooltipIcon.classList.add("tooltip__icon");
        this.tooltipIcon.style.width = "5px";
        this.tooltipIcon.style.height = "10px";
        this.tooltipIcon.setAttribute("aria-hidden", "true");

        this.useIconI = document.createElementNS("http://www.w3.org/2000/svg", "use");
        this.useIconI.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-i");
        this.tooltipIcon.append(this.useIconI);

        this.tooltipBtn.append(this.tooltipIcon);

        this.tooltipContent = document.createElement("div");
        this.tooltipContent.classList.add("tooltip__content");
        this.tooltip.append(this.tooltipContent);
        this.tooltipText = document.createElement("span");
        this.tooltipText.classList.add("tooltip__text");
        this.tooltipText.textContent = "Наличие товара по городам:";
        this.tooltipContent.append(this.tooltipText);
        this.tooltipList = document.createElement("ul");
        this.tooltipList.classList.add("tooltip__list");
        this.tooltipContent.append(this.tooltipList);



        this.tooltipMoscow = this.getTooltipEl("Москва", this.availability.moscow);
        this.tooltipOrenburg = this.getTooltipEl("Оренбург", this.availability.orenburg);
        this.tooltipSaintPetersburg = this.getTooltipEl("Санкт-Петербург", this.availability.saintPetersburg);

        return this.productCard;
    }

    getTooltipEl(city, count) {
        this.tooltipEl = document.createElement("li");
        this.tooltipEl.classList.add("tooltip__item");
        this.tooltipList.append(this.tooltipEl);
        this.tooltipElText = document.createElement("li");
        this.tooltipElText.classList.add("tooltip__text");
        this.tooltipElText.textContent = `${city}:`;
        this.tooltipEl.append(this.tooltipElText);
        this.tooltipElCount = document.createElement("li");
        this.tooltipElCount.classList.add("tooltip__count");
        this.tooltipElCount.textContent = count;
        this.tooltipElText.append(this.tooltipElCount);
        return this.tooltipEl;
    }
}