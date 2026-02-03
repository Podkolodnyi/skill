import renderCards from "./renderCards.js";

export default async function filterCards(cardsList) {
    let cards = await cardsList;
    const filterForm = document.querySelector(".catalog-form")

    let lists = {}

    function getTypeList(type) {
        let list = cards.filter((el) => {
            if (el.type.includes(type, 0))
                return el
        });

        let cardsIdList = [];
        list.forEach((el) => {
            cardsIdList.push(Number(el.id));
        })

        if (type === "pendant") {
            lists["pendant"] = cardsIdList
        }
        if (type === "ceiling") {
            lists["ceiling"] = cardsIdList
        }
        if (type === "overhead") {
            lists["overhead"] = cardsIdList
        }
        if (type === "point") {
            lists["point"] = cardsIdList
        }
        if (type === "nightlights") {
            lists["nightlights"] = cardsIdList
        }

        const count = document.querySelector(`.custom-checkbox--${type} .custom-checkbox__count`);
        count.textContent = list.length;
    }

    getTypeList("pendant");
    getTypeList("ceiling");
    getTypeList("overhead");
    getTypeList("point");
    getTypeList("nightlights");

    filterForm.addEventListener("change", (e) => {
        const selectedTypes = [...filterForm.querySelectorAll('input[type=checkbox]:checked')].map(checkbox => checkbox.value);
        let allSelectedCards = [];
        selectedTypes.forEach((el) => {
            if (el === "pendant") {
                allSelectedCards.push(...lists.pendant)
            }
            if (el === "ceiling") {
                allSelectedCards.push(...lists.ceiling)
            }
            if (el === "overhead") {
                allSelectedCards.push(...lists.overhead)
            }
            if (el === "point") {
                allSelectedCards.push(...lists.point)
            }
            if (el === "nightlights") {
                allSelectedCards.push(...lists.nightlights)
            }
        })
        let renderList = [];
        cards.forEach((el) => {
            if (allSelectedCards.includes(el.id)) {renderList.push(el)}
        })
        if (renderList.length > 0) {renderCards(renderList)}
        else {renderCards(cards)}
    })
}