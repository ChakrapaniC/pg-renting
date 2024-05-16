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
      name: "The Hostel Yard - Orchid House (Girls)",
      location: "Vijay nagar, New Delhi",
      price: "₹14,000 / month",
      contact: "Call Owner",
      image: "images/img-1.jpg"
    },
    {
      id: 2,
      name: "The Hostel Yard - Rose House (Girls)",
      location: "Vijay nagar, New Delhi",
      price: "₹13,499 / month",
      contact: "Call Owner",
      image: "images/img-2.jpg"
    },
    {
      id: 3,
      name: "Stanza Living Romford House (Male)",
      location: "North Campus, New Delhi",
      price: "₹18,000 / month",
      contact: "Call Owner",
      image: "images/img-3.jpg"
    },
    {
      id: 4,
      name: "The Hostel Yard - Tulip House (Girls)",
      location: "Kamla Nagar, New Delhi",
      price: "₹21,000 / month",
      contact: "Call Owner",
      image: "images/img-4.jpg"
    },
    {
      id: 5,
      name: "The Hostel Yard - Lily House (Girls)",
      location: "Block G, Kamla Nagar, Delhi",
      price: "₹14,000 / month",
      contact: "Call Owner",
      image: "images/img-5.jpg"
    },
    {
      id: 6,
      name: "Stanza Living Quito House (Male)",
      location: "Laxmi Nagar, New Delhi",
      price: "₹11,000 / month",
      contact: "Call Owner",
      image: "images/img-6.jpg"
    },
    {
      id: 7,
      name: "The Hostel Yard - Snapdragon (Boys)",
      location: "Kamla Nagar, New Delhi",
      price: "₹18,000 / month",
      contact: "Call Owner",
      image: "images/img-7.jpg"
    },
    {
      id: 8,
      name: "The Hostel Yard - Bluebell House (Boys)",
      location: "SKamla Nagar, New Delhi",
      price: "₹16,000 / month",
      contact: "Call Owner",
      image: "images/img-8.jpg"
    },
    {
      id: 9,
      name: "The Hostelyard - Daisy House (Girls)",
      location: "Satya Niketan, Delhi",
      price: "₹12,000 / month",
      contact: "Call Owner",
      image: "images/img-9.jpg"
    },
    {
      id: 10,
      name: "Stanza Living Los Angeles House (Female)",
      location: "Vijay Nagar, Delhi, 110009",
      price: "₹21,000 / month",
      contact: "Call Owner",
      image: "images/img-10.jpg"
    },
    {
      id: 11,
      name: "The Hostelyard - Sage House (Girls)",
      location: "Satya Niketan, Delhi",
      price: "₹14,000 / month",
      contact: "Call Owner",
      image: "images/img-11.jpg"
    },
    {
      id: 12,
      name: "Covie 108",
      location: "Medicity, Delhi",
      price: "₹15,150 / month",
      contact: "Call Owner",
      image: "images/img-12.jpg"
    },
    {
      id: 13,
      name: "COVIE Gurgaon 70 - Near Metro",
      location: "Sector 46, Delhi",
      price: "₹15,000 / month",
      contact: "Call Owner",
      image: "images/img-13.jpg"
    },
    {
      id: 14,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Delhi",
      price: "₹9,099 / month",
      contact: "Call Owner",
      image: "images/img-14.jpg"
    },
    {
      id: 15,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Delhi",
      price: "₹9,099 / month",
      contact: "Call Owner",
      image: "images/img-15.jpg"
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