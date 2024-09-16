


var tl = gsap.timeline()


tl.to(".trainImage",{
  opacity: 1,
  duration:1,
  scale:1.2
})

tl.fromTo(".rsmobile,.rslaptop", 
  { height: 0 }, // Starting height
  { height: "250px", duration: 5 } // Ending height with increased duration
);

tl.to(".mdiv",{
  y:-700,
  duration:1,
  opacity:0
})



setTimeout(() => {
   var page0 = document.querySelector(".page0")
   var page1 = document.querySelector(".page1")
   var page2 = document.querySelector(".page2")
   var page3 = document.querySelector(".page3")
   var page4 = document.querySelector(".page4")
   var pageextra = document.querySelector(".pageextra")
   page0.style.display="none"
   page1.style.display="block"
   page2.style.display="block"
  //  page3.style.display="block"
   page4.style.display="block"
   const isMobile = window.matchMedia("(max-width: 600px)").matches;
            console.log(isMobile)
            if (!isMobile) {
              console.log("comp")
              page3.style.display="block"
          } else {
              console.log("mob")
              pageextra.style.display="block"
          }
     
}, 7000);

tl.from(".page1",{
  scale:0
})

tl.from(".textlogo",{
  y:-700,
  duration:0.4,
  opacity:0
})

tl.from(".home",{
  y:-700,
  duration:0.4,
  opacity:0
})

tl.from(".about",{
  y:-700,
  duration:0.4,
  opacity:0
})

tl.from(".use",{
  y:-700,
  duration:0.4,
  opacity:0
})

tl.from(".developer",{
  y:-700,
  duration:0.4,
  opacity:0
})

tl.from(".left",{
  // x:-1000
  opacity:0,
  scale:0
})

tl.from(".left-text",{
  scale:0
})

tl.from(".locationImage",{
  opacity:0,
  x:1000,
  duration:1,
  rotateY:720
})

const imageContainer = document.querySelector('.locationImage');

        document.addEventListener('mousemove', (event) => {
            const { clientX: x, clientY: y } = event;
            const { innerWidth: width, innerHeight: height } = window;

            const centerX = width / 2;
            const centerY = height / 2;

            // Calculate rotation values based on mouse position
            const rotateY = ((x - centerX) / centerX) * 30; // Rotate around Y-axis
            const rotateX = -((y - centerY) / centerY) * 30; // Rotate around X-axis

            // Apply the transformation
            imageContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });


      


     

     
         