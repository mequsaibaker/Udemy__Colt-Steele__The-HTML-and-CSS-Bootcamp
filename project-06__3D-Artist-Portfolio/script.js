const menu_icon = document.querySelector("div.menu-icon");
const menu = document.querySelector("aside")


menu_icon.addEventListener("click", () => {
    const items = menu_icon.children;
    items[0].classList.toggle("animate-1")
    items[1].classList.toggle("animate-2")
    items[2].classList.toggle("animate-3")
    menu.classList.toggle("aside-animate")
})