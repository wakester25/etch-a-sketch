function createGrid() {
    gridContainer = document.querySelector("#grid-container");

    for(i=0; i <= 256; i++) {
        div = document.createElement("div");
        gridContainer.appendChild(div).className = "grid-block";
    }
}

createGrid();