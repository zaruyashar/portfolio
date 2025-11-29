document.addEventListener("DOMContentLoaded", function () {
    // navbar scroll efx
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-sm");
        } else {
            navbar.classList.remove("shadow-sm");
        }
    });

    // greet recruiter
    console.log("%cMerhaba! :) Buraya bakmanıza sevindim.", "color: #2563eb; font-size: 16px; font-weight: bold;");
    console.log("Portföyün kendisi de bir hands-on öğrenme deneyimi oldu. Hatta başka projelerim olmasına rağmen ilk canlıya aldığım içerik bu. Siteyi clean code prensiplerini gözeterek HTML5, CSS3 ve Vanilla JS ile hazırlandım. Bu süreçte Gemini 3 Pro'dan da destek aldım. Sorularımı sağ olsun bıkmadan usanmadan yanıtladı. AI destekli bu dijital çağda öğrenme keyfi bambaşka!");
});