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

const cards = document.querySelectorAll(".procrastinators-contents-list");
cards[0].classList.add("active");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        cards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
    });
});

function startDataCounter() {
    const dataElement = document.getElementById("data-efficiency-data");
    const targetForData = 420;
    const duration = 4000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;
    const incrementForData = targetForData / totalFrames;

    let countData = 0;

    const intervalForData = setInterval(() => {
        countData += incrementForData;
        if (countData >= targetForData) {
            countData = targetForData;
            clearInterval(intervalForData);
        }
        dataElement.textContent = Math.floor(countData);
    }, frameRate);
}

function startConversionCounter() {
    const conversionElement = document.getElementById("conversion-rate-data");
    const targetForConversion = 708;
    const duration = 4000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;
    const incrementForConversion = targetForConversion / totalFrames;

    let countConversion = 0;

    const intervalForConversion = setInterval(() => {
        countConversion += incrementForConversion;
        if (countConversion >= targetForConversion) {
            countConversion = targetForConversion;
            clearInterval(intervalForConversion);
        }
        conversionElement.textContent = Math.floor(countConversion);
    }, frameRate);
}

function startLLMCounter() {
    const llmElement = document.getElementById("llm-scale-data");
    const targetForLLM = 1.82;
    const duration = 4000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;
    const incrementForLLM = targetForLLM / totalFrames;

    let countLLM = 0;

    const intervalForLLM = setInterval(() => {
        countLLM += incrementForLLM;
        if (countLLM >= targetForLLM) {
            countLLM = targetForLLM;
            clearInterval(intervalForLLM);
        }
        llmElement.textContent = countLLM.toFixed(2);
    }, frameRate);
}

let dataCountStarted = false;
let conversionCountStarted = false;
let llmCountStarted = false;

window.addEventListener("scroll", () => {
    const dataEfficiencyelement = document.getElementById("data-efficiency-data");
    const dataPosition = dataEfficiencyelement.getBoundingClientRect();

    if (!dataCountStarted && dataPosition.top < window.innerHeight && dataPosition.bottom >= 0) {
        dataCountStarted = true;
        startDataCounter();
    }

    const conversionElement = document.getElementById("conversion-rate-data");
    const conversionPosition = conversionElement.getBoundingClientRect();

    if (!conversionCountStarted && conversionPosition.top < window.innerHeight && conversionPosition.bottom >= 0) {
        conversionCountStarted = true;
        startConversionCounter();
    }

    const llmElement = document.getElementById("llm-scale-data");
    const llmPosition = llmElement.getBoundingClientRect();

    if (!llmCountStarted && llmPosition.top < window.innerHeight && llmPosition.bottom >= 0) {
        llmCountStarted = true;
        startLLMCounter();
    }
});

const titles = document.querySelectorAll(".section-title");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5,
    }
);

titles.forEach((title) => {
    observer.observe(title);
});

const title = document.querySelector(".section-title");
if (title) observer.observe(title);

const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1,
    }
);

faders.forEach((el) => {
    appearOnScroll.observe(el);
});
