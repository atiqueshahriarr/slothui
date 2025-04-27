function handleMenuBar() {
    const element = document.getElementById("nav-dropdown-menu-show");
    console.log(element);

    if (element) {
        element.classList.toggle("nav-dropdown");
    }
}

function handleShowAll() {
    const container = document.getElementById("testimonial-container-cardsId");

    const hiddenCards = container.querySelectorAll(".testimonial-container-card:nth-child(n + 5)");

    hiddenCards.forEach((card) => {
        card.style.display = "block";
        const btn = document.getElementById("testimonial-container-load-buttonId");
        btn.style.display = "none";
    });

    console.log(hiddenCards);
}

const faqItems = document.querySelectorAll(".faq-container-list-dropdown");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-container-list");
    const answer = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".faq-click-dropdown");

    question.addEventListener("click", () => {
        if (answer.style.display === "block") {
            answer.style.display = "none";
            arrow.style.rotate = "0deg";
        } else {
            answer.style.display = "block";
            arrow.style.rotate = "180deg";
        }
    });
});
