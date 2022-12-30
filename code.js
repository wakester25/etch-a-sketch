
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

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

    let blockElements = document.querySelectorAll(".grid-block");
    blockElements.forEach(block => {
        block.addEventListener("mouseover", () => {
            if(mouseDown) {block.style.backgroundColor = "white"}
        });
    });

}


createGrid(16);
slider = document.querySelector("#slider");
sliderCount = document.querySelector("#slider-count");
sliderCount.innerText = `${slider.value} X ${slider.value}`;
slider.addEventListener("change", () => {
    createGrid(slider.value);
    sliderCount.innerText = `${slider.value} X ${slider.value}`;
});
