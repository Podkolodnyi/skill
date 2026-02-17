import productCard from "./productCard.js";
import sortCards from "./sortCards.js"

export default async function renderCards(cardsList) {
    const cards = await sortCards(await cardsList);

    const catalogList = document.querySelector(".catalog__list");
    const pagination = document.querySelector(".catalog__pagination");

    async function renderCardsList(list) {
        catalogList.innerHTML = "";
        list.forEach((el) => {
            const catalogItem = document.createElement("li");
            catalogItem.classList.add("catalog__item");
            catalogList.append(catalogItem);
            catalogItem.append(productCard(el));
        })
    }

    function getPagination() {
        pagination.innerHTML = "";
        if (cards.length < 6) {
            renderCardsList(cards);
            return
        } else {
            renderCardsList(cards.slice(0, 6))
        }
        for (let i = 0; i < cards.length / 6; i++) {
            const paginationItem = document.createElement("li");
            paginationItem.classList.add("catalog__pagination-item");
            const paginationLink = document.createElement("button");
            paginationLink.classList.add("catalog__pagination-link");
            paginationLink.textContent = `${i + 1}`
            paginationItem.append(paginationLink);
            pagination.append(paginationItem);

            paginationLink.addEventListener("click", () => {
                let cardsList = [];
                if (i !== cards.length / 6) {
                    cardsList = cards.slice((i+1)*6-6, (i+1)*6);
                } else {
                    cardsList = cards.slice((i+1)*6-6);
                }
                renderCardsList(cardsList);
            })
        }
    }
    getPagination();

}