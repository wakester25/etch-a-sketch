
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createColorBlockEvent(color) {
    let blockElements = document.querySelectorAll(".grid-block");
    blockElements.forEach(block => {
        block.addEventListener("mouseover", () => {
            if(mouseDown) {block.style.backgroundColor = color}
        });
    });
}

function createRainbowBlockEvent() {
    let rainbowValues = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
    let blockElements = document.querySelectorAll(".grid-block");
    blockElements.forEach(block => {
        block.addEventListener("mouseover", () => {
            if(mouseDown) {
                let randomIndex = Math.floor(Math.random() * rainbowValues.length);
                block.style.backgroundColor = rainbowValues[randomIndex];
            }
        });
    });
}

function createGrid(size) {
    let gridContainer = document.querySelector("#grid-container");

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let totalBlocks = size * size;
    let containerWidth = size * 25;
    gridContainer.style.width = `${containerWidth}px`;

    for(i=0; i < totalBlocks; i++) {
        div = document.createElement("div");
        gridContainer.appendChild(div).className = "grid-block";
    }

    createColorBlockEvent("white");

}

createGrid(16);
slider = document.querySelector("#slider");
sliderCount = document.querySelector("#slider-count");
sliderCount.innerText = `${slider.value} X ${slider.value}`;
slider.addEventListener("change", () => {
    createGrid(slider.value);
    sliderCount.innerText = `${slider.value} X ${slider.value}`;
});
rainbowBtn = document.querySelector("#rainbow-btn");
rainbowBtn.addEventListener("click", createRainbowBlockEvent);
