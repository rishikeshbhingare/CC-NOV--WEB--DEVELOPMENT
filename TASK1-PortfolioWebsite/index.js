

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle('active');
})

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click" , (e) => {
  const p_btn_clicked = e.target;
  
  if (!p_btn_clicked.classList.contains("p-btn")) return;

  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"))
  
  p_btn_clicked.classList.add("p-btn-active");
   
  const btn_num = p_btn_clicked.dataset.btnNum;
  //  console.log(btn_Num);

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);


  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});


// swiper 
 new Swiper(".mySwiper-container", {
 slidePerView: 3,
 spaceBeteen: 30,
 autoplay: {
  delay:2500,
  disableOnInteraction:false,
 },
 pagination:{
  el: ".swiper-pagination",
  clickable: true,
 },
});


const myJsmedia = () => {
  if(widthSize.matches){
     new Swiper(".mySwiper", {
      slidePerView: 1,
      spaceBeteen: 30,
      
      
     });
  }else{
   new Swiper(".mySwiper", {
      slidePerView: 2,
      spaceBeteen: 30,
      
     });
  }
}
// tabbeed


const widthSize = window.matchMedia("(max-width:780px)");

myJsmedia(widthSize);

widthSize.addEventListener('change', myJsmedia);

// scroll btn
const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

 const scrollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);
const scrollTop = () => {
 heroSection.scrollIntoView({ behavior: "smooth" });
}
scroollElement.addEventListener("click", scrollTop);



const counterNum = document.querySelectorAll(".counter-numbers");
    
    const speed = 200;

    counterNum.forEach((curElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curElem.dataset.numbers);
            
            const initialNum = parseInt(curElem.innerText);
            
            const incrementNumber = Math.trunc(targetNumber / speed);
            
          

            if (initialNum < targetNumber) {
                curElem.innerText = `${initialNum + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } 

        };
        updateNumber();
    });




const imgRef = document.querySelector("img[data-src]");

 const lazyImg = () =>{
  const [entry] = entries;
  if(!entry.isInersecting) return;
  entry.target.src = imgRef.dataset.src;

 }
const imgObserver = new IntersectionObserver(lazyImg , {
  root: null,
  threshold: 0,
});

imgObserver.observe(imgRef);




