import dayProductCard from "./dayProductCard.js";

export default async function renderSlider(cards) {
    const cardsList = await cards;
    const dayCardsList = cardsList.filter((el) => {
        if (el.goodsOfDay) {
            return el
        }
    })

    const dayProductList = document.querySelector(".day-products__list");

    dayCardsList.forEach((el) => {
        const dayCardBox = document.createElement("li");
        dayCardBox.classList.add("day-products__item", "swiper-slide");
        dayCardBox.append(dayProductCard(el));
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