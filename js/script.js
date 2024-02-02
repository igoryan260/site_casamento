/*slider*/
let slideIndex = 0;
showSlides();

/**************************slider casal*********************************** */
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 2 seconds
}

/**************************slider paroquia*********************************** */
let slideIndexParoquia = 0;

showSlidesParoquia();
function showSlidesParoquia() {
    let i;
    const slides = document.getElementsByClassName("slide_paroquia");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexParoquia++;

    if (slideIndexParoquia > slides.length) {
        slideIndexParoquia = 1;
    }

    slides[slideIndexParoquia - 1].style.display = "block";
    setTimeout(showSlidesParoquia, 4000); // Change slide every 2 seconds
}

