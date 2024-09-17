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

// BestSeller

document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector('.prev-second');
    const nextBtn = document.querySelector('.next-second');
    const productsWrapper = document.querySelector('.products-wrapper');

    const scrollAmount = 250; // Độ dài mỗi lần cuộn
    const scrollInterval = 3000; // Thời gian giữa các lần cuộn tự động (tính bằng ms)
    let autoScroll;
    let isAutoScrolling = true;

    // Hàm cuộn sản phẩm sang trái
    function scrollLeft() {
        const maxScrollLeft = productsWrapper.scrollWidth - productsWrapper.clientWidth;
        productsWrapper.scrollLeft += scrollAmount;

        // Nếu cuộn đến cuối, quay lại đầu
        if (productsWrapper.scrollLeft >= maxScrollLeft) {
            setTimeout(() => {
                productsWrapper.scrollLeft = 0;
            }, 500); // Thời gian dừng lại ở cuối trước khi quay lại đầu
        }
    }

    // Hàm cuộn sản phẩm sang phải
    function scrollRight() {
        productsWrapper.scrollLeft -= scrollAmount;

        // Nếu cuộn đến đầu, quay lại cuối
        if (productsWrapper.scrollLeft < 0) {
            setTimeout(() => {
                productsWrapper.scrollLeft = productsWrapper.scrollWidth;
            }, 500); // Thời gian dừng lại ở đầu trước khi quay lại cuối
        }
    }

    // Xử lý sự kiện khi nhấn nút 'Next'
    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        scrollLeft();
    });

    // Xử lý sự kiện khi nhấn nút 'Prev'
    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        scrollRight();
    });

    // Hàm để bắt đầu cuộn tự động
    function startAutoScroll() {
        isAutoScrolling = true;
        autoScroll = setInterval(() => {
            if (isAutoScrolling) {
                scrollLeft();
            }
        }, scrollInterval);
    }

    // Hàm để dừng cuộn tự động
    function stopAutoScroll() {
        isAutoScrolling = false;
        clearInterval(autoScroll);
    }

    // Bắt đầu cuộn tự động khi trang được tải
    startAutoScroll();

    // Dừng cuộn tự động khi người dùng tương tác với các nút điều hướng
    prevBtn.addEventListener('mouseover', stopAutoScroll);
    nextBtn.addEventListener('mouseover', stopAutoScroll);

    // Bắt đầu lại cuộn tự động sau khi người dùng rời khỏi các nút điều hướng
    prevBtn.addEventListener('mouseout', startAutoScroll);
    nextBtn.addEventListener('mouseout', startAutoScroll);
});