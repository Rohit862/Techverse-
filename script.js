// TechVerse JavaScript Part 1
//Console Message 
console.log("Welcome to TechVerse");

//Hero Button 

const heroButton=document.querySelector(".hero button");
   if(heroButton){
    heroButton.addEventListener("click",function(){
        document.getElementById("services")
       .scrollIntoView({behavior:"smooth"});
    });
    
    //Login Popup
    
    const popup=document.getElementById("popup");
    const close=document.getElementById("close");
    
    setTimeout(function(){
        popup.style.display="flex";
    },5000);
    
    close.addEventListener("click",function(){
        popup.style.display="none";
    });
    
    
    //Read More Buttons
    
    const readButtons=document.querySelectorAll(".read-more-btn");
    readButtons.forEach(function(button){
        button.addEventListener("click",function(){
        const content=this.nextElementSibling;

if(content.style.display==="block"){

content.style.display="none";

this.innerHTML="Read More";

}

else{

content.style.display="block";

this.innerHTML="Read Less";

}

});

});
    
    // ==========================
// Contact Form Validation
// ==========================

const form =
document.getElementById("contactForm");

const nameInput =
document.getElementById("name");

const emailInput =
document.getElementById("email");

const passwordInput =
document.getElementById("password");

const messageInput =
document.getElementById("message");

form.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

nameInput.classList.remove("error","success");
emailInput.classList.remove("error","success");
passwordInput.classList.remove("error","success");
messageInput.classList.remove("error","success");

if(nameInput.value.trim()===""){

nameInput.classList.add("error");

valid=false;

}else{

nameInput.classList.add("success");

}

if(!emailInput.value.includes("@")){

emailInput.classList.add("error");

valid=false;

}else{

emailInput.classList.add("success");

}

if(passwordInput.value.length<6){

passwordInput.classList.add("error");

valid=false;

}else{

passwordInput.classList.add("success");

}

if(messageInput.value.trim()===""){

messageInput.classList.add("error");

valid=false;

}else{

messageInput.classList.add("success");

}

if(valid){

alert("Form Submitted Successfully!");

form.reset();

}

});
    
    
    // ==========================
// Gallery Popup
// ==========================

const galleryImages =
document.querySelectorAll(".gallery img");

const galleryPopup =
document.getElementById("galleryPopup");

const popupImage =
document.getElementById("popupImage");

const closeGallery =
document.getElementById("closeGallery");

galleryImages.forEach(function(image){

    image.addEventListener("click",function(){

        galleryPopup.style.display="flex";

        popupImage.src=this.src;

    });

});

closeGallery.addEventListener("click",function(){

    galleryPopup.style.display="none";

});

galleryPopup.addEventListener("click",function(e){

    if(e.target===galleryPopup){

        galleryPopup.style.display="none";

    }

});
    
  //Footer Year
  
  const copyright=document.getElementById("copyright");
  
  
 copyright.innerHTML=
 "©"+
 new Date().getFullYear()+
 "TechVerse | All Rights Reserved";
 
 // Hamburger Menu

const menuBtn=document.getElementById("menuBtn");

const navMenu=document.querySelector("nav ul");

menuBtn.addEventListener("click", function(){

    navMenu.classList.toggle("active");
});


// Close Menu After Click

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

    });

});

// Login Register Switch

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");

const registerLink = document.getElementById("registerLink");

const loginLink = document.getElementById("loginLink");

registerLink.addEventListener("click", function(e){

    e.preventDefault();

    loginForm.style.display="none";

    registerForm.style.display="block";

});

loginLink.addEventListener("click",function(e){

    e.preventDefault();

    registerForm.style.display="none";

    loginForm.style.display="block";
});
}

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}

else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"
});
});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function(){

    let currentSection = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");
        }
    });
});

// ==========================
// Skills Progress Animation
// ==========================

const progressBars =
document.querySelectorAll(".skill progress");

const skillSection =
document.querySelector(".skills");

let skillsAnimated = false;

window.addEventListener("scroll",function(){

if(skillsAnimated) return;

const sectionTop =
skillSection.offsetTop;

if(window.scrollY >
sectionTop-400){

skillsAnimated=true;

progressBars.forEach(function(bar){

const target =
bar.getAttribute("value");

bar.value=0;

let count=0;

const interval=setInterval(function(){

count++;

bar.value=count;

if(count>=target){

clearInterval(interval);

}

},20);

});

}

});

// ==========================
// Typing Effect
// ==========================

const typingText = document.getElementById("typing");

const words = [

"Learn HTML",

"Learn CSS",

"Learn JavaScript",

"Build Amazing Websites"

];

let wordIndex = 0;

let charIndex = 0;

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingText.innerHTML +=

        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.innerHTML =

        words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;

        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".count");

const counterSection =
document.querySelector(".counter");

let counterStarted = false;

window.addEventListener("scroll", function(){

    if(counterStarted) return;

    const sectionTop = counterSection.offsetTop;

    if(window.scrollY > sectionTop - 400){

        counterStarted = true;

        counters.forEach(function(counter){

            const target =
            Number(counter.dataset.target);

            let count = 0;

            const speed = target / 100;

            const updateCounter = function(){

                count += speed;

                if(count < target){

                    counter.innerHTML =
                    Math.floor(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerHTML = target + "+";

                }

            };

            updateCounter();
        });
    }
});

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode");
    
    localStorage.setItem(
"theme",
document.body.classList.contains("dark-mode")
? "dark"
: "light"
);

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";
    }
});

// Page Load Theme

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

    themeBtn.innerHTML="☀️";

}else{

    themeBtn.innerHTML="🌙";

}

// ==========================
// Loader
// ==========================

window.addEventListener("load",function(){

    const loader =
    document.getElementById("loader");

    setTimeout(function(){

        loader.style.display="none";

    },1000);
});

