export default function activeMainMenu() {
    const catalogBtn = document.querySelector(".header__catalog-btn");
    const catalogCloseBtn = document.querySelector(".main-menu__close");
    const mainMenu = document.querySelector(".main-menu");
    const mainMenuWrap = document.querySelector(".main-menu__wrapper");


    catalogBtn.addEventListener("click", () => {
        mainMenu.classList.add("main-menu--active");
    })


    catalogCloseBtn.addEventListener("click", () => {
        mainMenu.classList.remove("main-menu--active");
    })

        document.addEventListener("click", (e) => {
            if (!mainMenuWrap.contains(e.target) && !catalogBtn.contains(e.target)) {
                mainMenu.classList.remove("main-menu--active");
            }
        })
}