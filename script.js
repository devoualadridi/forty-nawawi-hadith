/* ==========================================
   PROFILE DRAWER
========================================== */

const profileBtn = document.getElementById("profileBtn");
const drawer = document.getElementById("drawer");

profileBtn.addEventListener("click", () => {

    drawer.classList.toggle("active");

});

/* ==========================================
   CLOSE DRAWER OUTSIDE CLICK
========================================== */

document.addEventListener("click", function(e){

    if(
        !drawer.contains(e.target) &&
        !profileBtn.contains(e.target)
    ){

        drawer.classList.remove("active");

    }

});

/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.className="fa-solid fa-sun";

    }else{

        icon.className="fa-solid fa-moon";

    }

});

/* ==========================================
   MOUSE LIGHT
========================================== */

const mouseLight=document.querySelector(".mouse-light");

document.addEventListener("mousemove",(e)=>{

    mouseLight.style.left=e.clientX+"px";

    mouseLight.style.top=e.clientY+"px";

});

/* ==========================================
   COUNTER
========================================== */

const counters=document.querySelectorAll(".counter");

let started=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    if(!stats) return;

    const top=stats.offsetTop-500;

    if(window.scrollY>top && !started){

        counters.forEach(counter=>{

            let target=+counter.dataset.target;

            let count=0;

            let speed=target/100;

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target;

                }

            }

            update();

        });

        started=true;

    }

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals=document.querySelectorAll(

".card,.why-card,.step,.cta-box,.section-title"

);

const reveal=()=>{

    reveals.forEach(item=>{

        const windowHeight=window.innerHeight;

        const top=item.getBoundingClientRect().top;

        if(top<windowHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(70px)";

    item.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

/* ==========================================
   NAVBAR SCROLL
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(8,28,21,.95)";

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background="rgba(8,28,21,.55)";

        header.style.boxShadow="none";

    }

});

/* ==========================================
   HERO FLOAT
========================================== */

const heroIcon=document.querySelector(".hero-icon");

window.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.clientX)/45;

    let y=(window.innerHeight/2-e.clientY)/45;

    heroIcon.style.transform=
    `translate(-50%,-50%) rotate(${x}deg) translate(${x}px,${y}px)`;

});

/* ==========================================
   SMOOTH BUTTON EFFECT
========================================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================
   LOADING EFFECT
========================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";

        document.body.style.opacity="1";

    },100);

});