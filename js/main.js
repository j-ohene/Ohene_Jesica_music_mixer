//Javascript
const theSynth = document.querySelector("#theSynth");
const boomBox = document.querySelector("#boomBox");
const thePiano = document.querySelector("#thePiano");
const theDrum = document.querySelector("#theDrum");
const danceFloor = document.querySelector("#danceFloor");
const resetButton = document.querySelector("button");

let draggedPiece;
console.log(theSynth),
console.log(boomBox),
console.log(thePiano),
console.log(theDrum),
console.log(danceFloor);

let synth = document.createElement ("audio")
console.log(theSynth)

let boombox = document.createElement ("audio")
console.log(boomBox)

let piano = document.createElement ("audio")
console.log(thePiano)

let amp = document.createElement ("audio")
console.log(theDrum)



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
    //lets makes some music//
synth.src = "audio/synth-2.wav";
synth.load();
document.body.appendChild(synth)
synth.play();

boombox.src = "audio/Digi-Bass-03.wav";
boombox.load();
document.body.appendChild(boombox);
boombox.play();

piano.src = "audio/House-Piano.mp3";
piano.load();
document.body.appendChild(piano);
piano.play();

amp.src = "audio/snare.wav";
amp.load();
document.body.appendChild(amp);
amp.play();

 }

 //eventListeners
theSynth.addEventListener("dragstart", startedDragging);
boomBox.addEventListener("dragstart", startedDragging);
thePiano.addEventListener("dragstart", startedDragging);
theDrum.addEventListener("dragstart", startedDragging);
danceFloor.addEventListener("dragover", draggedOver);
danceFloor.addEventListener("drop", dropped);


