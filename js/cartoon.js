window.addEventListener("load", function () {
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
