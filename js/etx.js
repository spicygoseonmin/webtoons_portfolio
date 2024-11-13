window.addEventListener("load", function(){;
      // 로고 작업물-=================================================================
  const logo_swiper = new Swiper(".logo_swiper", {
    navigation: {
      nextEl: ".logo_next",
      prevEl: ".logo_prev",
    },
    loop: true,
  });
  const logo_ex_swiper = new Swiper(".logo_ex_swiper", {
    navigation: {
      nextEl: ".logo_ex_next",
      prevEl: ".logo_ex_prev",
    },
    loop: true,
  });
  logo_swiper.controller.control = logo_ex_swiper;
  logo_ex_swiper.controller.control = logo_swiper;
      // 아트로크 배너-=================================================================
  const artroke_banner_swiper = new Swiper(".artroke_banner_swiper", {
    navigation: {
      nextEl: ".artroke_next",
      prevEl: ".artroke_prev",
    },
    loop: true,
  });
})