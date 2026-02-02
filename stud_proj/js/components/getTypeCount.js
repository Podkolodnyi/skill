export default async function getTypeCount(cardsList) {

    let cards = await cardsList;

    function getCount(name) {
            let list = cards.filter((el) => {return el.type.includes(name, 0)});
            const count = document.querySelector(`.custom-checkbox--${name} .custom-checkbox__count`)
            count.textContent = list.length;
    }

    getCount("pendant");
    getCount("ceiling");
    getCount("overhead");
    getCount("point");
    getCount("nightlights");

}