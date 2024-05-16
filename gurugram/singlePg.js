function getQueryParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryParams = {};
    for (const [key, value] of urlParams.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}
const queryParams = getQueryParameters();

const img = document.querySelector('.image');
const fullDetails = document.querySelector('.full-details');
const details = document.querySelector('.details ');
const inner = document.querySelector('.inner-1');
const h1 = document.querySelector('.h-4');
const price1 = document.querySelector('.dynamic');
if(queryParams){
   img.src = queryParams.image;
   const detailHtml = `
       <h4>${queryParams.name}</h4>
       <p>${queryParams.location}</p>
   `
   inner.innerHTML = detailHtml;
   h1.textContent = queryParams.price;
   price1.textContent = queryParams.price;
}


const modal1 = document.querySelector('.modal');


const toggleModal = () => {
    modal1.style.display = "block"
}
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }