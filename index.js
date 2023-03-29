   const button = document.getElementById("button");
   const close = document.getElementById("close");
    const modal =document.getElementById("modal");
    const menu = document.getElementById("menu");


button.addEventListener("click", ()=>{
    setTimeout(()=>{
        modal.style.opacity ="1"
             menu.classList.add("active")
         button.style.display="none";
         close.style.display ="flex"
         
             
         },0)
    })

    close.addEventListener("click", ()=>{
        menu.classList.remove("active")
        modal.style.opacity ="0"
         setTimeout(()=>{
            button.style.display="flex";
            close.style.display ="none"
             
         },0)
    })

