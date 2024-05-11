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

  const pgHouses = [
    {
      id: 1,
      imgSrc: "images/img-1.webp",
      alt: "img-1",
      name: "Stanza Living Dunkirk House",
      location: "sector 48, Gurgaon",
      price: "₹11,799 / month",
    },
    {
      id: 2,
      imgSrc: "images/img-2.jpg",
      alt: "img-1",
      name: "Cloud Nine Rooms 56",
      location: "Sector- 43, Golf Course Road, Gurugram",
      price: "₹13,999 / month",
    },
    {
      id: 3,
      imgSrc: "images/img-3.webp",
      alt: "img-1",
      name: "RentDoor Sector 46",
      location: "Sector 46, Gurugram",
      price: "₹28,000 / month",
    },
    {
      id: 4,
      imgSrc: "images/img-4.webp",
      alt: "img-1",
      name: "Stanza Living Taiping House",
      location: "Sector 39, Gurugram",
      price: "₹24,299 / month",
    },
    {
      id: 5,
      imgSrc: "images/img-5.jpg",
      alt: "img-1",
      name: "Livstation - Near Huda Metro",
      location: "Ardee City, Sector 52, Gurgaon",
      price: "₹15,000 / month",
    },
    {
      id: 6,
      imgSrc: "images/img-6.jpg",
      alt: "img-1",
      name: "Stanza Living Tortosa House",
      location: "Sector 57, Gurgaon",
      price: "₹19,799 / month",
    },
    {
      id: 7,
      imgSrc: "images/img-7.jpg",
      alt: "img-1",
      name: "Cloud Nine Rooms",
      location: "Sector 55, Gurugram",
      price: "₹12,999 / month",
    },
    {
      id: 8,
      imgSrc: "images/img-8.webp",
      alt: "img-1",
      name: "Stanza Living Pisa House",
      location: "Sector 52, Gurugram, Haryana",
      price: "₹24,099 / month",
    },
    {
      id: 9,
      imgSrc: "images/img-9.webp",
      alt: "img-1",
      name: "RentDoor Sector 39",
      location: "Sector 39, Gurugram",
      price: "₹26,000 / month",
    },
    {
      id: 10,
      imgSrc: "images/img-10.jpg",
      alt: "img-1",
      name: "RentDoor Unitech Cyber Park",
      location: "Sector 39, Gurugram",
      price: "₹24,000 / month",
    },
    {
      id: 11,
      imgSrc: "images/img-11.jpg",
      alt: "img-1",
      name: "RentDoor Sector 52",
      location: "Sector 52, Gurugram",
      price: "₹20,000 / month",
    },
    {
      id: 12,
      imgSrc: "images/img-12.jpg",
      alt: "img-1",
      name: "Covie 108",
      location: "Medicity, Gurugram",
      price: "₹15,150 / month",
    },
    {
      id: 13,
      imgSrc: "images/img-13.jpg",
      alt: "img-1",
      name: "COVIE Gurgaon 70 - Near Metro",
      location: "Sector 46, Gurugram",
      price: "₹15,000 / month",
    },
    {
      id: 14,
      imgSrc: "images/img-14.jpg",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Gurugram",
      price: "₹9,099 / month",
    },
    {
      id: 15,
      imgSrc: "images/img-15.jpg",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Gurugram",
      price: "₹9,099 / month",
    },
  ];

  const showDetails = (id) => {
    const selectedHouse = pgHouses.find(house => house.id === id);
    if (selectedHouse) {
        // Construct the query parameters string
        const queryParams = `?id=${selectedHouse.id}&name=${encodeURIComponent(selectedHouse.name)}&location=${encodeURIComponent(selectedHouse.location)}&image=${encodeURIComponent(selectedHouse.imgSrc)}&price=${encodeURIComponent(selectedHouse.price)}`;
  
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