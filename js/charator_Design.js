window.addEventListener("load", function () {
  const charator_body_btn = this.document.querySelector("#charator-body-btn");
  const charator_body = this.document.querySelector(".charator-body");
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
});
