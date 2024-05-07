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
// const imageUrl = [
//     "banglore-coliving/img1.webp",
//     "banglore-coliving/img2.jpg",
//     "banglore-coliving/img-4.jpg",
//     "banglore-coliving/img-6.webp",
//     "banglore-coliving/img-7.jpg",
//     "banglore-coliving/img-8.jpg",
//     "banglore-coliving/img-9.webp",
//     "banglore-coliving/img-10.webp",
//     "banglore-coliving/img-3.webp"
// ];
// // Function to create a new image card
//   function createImageCard(imageUrl) {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     const img = document.createElement("img");
//     img.src = imageUrl;
    
//     let p = document.createElement("p");
//     p.innerHTML = "this is p tag";
//     card.appendChild(img);
//     return card;
//   }

//   // Function to add image cards to the container
//   function addImageCards() {
//     const container = document.querySelector(".coliving-spaces");
//       imageUrl.forEach(url => {
//       const card = createImageCard(url);
//       container.appendChild(card);
//     });
//   }

//   function addText(text){
//     const card = document.createElement("div");
//     card.classList.add("details");

//   }
// function createImageCard(imageUrl) {
//     const card = document.querySelector(".card");
//     card.classList.add("card");

//     const img = document.querySelector(".image");
//     img.src = imageUrl;

//     card.appendChild(img);
//     return card;
//   }

//   // Function to add image cards to the container
//   function addImageCards() {
//     const container = document.querySelector(".coliving-spaces");
//       imageUrl.forEach(url => {
//       const card = createImageCard(url);
//       container.appendChild(card);
//     });
//   }