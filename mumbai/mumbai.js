
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
        name: "Tribe Luxury Hostel Vile Parle (Female)",
        location: "S Pond Rd, Mumbai",
        price: "₹55,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0844213008666!2d72.83213341489217!3d19.100236857059137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8023c5cc255%3A0x9d7f54cde3d7dd56!2sTribe%20Luxury%20Hostel!5e0!3m2!1sen!2sin!4v1621776483607!5m2!1sen!2sin"
      },
      {
        id:2,
        name: "HelloWorld SagarAvenue",
        location: "Vakola, Santacruz East, Mumbai",
        price: "₹13,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2637411989066!2d72.84387331489134!3d19.081561857336925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91b9479b64f%3A0x571ee29d9626b234!2sHelloWorld%20SagarAvenue!5e0!3m2!1sen!2sin!4v1621776582700!5m2!1sen!2sin"
      },
      {
        id:3,
        name: "HelloWorld Unity",
        location: "Vashi, Navi Mumbai",
        price: "₹14,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4389577697396!2d73.00325501489124!3d19.07223125746403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9221cbe12c5%3A0x862a6ed2a9a4cc61!2sHelloWorld%20Unity!5e0!3m2!1sen!2sin!4v1621776678020!5m2!1sen!2sin"
      },
      {
        id:4,
        name: "HelloWorld Styalnn",
        location: "Andheri East, Mumbai",
        price: "₹11,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7042290297643!2d72.86092841489171!3d19.10356555700642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f2a9996db5%3A0x51e0b56aa70b14a4!2sHelloWorld%20Styalnn!5e0!3m2!1sen!2sin!4v1621776748800!5m2!1sen!2sin"
      },
      {
        id:5,
        name: "Your Space Andheri",
        location: "Andheri East, Mumbai",
        price: "₹25,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7994205882126!2d72.86944441489164!3d19.101741957027543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f08e837059%3A0xf4b2e677e5a2e08b!2sYour%20Space%20Andheri!5e0!3m2!1sen!2sin!4v1621776826914!5m2!1sen!2sin"
      },
      {
        id:6,
        name: "Your Space Malad",
        location: "Malad East, Mumbai",
        price: "₹23,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.296981992583!2d72.86092841489086!3d19.079478257466234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97ec4abfb97%3A0xc04649815f3575b2!2sYour%20Space%20Malad!5e0!3m2!1sen!2sin!4v1621776898322!5m2!1sen!2sin"
      },
      {
        id:7,
        name: "Tribe Luxury Hostel Vile Parle (Female)",
        location: "S Pond Rd, Mumbai",
        price: "₹55,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0844213008666!2d72.83213341489217!3d19.100236857059137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8023c5cc255%3A0x9d7f54cde3d7dd56!2sTribe%20Luxury%20Hostel!5e0!3m2!1sen!2sin!4v1621776483607!5m2!1sen!2sin"
      },
      {
        id:8,
        name: "HelloWorld SagarAvenue",
        location: "Vakola, Santacruz East, Mumbai",
        price: "₹13,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2637411989066!2d72.84387331489134!3d19.081561857336925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91b9479b64f%3A0x571ee29d9626b234!2sHelloWorld%20SagarAvenue!5e0!3m2!1sen!2sin!4v1621776582700!5m2!1sen!2sin"
      },
      // Add more listings here...
      {
        id:9,
        name: "Your Space Panvel",
        location: "Panvel, Mumbai",
        price: "₹11,400 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8751579044097!2d73.10246641489101!3d18.98841865772359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb5cc15f189b%3A0x34f3e6a9256cdab0!2sYour%20Space%20Panvel!5e0!3m2!1sen!2sin!4v1621776984019!5m2!1sen!2sin"
      },
      {
        id:10,
        name: "Your Space Kharghar",
        location: "Kharghar, Mumbai",
        price: "₹19,700 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.3181882525624!2d73.08090011489123!3d19.03571565756797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c549121495%3A0xe43421ecfb6a9713!2sYour%20Space%20Kharghar!5e0!3m2!1sen!2sin!4v1621777047188!5m2!1sen!2sin"
      },
      {
        id:11,
        name: "HelloWorld Harmony",
        location: "Santacruz East, Mumbai",
        price: "₹12,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.2479389889516!2d72.86062481489141!3d19.081949257333555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bccc5e1bc88f%3A0xd22a1f3d7a2aa7c5!2sHelloWorld%20Harmony!5e0!3m2!1sen!2sin!4v1621777086917!5m2!1sen!2sin"
      },
      // More listings...
      {
        id:12,
        name: "Harshit PG",
        location: "Vakola Santacruz East, Mumbai",
        price: "₹11,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.201706138588!2d72.85965701489142!3d19.086312157290235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bcc497c03b1b%3A0x9b432af9f65fd81e!2sHarshit%20PG!5e0!3m2!1sen!2sin!4v1621777139382!5m2!1sen!2sin"
      },
      {
        id:13,
        name: "Your Space Tardeo Girls",
        location: "Tardeo, Mumbai",
        price: "₹32,500 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6361478767014!2d72.80814941489113!3d18.969256157826606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c013a5d4d153%3A0x7fa4d894aaf5b733!2sYour%20Space%20Tardeo!5e0!3m2!1sen!2sin!4v1621785101977!5m2!1sen!2sin"
      },
      {
        id:14,
        name: "Your Space Vile Parle West Boys",
        location: "Vile Parle West, Mumbai",
        price: "₹30,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2958608102213!2d72.83645441489239!3d19.106556556987665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80a0ea17d4d%3A0x4c5292e4c5292!2sYour%20Space%20Vile%20Parle%20West!5e0!3m2!1sen!2sin!4v1621785205434!5m2!1sen!2sin"
      },
      {
        id:15,
        name: "Your-Space Juhu Boys",
        location: "Sea Side, Juhu, Mumbai",
        price: "₹32,000 / month",
        contact: "Call Owner",
        mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2147689352765!2d72.82672351489289!3d19.09961185713306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1809d9f0a79%3A0x60d50b15ef161ed6!2sYour%20Space%20Juhu!5e0!3m2!1sen!2sin!4v1621785257722!5m2!1sen!2sin"
      }
  ]
  
  
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
  