// Animation des sections au scroll
const sections =
document.querySelectorAll("section");

window.addEventListener("scroll" ,
    () => {
        sections.forEach(section => {
            const screenPosition =
window.innerHeight / 1.3;

            if(position <
screenPosition){

section.classList.add("visisble");
        }
    });
});

// Effet machine à écrire
const text = "Etudiant de l'EMIT";
let index = 0;

function typeWrite(){
    if(index < text.length){

document.getElementById("typing").innerHTML 
+= text.charAt(index);
        index++;
        setTimeout(typeWrite,100);
    }
}

typeWrite();

// Bouton retour en haut
const topbtn =
document.getElementById("topBtn");

window.onscroll = function(){
    if(document.body.scrollTop > 
300 ||
document.documentElement.scrollTop 
> 300){
        topBtn.style.display = 
"block";
    } else {
        topBtn.style.display = 
"none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}