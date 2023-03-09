const menuList= document.querySelector(".mobo-menu-list")
const hamIcon= document.querySelector(".bx")
const cancel= document.querySelector(".bx-x")

hamIcon.addEventListener("click",()=>{
    menuList.classList.add("active");
})
cancel.addEventListener("click",()=>{
    menuList.classList.remove("active");
})


for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}hamMen.addEventListener("click", function(){
    moboHam.classList.toggle("active")
  });
  