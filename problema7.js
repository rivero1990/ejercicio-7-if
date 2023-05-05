let fraseRegistrada = prompt("Ingrese una frase");
let palabraRegistrada = prompt("Ingrese una palabra a buscar");

let fraseIngresada = fraseRegistrada;
let palabraIngresada = palabraRegistrada;


if (fraseIngresada.includes(palabraRegistrada)) {
    document.write("La palabra " + " " + palabraRegistrada + " se encuentra en la frase");
}

else {
    document.write("La palabra ingresada no se encuentra en la frase");
}