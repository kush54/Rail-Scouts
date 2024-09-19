



var tl = gsap.timeline()





tl.to(".trainImage",{
  opacity: 1,
  duration:0.5,
  scale:1.2
})

tl.fromTo(".rsmobile, .rslaptop", 
  { height: 0 }, // Starting height
  { height: "550px", duration: 2 } // Ending height with decreased duration
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
   var page5 = document.querySelector(".tech-stack")
   var pageextra = document.querySelector(".pageextra")
   page0.style.display="none"
   page1.style.display="block"
   page2.style.display="block"
   page3.style.display="block"
   page4.style.display="block"
   page5.style.display="block"

   const isMobile = window.matchMedia("(max-width: 600px)").matches;
            console.log(isMobile)
            if (!isMobile) {
              console.log("comp")
              page3.style.display="block"
          } else {
              console.log("mob")
              page3.style.display="none"

              pageextra.style.display="block"
          }
     
}, 3000);

tl.from(".page1",{
  scale:0,
  delay:-0.5
})

tl.from(".textlogo",{
  y:-700,
  duration:0.4,
  opacity:0
})

tl.from(".home",{
  y:-700,
  duration:0.2,
  opacity:0
})

tl.from(".about",{
  y:-700,
  duration:0.2,
  opacity:0
})

tl.from(".use",{
  y:-700,
  duration:0.2,
  opacity:0
})


tl.from(".developer",{
  y:-700,
  duration:0.2,
  opacity:0
})

tl.from(".left",{
  opacity:0,
  scale:0
})

tl.from(".left-text",{
  scale:0
})

tl.from(".locationImage",{
  opacity:0,
  x:-400,
})

     
document.querySelector('.developer-container').addEventListener('click', () => {
  window.scrollTo({
      top: document.querySelector('.developer').offsetTop,
      behavior: 'smooth'
  });
});



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circles");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
  "#fff"
];

// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
//   circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX -10;
  coords.y = e.clientY - 10;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();





var cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",function (e) {
  blurcursor.style.left = e.x-150+"px"
  blurcursor.style.top = e.y-150+"px"
})

