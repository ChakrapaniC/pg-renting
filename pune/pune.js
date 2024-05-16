
const modal1 = document.querySelector('.modal');


const toggleModal = () => {
  modal1.style.display = "block"
}
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
      name: "Covie Viman Nagar",
      location: "Viman Nagar, Pune",
      price: "₹33,000 / month",
    },
    {
      id: 2,
      imgSrc: "images/img-2.webp",
      alt: "img-1",
      name: "Stanza Living Tel Aviv House",
      location: "Baner, Pune",
      price: "₹11,399 / month",
    },
    {
      id: 3,
      imgSrc: "images/img-3.jpg",
      alt: "img-1",
      name: "Tribe Luxury Hostel Viman Nagar",
      location: "Mascot Centre, Pune",
      price: "₹28,000 / month",
    },
    {
      id: 4,
      imgSrc: "images/img-4.webp",
      alt: "img-1",
      name: "Stanza Living Mogilev House",
      location: "Narhe Gaon, Pune",
      price: "₹7,299 / month",
    },
    {
      id: 5,
      imgSrc: "images/img-5.webp",
      alt: "img-1",
      name: "Stanza Living Marseille House",
      location: "Hinjawadi, Pune",
      price: "₹11,799 / month",
    },
    {
      id: 6,
      imgSrc: "images/img-6.jpg",
      alt: "img-1",
      name: "Tribe Luxury Hostel Wakad",
      location: "ACE Almighty, Pune",
      price: "₹16,000 / month",
    },
    {
      id: 7,
      imgSrc: "images/img-7.webp",
      alt: "img-1",
      name: "Stanza Living Alanya House",
      location: "Kharadi, Pune",
      price: "₹10,099 / month",
    },
    {
      id: 8,
      imgSrc: "images/img-8.webp",
      alt: "img-1",
      name: "Stanza Living Queluz House",
      location: "Hadapsar, Pune",
      price: "₹11,799 / month",
    },
    {
      id: 9,
      imgSrc: "images/img-9.jpg",
      alt: "img-1",
      name: "Stanza Living Torreon House",
      location: "Wagholi, Pune",
      price: "₹9,199 / month",
    },
    {
      id: 10,
      imgSrc: "images/img-10.jpg",
      alt: "img-1",
      name: "Stanza living Malmo House",
      location: "Sakore Nagar, Viman Nagar, Pune, Maharashtra",
      price: "₹23,500 / month",
    },
    {
      id: 11,
      imgSrc: "images/img-11.jpg",
      alt: "img-1",
      name: "Smart Living PG Kalyani Nagar (Girls)",
      location: "Kalyani Nagar, Pune",
      price: "₹11,000 / month",
    },
    {
      id: 12,
      imgSrc: "images/img-12.jpg",
      alt: "img-1",
      name: "HelloWorld EON",
      location: "Wagholi, Pune",
      price: "₹11,500 / month",
    },
    {
      id: 13,
      imgSrc: "images/img-13.jpg",
      alt: "img-1",
      name: "HelloWorld Everest",
      location: "Wagholi, Pune",
      price: "₹15,000 / month",
    },
    {
      id: 14,
      imgSrc: "images/img-14.jpg",
      alt: "img-1",
      name: "HelloWorld Embassy",
      location: "Hinjewadi, Pune",
      price: "₹11,000 / month",
    },
    {
      id: 15,
      imgSrc: "images/img-15.webp",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Pune",
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