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
          console.log(entry.target.id);
          document.getElementById(`${entry.target.id}-link`).style.color = "#F6B21B";
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
        
        } else {
                nav.classList.add("scrolled");      
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
    
})

