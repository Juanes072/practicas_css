const elements = document.querySelectorAll('.puntos');
let place = 1;

elements.forEach((element,indice)=>{
    element.addEventListener("click",()=>{
        elements[place].classList.remove("activo");
        elements[indice].classList.add("activo");
        place=indice;
    })
    
})
const pestaña = document.getElementsByClassName("segundo");
const submit = document.querySelector("button");
const valor = document.getElementById("number");
submit.addEventListener("click",()=>{
    valor.textContent=1+place;
    pestaña[0].style.zIndex = 1;
})
