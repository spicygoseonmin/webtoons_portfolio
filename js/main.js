window.addEventListener("load", function(){
    const closeBtn = this.document.querySelector(".closeBtn")
    const firstWindow = this.document.querySelector(".first-window")
    closeBtn.addEventListener("click",function(){
        firstWindow.style.display = "none"
    })
})