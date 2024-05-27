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
      imgSrc: "images/img-1.jpg",
      alt: "img-1",
      name: "The Hostel Yard - Ivy Yard",
      location: "Royal Street Lane, Raipur Khadar, Sector 126, Noida",
      price: "₹15,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.8776190120657!2d77.33661451608612!3d28.546446582448287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce539415921ab%3A0x14f63a25e4e6468b!2sThe%20Hostel%20Yard%20-%20Ivy%20Yard!5e0!3m2!1sen!2sin!4v1622437197184!5m2!1sen!2sin"
    },
    {
      id: 2,
      imgSrc: "images/img-2.jpg",
      alt: "img-1",
      name: "Your Space Noida - RN73",
      location: "Sector 62, Noida",
      price: "₹15,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.526309295142!2d77.36450864254483!3d28.61878870467851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56c3836fd5d%3A0x7a5ad92b9a160c5c!2sYour%20Space%20Noida%20-%20RN73!5e0!3m2!1sen!2sin!4v1622437273184!5m2!1sen!2sin"
    },
    {
      id: 3,
      imgSrc: "images/img-3.jpg",
      alt: "img-1",
      name: "Your space Amity Hostels (Boys)",
      location: "Sector 126, Noida",
      price: "₹14,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.836077265685!2d77.33261911608618!3d28.544605982447927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58aef9eb981%3A0xb46983dff6468f7b!2sYour%20space%20Amity%20Hostels%20(Boys)!5e0!3m2!1sen!2sin!4v1622437333184!5m2!1sen!2sin"
    },
    {
      id: 4,
      imgSrc: "images/img-4.jpg",
      alt: "img-1",
      name: "The Hostel Yard - Jasmine (Girls)",
      location: "JASMINE BUILDING, Noida, Uttar Pradesh",
      price: "₹18,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.54270267965!2d77.364255842545!3d28.6185407046788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56d0cfbd87d%3A0xd897c01f12e5eb86!2sThe%20Hostel%20Yard%20-%20Jasmine%20(Girls)!5e0!3m2!1sen!2sin!4v1622437374184!5m2!1sen!2sin"
    },
    {
      id: 5,
      imgSrc: "images/img-5.jpg",
      alt: "img-1",
      name: "Your Space Noida Sector 58",
      location: "Sector 58, Noida, Uttar Pradesh",
      price: "₹17,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.46037040297!2d77.36218764254506!3d28.619860904678264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56b0204624d%3A0x1e9718ea2c2f46b8!2sYour%20Space%20Noida%20Sector%2058!5e0!3m2!1sen!2sin!4v1622437415184!5m2!1sen!2sin"
    },
    {
      id: 6,
      imgSrc: "images/img-6.jpg",
      alt: "img-1",
      name: "Your Space RN72 Noida (Boys)",
      location: "Industrial Area, Sector-62, Noida",
      price: "₹16,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.507294657976!2d77.36389044254493!3d28.619080504678626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56d226ad93d%3A0x9c382d5f2cb7ae47!2sYour%20Space%20RN72%20Noida%20(Boys)!5e0!3m2!1sen!2sin!4v1622437456184!5m2!1sen!2sin"
    },
    {
      id: 7,
      imgSrc: "images/img-7.jpg",
      alt: "img-1",
      name: "The Hostel Yard - Aster House",
      location: "Bishanpura Rd, Block C, Sector 58, Noida",
      price: "₹14,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.49211089445!2d77.36369764254492!3d28.61931040467841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56d252730d1%3A0x6a746d7c4a2f7ea9!2sThe%20Hostel%20Yard%20-%20Aster%20House!5e0!3m2!1sen!2sin!4v1622437517184!5m2!1sen!2sin"
    },
    {
      id: 8,
      imgSrc: "images/img-8.jpg",
      alt: "img-1",
      name: "Your space Amity Hostels (Girls)",
      location: "sector 126 Noida, near Amity University Gate Number 2 Road, Greater Noida",
      price: "₹14,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14038.44066645568!2d77.35825424254461!3d28.617388204678933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f62d2b678b%3A0xa0bca562f841fe9a!2sYour%20space%20Amity%20Hostels%20(Girls)!5e0!3m2!1sen!2sin!4v1622437577184!5m2!1sen!2sin"
    },
    {
      id: 9,
      imgSrc: "images/img-9.jpg",
      alt: "img-1",
      name: "RentDoor Sector 39",
      location: "Sector 39, Noida",
      price: "₹26,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.330931799715!2d77.34115724425619!3d28.567365839487373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4cf27a22d25%3A0x39ed3cb04b4b1e23!2sRentDoor%20Sector%2039!5e0!3m2!1sen!2sin!4v1622437637184!5m2!1sen!2sin"
    },
    {
      id: 10,
      imgSrc: "images/img-10.jpg",
      alt: "img-1",
      name: "RentDoor Unitech Cyber Park",
      location: "Sector 39, Noida",
      price: "₹24,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.330931799715!2d77.34115724425619!3d28.567365839487373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4cf27a22d25%3A0x39ed3cb04b4b1e23!2sRentDoor%20Unitech%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1622437697184!5m2!1sen!2sin"
    },
    {
      id: 11,
      imgSrc: "images/img-11.jpg",
      alt: "img-1",
      name: "RentDoor Sector 52",
      location: "Sector 52, Noida",
      price: "₹20,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.346745255844!2d77.37503484254515!3d28.62160570467775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5701a1466b3%3A0xcfeec7b548de7a6c!2sRentDoor%20Sector%2052!5e0!3m2!1sen!2sin!4v1622437757184!5m2!1sen!2sin"
    },
    {
      id: 12,
      imgSrc: "images/img-12.jpg",
      alt: "img-1",
      name: "Covie 108",
      location: "Medicity, Noida",
      price: "₹15,150 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.273437800286!2d77.3764051425452!3d28.623045504677086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5715f5eb1cf%3A0xa1e82e798d456a6d!2sCovie%20108!5e0!3m2!1sen!2sin!4v1622437817184!5m2!1sen!2sin"
    },
    {
      id: 13,
      imgSrc: "images/img-13.jpg",
      alt: "img-1",
      name: "COVIE Gurgaon 70 - Near Metro",
      location: "Sector 46, Noida",
      price: "₹15,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.295833491447!2d77.34175824425631!3d28.56764583948743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c6e251ecfb%3A0xd6793a9c0d1eeb8!2sCOVIE%20Gurgaon%2070%20-%20Near%20Metro!5e0!3m2!1sen!2sin!4v1622437877184!5m2!1sen!2sin"
    },
    {
      id: 14,
      imgSrc: "images/img-14.jpg",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Noida",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.32499443016!2d77.34094224425616!3d28.56746583948747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c46d0d4fb5%3A0xaf6cf6f2c72d4c7f!2sStanza%20Living%20Modena%20House!5e0!3m2!1sen!2sin!4v1622437937184!5m2!1sen!2sin"
    },
    {
      id: 15,
      imgSrc: "images/img-15.jpg",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Noida",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.32499443016!2d77.34094224425616!3d28.56746583948747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c46d0d4fb5%3A0xaf6cf6f2c72d4c7f!2sStanza%20Living%20Modena%20House!5e0!3m2!1sen!2sin!4v1622437997184!5m2!1sen!2sin"
    }
  ];
  const showDetails = (id) => {
    const selectedHouse = pgHouses.find(house => house.id === id);
    if (selectedHouse) {
        // Construct the query parameters string
        const queryParams = `?id=${selectedHouse.id}&name=${encodeURIComponent(selectedHouse.name)}&location=${encodeURIComponent(selectedHouse.location)}&image=${encodeURIComponent(selectedHouse.imgSrc)}&price=${encodeURIComponent(selectedHouse.price)}&mapSrc=${encodeURIComponent(selectedHouse.mapEmbedSrc)}`;
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