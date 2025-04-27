function handleMenuBar() {
    const element = document.getElementById("nav-dropdown-menu-show");
    console.log(element);

    if (element) {
        console.log(element.classList.toggle("nav-dropdown"));
    }
}
