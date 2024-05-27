let openMenu = document.getElementById("open-menu")
let menu = document.getElementById("menu-mobile")
let overlay = document.getElementById("overlay-menu")

openMenu.addEventListener("click", () => {
  menu.classList.add("its-open")
})

menu.addEventListener("click",()=>{
  menu.classList.remove("its-open")
})

overlay.addEventListener("click",()=>{
  menu.classList.remove("its-open")
})