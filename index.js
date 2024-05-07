
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));


if (num1 === num2 && num2 === num3) {

    console.log("Los números ingresados son iguales.");

} else {

    let mayor, centro, menor;
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        centro = Math.max(num2, num3);
        menor = Math.min(num2, num3);
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        centro = Math.max(num1, num3);
        menor = Math.min(num1, num3);
    } else {
        mayor = num3;
        centro = Math.max(num1, num2);
        menor = Math.min(num1, num2);
    }

    console.log(`Ordenados de mayor a menor: ${mayor}, ${centro}, ${menor}.`);
    console.log(`Ordenados de menor a mayor: ${menor}, ${centro}, ${mayor}.`);
}
