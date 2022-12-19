let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')
let overL = document.getElementById('bikinfo');


link.addEventListener('click', function () {
  ul.classList.toggle('open')
})

const popB = document.getElementById('bikdesc');
const bikiniB = document.getElementById('bikini');

const revealP = elem => {
  elem.style.display = "block";
}
const hideP = elem => {
  if (elem.style.display != "none") {
    elem.style.display = "none";
  }
}

overL.onclick = function () { hideP(popB) };
bikiniB.onclick = function () { revealP(popB) };
popB.onclick = function () { hideP(popB) };


const scoreBoard = document.getElementById("scoreN");
var bubbles = document.getElementsByClassName("bubble");
let scoreNumb = 0;
for (var i = 0; i < bubbles.length; i++) {
  let bubble = bubbles[i];
  bubble.onclick = function () {
    bubble.src = "assets/img/bubble-anim/expl1.png";
    setInterval(function () {
      bubble.src = "assets/img/bubble-anim/expl2.png";
    }, 100);
    setInterval(function () {
      bubble.src = "assets/img/bubble-anim/expl3.png";
    }, 200);
    setInterval(function () {
      bubble.style.visibility = "hidden";
    }, 300);
    scoreNumb += 1;
    if (scoreNumb <= 1) {
    scoreBoard.innerHTML = scoreNumb + " bubble";
    } else {
      scoreBoard.innerHTML = scoreNumb + " bubbles";
    }
  }
}
