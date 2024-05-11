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
      imgSrc: "images/img-1.jpg",
      alt: "img-1",
      name: "The Hostel Yard - Ivy Yard",
      location: "Royal Street Lane, Raipur Khadar, Sector 126, Noida",
      price: "₹15,000 / month",
    },
    {
      id: 2,
      imgSrc: "images/img-2.jpg",
      alt: "img-1",
      name: "Your Space Noida - RN73",
      location: "Sector 62, Noida",
      price: "₹15,000 / month",
    },
    {
      id: 3,
      imgSrc: "images/img-3.jpg",
      alt: "img-1",
      name: "Your space Amity Hostels (Boys)",
      location: "Sector 126, Noida",
      price: "₹14,000 / month",
    },
    {
      id: 4,
      imgSrc: "images/img-4.jpg",
      alt: "img-1",
      name: "The Hostel Yard - Jasmine (Girls)",
      location: "JASMINE BUILDING, Noida, Uttar Pradesh",
      price: "₹18,000 / month",
    },
    {
      id: 5,
      imgSrc: "images/img-5.jpg",
      alt: "img-1",
      name: "Your Space Noida Sector 58",
      location: "Sector 58, Noida, Uttar Pradesh",
      price: "₹17,000 / month",
    },
    {
      id: 6,
      imgSrc: "images/img-6.jpg",
      alt: "img-1",
      name: "Your Space RN72 Noida (Boys)",
      location: "Industrial Area, Sector-62, Noida",
      price: "₹16,000 / month",
    },
    {
      id: 7,
      imgSrc: "images/img-7.jpg",
      alt: "img-1",
      name: "The Hostel Yard - Aster House",
      location: "Bishanpura Rd, Block C, Sector 58, Noida",
      price: "₹14,000 / month",
    },
    {
      id: 8,
      imgSrc: "images/img-8.jpg",
      alt: "img-1",
      name: "Your space Amity Hostels (Girls)",
      location: "sector 126 Noida, near Amity University Gate Number 2 Road, Greater Noida",
      price: "₹14,000 / month",
    },
    {
      id: 9,
      imgSrc: "images/img-9.jpg",
      alt: "img-1",
      name: "RentDoor Sector 39",
      location: "Sector 39, Noida",
      price: "₹26,000 / month",
    },
    {
      id: 10,
      imgSrc: "images/img-10.jpg",
      alt: "img-1",
      name: "RentDoor Unitech Cyber Park",
      location: "Sector 39, Noida",
      price: "₹24,000 / month",
    },
    {
      id: 11,
      imgSrc: "images/img-11.jpg",
      alt: "img-1",
      name: "RentDoor Sector 52",
      location: "Sector 52, Noida",
      price: "₹20,000 / month",
    },
    {
      id: 12,
      imgSrc: "images/img-12.jpg",
      alt: "img-1",
      name: "Covie 108",
      location: "Medicity, Noida",
      price: "₹15,150 / month",
    },
    {
      id: 13,
      imgSrc: "images/img-13.jpg",
      alt: "img-1",
      name: "COVIE Gurgaon 70 - Near Metro",
      location: "Sector 46, Noida",
      price: "₹15,000 / month",
    },
    {
      id: 14,
      imgSrc: "images/img-14.jpg",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Noida",
      price: "₹9,099 / month",
    },
    {
      id: 15,
      imgSrc: "images/img-15.jpg",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Noida",
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