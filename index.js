   const button = document.getElementById("button");
   const close = document.getElementById("close");
    const modal =document.getElementById("modal");
    const menu = document.getElementById("menu");
    const body = document.querySelector("body");


button.addEventListener("click", ()=>{
    setTimeout(()=>{
        modal.style.opacity ="1"
        menu.classList.add("active")
        button.style.display="none";
        close.style.display ="flex"
        // modal.style.display ="flex"
        body.style.overflow ="hidden"
        modal.style.visibility ="visible"
        
        
    },10)
})

close.addEventListener("click", ()=>{
    
    setTimeout(()=>{
        modal.style.opacity ="0"
        menu.classList.remove("active")
        button.style.display="flex";
        close.style.display ="none"
        body.style.overflow ="auto"
        modal.style.visibility ="hidden"
           

             
         },10)
    })

