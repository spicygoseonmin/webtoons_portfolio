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

  const working_skill_btn = this.document.querySelector("#working-skill-btn");
  const working_skill = this.document.querySelector(".working-skill");
  working_skill_btn.addEventListener("click", function () {
    working_skill.style.display = "block";
    working_ex.style.display = "none";
    working_ep.style.display = "none";
  });
  const working_ex_btn = this.document.querySelector("#working-ex-btn");
  const working_ex = this.document.querySelector(".working-ex");
  working_ex_btn.addEventListener("click", function () {
    working_ex.style.display = "block";
    working_skill.style.display = "none";
    working_ep.style.display = "none";
  });
  const working_ep_btn = this.document.querySelector("#working-ep-btn");
  const working_ep = this.document.querySelector(".working-ep");
  working_ep_btn.addEventListener("click", function () {
    working_ep.style.display = "block";
    working_ex.style.display = "none";
    working_skill.style.display = "none";
  });
});
