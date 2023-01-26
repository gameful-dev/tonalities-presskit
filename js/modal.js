const webpage = document.querySelector("body");
const screenshots = document.querySelectorAll(".screenshots img");
const modalArea = document.createElement("div");
const modalImg = document.createElement("img");

modalArea.classList.add("modal-wrapper");
modalArea.appendChild(modalImg);

webpage.appendChild(modalArea);

screenshots.forEach(img => {
    img.addEventListener("click", event => {
        modalArea.classList.add("active");
        modalImg.setAttribute("src", event.target.getAttribute("src"));
    });
});

modalArea.addEventListener("click", () => {
    modalArea.classList.remove("active");
});

modalImg.addEventListener("click", () => {
    modalArea.classList.remove("active");
});