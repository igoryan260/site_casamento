//logica implementação dos slides casal
let fotos = document.getElementsByClassName("slide_item");
let qtdeFotos = fotos.length;

let sliderTypes = {
    slide_3_fotos: () => {
        let slideItens = document.querySelector("#slideCasal");
        let fotos = slideItens.children

        if (fotos[0].className == "slide_item item_left") {
            fotos[0].className = "slide_item item_right";
            fotos[1].className = "slide_item item_left";
            fotos[2].className = "slide_item item_center";
        } else if (fotos[0].className == "slide_item item_right") {
            fotos[2].className = "slide_item item_left";
            fotos[0].className = "slide_item item_center";
            fotos[1].className = "slide_item item_right";
        } else if (fotos[0].className == "slide_item item_center") {
            fotos[2].className = "slide_item item_right"
            fotos[0].className = "slide_item item_left";
            fotos[1].className = "slide_item item_center";
        }
    }
};


let iniciarSlideCasal = () => {
    if (qtdeFotos % 2 != 0 && qtdeFotos == 3) {
        sliderTypes.slide_3_fotos();
    }
};

let intervalIniciarSlideCasal = setInterval(
    iniciarSlideCasal,
    5000
);

/*Slider Paroquia*/
/* 
let iniciarSlideParoquia = () => {
    
};

let intervalIniciarSlideParoquia = setInterval(
    iniciarSlideParoquia,
    5000
);
*/
