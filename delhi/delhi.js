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
      image: "images/img-1.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.91299419262!2d77.20287305!3d28.68976925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027f8e0e0f8b%3A0x3d3bd1e65c8f4f69!2sVijay%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110009%2C%20India!5e0!3m2!1sen!2sus!4v1622560123450!5m2!1sen!2sus"
    },
    {
      id: 2,
      name: "The Hostel Yard - Rose House (Girls)",
      location: "Vijay nagar, New Delhi",
      price: "₹13,499 / month",
      contact: "Call Owner",
      image: "images/img-2.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.91299419262!2d77.20287305!3d28.68976925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027f8e0e0f8b%3A0x3d3bd1e65c8f4f69!2sVijay%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110009%2C%20India!5e0!3m2!1sen!2sus!4v1622560123450!5m2!1sen!2sus"
    },
    {
      id: 3,
      name: "Stanza Living Romford House (Male)",
      location: "North Campus, New Delhi",
      price: "₹18,000 / month",
      contact: "Call Owner",
      image: "images/img-3.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28028.051109520448!2d77.20585782424589!3d28.683334643007773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0277c5b0d001%3A0x9189145a8fd3703a!2sNorth%20Campus%2C%20New%20Delhi%2C%20Delhi%20110007%2C%20India!5e0!3m2!1sen!2sus!4v1622560225348!5m2!1sen!2sus"
    },
    {
      id: 4,
      name: "The Hostel Yard - Tulip House (Girls)",
      location: "Kamla Nagar, New Delhi",
      price: "₹21,000 / month",
      contact: "Call Owner",
      image: "images/img-4.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28028.051109520448!2d77.19720432424583!3d28.682803043008148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027abdc4bcfb%3A0xb858935d8353ecfc!2sKamla%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110007%2C%20India!5e0!3m2!1sen!2sus!4v1622560271123!5m2!1sen!2sus"
    },
    {
      id: 5,
      name: "The Hostel Yard - Lily House (Girls)",
      location: "Block G, Kamla Nagar, Delhi",
      price: "₹14,000 / month",
      contact: "Call Owner",
      image: "images/img-5.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28028.051109520448!2d77.19720432424583!3d28.682803043008148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027abdc4bcfb%3A0xb858935d8353ecfc!2sKamla%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110007%2C%20India!5e0!3m2!1sen!2sus!4v1622560271123!5m2!1sen!2sus"
    },
    {
      id: 6,
      name: "Stanza Living Quito House (Male)",
      location: "Laxmi Nagar, New Delhi",
      price: "₹11,000 / month",
      contact: "Call Owner",
      image: "images/img-6.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.06735473888!2d77.2772323!3d28.6367875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb859d0e00b7%3A0xa5a8078d22b923fa!2sLaxmi%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110092%2C%20India!5e0!3m2!1sen!2sus!4v1622560312389!5m2!1sen!2sus"
    },
    {
      id: 7,
      name: "The Hostel Yard - Snapdragon (Boys)",
      location: "Kamla Nagar, New Delhi",
      price: "₹18,000 / month",
      contact: "Call Owner",
      image: "images/img-7.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28028.051109520448!2d77.19720432424583!3d28.682803043008148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027abdc4bcfb%3A0xb858935d8353ecfc!2sKamla%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110007%2C%20India!5e0!3m2!1sen!2sus!4v1622560271123!5m2!1sen!2sus"
    },
    {
      id: 8,
      name: "The Hostel Yard - Bluebell House (Boys)",
      location: "SKamla Nagar, New Delhi",
      price: "₹16,000 / month",
      contact: "Call Owner",
      image: "images/img-8.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28028.051109520448!2d77.19720432424583!3d28.682803043008148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027abdc4bcfb%3A0xb858935d8353ecfc!2sKamla%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110007%2C%20India!5e0!3m2!1sen!2sus!4v1622560271123!5m2!1sen!2sus"
    },
    {
      id: 9,
      name: "The Hostelyard - Daisy House (Girls)",
      location: "Satya Niketan, Delhi",
      price: "₹12,000 / month",
      contact: "Call Owner",
      image: "images/img-9.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.101831329097!2d77.1687325!3d28.584285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d4184c1e61b%3A0xdf23212bbd58e21c!2sSatya%20Niketan%2C%20New%20Delhi%2C%20Delhi%20110021%2C%20India!5e0!3m2!1sen!2sus!4v1622560388989!5m2!1sen!2sus"
    },
    {
      id: 10,
      name: "Stanza Living Los Angeles House (Female)",
      location: "Vijay Nagar, Delhi, 110009",
      price: "₹21,000 / month",
      contact: "Call Owner",
      image: "images/img-10.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.91299419262!2d77.20287305!3d28.68976925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d027f8e0e0f8b%3A0x3d3bd1e65c8f4f69!2sVijay%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110009%2C%20India!5e0!3m2!1sen!2sus!4v1622560123450!5m2!1sen!2sus"
    },
    {
      id: 11,
      name: "The Hostelyard - Sage House (Girls)",
      location: "Satya Niketan, Delhi",
      price: "₹14,000 / month",
      contact: "Call Owner",
      image: "images/img-11.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.101831329097!2d77.1687325!3d28.584285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d4184c1e61b%3A0xdf23212bbd58e21c!2sSatya%20Niketan%2C%20New%20Delhi%2C%20Delhi%20110021%2C%20India!5e0!3m2!1sen!2sus!4v1622560388989!5m2!1sen!2sus"
    },
    {
      id: 12,
      name: "Covie 108",
      location: "Medicity, Delhi",
      price: "₹15,150 / month",
      contact: "Call Owner",
      image: "images/img-12.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28026.054307977654!2d77.12321863268203!3d28.45223339391308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1da95b177733%3A0xb653c66e4f1d0a7d!2sMedicity%2C%20Gurugram%2C%20Haryana%20122010%2C%20India!5e0!3m2!1sen!2sus!4v1622560481236!5m2!1sen!2sus"
    },
    {
      id: 13,
      name: "COVIE Gurgaon 70 - Near Metro",
      location: "Sector 46, Delhi",
      price: "₹15,000 / month",
      contact: "Call Owner",
      image: "images/img-13.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28026.054307977654!2d77.12321863268203!3d28.45223339391308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc4344824c3%3A0xdfab1ee56a7e9300!2sSector%2046%2C%20Gurugram%2C%20Haryana%20122002%2C%20India!5e0!3m2!1sen!2sus!4v1622560524134!5m2!1sen!2sus"
    },
    {
      id: 14,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Delhi",
      price: "₹9,099 / month",
      contact: "Call Owner",
      image: "images/img-14.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28026.08370750997!2d77.12284793547224!3d28.453600732902384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dcf5df273b5%3A0xe18e7d06c924a0e6!2sManyata%20Tech%20Park%2C%20Delhi!5e0!3m2!1sen!2sus!4v1622560561234!5m2!1sen!2sus"
    },
    {
      id: 15,
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Delhi",
      price: "₹9,099 / month",
      contact: "Call Owner",
      image: "images/img-15.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28026.08370750997!2d77.12284793547224!3d28.453600732902384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dcf5df273b5%3A0xe18e7d06c924a0e6!2sManyata%20Tech%20Park%2C%20Delhi!5e0!3m2!1sen!2sus!4v1622560561234!5m2!1sen!2sus"
    }
  ];

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
  return falso
}
const dropdown = document.querySelector('.dropdown-menu');
const closeBtn = document.querySelector('.close');
const toggleMenu = () => {
  dropdown.style.display = 'block';
};
closeBtn.addEventListener('click', ()=> {
  dropdown.style.display = 'none';
})