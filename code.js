
function changeGridSize() {
    console.log("The button has been clicked");
}



gridContainer = document.querySelector("#grid-container");

for(i=0; i < 256; i++) {
    div = document.createElement("div");
    gridContainer.appendChild(div).className = "grid-block";
}

blockElements = document.querySelectorAll(".grid-block");
blockElements.forEach(block => {
    block.addEventListener("mouseover", () => block.style.backgroundColor = "white");
});

document.getElementById("grid-size-btn").addEventListener("click", changeGridSize);
