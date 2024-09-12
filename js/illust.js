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
  const cartoonCoverBtn = this.document.querySelector("#cartoonCover-btn");
  const cartoonCover = this.document.querySelector(".cartoon-cover");
  cartoonCoverBtn.addEventListener("click", function () {
    cartoonCover.style.display = "block";
    individual_illust.style.display = "none";
    subcontract_illust.style.display = "none";
  });
  const individual_illustBtn = this.document.querySelector("#individual-illust-btn");
  const individual_illust = this.document.querySelector(".individual-illust");
  individual_illustBtn.addEventListener("click", function () {
    individual_illust.style.display = "block";
    cartoonCover.style.display = "none";
    subcontract_illust.style.display = "none";
  });
  const subcontract_illustBtn = this.document.querySelector("#subcontract-illust-btn");
  const subcontract_illust = this.document.querySelector(".subcontract-illust");
  subcontract_illustBtn.addEventListener("click", function () {
    subcontract_illust.style.display = "block";
    cartoonCover.style.display = "none";
    individual_illust.style.display = "none";
  });
});
