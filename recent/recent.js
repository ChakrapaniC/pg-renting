const delhi = [
    {
      name: "COVIE Nehru Place 50",
      location: "Nehru Place, Delhi",
      startingPrice: "₹29,500",
      imgSrc: "images/delhi1.jpg"
    },
    {
      name: "Ashray Living COVIE East of Kailash 52",
      location: "East of Kailash, Delhi",
      startingPrice: "₹25,000",
      imgSrc: "images/delhi2.jpg"
    },
    {
      name: "Your Space Conclave",
      location: "Kailash colony, Delhi",
      startingPrice: "₹22,000",
      imgSrc: "images/delhi3.jpg"
    },
    {
      name: "Ashray Living Your Space Clarks INN",
      location: "Kailash Colony, Delhi",
      startingPrice: "Starting",
      imgSrc: "images/delhi4.jpg"
    }
  ];

  const hyderabad = [
    {
      name: "Settl Bron",
      location: "Gayatri Hills, Hyderabad",
      startingPrice: "₹13,000",
      imgSrc: "images/hyde1.jpg"
    },
    {
      name: "Settl Azore",
      location: "Gachibowli, Hyderabad",
      startingPrice: "₹16,000",
      imgSrc: "images/hyde2.jpg"
    },
    {
      name: "Settl Amalfi",
      location: "Madhapur, Hyderabad",
      startingPrice: "₹16,000",
      imgSrc: "images/hyde3.jpg"
    },
    {
      name: "Settl. Gorbio",
      location: "Jubilee Hills, Hyderabad",
      startingPrice: "Starting",
      imgSrc: "images/hyde4.jpg"
    }
  ];
  const noida = [
    {
      name: "Your Space Noida - RN73",
      location: "Sector 62, Noida",
      startingPrice: "₹15,000",
      imgSrc: "images/noid1.jpg"
    },
    {
      name: "Your Space Greater Noida",
      location: "Knowledge Park III, Greater Noida",
      startingPrice: "₹10,000",
      imgSrc: "images/noid2.jpg"
    },
    {
      name: "HelloWorld Siri",
      location: "Sector 22, Noida",
      startingPrice: "₹11,000",
      imgSrc: "images/noid3.jpg"
    },
    {
      name: "Fortune by Hive",
      location: "Knowledge Park III, Noida",
      startingPrice: "₹11,000",
      imgSrc: "images/noid4.jpg"
    }
  ];
  const gurugram = [
    {
      name: "Settl Athea",
      location: "Sector 49, Gurugram",
      startingPrice: "₹15,000",
      imgSrc: "images/gur-1.jpg"
    },
    {
      name: "Covie Gurgaon 108",
      location: "Sector 38, Gurugram",
      startingPrice: "₹15,150",
      imgSrc: "images/gur2.jpg"
    },
    {
      name: "Settl Alem",
      location: "Sector 43, Gurugram",
      startingPrice: "₹35,000",
      imgSrc: "images/gur3.jpg"
    },
    {
      name: "Settl Samoa",
      location: "Sector 51, Gurugram",
      startingPrice: "₹17,000",
      imgSrc: "images/gur4.jpg"
    }
  ];
  const bangalore = [
    {
      name: "Hyphen Club Vieux",
      location: "Malleshwaram, Bangalore",
      startingPrice: "₹20,999",
      imgSrc: "images/bang1.jpg"
    },
    {
      name: "Settl Delvin",
      location: "Kadubeesanahalli, Bengaluru",
      startingPrice: "₹16,000",
      imgSrc: "images/bang2.jpg"
    },
    {
      name: "Covie Bannerghatta 141",
      location: "Bannerghatta, Bengaluru",
      startingPrice: "₹15,000",
      imgSrc: "images/bang3.jpg"
    },
    {
      name: "Settl Siena",
      location: "Rachenahalli, Bengaluru",
      startingPrice: "₹16,000",
      imgSrc: "images/bang4.jpg"
    }
  ];

  const citiesData = [
    { city: 'delhi', data: delhi },
    { city: 'hyderabad', data: hyderabad },
    { city: 'noida', data: noida },
    { city: 'gurugram', data: gurugram },
    { city: 'bangalore', data: bangalore }
  ];
  
  // Function to create a card element
  function createCard(property) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.innerHTML = `
      <div class="img-container">
        <img src="${property.imgSrc}" alt="${property.name}">
      </div>
      <div class="info">
        <div class="left-row">
          <h4 class="p-1">${property.name}</h4>
          <p class="p-2">${property.location}</p>
        </div>
        <div class="right-row">
          <h4 class="p-3">${property.startingPrice}</h4>
        </div>
      </div>`;
  
    return card;
  }
  
  // Function to render cards for a city
  function renderCityCards(cityData) {
    console.log(cityData)
    const section = document.querySelector(`.${cityData.city}`);
    console.log(section)
  
    if (section) {
      const container = section.querySelector('.cards');
  
      cityData.data.forEach(property => {
        const card = createCard(property);
        container.appendChild(card);
      });
    }
  }
  
  // Render cards for each city
  citiesData.forEach(cityData => {
    renderCityCards(cityData);
  });

  const modal1 = document.querySelector('.modal');


const toggleModal = () => {
    modal1.style.display = "block"
}
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }