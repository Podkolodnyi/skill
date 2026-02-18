
export default function activeBasket() {
    const basket = document.querySelector(".basket");
    const basketBtn = document.querySelector("#basket-btn");

    basketBtn.addEventListener("click", (e) => {
        basket.classList.toggle("basket--active");
    });

    document.addEventListener("click", (e) => {
        const isDeleteButton = e.target.closest('.main-menu__close');
        const isBasketElement = basket.contains(e.target);
        const isBasketBtn = basketBtn.contains(e.target);


        if (isDeleteButton) {
            return;
        }

        if (!isBasketElement && !isBasketBtn) {
            basket.classList.remove("basket--active");
        }
    });
}

