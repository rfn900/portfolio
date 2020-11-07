document.addEventListener("DOMContentLoaded", ()=>{

    const nav = document.querySelector("nav");
    const sectionOne = document.querySelector(".hero");
    const sections = Array.from(document.getElementsByTagName("section"));
    
    const sectionOneOptions = {
     
      rootMargin: "-100% 0px 0px 0px",
     
    };
    const sectionOptions = {
     
      rootMargin: "0px",
      threshold: 0.5
     
    };
    
    const sectionObserver = new IntersectionObserver(function(
      entries,
      sectionObserver
    ) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id)
          if(entry.target.id == "about-section"){
            document.querySelector(".img-wrapper").style.transform = "translateX(0%)"
            document.querySelector(".main-content .text").style.transform = "translateX(0%)"
            document.querySelector(".card-icons").style.transform = "translateZ(60px) translate(-20px,130px) rotateZ(-2deg)"
          }
          //console.log(entry.target.id);
          document.getElementById(`${entry.target.id}-link`).style.color = "#F6B21B";
          //document.getElementById(`${entry.target.id}-link`).classList.add("active-menu-link");
        } else {
          document.getElementById(`${entry.target.id}-link`).style.color = "";

         // document.getElementById(`${entry.target.id}-link`).classList.remove("active-menu-link");
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
        
        } else {
                nav.classList.add("scrolled");      
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
    

    let img_card = document.getElementById("card-img");
    let img = document.querySelector("#card-img img");
    console.log(img, img_card)
    img.addEventListener("mousemove", e=> {
      let xAxis = (e.pageX-img_card.offsetLeft-img.offsetWidth/2)/5;
      let yAxis = (e.pageY-img_card.offsetTop-img.offsetHeight/2)/5 ;
      img_card.style.transform = `rotateY(${xAxis}deg) rotateX(${-1*yAxis}deg)`;
    })

    let collapse_bar = document.getElementById("collapse-bar");
    let lateral_bar_icons = document.getElementById("lateral-bar-icons");
    let arrow = document.querySelector("#collapse-bar i");
    collapse_bar.addEventListener("click", e => {

      lateral_bar_icons.classList.toggle("collapse");
      arrow.classList.toggle("rotate-arrow-toggle");
      
    })




})

