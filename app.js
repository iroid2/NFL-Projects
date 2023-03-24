const swiper = new Swiper('#swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev', 
    },
  
    // And if we need scrollbar
   
  });
  const featuredSwiper = new Swiper('#featuredSlider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:1,
    spaceBetween:0,
     breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      },
    loop:true,
    // Navigation arrows
    navigation: {
      nextEl: '#left',
      prevEl: '#right',   
    },
    lazyLoading:true,
   
  });