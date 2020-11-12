document.addEventListener("DOMContentLoaded", ()=>{

    const nav = document.querySelector("nav");
    const sectionOne = document.querySelector(".hero");
    const sections = Array.from(document.getElementsByTagName("section"));
    const nav_toggle_checkbox = document.getElementById("toggle-checkbox");

    const sectionOneOptions = {
     
      rootMargin: "-100% 0px 0px 0px",
     
    };
    const sectionOptions = {
     
      rootMargin: "0px",
      threshold: 0.2
     
    };
    
    const sectionObserver = new IntersectionObserver(function(
      entries,
      sectionObserver
    ) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.2) document.getElementById(`${entry.target.id}-link`).style.color = "";

        if (entry.isIntersecting) {
          //console.log(entry.target.id)
          if(entry.target.id == "about-section"){
            document.querySelector(".img-wrapper").style.transform = "translateX(0%)"
            document.querySelector(".main-content .text").style.transform = "translateX(0%)"
            document.querySelector(".card-icons").style.transform = "translateZ(60px) translate(10px,130px) rotateZ(-2deg)"
            
          }
          
          if(entry.target.id == "skills-section"){
              document.querySelectorAll(".skill-filter-item").forEach(item=>{
              item.style.transform = "translateX(0%)"
            })
          }
          
          if(entry.target.id == "portfolio-section"){
            document.querySelectorAll(".portfolio-item").forEach(item => {
                item.style.transform = "translateX(0%)"
              });
          }
          document.getElementById(`${entry.target.id}-link`).style.color = "";
          document.getElementById(`${entry.target.id}-link`).style.color = "#F6B21B";
          console.log(entry)
        } else {
          document.getElementById(`${entry.target.id}-link`).style.color = "";
        }
      });
    },
    sectionOptions);

    sections.forEach(section =>{
        sectionObserver.observe(section);
    })

    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
            nav.classList.remove("scrolled");  
            document.querySelector(".menulist span").style.backgroundColor = "#ffffff"
            document.querySelector(".scroll-up-button").classList.remove("scroll-up-pop");
        } else {
          if(!nav_toggle_checkbox.checked){
            document.querySelector(".scroll-up-button").classList.add("scroll-up-pop");
            nav.classList.add("scrolled"); 
            document.querySelector(".menulist span").style.backgroundColor = "#ffffff"
          }
          
          
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
    

    // let img_card = document.getElementById("card-img");
    // let img = document.querySelector("#card-img img");
    // console.log(img, img_card)

    // img.addEventListener("mousemove", e=> {
    //   let xAxis = (e.clientX-img_card.offsetLeft-img.offsetWidth/2-60)/5;
    //   let yAxis = (e.clientY-img_card.offsetTop-img.offsetWidth/2)/5 ;

    //   img_card.style.transform = `rotateY(${xAxis}deg) rotateX(${-1*yAxis}deg)`;
    // })

    let collapse_bar = document.getElementById("collapse-bar");
    let lateral_bar_icons = document.getElementById("lateral-bar-icons");
    let arrow = document.querySelector("#collapse-bar i");
    collapse_bar.addEventListener("click", e => {

      lateral_bar_icons.classList.toggle("collapse");
      arrow.classList.toggle("rotate-arrow-toggle");
      
    })


    nav_toggle_checkbox.addEventListener("change", ()=>{
      if(nav_toggle_checkbox.checked)collapse_bar.style.display = "none";
      else collapse_bar.style.display ="block"
        //document.querySelector(".menulist span").style.backgroundColor = "white"
        document.querySelector(".navbar-menu").classList.toggle("navbar-menu-collapse");
    })

    document.querySelectorAll(".navbar-menu li a").forEach(item => {
      item.addEventListener("click", e=>{
        nav.classList.add("scrolled");
        nav_toggle_checkbox.checked=false;
        collapse_bar.style.display ="block"
        document.querySelector(".navbar-menu").classList.remove("navbar-menu-collapse");
      })  

    })

    const projects_button = document.getElementById("go-to-projects");
    projects_button.addEventListener("click",e=>{
      window.location.href="#portfolio-section"
    })

})

