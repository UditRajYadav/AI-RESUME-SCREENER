document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Loaded");

    const form = document.getElementById("resumeForm");
    const overlay = document.querySelector(".loading-overlay");

    if (form && overlay) {
        form.addEventListener("submit", () => {
            overlay.classList.add("active");
        });
    }

    const circles = document.querySelectorAll(".circle-score");

    circles.forEach(circle => {

        const value = parseFloat(circle.dataset.value);

        if (isNaN(value)) return;

        const percent = Math.max(0, Math.min(value, 100));

        const degree = (percent / 100) * 360;

        circle.style.setProperty("--progress", degree + "deg");

    });

});