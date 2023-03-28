let closed = false
const menuClick = () => {
    const button = document.getElementById("button");
    const modal =document.getElementById("modal")
    button.setAttribute("src", "./assets/images/icon-menu" + (closed ? "" : "-close") + ".svg")
    const menu = document.getElementById("menu")
    !closed ? modal.style.display ="flex": modal.style.display ="none"
    console.log(button);
    menu.style.transition="transform 2.5s linear"
    !closed ? menu.style.transform="translateX(0)": menu.style.transform="translateX(100%)"
    closed = !closed
}