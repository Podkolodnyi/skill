import DayProductCard from "./DayProductCard.js";

export default async function renderSlider(cards) {
    const cardsList = await cards;
    let dayCardsList = cardsList.filter((el) => {
        if (el.goodsOfDay) {
            return el
        }
    })

    let dayProductList = document.querySelector(".day-products__list");

    dayCardsList.forEach((el) => {
        let dayCardBox = document.createElement("li");
        dayCardBox.classList.add("day-products__item", "swiper-slide");
        let dayCard = new DayProductCard(el);
        dayCardBox.append(dayCard.getProductCard());
        dayProductList.append(dayCardBox);
        initSwiper();
    })

    function initSwiper() {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 4,
            speed: 400,
            spaceBetween: 30,

            navigation: {
                nextEl: '.day-products__navigation-btn--next',
                prevEl: '.day-products__navigation-btn--prev',
            },
        });
    }
}