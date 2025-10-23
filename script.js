function ejercicio1() {
  let suma = 0;
  for (let i = 0; i < 5; i++) {
    let nota;
    do {
      nota = parseFloat(prompt("Ingrese nota entre 0 y 20"));
    } while (isNaN(nota) || nota < 0 || nota > 20);
    suma += nota;
  }
  alert("Promedio: " + (suma / 5));
}

function ejercicio2() {
  let edad = parseInt(prompt("Ingrese su edad"));
  if (edad < 12) alert("Niño");
  else if (edad <= 17) alert("Adolescente");
  else if (edad <= 59) alert("Adulto");
  else alert("Adulto mayor");
}

function ejercicio3() {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Ingrese número"));
    if (num % 2 === 0) pares++;
    else impares++;
  }
  alert("Pares: " + pares + "\nImpares: " + impares);
}

function ejercicio4() {
  let num = parseInt(prompt("Ingrese número"));
  let resultado = "";
  for (let i = 1; i <= 12; i++) {
    resultado += num + " x " + i + " = " + (num * i) + "\n";
  }
  alert(resultado);
}

function ejercicio5() {
  let monto = parseInt(prompt("Ingrese monto a retirar"));
  let billetes = [100, 50, 20, 10];
  let resultado = "";
  for (let i = 0; i < billetes.length; i++) {
    let cantidad = Math.floor(monto / billetes[i]);
    monto -= cantidad * billetes[i];
    resultado += billetes[i] + ": " + cantidad + "\n";
  }
  alert(resultado);
}

function ejercicio6() {
  let limite = parseInt(prompt("Ingrese número límite"));
  let resultado = "";
  for (let i = 2; i < limite; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) resultado += i + " ";
  }
  alert("Primos menores a " + limite + ": " + resultado);
}

function ejercicio7() {
  let limite = parseInt(prompt("Ingrese hasta que número quiere sumar"));
  let suma = 0;
  for (let i = 1; i <= limite; i++) {
    if (i % 5 !== 0) suma += i;
  }
  alert("Suma sin múltiplos de 5: " + suma);
}

function ejercicio8() {
  let opcion;
  do {
    opcion = parseInt(prompt("1. Calcular Area del Círculo\n2. Calcular Area del Rectangulo\n3. Salir"));
    if (opcion === 1) areaCirculo();
    else if (opcion === 2) areaRectangulo();
  } while (opcion !== 3);
}

function areaCirculo() {
  let radio = parseFloat(prompt("Ingrese el radio del círculo"));
  let area = Math.PI * radio * radio;
  alert("Área del círculo: " + area);
}

function areaRectangulo() {
  let base = parseFloat(prompt("Ingrese la base del rectángulo"));
  let altura = parseFloat(prompt("Ingrese la altura del rectángulo"));
  let area = base * altura;
  alert("Área del rectángulo: " + area);
}

function ejercicio9() {
  let numero = parseInt(prompt("Ingrese un número"));
  let texto = numero.toString();
  let n = texto.length;
  let digitos = [];

  for (let i = 0; i < n; i++) {
    digitos.push(parseInt(texto[i]));
  }

  let suma = 0;
  for (let i = 0; i < digitos.length; i++) {
    let potencia = 1;
    for (let j = 0; j < n; j++) {
      potencia *= digitos[i];
    }
    suma += potencia;
  }

  if (suma === numero) {
    alert(numero + " es un número Armstrong");
  } else {
    alert(numero + " no es un número Armstrong");
  }
}

function ejercicio10() {
  let opcion;
  do {
    opcion = parseInt(prompt("1. Calcular estadísticas de N notas\n2. Contar números pares e impares en un rango\n3. Generar una tabla de multiplicar\n4. Salir"));
    if (opcion === 1) {
      let cantidadNotas = parseInt(prompt("¿Cuantas notas ingresara?"));
      estadisticaNotas(cantidadNotas);
    }
    else if (opcion === 2) {
      paresImparesRango();
    }
    else if (opcion === 3) {
      let final = parseInt(prompt("¿Tabla de multiplicar del 1 hasta que número?"));
      tablaMultiplicar(final);
    }
  } while (opcion !== 4);
}

function tablaMultiplicar(hasta) {
  let num = parseInt(prompt("Ingrese número"));
  let resultado = "";
  for (let i = 1; i <= hasta; i++) {
    resultado += num + " x " + i + " = " + (num * i) + "\n";
  }
  alert(resultado);
}

function paresImparesRango() {
  let inicio = parseInt(prompt("Ingrese número inicial del rango"));
  let fin = parseInt(prompt("Ingrese número final del rango"));
  let pares = 0;
  let impares = 0;
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) pares++;
    else impares++;
  }
  alert("Pares: " + pares + "\nImpares: " + impares);
}

function estadisticaNotas(cantidadNotas) {
  const notas = [];
  for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseInt(prompt("Ingrese nota"));
    notas.push(nota)
  }
  let opcion;
  do {
    opcion = parseInt(prompt("Notas: " + notas 
      + "\n1. Promedio\n2. Valor Máximo\n3. Valor Mínimo\n4. Cantidad de pares e impares\n5. ¿Cuántos están por encima del promedio?\n6. Salir"));
    if (opcion === 1) promedio(notas);
    else if (opcion === 2) valorMaximo(notas);
    else if (opcion === 3) valorMinimo(notas);
    else if (opcion === 4) paresImparesArreglo(notas);
    else if (opcion === 5) mayoresAlPromedio(notas);
  } while (opcion !== 6);
}

function promedio(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  let resultado = suma / arreglo.length;
  alert("Promedio: " + resultado);
}

function valorMaximo(arreglo) {
  let max = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > max) {
      max = arreglo[i];
    }
  }
  alert("Valor máximo: " + max);
}

function valorMinimo(arreglo) {
  let min = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < min) {
      min = arreglo[i];
    }
  }
  alert("Valor mínimo: " + min);
}

function paresImparesArreglo(arreglo) {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) pares++;
    else impares++;
  }
  alert("Pares: " + pares + "\nImpares: " + impares);
}

function mayoresAlPromedio(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  let promedio = suma / arreglo.length;
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > promedio) {
      contador++;
    }
  }
  alert("Notas por encima del promedio: " + contador);
}

function ejercicio11() {
  let total = 0;
  let continuar;
  do {
    let precio = parseFloat(prompt("Ingrese precio"));
    total += precio;
    continuar = prompt("¿Desea continuar? (s/n)").toLowerCase();
  } while (continuar === "s");

  let descuento = 0;
  if (total > 50 && total < 100) descuento = 0.05;
  else if (total >= 100) descuento = 0.1;

  let totalFinal = total - (total * descuento);
  let mensaje = "Total: " + total + "\n";

  if (descuento === 0.1) mensaje += "Se aplica un descuento del 10%\n";
  else if (descuento === 0.05) mensaje += "Se aplica un descuento del 5%\n";
  else mensaje += "No aplica descuento\n";

  mensaje += "Total final: " + totalFinal;
  alert(mensaje);
}

function ejercicio12() {
  let presupuesto = parseFloat(prompt("Ingrese su presupuesto"));
  let total = 0;
  let continuar;
  let precio;

  do {
    precio = parseFloat(prompt("Ingrese precio del producto"));
    if (total + precio <= presupuesto) {
      total += precio;
    } else {
      alert("Este producto excede el presupuesto y no será considerado.");
    }
    continuar = prompt("¿Desea continuar? (s/n)").toLowerCase();
  } while (continuar === "s");

  let descuento = 0;
  if (total > 50 && total < 100) descuento = 0.05;
  else if (total >= 100) descuento = 0.1;

  let totalFinal = total - (total * descuento);
  let mensaje = "Total acumulado: " + total + "\n";

  if (descuento === 0.1) mensaje += "Se aplica un descuento del 10%\n";
  else if (descuento === 0.05) mensaje += "Se aplica un descuento del 5%\n";
  else mensaje += "No aplica descuento\n";

  mensaje += "Total final a pagar: " + totalFinal;
  alert(mensaje);
}


