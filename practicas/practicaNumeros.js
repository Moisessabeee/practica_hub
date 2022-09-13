/*let numero1;
let resultado;

numero1 = parseInt( prompt("Introdusca un numero"))
resultado = numero1 + 2; 

console.log(numero1)
console.log("El resultado de la suma es: "+ resultado);
*/
/*
let texto = "saludos";

console.log(texto.length)*/



// COMPLETANDO NUESTRA HISTORIA

/* Crea un Programa que le pida a los usuarios los siguientes datos: 

ADJETIVO-1
ANIMAL
VERBO-1
EXCLAMACION
VERBO-2
VERBO-3
MIEMBRO-DE-FAMILIA
VERBO-4
VERBO-5
ADJETIVO-2
COSA-1
COSA-2

Luego imprime un mensaje como el siguiente:

"El otro día, estaba realmente en problemas. Todo empezó cuando vi un ADJETIVO-1 ANIMAL VERBO-1 en el pasillo. 'EXCLAMACION!' Yo grité. Pero todo que podía pensar en hacer era VERBO-2 una y otra vez. Milagrosamente, eso hizo que se detuviera, pero no antes de que intentara VERBO-3 justo en frente de mi familia. Entonces, mi MIEMBRO-DE-FAMILIA corre a mi lado y comenzó a VERBO-4 con energía, toda mi familia nos miraba. Después de un par de minutos salí de la casa, ¡era hora de VERBO-5! Estaba preparado, usando mi ADJETIVO-2 COSA-1 y una COSA-2, nada podía detenerme."

reemplazando cada uno de los valores que te dió el usuario en su posicion correspondiente en el texto.

Ejemplo:
EXCLAMACIÓN = "Oh no"

texto salida:

... 'Oh no!' Yo grité...

Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado
*/


// Tu codigo Comienza Aqui
/*
let ADJETIVO1;
let ANIMAL;
let VERBO1;
let EXCLAMACION;
let VERBO2;
let VERBO3;
let MIEMBRODEFAMILIA;
let VERBO4;
let VERBO5;
let ADJETIVO2;
let COSA1;
let COSA2;

ADJETIVO1 = prompt("Escriba el ADJETIVO-1 ");
ANIMAL = prompt("Escriba el ANIMAL");
VERBO1 = prompt("Escriba el VERBO-1");
EXCLAMACION = prompt("Escriba el EXCLAMACION");
VERBO2 = prompt("Escriba el VERBO-2");
VERBO3 = prompt("Escriba el VERBO-3");
MIEMBRODEFAMILIA = prompt("Escriba el MIENBRO-DE-FAMILIA");
VERBO4 = prompt("Escriba el VERBO-4");
VERBO5 = prompt("Escriba el VERBO-5");
ADJETIVO2 = prompt("Escriba el ADJETIVO-2");
COSA1 = prompt("Escriba el COSA-1");
COSA2 = prompt("Escriba el COSA-2");

console.log("El otro día, estaba realmente en problemas. Todo empezó cuando vi un " +ADJETIVO1+" "+ANIMAL+ " "+VERBO1 + " en el pasillo. "+"'"+ EXCLAMACION + "!'"+" Yo grité. Pero todo que podía pensar en hacer era "+ VERBO2 +" una y otra vez. Milagrosamente, eso hizo que se detuviera, pero no antes de que intentara " +VERBO3+ " justo en frente de mi familia. Entonces, mi "  +MIEMBRODEFAMILIA+" corre a mi lado y comenzó a " + VERBO4 +" con energía, toda mi familia nos miraba. Después de un par de minutos salí de la casa, ¡era hora de " +VERBO5+"! Estaba preparado, usando mi " +ADJETIVO2+ " " +COSA1 + " y una " +COSA2+ ", nada podía detenerme.")
*/

// Cual es el tipo de triangulo?

/*Crea un programa que pregunte al usuario por las medidas de un triangulo. 

1. Imprime "triangulo Equilatero" si los 3 lados son iguales.
2. Imprime "triangulo isosceles" si dos de los lados son iguales.
3. Imprime "Triangulo escaleno" Si ninguno de los lados son iguales. 

Mejora tu programa tanto como el tiempo te lo permita.
Comparte un screenshot de tu programa funcionando por discord, no compartas tu codigo, solo los prints de tu resultado*/
/*
console.log("Este programa es para calcular las esquinas de los triangulo");

let triangulo_1 = parseInt(prompt("Escriba el primero numero") );
let triangulo_2 = parseInt(prompt("Escriba el primero numero") );
let triangulo_3 = parseInt(prompt("Escriba el primero numero") );

console.log(triangulo_1);
console.log(triangulo_2);
console.log(triangulo_3);

if (triangulo_1 == triangulo_2 && triangulo_1 == triangulo_3) {
 console.log("Es un triangulo Equilatero")
} else if (triangulo_1 == triangulo_2 || triangulo_1 == triangulo_3 || triangulo_2 == triangulo_3){
    console.log("Es un triangulo isosceles")
} else {
    console.log("Es un Triangulo escaleno")
}n


*/
console.log("Este program muestra todos los años desde su nacimiento")
let edad = parseInt(prompt("Indique su edad"));
i=1;
while(edad >= i){
 console.log(i);
 i ++;
}