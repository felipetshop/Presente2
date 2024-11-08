// Carrossel de Imagens 
let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const dots = document.querySelectorAll(".dot");

function showImage(index) {
    currentImageIndex = index;
    const offset = -index * 100;
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}


showImage(0);
setInterval(nextImage, 3000); 

// Função para ir a uma imagem 
function goToImage(index) {
    showImage(index);
}

// Contador de Tempo 
const namoroInicio = new Date("2024-01-12"); 

function updateCounter() {
    const now = new Date();
    let diff = now - namoroInicio;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);
    
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    
    const seconds = Math.floor(diff / 1000);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter, 1000);

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    
    
    heart.style.left = `${Math.random() * 100}vw`;
    
   
    heart.style.fontSize = `${Math.random() * 40 + 10}px`;
    
    
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

   
    document.body.appendChild(heart);
    
   
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}


setInterval(createHeart, 500);