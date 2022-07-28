
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