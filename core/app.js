let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')
let overL = document.querySelector('bikinfo');


link.addEventListener('click', function() {
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

bikiniB.onclick = function(){revealP(popB)};
popB.onclick = function(){hideP(popB)};
overL.onclick = function(){hideP(popB)};