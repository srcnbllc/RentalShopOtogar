let slideIndex = 0;

// Modal açma fonksiyonu
function openModal(office) {
    const slides = document.getElementById(office).getElementsByClassName("mySlides");
    slideIndex = 0; // Her seferinde ilk slaytla başla
    showSlides(slideIndex, slides);
    document.getElementById(office).style.display = "block";
}

// Modal kapama fonksiyonu
function closeModal(office) {
    document.getElementById(office).style.display = "none";
}

// Slaytları ileri veya geri götürme fonksiyonu
function plusSlides(n, office) {
    const slides = document.getElementById(office).getElementsByClassName("mySlides");
    slideIndex += n;

    if (slideIndex >= slides.length) slideIndex = 0; // Başa dön
    if (slideIndex < 0) slideIndex = slides.length - 1; // Sona dön

    showSlides(slideIndex, slides);
}

// Slayt gösterisini kontrol etme fonksiyonu
function showSlides(n, slides) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Tüm slaytları gizle
    }
    slides[n].style.display = "block"; // Geçerli slaytı göster
}

// Modal açılmadan önce slaytları düzgün şekilde göstermek için
function setupModal(slideIndex = 0, slides) {
    if (slides.length > 0) {
        slides[slideIndex].style.display = "block";
    }
}

// Her modal için uygun slayt indeksini ayarla
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal(modal.id); // Modal arka planına tıklanırsa kapat
        }
    });
});

// Görsel yakınlaştırma (Zoom) etkinliği
document.querySelectorAll('.slide-img').forEach(image => {
    let scale = 1; // Başlangıç ölçeği
    image.addEventListener('wheel', function(event) {
        event.preventDefault();

        if (event.deltaY < 0) {
            scale = Math.min(scale + 0.1, 3); // Zoom in (maks. 3x)
        } else {
            scale = Math.max(scale - 0.1, 1); // Zoom out (min. 1x)
        }
        image.style.transform = `scale(${scale})`;
    });

    // Fare görsel üzerinden çıkınca ölçeği sıfırla
    image.addEventListener('mouseleave', () => {
        image.style.transform = `scale(1)`;
        scale = 1;
    });
});
