const requestBtn = document.querySelector('.btn3');
const modal1 = document.querySelector('.modal');


requestBtn.addEventListener('click',()=> {
   modal1.style.display = "block"
   console.log("click")
})
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }