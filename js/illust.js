window.addEventListener("load", function () {
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
  subcontract_illustBtn.addEventListener("click", function(){
    subcontract_illust.style.display = "block";
    cartoonCover.style.display = "none";
    individual_illust.style.display = "none";
  })
});
