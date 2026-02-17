export default function activeLocation() {
    const location = document.querySelector(".location__city");
    const locationName = document.querySelector(".location__city-name");
    const locationEl = document.querySelectorAll(".location__sublink");

    location.addEventListener("click", ()=> {
        location.classList.toggle("location__city--active");
    })

    locationEl.forEach((el) => {
        el.addEventListener("click", () => {
            locationName.textContent = el.textContent;
            location.classList.remove("location__city--active");
        })
    })
}