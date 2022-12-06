let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

link.addEventListener('click', function() {
  ul.classList.toggle('open')
})