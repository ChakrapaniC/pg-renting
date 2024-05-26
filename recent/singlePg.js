function getQueryParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryParams = {};
    for (const [key, value] of urlParams.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}
const queryParams = getQueryParameters();
console.log(queryParams)

const img = document.querySelector('.image');
const map = document.querySelector('.map');
const fullDetails = document.querySelector('.full-details');
const details = document.querySelector('.details ');
const inner = document.querySelector('.inner-1');
const h1 = document.querySelector('.h-4');
const price1 = document.querySelector('.dynamic');
if(queryParams){
   img.src = queryParams.image;
   map.src = queryParams.mapSrc
   const detailHtml = `
       <h4>${queryParams.name}</h4>
       <p>${queryParams.location}</p>
   `
   inner.innerHTML = detailHtml;
   h1.textContent = queryParams.price;
   price1.textContent = queryParams.price;
   findAmenities(queryParams.location)
}


const modal1 = document.querySelector('.modal');


const toggleModal = () => {
    modal1.style.display = "block"
}
window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  async function findCoordinates(location) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
            return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon), display_name: data[0].display_name };
        } else {
            console.log(`No coordinates found for ${location}`);
            return null;
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
}

  async function findAmenities(location) {
    // const location = document.getElementById('location').value;
    // const location = "Wagholi, Pune";
    const coordinates = await findCoordinates(location);
    if (coordinates) {
        const amenities = ['cafe', 'bus_stop', 'marketplace', 'station', 'park'];
        document.getElementById('results').innerHTML = '';
        for (const amenity of amenities) {
            await findAmenity(coordinates, amenity);
        }
    }
}

async function findAmenity(coordinates, amenity) {
    console.log('Searching for:', coordinates, amenity);
    const overpassQuery = `
        [out:json];
        node["amenity"="${amenity}"](around:1000,${coordinates.lat},${coordinates.lon});
        out body;
    `;
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;
    try {
        const response = await fetch(overpassUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received data:', data.tags);
        displayResults(amenity, data.elements);
    } catch (error) {
        console.error('Error fetching amenities:', error);
    }
}

function displayResults(amenity, data) {
    const resultsDiv = document.getElementById('results');
    const divv  = document.querySelector('.item');
    const amenityTitle = document.createElement('h4');
    amenityTitle.textContent = `${amenity}`;
    resultsDiv.appendChild(amenityTitle);
    if (data.length > 0) {
        const list = document.createElement('ul');
        data.forEach(item => {
            const listItem = document.createElement('li');
            // listItem.textContent = `Latitude: ${item.lat}, Longitude: ${item.lon}`;
            if (item.tags && item.tags.name) {
                listItem.textContent += `${item.tags.name}`;
            }
            list.appendChild(listItem);
        });
        resultsDiv.appendChild(list);
    }
    else {
        const noResults = document.createElement('p');
        noResults.textContent = `No`;
        resultsDiv.appendChild(noResults);
    }
    
};
