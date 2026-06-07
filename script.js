// ============ СОЗДАНИЕ ЧАСТИЦ ============
const particlesContainer = document.getElementById('particles');

function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 15;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${startX}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ============ КНОПКА ВХОДА ============
const enterBtn = document.getElementById('enterBtn');
let clickCount = 0;

enterBtn.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
        enterBtn.innerHTML = '<span class="btn-text">ARE YOU SURE?</span>';
        enterBtn.style.borderColor = '#ff4444';
        enterBtn.style.color = '#ff4444';
    } else if (clickCount === 2) {
        enterBtn.innerHTML = '<span class="btn-text">DO NOT ENTER</span>';
        enterBtn.style.animation = 'none';
        enterBtn.style.borderColor = '#8b0000';
        enterBtn.style.color = '#8b0000';
        enterBtn.style.background = '#0a0000';
        
        // Глитч эффект на всю страницу
        document.body.style.animation = 'glitchPage 0.3s';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    } else if (clickCount >= 3) {
        enterBtn.innerHTML = '<span class="btn-text">IT\'S TOO LATE</span>';
        enterBtn.style.borderColor = '#ff0000';
        enterBtn.style.color = '#ff0000';
        enterBtn.style.pointerEvents = 'none';
        
        // Интенсивный глитч
        document.body.style.animation = 'glitchPage 0.5s 3';
        setTimeout(() => {
            document.body.style.animation = '';
            clickCount = 0;
            enterBtn.innerHTML = '<span class="btn-text">ENTER THE HOUSE</span>';
            enterBtn.style.borderColor = '#3a3a3a';
            enterBtn.style.color = '#ccc';
            enterBtn.style.background = 'transparent';
            enterBtn.style.pointerEvents = 'auto';
        }, 2000);
    }
});

// ============ ГАЛЕРЕЯ - ЛАЙТБОКС ============
const galleryItems = document.querySelectorAll('.gallery-item');
const catGalleryImage = galleryItems[1]?.querySelector('img');
const storyCatImage = document.querySelector('.cat-image');
const footerCopyright = document.querySelector('footer p');

if (catGalleryImage) {
    catGalleryImage.src = 'assets/сat.png';
}

if (storyCatImage) {
    storyCatImage.src = 'assets/сat.png';
}

if (footerCopyright) {
    footerCopyright.textContent = 'Mapbke Studios © 2026';
}

// Создаем лайтбокс
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-overlay"></div>
    <div class="lightbox-content">
        <button class="lightbox-close">✕</button>
        <button class="lightbox-prev">‹</button>
        <button class="lightbox-next">›</button>
        <div class="lightbox-image-container">
            <img src="" alt="" class="lightbox-image">
        </div>
        <p class="lightbox-counter"></p>
    </div>
`;
document.body.appendChild(lightbox);

// Добавляем стили для лайтбокса
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    .lightbox {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: none;
        align-items: center;
        justify-content: center;
    }
    
    .lightbox.active {
        display: flex;
    }
    
    .lightbox-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.95);
        cursor: pointer;
    }
    
    .lightbox-content {
        position: relative;
        z-index: 1;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .lightbox-image-container {
        position: relative;
        border: 2px solid #2a2a2a;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
        animation: lightboxIn 0.3s ease-out;
    }
    
    @keyframes lightboxIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .lightbox-image {
        display: block;
        max-width: 80vw;
        max-height: 80vh;
        object-fit: contain;
        filter: brightness(0.9) contrast(1.1);
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: 2px solid #444;
        color: #fff;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        font-family: 'VT323', monospace;
        transition: all 0.3s;
        z-index: 2;
    }
    
    .lightbox-close:hover {
        border-color: #ff4444;
        color: #ff4444;
        background: rgba(255, 0, 0, 0.1);
    }
    
    .lightbox-prev,
    .lightbox-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        border: 2px solid #333;
        color: #fff;
        width: 50px;
        height: 60px;
        font-size: 30px;
        cursor: pointer;
        font-family: 'VT323', monospace;
        transition: all 0.3s;
        z-index: 2;
    }
    
    .lightbox-prev {
        left: -70px;
    }
    
    .lightbox-next {
        right: -70px;
    }
    
    .lightbox-prev:hover,
    .lightbox-next:hover {
        border-color: #4cff4c;
        background: rgba(76, 255, 76, 0.1);
        color: #4cff4c;
    }
    
    .lightbox-counter {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        color: #666;
        font-size: 1.5rem;
        font-family: 'VT323', monospace;
        white-space: nowrap;
    }
    
    @media (max-width: 768px) {
        .lightbox-prev {
            left: 10px;
        }
        
        .lightbox-next {
            right: 10px;
        }
        
        .lightbox-image {
            max-width: 95vw;
            max-height: 70vh;
        }
    }
`;
document.head.appendChild(lightboxStyles);

// Работа с галереей
let currentImageIndex = 0;
const galleryImages = Array.from(galleryItems).map(item => item.querySelector('img'));

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxImage() {
    const img = galleryImages[currentImageIndex];
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const counter = lightbox.querySelector('.lightbox-counter');
    
    // Анимация смены
    lightboxImg.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
        
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
    }, 200);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

// Обработчики для галереи
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
    
    // Курсор при наведении
    item.style.cursor = 'pointer';
});

// Кнопки лайтбокса
lightbox.querySelector('.lightbox-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
});

lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
});

lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
});

lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

// Клавиатура для лайтбокса
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
    }
});

// ============ СЛУЧАЙНЫЕ МИКРОГЛИТЧИ ============
setInterval(() => {
    if (Math.random() > 0.97) {
        document.body.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        document.body.style.filter = `hue-rotate(${Math.random() * 10 - 5}deg)`;
        
        setTimeout(() => {
            document.body.style.transform = '';
            document.body.style.filter = '';
        }, 100);
    }
}, 200);

// ============ REVEAL АНИМАЦИЯ ПРИ СКРОЛЛЕ ============
const revealElements = document.querySelectorAll('.reveal');
const sectionTitles = document.querySelectorAll('.section-title');
const footerLine = document.querySelector('.footer-line');

function checkVisibility() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('visible');
        }
    });
    
    sectionTitles.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;
        
        if (titleTop < windowHeight * 0.9) {
            title.classList.add('visible');
        }
    });
    
    if (footerLine) {
        const footerTop = footerLine.getBoundingClientRect().top;
        
        if (footerTop < windowHeight) {
            footerLine.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

// ============ ПАРАЛЛАКС ЭФФЕКТ ============
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
        bgAnimation.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    }
});

// ============ 3D ЭФФЕКТ ДЛЯ КАРТОЧЕК ============
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.transform = `
            translateY(-10px)
            rotateX(${(y - rect.height / 2) / 20}deg)
            rotateY(${-(x - rect.width / 2) / 20}deg)
        `;
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.transform = `
            translateY(-10px)
            rotateX(${(y - rect.height / 2) / 20}deg)
            rotateY(${-(x - rect.width / 2) / 20}deg)
        `;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// ============ ПЛАВНЫЙ СКРОЛЛ ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ КОНСОЛЬНОЕ СООБЩЕНИЕ ============
console.log('%cTHE CURSE OF INHERITANCE', 'color: #4cff4c; font-size: 20px; font-family: monospace;');
console.log('%cDO NOT ENTER THE OTHER ROOMS.', 'color: #ff4444; font-size: 14px; font-family: monospace;');
console.log('%cThey are watching.', 'color: #888; font-size: 12px; font-family: monospace;');
console.log('%cClick on gallery images to view them.', 'color: #4cff4c; font-size: 12px; font-family: monospace;');
