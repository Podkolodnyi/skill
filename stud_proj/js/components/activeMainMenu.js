export default function activeMainMenu() {
    const catalogBtn = document.querySelector(".header__catalog-btn");
    const catalogCloseBtn = document.querySelector(".main-menu__close");
    const mainMenu = document.querySelector(".main-menu");

//открыть
    catalogBtn.addEventListener("click", () => {
        mainMenu.classList.add("main-menu--active");
    })

//закрыть
    catalogCloseBtn.addEventListener("click", () => {
        mainMenu.classList.remove("main-menu--active");
    })
}