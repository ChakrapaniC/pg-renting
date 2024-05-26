
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
        name: "Stanza Living Dunkirk House",
        location: "sector 48, Gurgaon",
        price: "₹11,799 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.615694648513!2d77.03431609999999!3d28.40294535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ba8910b0db%3A0xb6b8d3c8c7b8e8d!2sSector%2048%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1621243678826!5m2!1sen!2sin"
      },
      {
        id: 2,
        imgSrc: "images/img-2.jpg",
        alt: "img-1",
        name: "Cloud Nine Rooms 56",
        location: "Sector- 43, Golf Course Road, Gurugram",
        price: "₹13,999 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.706781563964!2d77.08849735!3d28.4641942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18bb0852005f%3A0xb690adf9e94e7f9f!2sSector%2043%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1621243778826!5m2!1sen!2sin"
      },
      {
        id: 3,
        imgSrc: "images/img-3.webp",
        alt: "img-1",
        name: "RentDoor Sector 46",
        location: "Sector 46, Gurugram",
        price: "₹28,000 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.704236870963!2d77.05513735!3d28.4364543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b37c1c6b3b%3A0x25ecf2a1626cfb8d!2sSector%2046%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1621243878826!5m2!1sen!2sin"
      },
      {
        id: 4,
        imgSrc: "images/img-4.webp",
        alt: "img-1",
        name: "Stanza Living Taiping House",
        location: "Sector 39, Gurugram",
        price: "₹24,299 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.34906438412!2d77.03431605!3d28.42744535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b7b1e2d38b%3A0xb7e8b9f7b6c37a7!2sSector%2039%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1621243978826!5m2!1sen!2sin"
      },
      {
        id: 5,
        imgSrc: "images/img-5.jpg",
        alt: "img-1",
        name: "Livstation - Near Huda Metro",
        location: "Ardee City, Sector 52, Gurgaon",
        price: "₹15,000 / month",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.262710839247!2d77.06793735!3d28.4547543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a7f0e8e8b7%3A0x51fb07a972fa5c5!2sSector%2052%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1621244078826!5m2!1sen!2sin"
      },
      {
        id: 6,
        imgSrc: "images/img-6.jpg",
        alt: "img-1",
        name: "Stanza Living Tortosa House",
        location: "Sector 57, Gurgaon",
        price: "₹19,799 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.925119099367!2d77.07171735!3d28.4609943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a85d07e2f9%3A0xe4ec0d3e3b1c432!2sSector%2057%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1621244178826!5m2!1sen!2sin"
      },
      {
        id: 7,
        imgSrc: "images/img-7.jpg",
        alt: "img-1",
        name: "Cloud Nine Rooms",
        location: "Sector 55, Gurugram",
        price: "₹12,999 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.781892675684!2d77.06879735!3d28.4624943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a5f0e8e8b7%3A0x51fb07a972fa5c5!2sSector%2055%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1621244278826!5m2!1sen!2sin"
      },
      {
        id: 8,
        imgSrc: "images/img-8.webp",
        alt: "img-1",
        name: "Stanza Living Pisa House",
        location: "Sector 52, Gurugram, Haryana",
        price: "₹24,099 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14026.262710839247!2d77.06793735!3d28.4547543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a7f0e8e8b7%3A0x51fb07a972fa5c5!2sSector%2052%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1621244378826!5m2!1sen!2sin"
      },
    
      {
        id: 9,
        imgSrc: "images/img-9.webp",
        alt: "img-1",
        name: "RentDoor Sector 39",
        location: "Sector 39, Gurugram",
        price: "₹26,000 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6653166308397!2d77.05976241508366!3d28.45861628248771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1949f043d7ad%3A0x7867c5c0a2a9eb8c!2sSector+39%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622557928908!5m2!1sen!2sin"
      },
      {
        id: 10,
        imgSrc: "images/img-10.jpg",
        alt: "img-1",
        name: "RentDoor Unitech Cyber Park",
        location: "Sector 39, Gurugram",
        price: "₹24,000 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.554479366231!2d77.04237881508378!3d28.463291482485013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194700000001%3A0x8f7b1f5e524d0b9b!2sUnitech+Cyber+Park%2C+Sector+39%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622557981096!5m2!1sen!2sin"
      },
      {
        id: 11,
        imgSrc: "images/img-11.jpg",
        alt: "img-1",
        name: "RentDoor Sector 52",
        location: "Sector 52, Gurugram",
        price: "₹20,000 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8692832897564!2d77.06343481508422!3d28.488296382474995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc4344824c3%3A0xdfab1ee56a7e9300!2sSector+52%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622558029376!5m2!1sen!2sin"
      },
      {
        id: 12,
        imgSrc: "images/img-12.jpg",
        alt: "img-1",
        name: "Covie 108",
        location: "Medicity, Gurugram",
        price: "₹15,150 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5564876362164!2d77.03036311508382!3d28.4632334824851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ed3b23b9255%3A0x4d9a6834bdc18e22!2sMedicity%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622558070346!5m2!1sen!2sin"
      },
      {
        id: 13,
        imgSrc: "images/img-13.jpg",
        alt: "img-1",
        name: "COVIE Gurgaon 70 - Near Metro",
        location: "Sector 46, Gurugram",
        price: "₹15,000 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6653166308397!2d77.04829511508366!3d28.45861628248771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18c73d4aeb89%3A0xe1ecad856ac4a07e!2sSector+46%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622558110768!5m2!1sen!2sin"
      },
      {
        id: 14,
        imgSrc: "images/img-14.jpg",
        alt: "img-1",
        name: "Stanza Living Modena House",
        location: "Manayata Tech Park, Gurugram",
        price: "₹9,099 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4743849661526!2d77.03179951508388!3d28.466155882483724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ecfa240b6d3%3A0x5c6b8a0d9f123d4b!2sManyata+Tech+Park%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622558145634!5m2!1sen!2sin"
      },
      {
        id: 15,
        imgSrc: "images/img-15.jpg",
        alt: "img-1",
        name: "Stanza Living Modena House",
        location: "Manayata Tech Park, Gurugram",
        price: "₹9,099 / month",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4743849661526!2d77.03179951508388!3d28.466155882483724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ecfa240b6d3%3A0x5c6b8a0d9f123d4b!2sManyata+Tech+Park%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1622558145634!5m2!1sen!2sin"
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
  return falso
}