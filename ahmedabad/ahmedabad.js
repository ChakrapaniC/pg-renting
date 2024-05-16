
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
      name: "Your Space",
      location: "Navrangpura, Ahmedabad",
      price: "₹13,000 / month",
      contact: "Call Owner",
      image: "images/img-1.jpg"
    },
    {
      id: 2,
      name: "ASTRUM BY YO-LIV",
      location: "Ambawadi, Ahmedabad",
      price: "₹13,999 / month",
      contact: "Call Owner",
      image: "images/img-2.webp"
    },
    {
      id: 3,
      name: "FLH 4",
      location: "Navrangpura, Ahmedabad",
      price: "₹28,000 / month",
      contact: "Call Owner",
      image: "images/img-3.jpg"
    },
    {
      id: 4,
      name: "Your Space NIRMA Omkara Residency (Girls)",
      location: "Malabar Exotica Rd, Nirma University, Ahmedabad",
      price: "₹11,500 / month",
      contact: "Call Owner",
      image: "images/img-4.jpg"
    },
    {
      id: 5,
      name: "Your Space Aamrakunj",
      location: "Zundal, Chandkheda, Ahmedabad",
      price: "₹15,000 / month",
      contact: "Call Owner",
      image: "images/img-5.jpg"
    },
    {
      id: 6,
      name: "Your Space Benefit House (Boys)",
      location: "Mithakhali, Navrangpura, Ahmedabad",
      price: "₹19,799 / month",
      contact: "Call Owner",
      image: "images/img-6.jpg"
    },
    {
      id: 7,
      name: "Mithakhali",
      location: "Navrangpura, Ahmedabad",
      price: "₹24,000 / month",
      contact: "Call Owner",
      image: "images/img-7.webp"
    },
    {
      id: 8,
      name: "Stanza Living Portland House",
      location: "Sector 52, Gurugram",
      price: "Gota, Ahmedabad",
      contact: "Call Owner",
      image: "images/img-8.jpg"
    },
    {
      id: 9,
      name: "Covie 108",
      location: "Medicity, Ahmedabad",
      price: "₹15,150 / month",
      contact: "Call Owner",
      image: "images/img-9.jpg"
    }
  ];

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