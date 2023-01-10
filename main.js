// channge navbar on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ("window-scroll", window.scrollY > 0)
});


// opening and closing the frequently asked questions
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq=> {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon on each click
       const icon = faq.querySelector('.faq__icon i');
        if (icon.className === "bi bi-plus") {
            icon.className = "bi bi-dash-lg";
        } 
        else {
        
            icon.className ="bi bi-plus";
        }
       
    })
    
});

/*nav menu show */

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener("click", ()=>{
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

// close nav menu
const closenav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display ="inline-block";
}


closebtn.addEventListener('click', closenav)