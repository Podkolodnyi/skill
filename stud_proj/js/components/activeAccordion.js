export default function activeAccordion() {
    let accordionBox = document.querySelector(".accordion");
    let accordionList = document.querySelectorAll(".accordion__btn");
    let accordionObj = Array.from(accordionList);
    accordionObj.forEach((el) => {
        el.addEventListener("click", () => {
            let accordionActive = document.querySelector(".accordion__btn--active");
            el.classList.toggle("accordion__btn--active");
            if (accordionActive) {
                accordionActive.classList.remove("accordion__btn--active");
            }
        })
    })
}