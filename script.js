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
function updateCounter() {
    const namoroInicio = new Date("2024-01-12");
    const now = new Date();
    

    let years = now.getFullYear() - namoroInicio.getFullYear();
    let months = now.getMonth() - namoroInicio.getMonth();
    let days = now.getDate() - namoroInicio.getDate();

    // ajustar os dias se o dia for menor que o inicio
    if (days < 0){
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(),
        days += previousMonth.getDate());
    }

    // ajuste de meses se o atual for menor que o de inicio
    if (months < 0){
        years--;
        months += 12;
    }
    
   let hours = now.getHours() - namoroInicio.getHours();
   let minutes = now.getMinutes() - namoroInicio.getMinutes();
   let seconds = now.getSeconds() - namoroInicio.getSeconds();

    //atualizar os dados para o html
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
