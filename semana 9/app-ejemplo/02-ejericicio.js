//suma 
let monitor = 100;
let cpu = 120;
let memoria = 350;

let precio_total= monitor + cpu + memoria;
console.log("el precio total es: ", precio_total);

let adicionales =50 + 10;
console.log("el precio de los adicionales es: ", adicionales);

//resta

let descuento = 25;
let preciocondescuento = precio_total - descuento;
console.log("el precio con descuento es: ", preciocondescuento);

//dividir en cuotas
let cuotas = preciocondescuento/2;
console.log("el precio en 2 cuotas es: ", cuotas);

//multiplicar
let preciofinal = precio_total * 3
console.log("precio por 3 unidades: ", preciofinal);

//++variable

let numero = 10;
console.log(numero++);
console.log(++numero);

//cambio de tipo de datos
let dato1="20";
let dato2="10";
let suma = parseInt(dato1) + parseInt(dato2);
console.log("la suma de los datos es: ", suma);

let anio ="2025";
console.log("el año es: ", anio.toString(anio));