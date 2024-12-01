document.addEventListener("DOMContentLoaded", () => {
    const hexcolor = document.querySelector(".hexcolor");
    const generateBtn = document.querySelector(".generate");
    const resetBtn = document.querySelector(".reset");

    const generateNumber = () => {
        const randomColor = `#${Math.random().toString(16).substring(2, 8)}`;
        document.body.style.backgroundColor = randomColor;
        hexcolor.textContent = randomColor;
    };

    const resetNumber = () => {
        const whiteColor = getComputedStyle(document.documentElement).getPropertyValue('--white').trim();
        hexcolor.textContent = whiteColor;
        document.body.style.backgroundColor = whiteColor;
    };

    generateBtn.addEventListener("click", generateNumber);
    resetBtn.addEventListener("click", resetNumber);

    generateNumber();
});
