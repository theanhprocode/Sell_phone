const sliders = document.querySelectorAll('.item-slider');
let currentIndex = 0;
let autoSlideInterval;

const showSlide = (index) => {
    // Ẩn tất cả các slider
    sliders.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.zIndex = '0';
        slide.style.opacity = '0';
    });

    // Hiển thị slider hiện tại
    sliders[index].classList.add('active');
    sliders[index].style.zIndex = '1';
    sliders[index].style.opacity = '1';
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % sliders.length;
    showSlide(currentIndex);
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    showSlide(currentIndex);
};
//  time chuyển
const startAutoSlide = () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
};

// Dừng tự động chuyển khi người dùng tương tác
const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

// Xử lý sự kiện cho các nút điều hướng
document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

// Bắt đầu slider khi trang tải xong
window.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startAutoSlide();
});
