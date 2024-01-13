const red = document.getElementsByClassName("redes");
const botones = document.getElementsByClassName("icono");
const botones2 = document.getElementsByClassName("contenedorIcono");
const redes = red[0];
const boton = botones[0];
const boton2 = botones2[0];

boton.addEventListener(("mouseover"),()=>{
    redes.classList.add("activo");
});
boton2.addEventListener(("mouseover"),()=>{
    redes.classList.add("activo");
});
boton.addEventListener("mouseout",()=>{
    redes.classList.remove("activo");
});
boton2.addEventListener("mouseout",()=>{
    redes.classList.remove("activo");
});