const elemento = document.querySelectorAll(".column");
const salir = document.querySelector(".container");
let columna = 0;

elemento.forEach((element,indice) => {
    element.addEventListener("mouseover", ()=>{
        elemento[columna].classList.remove("activo");
        elemento[indice].classList.add("activo");
        columna=indice;
    });
});

salir.addEventListener("mouseout", ()=>{
    elemento[columna].classList.remove("activo");
});