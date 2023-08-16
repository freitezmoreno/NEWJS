alert("Bienvenido a la calculadora MICH");

let opcion = prompt("Escriba la operacion: sumar, restar, dividir, multiplicar, para salir escriba ESC");

while (opcion != "ESC") {

if (opcion == "sumar") {
    
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    let suma = num1 + num2;
    alert("La suma de los dos números es " + suma);
}
else if (opcion == "restar") {
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    let resta = num1 - num2;
    alert("La resta de los dos números es " + resta);
}
else if (opcion == "dividir") {
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    let division = num1 / num2;
    alert("La division de los dos números es " + division);
}
else if (opcion == "multiplicar") {
    let num1 = parseInt(prompt("Introduce el primer número entero"));
    let num2 = parseInt(prompt("Introduce el segundo número entero"));
    let multiplicacion = num1 * num2;
    alert("La multiplicacion de los dos números es " + multiplicacion);
}
else {
    alert("No es válida esta opción");
}

opcion = prompt("Escriba la operacion que desea: sumar, restar, dividir, multiplicar, para salir escriba ESC");

}

alert("¡Muchas gracias por calcular con MICH!");