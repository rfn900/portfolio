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
    img.addEventListener("mousemove", e=> {
      let xAxis = (e.pageX-img_card.offsetLeft-img_card.offsetWidth/2)/5;
      let yAxis = (e.pageY-img_card.offsetTop-img_card.offsetHeight/2)/5 ;
      img_card.style.transform = `rotateY(${xAxis}deg) rotateX(${-1*yAxis}deg)`;
      console.log(-1*xAxis,yAxis)
    })






})

