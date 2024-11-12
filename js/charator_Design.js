window.addEventListener("load", function () {
  const menuList_btn = this.document.querySelectorAll(".a-sub-menu > li");
  menuList_btn.forEach((btns) => {
    btns.addEventListener("click", function () {
      // 모든 버튼에서 'menu-active' 클래스 제거
      menuList_btn.forEach((btn) => btn.classList.remove("menu-active"));

      // 클릭된 버튼에만 'menu-active' 클래스 추가
      btns.classList.add("menu-active");
    });
  });
  const charator_body_btn = this.document.querySelector("#charator-body-btn");
  const charator_body = this.document.querySelector(".charator");
  charator_body_btn.addEventListener("click", function () {
    charator_body.style.display = "block";
    charator_cloth.style.display = "none";
    inger.style.display = "none";
  });
  const charator_cloth_btn = this.document.querySelector("#charator-cloth-btn");
  const charator_cloth = this.document.querySelector(".charator-cloth");
  charator_cloth_btn.addEventListener("click", function () {
    charator_cloth.style.display = "block";
    charator_body.style.display = "none";
    inger.style.display = "none";
  });
  const inger_btn = this.document.querySelector("#inger-btn");
  const inger = this.document.querySelector(".inger");
  inger_btn.addEventListener("click", function () {
    inger.style.display = "block";
    charator_cloth.style.display = "none";
    charator_body.style.display = "none";
  });

  // 캐릭터 초안 스와이퍼 구역-=================================================================
  const draft_charactor_swiper = new Swiper(".draft_charactor_swiper", {
    navigation: {
      nextEl: ".draft_next",
      prevEl: ".draft_prev",
    },
    slidesPerView: 3,
    loop: true,
  });
  // 캐릭터 디자인 스와이퍼 구역-=================================================================
  const charactor_swiper = new Swiper(".charactor_swiper", {
    navigation: {
      nextEl: ".body_next",
      prevEl: ".body_prev",
    },
    loop: true,
  });
  // 캐릭터 디자인 스와이퍼 구역-=================================================================
  const sub_charactor_swiper = new Swiper(".sub_charactor_swiper", {
    navigation: {
      nextEl: ".sub_next",
      prevEl: ".sub_prev",
    },
    loop: true,
  });
});
