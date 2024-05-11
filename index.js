const banglore1 = document.querySelector('.Bangalore');
const gurugram1 = document.querySelector('.Gurugram');
const delhi1 = document.querySelector('.Delhi');
const mumbai2 = document.querySelector('.Mumbai1');
const pune1 = document.querySelector('.Pune');
const ahmedabad1 = document.querySelector('.Ahmedabad');
const hyderabad1 = document.querySelector('.Hyderabad');
const noida1 = document.querySelector('.Noida');

const dropdown = document.querySelector('.dropdown-menu');
const navbar = document.querySelector("#navbar1")
const noida2 = document.querySelector('#noida');
const banglore2 = document.querySelector('#banglore');
const mumbai3 = document.querySelector('#mumbai');
const delhi2 = document.querySelector('#delhi');

banglore1.addEventListener('click',()=> {
    window.location.href = 'bangalore/city.html'
    console.log('clicked');
})
banglore2.addEventListener('click',()=> {
    window.location.href = 'bangalore/city.html'
    console.log('clicked');
})
gurugram1.addEventListener('click',()=> {
    window.location.href = 'gurugram/gurugram.html'
    console.log('clicked');
})
delhi1.addEventListener('click',()=> {
    window.location.href = 'delhi/delhi.html'
    console.log('clicked');
})
delhi2.addEventListener('click',()=> {
    window.location.href = 'delhi/delhi.html'
    console.log('clicked');
})
mumbai2.addEventListener('click',()=> {
    window.location.href = 'mumbai/mumbai.html'
    console.log('clicked');
})
mumbai3.addEventListener('click',()=> {
    window.location.href = 'mumbai/mumbai.html'
    console.log('clicked');
})
noida1.addEventListener('click',()=> {
    window.location.href = 'noida/noida.html'
    console.log('clicked');
})
noida2.addEventListener('click',()=> {
    window.location.href = 'noida/noida.html'
    console.log('clicked');
})
pune1.addEventListener('click',()=> {
    window.location.href = 'pune/pune.html'
    console.log('clicked');
})
ahmedabad1.addEventListener('click',()=> {
    window.location.href = 'ahmedabad/ahmedabad.html'
    console.log('clicked');
})
hyderabad1.addEventListener('click',()=> {
    window.location.href = 'hyderabad/hyderabad.html'
    console.log('clicked');
})

const toggleMenu = () => {
    dropdown.style.display = "block"
}


  const requestBtn = document.querySelector('.call-btn');
  const modal1 = document.querySelector('.modal');
  
  
  requestBtn.addEventListener('click',()=> {
     modal1.style.display = "block"
     console.log("click")
  })
  window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
      if (event.target == navbar) {
        dropdown.style.display = "none";
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