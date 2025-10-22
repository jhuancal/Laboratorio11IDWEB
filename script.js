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
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 5 !== 0) suma += i;
  }
  alert("Suma sin múltiplos de 5: " + suma);
}

function ejercicio8() {
  let opcion;
  do {
    opcion = parseInt(prompt("1. Promedio\n2. Edad\n3. Cajero\n4. Salir"));
    if (opcion === 1) ejercicio1();
    else if (opcion === 2) ejercicio2();
    else if (opcion === 3) ejercicio5();
  } while (opcion !== 4);
}

function ejercicio9() {
  let opcion;
  do {
    opcion = parseInt(prompt("1. Divisible entre 3\n2. Primo\n3. Par\n4. Salir"));
    if (opcion >= 1 && opcion <= 3) {
      let num = parseInt(prompt("Ingrese número"));
      if (opcion === 1) {
        if (num % 3 === 0) alert(num + " es divisible entre 3");
        else alert(num + " no es divisible entre 3");
      } else if (opcion === 2) {
        let esPrimo = true;
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            esPrimo = false;
            break;
          }
        }
        alert(num + (esPrimo ? " es primo" : " no es primo"));
      } else if (opcion === 3) {
        alert(num + (num % 2 === 0 ? " es par" : " no es par"));
      }
    }
  } while (opcion !== 4);
}

function ejercicio10() {
  let opcion;
  do {
    opcion = parseInt(prompt("1. Divisible entre 3\n2. Primo\n3. Par\n4. Impar\n5. Salir"));
    if (opcion >= 1 && opcion <= 4) {
      let num = parseInt(prompt("Ingrese número"));
      if (opcion === 1) {
        alert(num + (num % 3 === 0 ? " es divisible entre 3" : " no es divisible entre 3"));
      } else if (opcion === 2) {
        let esPrimo = true;
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            esPrimo = false;
            break;
          }
        }
        alert(num + (esPrimo ? " es primo" : " no es primo"));
      } else if (opcion === 3) {
        alert(num + (num % 2 === 0 ? " es par" : " no es par"));
      } else if (opcion === 4) {
        alert(num + (num % 2 !== 0 ? " es impar" : " no es impar"));
      }
    }
  } while (opcion !== 5);
}

function ejercicio11() {
  let opcion;
  do {
    opcion = parseInt(prompt("1. Opción A\n2. Opción B\n3. Salir"));
    if (opcion === 1) alert("Opción A ejecutada");
    else if (opcion === 2) alert("Opción B ejecutada");
  } while (opcion !== 3);
}

