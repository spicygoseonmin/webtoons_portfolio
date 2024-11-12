window.addEventListener("load", function(){
  const menuList_btn = this.document.querySelectorAll(".a-sub-menu > li");
  menuList_btn.forEach((btns) => {
    btns.addEventListener("click", function () {
      // 모든 버튼에서 'menu-active' 클래스 제거
      menuList_btn.forEach((btn) => btn.classList.remove("menu-active"));

      // 클릭된 버튼에만 'menu-active' 클래스 추가
      btns.classList.add("menu-active");
    });
  });
  const photoshop_btn = this.document.querySelector("#photoshop-btn");
  const photoshop = this.document.querySelector(".photoshop");
  photoshop_btn.addEventListener("click", function () {
    photoshop.style.display = "block";
    web_design.style.display = "none";
    working.style.display = "none";
  });
  const web_design_btn = this.document.querySelector("#web-design-btn");
  const web_design = this.document.querySelector(".web_design");
  web_design_btn.addEventListener("click", function () {
    web_design.style.display = "block";
    photoshop.style.display = "none";
    working.style.display = "none";
  });
  const working_btn = this.document.querySelector("#working-btn");
  const working = this.document.querySelector(".working");
  working_btn.addEventListener("click", function () {
    working.style.display = "block";
    web_design.style.display = "none";
    photoshop.style.display = "none";
  });
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