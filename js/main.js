//Javascript
const theSynth = document.querySelector("#theSynth");
const danceFloor = document.querySelector("#danceFloor");

let draggedpiece;
console.log(theSynth);
console.log(danceFloor);

//funtion
function startedDragging (){
    console.log ("started dragging");
    draggedPiece = this;
}
function draggedOver (e) {
    e.preventDefault();
    console.log ("Item was dragged over dropzone");
 }
 function dropped (e) {
    e.preventDefault();
    console.log("Item was dropped");
    this.appendChild(draggedPiece);
 }
 //eventListeners
theSynth.addEventListener("dragstart", startedDragging);
danceFloor.addEventListener("dragover", draggedOver);
danceFloor.addEventListener("drop", dropped);

