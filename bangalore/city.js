
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
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 2,
      name: "Hyphen Club Sprout",
      location: "Koramangala, Bangalore",
      image: "banglore-coliving/img2.jpg",
      price: "₹12,999 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e83b1a29b%3A0x84b83c7e0bafce7c!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560648376!5m2!1sen!2sin"
    },
    {
      id: 3,
      name: "Stanza Living Shanghai House",
      location: "Bellandur, Bangalore",
      image: "banglore-coliving/img-4.jpg",
      price: "₹9,799 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13f2a6c2a673%3A0x7059a2cfecb54dfb!2sBellandur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560687500!5m2!1sen!2sin"
    },
    {
      id: 4,
      name: "Hyphen Club Vieux",
      location: "Malleshwaram, Bangalore",
      image: "banglore-coliving/img-6.webp",
      price: "₹20,999 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sMalleshwaram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560734567!5m2!1sen!2sin"
    },
    {
      id: 5,
      name: "Stanza Living Casper House",
      location: "Domlur, Bangalore",
      image: "banglore-coliving/img-7.jpg",
      price: "₹17,699 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14aefdded805%3A0x9a0f4f19ae6c9af0!2sDomlur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560778723!5m2!1sen!2sin"
    },
    {
      id: 6,
      name: "Stanza Living Canterbury House",
      location: "Marathahalli, Bangalore",
      image: "banglore-coliving/img-8.jpg",
      price: "₹7,599 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14083f9adf7d%3A0x6e6933af232e09a0!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560827231!5m2!1sen!2sin"
    },
    {
      id: 7,
      name: "Hyphen Club Lush",
      location: "Marathahalli, Bengaluru, Karnataka",
      image: "banglore-coliving/img-9.webp",
      price: "₹13,499 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14083f9adf7d%3A0x6e6933af232e09a0!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560869946!5m2!1sen!2sin"
    },
    {
      id: 8,
      name: "COVIE Bannerghatta 185",
      location: "Bannerghatta, Bangalore",
      image: "banglore-coliving/img-10.webp",
      price: "₹15,700 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1330e56cfeb9%3A0x4b72f72be2131a0!2sBannerghatta%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560912389!5m2!1sen!2sin"
    },
    {
      id: 9,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-3.webp",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 10,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-11.jpg",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 11,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-12.jpg",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 12,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-13.jpg",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 13,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-14.jpg",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 14,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-15.jpg",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    },
    {
      id: 15,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Bangalore",
      image: "banglore-coliving/img-16.jpg",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.93328509102!2d77.57404415!3d13.03577255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167c14682bfb%3A0x8d9e1816e8e591e!2sManyata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1622560597001!5m2!1sen!2sin"
    }
  ];

// const img = document.querySelector('.image');

const showDetails = (id) => {
  const selectedHouse = pgHouses.find(house => house.id === id);
  if (selectedHouse) {
      // Construct the query parameters string
      const queryParams = `?id=${selectedHouse.id}&name=${encodeURIComponent(selectedHouse.name)}&location=${encodeURIComponent(selectedHouse.location)}&image=${encodeURIComponent(selectedHouse.image)}&price=${encodeURIComponent(selectedHouse.price)}&mapSrc=${encodeURIComponent(selectedHouse.mapEmbedSrc)}`;
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
  return false
}

const dropdown = document.querySelector('.dropdown-menu');
const closeBtn = document.querySelector('.close');
const toggleMenu = () => {
  dropdown.style.display = 'block';
};
closeBtn.addEventListener('click', ()=> {
  dropdown.style.display = 'none';
})