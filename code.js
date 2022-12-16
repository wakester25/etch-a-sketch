
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
        block.addEventListener("mouseover", () => block.style.backgroundColor = "white");
    });

}

function changeGridSize() {
    let size = Number(prompt("Enter size of gird (entering 16 will produce a 16x16 grid)"));
    
    if (Number.isInteger(size) && size < 100) {
        createGrid(size);
    } else {
        window.alert("Please enter a valid number no greater than 100")
    }
}

createGrid(16);
document.getElementById("grid-size-btn").addEventListener("click", changeGridSize);
