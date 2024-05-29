let slideIndex = 0;

function criarFolhas(){
    let numeroFolhas = 50;

    for(let i = 0; i < numeroFolhas; i++){
        let folha = document.createElement("i");
        document.getElementById("leaves").append(folha);
    }
}

function mostrarSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    slides[slideIndex-1].style.display = "block";
    
    setTimeout(mostrarSlides, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
    criarFolhas();
    
    document.getElementById('container').style.display = 'none';

    let bv = document.getElementById("bv")
    bv.addEventListener('click', () => {
        bv.style.display = 'none';
        document.getElementById('container').style.display = 'block';
        document.getElementById('audio').play();
    })

    mostrarSlides();
})