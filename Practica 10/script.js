const element = document.getElementsByClassName("titulo");

element[0].addEventListener(("mouseover"),()=>{
  element[0].classList.add("activo");
});
element[0].addEventListener(("mouseout"),()=>{
  element[0].classList.remove("activo");
});


