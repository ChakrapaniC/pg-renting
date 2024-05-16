
const modal1 = document.querySelector('.modal');


const toggleModal = () => {
    modal1.style.display = "block"
}
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
const pgHouses = [
  {
      id: 1,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img1.webp",
      price: "₹9,099 / month"
  },
  {
      id: 2,
      name: "Hyphen Club Sprout",
      location: "Koramangala, Bangalore",
      image: "banglore-coliving/img2.jpg",
      price: "₹12,999 / month"
  },
  {
      id: 3,
      name: "Stanza Living Shanghai House",
      location: "Bellandur, Bangalore",
      image: "banglore-coliving/img-4.jpg",
      price: "₹9,799 / month"
  },
  {
      id: 4,
      name: "Hyphen Club Vieux",
      location: "Malleshwaram, Bangalore",
      image: "banglore-coliving/img-6.webp",
      price: "₹20,999 / month"
  },
  {
      id: 5,
      name: "Stanza Living Casper House",
      location: "Domlur, Bangalore",
      image: "banglore-coliving/img-7.jpg",
      price: "₹17,699 / month"
  },
  {
      id: 6,
      name: "Stanza Living Canterbury House",
      location: "Marathahalli, Bangalore",
      image: "banglore-coliving/img-8.jpg",
      price: "₹7,599 / month"
  },
  {
      id: 7,
      name: "Hyphen Club Lush",
      location: "Marathahalli, Bengaluru, Karnataka",
      image: "banglore-coliving/img-9.webp",
      price: "₹13,499 / month"
  },
  {
      id: 8,
      name: "COVIE Bannerghatta 185",
      location: "Bannerghatta, Bangalore",
      image: "banglore-coliving/img-10.webp",
      price: "₹15,700 / month"
  },
  {
      id: 9,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-3.webp",
      price: "₹9,099 / month"
  },
  {
      id: 10, 
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-11.jpg",
      price: "₹9,099 / month"
  },
  {
      id: 11,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-12.jpg",
      price: "₹9,099 / month"
  },
  {
      id: 12,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-13.jpg",
      price: "₹9,099 / month"
  },
  {
      id: 13,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-14.jpg",
      price: "₹9,099 / month"
  },
  {
      id: 14,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-15.jpg",
      price: "₹9,099 / month"
  },
  {
      id: 15,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-16.jpg",
      price: "₹9,099 / month"
  }
];

// const img = document.querySelector('.image');

const showDetails = (id) => {
  const selectedHouse = pgHouses.find(house => house.id === id);
  if (selectedHouse) {
      // Construct the query parameters string
      const queryParams = `?id=${selectedHouse.id}&name=${encodeURIComponent(selectedHouse.name)}&location=${encodeURIComponent(selectedHouse.location)}&image=${encodeURIComponent(selectedHouse.image)}&price=${encodeURIComponent(selectedHouse.price)}`;

      // Redirect to singlePg.html with the query parameters
      window.location.href = `singlePg.html${queryParams}`;
  }
}

const showToast = (message, duration = 3000) => {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, duration);
}

const handleSubmit = (event) => {
  event.preventDefault();
  showToast("Broker will contact you soon");
  const modal1 = document.querySelector('.modal');
  modal1.style.display = "none";
  return falso
}