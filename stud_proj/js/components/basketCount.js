export default function basketCount() {
    const basketList = document.querySelector(".basket__list");
    const basketCount = document.querySelector(".header__user-count");
    const basketEmpty = document.querySelector(".basket__empty-block");
    const basketLinkBtn = document.querySelector(".basket__link");
    basketLinkBtn.setAttribute("style", "display: none");

    const basketCountNum = basketList.childElementCount;
    basketCount.textContent = basketCountNum;

    if (basketCountNum > 0) {
        basketEmpty.setAttribute("style", "display: none");
        basketLinkBtn.setAttribute("style", "display: block");
    } else {
        basketEmpty.setAttribute("style", "display: block")
        basketLinkBtn.setAttribute("style", "display: none")
    }
}