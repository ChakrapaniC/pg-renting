
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
      mapEmbedSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.225812548424!2d73.90479647519275!3d18.5638555825381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10b302371ef%3A0x48ca65c9da0d4b58!2sCovie%20Vimannagar%20102!5e0!3m2!1sen!2sin!4v1716528454378!5m2!1sen!2sin"
    },
    {
      id: 2,
      imgSrc: "images/img-2.webp",
      alt: "img-1",
      name: "Stanza Living Tel Aviv House",
      location: "Baner, Pune",
      price: "₹11,399 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.879745194984!2d73.78347141477628!3d18.521080887400453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4339f1b723%3A0x9bf2cb4670d9cbb9!2sStanza%20Living%20Tel%20Aviv%20House!5e0!3m2!1sen!2sin!4v1622437269184!5m2!1sen!2sin",
    },
    {
      id: 3,
      imgSrc: "images/img-3.jpg",
      alt: "img-1",
      name: "Tribe Luxury Hostel Viman Nagar",
      location: "Mascot Centre, Pune",
      price: "₹28,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4299206450225!2d73.91645481477693!3d18.561498887383235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c19a79e074a3%3A0xd67eb2c7de8ab3e2!2sTribe%20Stays!5e0!3m2!1sen!2sin!4v1622437346184!5m2!1sen!2sin",
    },
    {
      id: 4,
      imgSrc: "images/img-4.webp",
      alt: "img-1",
      name: "Stanza Living Mogilev House",
      location: "Narhe Gaon, Pune",
      price: "₹7,299 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9293560105284!2d73.82494691477654!3d18.533297987392753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe63c94d6d1%3A0x541fdd7807c1b72e!2sStanza%20Living%20Mogilev%20House!5e0!3m2!1sen!2sin!4v1622437390184!5m2!1sen!2sin",
    },
    {
      id: 5,
      imgSrc: "images/img-5.webp",
      alt: "img-1",
      name: "Stanza Living Marseille House",
      location: "Hinjawadi, Pune",
      price: "₹11,799 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.360858744118!2d73.68501731477659!3d18.54519648738961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf62b0f8b697%3A0x1c7f00a6b1d0e5d2!2sStanza%20Living%20Marseille%20House!5e0!3m2!1sen!2sin!4v1622437436184!5m2!1sen!2sin",
    },
    {
      id: 6,
      imgSrc: "images/img-6.jpg",
      alt: "img-1",
      name: "Tribe Luxury Hostel Wakad",
      location: "ACE Almighty, Pune",
      price: "₹16,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.774079031242!2d73.74888731477644!3d18.5253743873991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf370d98ea1f%3A0x9cf3d4d1b2f59f51!2sTribe%20Stays%20Wakad!5e0!3m2!1sen!2sin!4v1622437483184!5m2!1sen!2sin",
    },
    {
      id: 7,
      imgSrc: "images/img-7.webp",
      alt: "img-1",
      name: "Stanza Living Alanya House",
      location: "Kharadi, Pune",
      price: "₹10,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9459647856834!2d73.9565688147765!3d18.53231428739309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07a8129a7d1%3A0xcfe55e56c37f7f39!2sStanza%20Living%20Alanya%20House!5e0!3m2!1sen!2sin!4v1622437520184!5m2!1sen!2sin",
    },
    {
      id: 8,
      imgSrc: "images/img-8.webp",
      alt: "img-1",
      name: "Stanza Living Queluz House",
      location: "Hadapsar, Pune",
      price: "₹11,799 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.055604810571!2d73.91286331477632!3d18.527632987398546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2a4a21e89c1%3A0x9ab5ecf76dc7d94b!2sStanza%20Living%20Queluz%20House!5e0!3m2!1sen!2sin!4v1622437562184!5m2!1sen!2sin",
    },
    {
      id: 9,
      imgSrc: "images/img-9.jpg",
      alt: "img-1",
      name: "Stanza Living Torreon House",
      location: "Wagholi, Pune",
      price: "₹9,199 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.090945411978!2d73.98886731477611!3d18.51239248740254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e541f85a2d%3A0xd67eb2c7de8ab3e2!2sStanza%20Living%20Torreon%20House!5e0!3m2!1sen!2sin!4v1622437597184!5m2!1sen!2sin",
    },
    {
      id: 10,
      imgSrc: "images/img-10.jpg",
      alt: "img-1",
      name: "Stanza living Malmo House",
      location: "Sakore Nagar, Viman Nagar, Pune, Maharashtra",
      price: "₹23,500 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7655902142997!2d73.9119674147766!3d18.55256718738737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1981aa1e6e5%3A0x95a71b7d7f28d3c9!2sStanza%20Living%20Malmo%20House!5e0!3m2!1sen!2sin!4v1622437686184!5m2!1sen!2sin",
    },
    {
      id: 11,
      imgSrc: "images/img-11.jpg",
      alt: "img-1",
      name: "Smart Living PG Kalyani Nagar (Girls)",
      location: "Kalyani Nagar, Pune",
      price: "₹11,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.993653192874!2d73.9008142147765!3d18.531117787393282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c193f6bcb24d%3A0x1a0412c4e9d9d00d!2sSmart%20Living%20PG%20Kalyani%20Nagar%20(Girls)!5e0!3m2!1sen!2sin!4v1622437727184!5m2!1sen!2sin",
    },
    {
      id: 12,
      imgSrc: "images/img-12.jpg",
      alt: "img-1",
      name: "HelloWorld EON",
      location: "Wagholi, Pune",
      price: "₹11,500 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.078745441738!2d73.98927341477613!3d18.51290408740233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e50c2e4b0b%3A0x95a71b7d7f28d3c9!2sHelloWorld%20EON!5e0!3m2!1sen!2sin!4v1622437727184!5m2!1sen!2sin",
    },
    {
      id: 13,
      imgSrc: "images/img-13.jpg",
      alt: "img-1",
      name: "HelloWorld Everest",
      location: "Wagholi, Pune",
      price: "₹15,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.084545749186!2d73.98970331477612!3d18.512687487402437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e5d967e541%3A0x8bf8eddb72c02458!2sHelloWorld%20Everest!5e0!3m2!1sen!2sin!4v1622437763184!5m2!1sen!2sin",
    },
    {
      id: 14,
      imgSrc: "images/img-14.jpg",
      alt: "img-1",
      name: "HelloWorld Embassy",
      location: "Hinjewadi, Pune",
      price: "₹11,000 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2849602640974!2d73.68937431477602!3d18.504576487405032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12c5d8772b7%3A0x1a0412c4e9d9d00d!2sHelloWorld%20Embassy!5e0!3m2!1sen!2sin!4v1622437797184!5m2!1sen!2sin",
    },
    {
      id: 15,
      imgSrc: "images/img-15.webp",
      alt: "img-1",
      name: "Stanza Living Modena House",
      location: "Manayata Tech Park, Pune",
      price: "₹9,099 / month",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8693413851543!2d77.62134087507775!3d13.04398768727806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17739212be93%3A0xbb043cc12cd99ed8!2sStanza%20Living%20Gents%20PG%20%7C%20Men%20Hostel%20%7C%20Modena%20House%20in%20Manyata%20Tech%20Park!5e0!3m2!1sen!2sin!4v1716635608849!5m2!1sen!2sin",
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