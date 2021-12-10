function clearScreen() {
  document.getElementById("result").value = "";
}

function yami(value) {
  let res = document.getElementById("result");
  if(res.value == "undefine") {
    res.value = "";
  }
  res.value += value;
}

document.addEventListener('keydown',function(event) {
  playSound(event.key);
});


function playSound(character) {

  if (character=='1') {
    var song1 = new Audio('Song/crash.mp3');
    song1.play();
  }

  else if (character=='2') {
    var song2 = new Audio('Song/kick-bass.mp3');
    song2.play();
  }

  else if (character=='3') {
    var song3 = new Audio('Song/snare.mp3');
    song3.play();
  }

  else if (character=='4') {
    var song4 = new Audio('Song/tom-1.mp3');
    song4.play();
  }

  else if (character=='5') {
    var song5 = new Audio('Song/tom-2.mp3');
    song5.play();
  }

  else if (character=='6') {
    var song6 = new Audio('Song/tom-3.mp3');
    song6.play();
  }

  else if (character=='7') {
    var song7 = new Audio('Song/tom-4.mp3');
    song7.play();
  }
}
