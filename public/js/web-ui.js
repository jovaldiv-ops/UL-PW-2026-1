const swiper = new Swiper(".swiper", {
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    effect: "slide",

    speed: 700, 
});

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");

    const openBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("menu-close");

    function openMenu() {
        menu.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
    }

    function closeMenu() {
        menu.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }

    openBtn?.addEventListener("click", openMenu);

    closeBtn?.addEventListener("click", closeMenu);

    overlay?.addEventListener("click", closeMenu);

    window.addEventListener("resize", () => {

        if (window.innerWidth >= 768) {
            closeMenu();
        }

    });

});