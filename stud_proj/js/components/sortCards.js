import renderCards from "./renderCards.js";

export default function sortCards(cards) {
    const sortSelect = document.querySelector(".catalog__sort-select");
        sortSelect.addEventListener("change", () => {
            renderCards(cards);
        })

    let cardsSort;
    if (sortSelect.value === "price-min") {
        cardsSort = (a, b) => {
            if (a.price.new < b.price.new) {
                return -1
            }
            if (a.price.new > b.price.new) {
                return 1
            }
            if (a.price.new === b.price.new) {
                return 0
            }
        }
    }

    if (sortSelect.value === "price-max") {
        cardsSort = (a, b) => {
            if (a.price.new > b.price.new) {
                return -1
            }
            if (a.price.new < b.price.new) {
                return 1
            }
            if (a.price.new === b.price.new) {
                return 0
            }
        }
    }

    if (sortSelect.value === "rating-max") {
        cardsSort = (a, b) => {
            if (a.rating < b.rating) {
                return -1
            }
            if (a.rating > b.rating) {
                return 1
            }
            if (a.rating === b.rating) {
                return 0
            }
        }
    }
    return cards.sort(cardsSort);
}