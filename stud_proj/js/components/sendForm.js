
export default function sendForm() {
    const form = document.querySelector(".questions__form");

    function getModal(error) {
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";
        overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        `;

        const modal = document.createElement("div");
        modal.className = "success-modal";
        modal.style.cssText = `
        position: relative;
        background: white;
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

        const title = document.createElement("h3");
        if (error === "ok") {
            title.textContent = "Заявка отправлена!"
        } else {
            title.textContent = "Произошла ошибка, попробуйте позже!"
        }
        title.style.cssText = `
        font-size: 24px;
        color: #333;
        margin: 0;
    `;

        const closeBtn = document.createElement("button");
        closeBtn.classList.add("main-menu__close");
        closeBtn.type = "button";
        closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        `;

        closeBtn.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });

        overlay.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });

        const iconCloseBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconCloseBtn.classList.add("main-menu__icon")
        iconCloseBtn.style.width = "24px";
        iconCloseBtn.style.height = "30px";
        iconCloseBtn.setAttribute("aria-hidden", "true");
        const useIconCloseBtn = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useIconCloseBtn.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "images/sprite.svg#icon-close");

        iconCloseBtn.append(useIconCloseBtn);
        closeBtn.append(iconCloseBtn);
        modal.appendChild(title);
        modal.appendChild(closeBtn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }

    async function sendData(data) {
        try {
            const response = await fetch("https://httpbin.org/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return result;

        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            throw error;
        }
    }

    const validator = new JustValidate(form, {
        lockForm: true,
        focusInvalidField: true,
        validateBeforeSubmitting: true,
    });

    validator
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "Это поле обязательно для заполнения",
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Минимальная длина: :value символов",
            },
            {
                rule: "maxLength",
                value: 20,
                errorMessage: "Максимальная длина: :value символов",
            },
        ])
        .addField("#email", [
            {
                rule: "required",
                errorMessage: "Это поле обязательно для заполнения",

            },
            {
                rule: "email",
                errorMessage: "Введите корректный email"
            },
        ])
        .addField("#agree", [
            {
                rule: "required",
                errorMessage: "Это поле обязательно для заполнения",
            },
        ])
        .onSuccess((event) => {
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            sendData(data).then(() => {
                getModal("ok");
                form.reset();
            }).catch(() => {
                getModal("error");
            })
        })
}