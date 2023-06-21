const elementos = document.querySelectorAll(".textoContenedor");
const caja = document.querySelector(".uno");
let lugar = 0; 
let cero = 1;
console.log(elementos);

elementos.forEach((elemento,indice)=>{
    elemento.addEventListener("mouseover",()=>{
        caja.classList.add("activo");
    });
    elemento.addEventListener("mouseout",()=>{
        caja.classList.remove("activo");
    });
    elemento.addEventListener("click",()=>{
        elementos[lugar].classList.remove("Activo");
        elementos[indice].classList.add("Activo");
        lugar=indice;

    })
})