//Javascript
const theSynth = document.querySelector("#theSynth");
const boomBox = document.querySelector("#boomBox");
const thePiano = document.querySelector("#thePiano");
const theDrum = document.querySelector("#theDrum");
const danceFloor = document.querySelector("#danceFloor");

let draggedPiece;
console.log(theSynth),
console.log(boomBox),
console.log(thePiano),
console.log(theDrum),
console.log(danceFloor);

//function
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
boomBox.addEventListener("dragstart", startedDragging);
thePiano.addEventListener("dragstart", startedDragging);
theDrum.addEventListener("dragstart", startedDragging);
danceFloor.addEventListener("dragover", draggedOver);
danceFloor.addEventListener("drop", dropped);

