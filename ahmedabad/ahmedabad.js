
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
      image: "images/img-1.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fdd6f0e45f%3A0x76ffcf17c0db9e5d!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622560979345!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/your-space-navrangpura"
    },
    {
      id: 2,
      name: "ASTRUM BY YO-LIV",
      location: "Ambawadi, Ahmedabad",
      price: "₹13,999 / month",
      contact: "Call Owner",
      image: "images/img-2.webp",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fdd6f0e45f%3A0x8db1cf17c0db9e5d!2sAmbawadi%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622561004034!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/astrum-by-yoliv-ambawadi"
    },
    {
      id: 3,
      name: "FLH 4",
      location: "Navrangpura, Ahmedabad",
      price: "₹28,000 / month",
      contact: "Call Owner",
      image: "images/img-3.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fdd6f0e45f%3A0x76ffcf17c0db9e5d!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622560979345!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/flh-4-navrangpura"
    },
    {
      id: 4,
      name: "Your Space NIRMA Omkara Residency (Girls)",
      location: "Malabar Exotica Rd, Nirma University, Ahmedabad",
      price: "₹11,500 / month",
      contact: "Call Owner",
      image: "images/img-4.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c25d02be6d2b7%3A0x8db1cf17c0db9e5d!2sNirma%20University%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622561046906!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/your-space-nirma-omkara"
    },
    {
      id: 5,
      name: "Your Space Aamrakunj",
      location: "Zundal, Chandkheda, Ahmedabad",
      price: "₹15,000 / month",
      contact: "Call Owner",
      image: "images/img-5.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bb676b6ed6d%3A0x76ffcf17c0db9e5d!2sZundal%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622561088121!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/your-space-aamrakunj"
    },
    {
      id: 6,
      name: "Your Space Benefit House (Boys)",
      location: "Mithakhali, Navrangpura, Ahmedabad",
      price: "₹19,799 / month",
      contact: "Call Owner",
      image: "images/img-6.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fdd6f0e45f%3A0x76ffcf17c0db9e5d!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622560979345!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/your-space-benefit-house"
    },
    {
      id: 7,
      name: "Mithakhali",
      location: "Navrangpura, Ahmedabad",
      price: "₹24,000 / month",
      contact: "Call Owner",
      image: "images/img-7.webp",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fdd6f0e45f%3A0x76ffcf17c0db9e5d!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622560979345!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/mithakhali-navrangpura"
    },
    {
      id: 8,
      name: "Stanza Living Portland House",
      location: "Sector 52, Gurugram",
      price: "Gota, Ahmedabad",
      contact: "Call Owner",
      image: "images/img-8.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.3074889821453!2d77.04267867571737!3d28.433812082351985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1861e8b2efbb%3A0xb726f50760ef4fdd!2sSector%2052%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1622561113314!5m2!1sen!2sin",
      videoSrc: "https://youtu.be/6O1lMtcwORM"
    },
    {
      id: 9,
      name: "Covie 108",
      location: "Medicity, Ahmedabad",
      price: "₹15,150 / month",
      contact: "Call Owner",
      image: "images/img-9.jpg",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29364.0934967991!2d72.55618332082257!3d23.043150000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fdd6f0e45f%3A0x76ffcf17c0db9e5d!2sMedicity%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1622561178911!5m2!1sen!2sin",
      videoSrc: "https://www.youtube.com/embed/covie-108-medicity"
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

