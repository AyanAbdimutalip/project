const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numberOfFlakes = 401;
const flakes = [];

function createFlakes() {
    for (let i = 0; i < numberOfFlakes; i++) {
        flakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            opacity: Math.random(),
            speedX: Math.random() * 1 - 0.5,
            speedY: Math.random() * 1 + 0.5,
            radius: Math.random() * 4 + 1
        });
    }
}

function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    for (let i = 0; i < numberOfFlakes; i++) {
        const flake = flakes[i];
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
}

function moveFlakes() {
    for (let i = 0; i < numberOfFlakes; i++) {
        const flake = flakes[i];
        flake.x += flake.speedX;
        flake.y += flake.speedY;

        if (flake.y > canvas.height) {
            flakes[i] = {
                x: Math.random() * canvas.width,
                y: 0,
                opacity: flake.opacity,
                speedX: flake.speedX,
                speedY: flake.speedY,
                radius: flake.radius
            };
        }
    }
}

function animateSnow() {
    drawFlakes();
    requestAnimationFrame(animateSnow);
}

createFlakes();
animateSnow();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flakes.length = 0;
    createFlakes();
});

document.addEventListener('DOMContentLoaded', () => {

    const deadline = new Date('2024-12-31T23:59:59');
    

    const elDays = document.querySelector('.timer__days');
    const elHours = document.querySelector('.timer__hours');
    const elMinutes = document.querySelector('.timer__minutes');
    const elSeconds = document.querySelector('.timer__seconds');
    

    const declensionNum = (num, words) => {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    };
  

    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, deadline - now);
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
  
      elDays.textContent = String(days).padStart(2, '0') + ':';
      elHours.textContent = String(hours).padStart(2, '0') + ':';
      elMinutes.textContent = String(minutes).padStart(2, '0') + ':';
      elSeconds.textContent = String(seconds).padStart(2, '0');
  
      elDays.dataset.title = declensionNum(days, ['Days', 'Days', 'Days']);
      elHours.dataset.title = declensionNum(hours, ['Hours', 'Hours', 'Hours']);
      elMinutes.dataset.title = declensionNum(minutes, ['Minuts', 'Minuts', 'Minuts']);
      elSeconds.dataset.title = declensionNum(seconds, ['Secunds', 'Secunds', 'Secunds']);
  
      if (diff === 0) {
        clearInterval(timerId);
      }
    };
  

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
  });

  const header = document.getElementById('header')

  window.addEventListener('scroll', () => {
    if(window.scrollY > 700){
        header.style.transition = "all 1s"
        header.style.width = '100%'
        header.style.height = '70px'
        header.style.background = "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(171,39,39,1) 0%, rgba(189,55,83,1) 100%) "
        header.style.position = "fixed"
        header.style.zIndex = "9999"
    }else{
        header.style.width = '100%'
        header.style.height = '70px'
        header.style.background = "none"
    }
})







document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.querySelector('.products');

  const products = [
      { name: 'Phoenix present', imageUrl: 'https://simg.marwin.kz/media/catalog/product/cache/caed27b441cb6475334305a4c65b6330/1/4/feniks_prezent_novogodnyaya_kniga_vse_obyazatelno_sbudetsya_dlya_zapisey_jelaniy_v_komplekte_s_kara.jpg', price: '$143' },
      { name: 'house of seasons', imageUrl: 'https://simg.marwin.kz/media/catalog/product/cache/caed27b441cb6475334305a4c65b6330/z/1/house_of_seasons_dekorativnaya_statuetka_imbirnyy_pryanik031029_022_smkrasnyy_v_assortiment.jpg', price: '$275' },
      { name: 'Remeco', imageUrl: 'https://simg.marwin.kz/media/catalog/product/cache/caed27b441cb6475334305a4c65b6330/7/2/remeco_figurka_dekorativnaya_v_stekl_share_s_muz_santa_d_10_sm_l12_w115_h145_sm.jpg', price: '$685' },
      { name: 'Snow Ball glass', imageUrl: 'https://simg.marwin.kz/media/catalog/product/cache/caed27b441cb6475334305a4c65b6330/2/3/remeco_snejnyy_shar_santa_s_podarkami_d_10_sm_l10_w10_h145_sm_s_muzykoy.jpg', price: '$432' },
      { name: 'Dicoretion figure', imageUrl: 'https://simg.marwin.kz/media/catalog/product/cache/caed27b441cb6475334305a4c65b6330/7/5/remeco_figurka_dekorativnaya_meshok_s_podarkami_l125_w5_h95_sm.jpg', price: '$247' },
      { name: 'Black box', imageUrl: 'https://simg.marwin.kz/media/catalog/product/w/2/black_box_el_podmoskovnaya_100_litaya_zelenaya_60_sm_v_meshochke.jpg', price: '$389' },
      { name: 'Vitbis', imageUrl: 'https://simg.marwin.kz/media/catalog/product/v/i/vitbis_steklyannoe_dekorativno_1468945_1.png', price: '$795' },
      { name: 'Santa clouse', imageUrl: 'https://simg.marwin.kz/media/catalog/product/r/e/remeco_izdelie_dekorativnoe_po_1479012.png', price: '$857' },
      { name: 'Snowman on car', imageUrl: 'https://simg.marwin.kz/media/catalog/product/r/e/remeco_figurka_dekor_v_stekl_s_1474710_1.png', price: '$990' },
      { name: 'ChristmasDeLuxe', imageUrl: 'https://simg.marwin.kz/media/catalog/product/c/h/christmasdeluxe_elochnaya_igru_1476734.png', price: '$176' },
      { name: 'Snowmans', imageUrl: 'https://simg.marwin.kz/media/catalog/product/r/e/remeco_izdelie_dekorativnoe_po_1479005.png', price: '$118' },
      { name: 'Star Trading', imageUrl: 'https://simg.marwin.kz/media/catalog/product/0/6/star_trading_svecha_so_svetodiodom_shishka_8h105_sm.jpg', price: '$725' }
  ];

  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';

      const productImage = document.createElement('img');
      productImage.src = product.imageUrl;
      productImage.alt = product.name;

      const productName = document.createElement('h3');
      productName.textContent = product.name;

      const productPrice = document.createElement('div');
      productPrice.className = 'price';
      productPrice.textContent = product.price;

      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productsContainer.appendChild(productDiv);

      productDiv.addEventListener('mouseenter', () => {
          productDiv.style.background = "rgba(100, 100, 100, 0.144)";
      });

      productDiv.addEventListener('mouseleave', () => {
          productDiv.style.background = "white";
      });
  });

  const emailForm = document.getElementById('emailForm');
  const emailInput = document.getElementById('email');
  const subscriptionMessage = document.getElementById('subscriptionMessage');
  const emailButton = document.getElementById('emailButton');

  emailForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!emailInput.value.includes('@')) {
          emailInput.placeholder = 'email is false';
          emailInput.style.placeholdercolor = 'white';
          subscriptionMessage.style.display = "none"
          emailButton.textContent = 'Try again';
          emailButton.style.color = 'white';
          emailButton.style.background = 'red';
      } else {
        emailInput.style.color = 'black';
          emailInput.placeholder = 'email is true';
          emailInput.style.background = 'white';
          subscriptionMessage.style.display = "block"
          subscriptionMessage.classList.add('hidden');
          emailButton.textContent = 'SUBSCRIBE';
          emailButton.style.color = 'black';
          emailButton.style.background = 'white';
      }

      emailInput.value = ""
  });
});

const santa = document.getElementById('santa-stick');

window.addEventListener('scroll', () => {
    if(window.scrollY > 700 && window.scrollY < 2000){
        santa.style.transition = "all 1s"
        santa.style.width = "70px"
        santa.style.display = "block"
        santa.style.position = "fixed"
        santa.style.top = "600px"
        santa.style.right = "10px"
        santa.style.zIndex = "9999"
        santa.style.fill = "#000000"
    }else if(window.scrollY > 2000){
        santa.style.transition = "all 1s"
        santa.style.width = "70px"
        santa.style.display = "block"
        santa.style.position = "fixed"
        santa.style.top = "600px"
        santa.style.right = "10px"
        santa.style.zIndex = "9999"
        santa.style.fill = "#ffffff"
        santa.style.stroke = "#ffffff"
        santa.style.strokeWidth = "10px"
    }else{
        santa.style.display = "none"
    }
})

santa.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})