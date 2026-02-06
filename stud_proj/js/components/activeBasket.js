export default function activeBasket() {
    const basket = document.querySelector(".basket");
    const basketBtn = document.querySelector("#basket-btn");
    basketBtn.addEventListener("click", (e) => {
        basket.classList.toggle("basket--active");
    })
}