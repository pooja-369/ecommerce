
document.getElementById("button").addEventListener("click",()=>{
    document.querySelector(".login").style.display ="block";
    document.querySelector(".signup").style.display="none";
});

document.getElementById("signup").addEventListener("click",()=>{
    document.querySelector(".login").style.display="none";
    document.querySelector(".signup").style.display="block";
});

document.getElementById("loginup").addEventListener("click",()=>{
    document.querySelector(".login").style.display ="block";
    document.querySelector(".signup").style.display="none";
});

document.getElementById("close").addEventListener("click",()=>{
    document.querySelector(".login").style.display="none";
});

document.getElementById("close2").addEventListener("click",()=>{
    document.querySelector(".signup").style.display="none";
});


// navbar scrolling 
const header = document.querySelector('header')
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// owl carousal

$('.owls').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
           items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


document.getElementById("visible").addEventListener("click",()=>{
    document.querySelector(".responsive-navbar").style.display="inline-block";
    document.querySelector(".responsive-navbar").style.visibility="visible";
});

document.getElementById("hidden").addEventListener("click",()=>{
    document.querySelector(".responsive-navbar").style.display="none";
    document.querySelector(".responsive-navbar").style.visibility="hidden";
});