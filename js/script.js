document.addEventListener("DOMContentLoaded", () =>{

    const nav = document.querySelector("nav");

    window.onscroll = () => {
        let top = window.scrollY;
        
        if (top > 10) {
            nav.classList.add("scrolled")
        }else nav.classList.remove("scrolled")
    }

})