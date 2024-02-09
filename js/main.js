//Javascript
const theSynth = document.querySelector("#theSynth");
const boomBox = document.querySelector("#boomBox");
const thePiano = document.querySelector("#thePiano");
const theDrum = document.querySelector("#theDrum");
const danceFloor = document.querySelector("#danceFloor");
const instruments = document.querySelector("#theBand");


let originalParent = document.querySelector("#theBand");

let draggedPiece;


//function
function startedDragging (){
    console.log ("started dragging");
    draggedPiece = this;
}
function draggedOver (e) {
    e.preventDefault();
    console.log ("Item was dragged over dropzone");
 }
 let synth = new Audio("audio/synth-2.wav");
 let boombox = new Audio("audio/Digi-Bass-03.wav");
 let piano = new Audio("audio/House-Piano.mp3");
 let amp = new Audio("audio/snare.wav");
 
 function dropped(e) {
     e.preventDefault();
     console.log("Item was dropped");
     this.appendChild(draggedPiece);
 
     
     if (draggedPiece ==theSynth) {
         synth.play();
     } else if (draggedPiece == boomBox) {
         boombox.play();
     } else if (draggedPiece ==thePiano) {
         piano.play();
     } else if (draggedPiece == theDrum) {
         amp.play();
     }
     
 }
 

 //eventListeners
theSynth.addEventListener("dragstart", startedDragging);
boomBox.addEventListener("dragstart", startedDragging);
thePiano.addEventListener("dragstart", startedDragging);
theDrum.addEventListener("dragstart", startedDragging);
danceFloor.addEventListener("dragover", draggedOver);
danceFloor.addEventListener("drop", dropped);

