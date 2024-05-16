const modal1 = document.querySelector('.modal');


const toggleModal = () => {
    modal1.style.display = "block"
}
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }