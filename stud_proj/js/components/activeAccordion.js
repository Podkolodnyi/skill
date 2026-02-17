export default function activeAccordion() {
    const accordionList = document.querySelectorAll(".accordion__btn");
    const accordionObj = Array.from(accordionList);
    accordionObj.forEach((el) => {
        el.addEventListener("click", () => {
            const accordionActive = document.querySelector(".accordion__btn--active");
            el.classList.toggle("accordion__btn--active");
            if (accordionActive) {
                accordionActive.classList.remove("accordion__btn--active");
            }
        })
    })
}