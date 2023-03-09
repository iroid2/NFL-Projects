const menuList= document.querySelector(".mobo-menu-list")
const hamIcon= document.querySelector(".bx")
const cancel= document.querySelector(".bx-x")

hamIcon.addEventListener("click",()=>{
    menuList.classList.add("active");
})
cancel.addEventListener("click",()=>{
    menuList.classList.remove("active");
})