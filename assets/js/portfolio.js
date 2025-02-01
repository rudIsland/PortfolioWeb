document.addEventListener("DOMContentLoaded", function () {
  // Swiper 슬라이드 초기화
  new Swiper(".portfolio-details-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 1, // 한 번에 한 개의 슬라이드만 보이도록 설정
    centeredSlides: true, // 가운데 정렬
  });
});
