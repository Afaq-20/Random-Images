const contEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    addImages();
})

function addImages() {
    for (let index = 0; index < 10; index++) {
        const newImage = document.createElement("img");
        newImage.src = `https://source.unsplash.com/300x300/?children`;
        contEl.appendChild(newImage)
    }
}