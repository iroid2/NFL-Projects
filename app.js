const swiper = new Swiper('#swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
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
       // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true'
    },
    loop:true,
    // Navigation arrows
    navigation: {
      nextEl: '#left',
      prevEl: '#right',   
    },
    lazyLoading:true,
   
  });
  const trendingSwiper = new Swiper('#trending', {
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
       // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true'
    },
    loop:true,
    // Navigation arrows
    navigation: {
      nextEl: '#toLeft',
      prevEl: '#toRight',   
    },
    lazyLoading:true,
   
  });
  const draftSwiper = new Swiper('#draft', {
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
       // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true'
    },
    loop:true,
    // Navigation arrows
    navigation: {
      nextEl: '#leftLeft',
      prevEl: '#rightRight',   
    },
    lazyLoading:true,
   
  });

  const teamDetails=document.getElementById('team-details');
  const agencyDetails=document.getElementById('agency');
  const teamSignUp=document.getElementById('team-sign');
  const teamBtn=document.getElementById('team-btn');
  const teamAgencyBtn=document.getElementById('team-agency');
  const teamSignUpBtn=document.getElementById('team-sign-btn');



  teamAgencyBtn.addEventListener(("click"),function(){
    agencyDetails.classList.add('active');
    teamDetails.classList.add('inactive');
    teamAgencyBtn.style.border="1px solid blue";
    teamAgencyBtn.style.borderBottom="3px solid blue";
    teamSignUpBtn.style.border="none";
    teamBtn.style.border="none";
  })
  teamSignUpBtn.addEventListener(("click"),function(){

    teamSignUp.classList.add('active');
    agencyDetails.classList.remove('active');
    teamDetails.classList.remove('active');
    teamSignUpBtn.style.border="1px solid blue";
    teamSignUpBtn.style.borderBottom="3px solid blue";
    teamAgencyBtn.style.border="none";
    teamBtn.style.border="none";
    
  })
 
  teamBtn.addEventListener(('click'),function(){
    teamDetails.classList.remove('inactive');
    agencyDetails.classList.remove('active');
    teamSignUp.classList.remove('active');
    teamBtn.style.border="1px solid blue";
    teamBtn.style.borderBottom="3px solid blue";
    teamAgencyBtn.style.border="none";
    teamSignUpBtn.style.border="none";
  })