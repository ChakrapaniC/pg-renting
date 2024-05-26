
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
      id:1,
      name: "Stanza Living Exeter House",
      imgSrc:"images/img-1.jpg",
      location: "Gowlidoddy, Hyderabad",
      price: "₹8,229 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.7134990615933!2d78.33732401486268!3d17.4384405880712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b9c5955555%3A0xf0f3dc1c8853c015!2sStanza%20Living%20Exeter%20House!5e0!3m2!1sen!2sin!4v1621785795073!5m2!1sen!2sin"
    },
    {
      id:2,
      name: "Craftedhomes- Rama Devi Residency",
      imgSrc: "images/img-2.webp",
      location: "Kondapur, Hyderabad",
      price: "₹13,000 / month",
      rating: "4.6",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.8218966867966!2d78.36662451486299!3d17.46233148799463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915d025d3b33%3A0xa2eac312173f56a8!2sCraftedhomes-%20Rama%20Devi%20Residency!5e0!3m2!1sen!2sin!4v1621785855702!5m2!1sen!2sin"
    },
    {
      id:3,
      name: "Stanza Living Arlington House",
      imgSrc:"images/img-3.webp",
      location: "Gachibowli, Hyderabad",
      price: "₹9,399 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.034152317475!2d78.34943231486229!3d17.44394208851684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91762e6f2565%3A0x2286fd18061a1ea2!2sStanza%20Living%20Arlington%20House!5e0!3m2!1sen!2sin!4v1621785914629!5m2!1sen!2sin"
    },
    { 
      id:4,
      name: "Stanza Living Amarillo House",
      imgSrc:"images/img-4.webp",
      location: "Gowlidoddy, Hyderabad",
      price: "₹8,099 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.846777901083!2d78.33816131486256!3d17.434184088071945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b71bbf5537%3A0xb97f8fa2245f3406!2sStanza%20Living%20Amarillo%20House!5e0!3m2!1sen!2sin!4v1621785954575!5m2!1sen!2sin"
    },
    {
      id:5,
      name: "Stanza Living Mendoza House",
      imgSrc:"images/img-5.webp",
      location: "Gachibowli, Hyderabad",
      price: "₹9,399 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.9828047716187!2d78.35525241486235!3d17.44037928849791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b9953e8cc7%3A0x2e9ac8c38a5d567e!2sStanza%20Living%20Mendoza%20House!5e0!3m2!1sen!2sin!4v1621786008235!5m2!1sen!2sin"
    },
    {
      id:6,
      name: "Stanza Living Burnley House",
      imgSrc:"images/img-6.webp",
      location: "Kondapur, Hyderabad",
      price: "₹10,799 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.656815625948!2d78.37231411486312!3d17.446568487952174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915da49ab7a3%3A0x7f45202a1eb084f0!2sStanza%20Living%20Burnley%20House!5e0!3m2!1sen!2sin!4v1621786046756!5m2!1sen!2sin"
    },
    {
      id:7,
      name: "Stanza Living Kassel House",
      imgSrc:"images/img-7.jpg",
      location: "Gachibowli, Hyderabad",
      price: "₹12,699 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.802284137292!2d78.35549831486299!3d17.462567887992868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b85071abbb%3A0x3ee1398255fcaaa5!2sStanza%20Living%20Kassel%20House!5e0!3m2!1sen!2sin!4v1621855099278!5m2!1sen!2sin"
    },
    {
      id:8,
      name: "Stanza Living Maribor House",
      imgSrc:"images/img-8.webp",
      location: "Hafeezpet, Hyderabad",
      price: "₹11,000 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1318685839636!2d78.36404441486203!3d17.48361008805603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb6403a5f63f05%3A0xd259d0778f07653a!2sStanza%20Living%20Maribor%20House!5e0!3m2!1sen!2sin!4v1621855143313!5m2!1sen!2sin"
    },
    {
      id:9,
      name: "Stanza Living Vigo House",
      imgSrc:"images/img-9.webp",
      location: "Gachibowli, Hyderabad",
      price: "₹10,399 / month",
      rating: "4.3",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.202858215555!2d78.34924921486249!3d17.450917688488084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9165e2de160b%3A0x9b1a673c09c1b2a9!2sStanza%20Living%20Vigo%20House!5e0!3m2!1sen!2sin!4v1621855185619!5m2!1sen!2sin"
    },
    {
      id:10,
      name: "Stanza Living Memphis House",
      imgSrc:"images/img-10.jpg",
      location: "Gachibowli, Hyderabad",
      price: "₹11,500 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.982822804389!2d78.3493908148622!3d17.44032068850121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917038e730b1%3A0xb0c1b2c4164d5a97!2sStanza%20Living%20Memphis%20House!5e0!3m2!1sen!2sin!4v1621855244445!5m2!1sen!2sin"
    },
    {
      id:11,
      name: "Stanza Living Winnipeg House",
      imgSrc:"images/img-11.webp",
      location: "Madhapur, Hyderabad",
      price: "₹12,000 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2056701271547!2d78.38361981486218!3d17.424554688123066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92347f9b2d79%3A0x82a7c8a9f89e27b0!2sStanza%20Living%20Winnipeg%20House!5e0!3m2!1sen!2sin!4v1621857085413!5m2!1sen!2sin"
    },
    {
      id:12,
      name: "Stanza Living Bremen House",
      imgSrc:"images/img-12.webp",
      location: "Gachibowli, Hyderabad",
      price: "₹9,999 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.432781019875!2d78.33993621486244!3d17.45626268825354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9176a4c1e543%3A0xc28f42d4e0eac7c6!2sStanza%20Living%20Bremen%20House!5e0!3m2!1sen!2sin!4v1621857125345!5m2!1sen!2sin"
    },
    {
      id:13,
      name: "Stanza Living Munich House",
      imgSrc:"images/img-14.webp",
      location: "Gachibowli, Hyderabad",
      price: "₹8,799 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2749258666653!2d78.34077221486259!3d17.45830878823337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91785f8d97b9%3A0xfa4805406df7aa9c!2sStanza%20Living%20Munich%20House!5e0!3m2!1sen!2sin!4v1621857170301!5m2!1sen!2sin"
    },
    {
      id:14,
      name: "Stanza Living Sunderland House",
      imgSrc:"images/img-15.jpg",
      location: "Gachibowli, Hyderabad",
      price: "₹9,999 / month",
      contact: "Call Owner",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2749258666653!2d78.34077221486259!3d17.45830878823337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91785f8d97b9%3A0xfa4805406df7aa9c!2sStanza%20Living%20Sunderland%20House!5e0!3m2!1sen!2sin!4v1621857198043!5m2!1sen!2sin"
    }
  ];
  

  const showDetails = (id) => {
    const selectedHouse = pgHouses.find(house => house.id === id);
    if (selectedHouse) {
        // Construct the query parameters string
        const queryParams = `?id=${selectedHouse.id}&name=${encodeURIComponent(selectedHouse.name)}&location=${encodeURIComponent(selectedHouse.location)}&image=${encodeURIComponent(selectedHouse.imgSrc)}&price=${encodeURIComponent(selectedHouse.startingPrice)}&mapSrc=${encodeURIComponent(selectedHouse.mapEmbedSrc)}`;
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