/**
 * untuk membuat link bisa dicopy
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

        /**
         * Untuk membuat toast notification
         */
        document.getElementById("toast").innerHTML = `
        <div class="toast-container">
                <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
        </div>
    `;

    /**
     * Untuk menghiulangkan notifikasi
     */
    setTimeout(() => {
        document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
        document
        .querySelector("#toast .toast-container").remove();
    }, 2000);
    });
});

/**
 * Untuk ganti sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

/**
 * animasi text bergerak saat scroll
 */

document.addEventListener("scroll", (e) => {
    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY / 5}px)`;
});