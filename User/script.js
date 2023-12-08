document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
        item.classList.remove("active");
        if (i === index) {
            item.classList.add("active");
        }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    }

    document.querySelector(".carousel-control-next").addEventListener("click", nextItem);
    document.querySelector(".carousel-control-prev").addEventListener("click", prevItem);

    showItem(currentIndex);
    });