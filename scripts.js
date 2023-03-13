// ************************************ Ejercicios for

// Saludar 100 veces utilizando for.
function greetFunction() {
  console.clear()
  // alert("Saludar 100 veces utilizando for.");

  for (let greet = 0; greet <= 100; greet++) {
  console.log("Saludo n°" + greet + ".")
  };
};

// Mostrar los números del 5 al 25 utilizando for.
function showNumbersFive() {
  console.clear()
  let TwFive = 25;

  for (let five = 5; five <= TwFive; five++) {
    console.log(five)
  };
};

// Mostrar el cuadrado de los números que van desde el 2 al 10. (mostrar el valor de 2 al cuadrado 2x2, 3 al cuadrado 3x3, cuatro al cuadrado 4x4... hasta 10 al cuadrado 10x10).
function squared() {
  console.clear()
  let acc = 2;

  for (let number = 2; number <= 10; number++) {
    console.log(number ** acc)
  };
};

// Mostrar los números del 0 al 1000, de 5 en 5, es decir: 0, 5, 10, 15, 20, 25....
function countByFive() {
  console.clear()
  let end = 1000;

  for (let start = 0; start <= end; start += 5) {
    console.log(start)
  };
};

// Mostrar los números del 100 al 0, en orden decreciente.
function thToZero() {
  console.clear()
  let end = 0;

  for (let tho = 100; tho >= end; tho--) {
    console.log(tho)
  };
};

// Mostrar los números del 10 al 50 que sean divisibles por 3.
function divisibleByThree() {
  console.clear()
  let end = 50;

  for (start = 10; start <= end; start++) {
    if (start % 3 == 0) {
      console.log(start)
    };
  };
};

// Construir una cadena que tenga los números del 1 al 10, uno detrás del otro (12345678910) y luego mostrarla.
function arrayNumbers() {
  console.clear()
  let end = 10;
  let array = [];

  for (start = 1; start <= end; start++) {
    array.push(start)
  };
  console.log(array)
};

// Construir una cadena como en el ejercicio anterior, pero que tenga los números del 0 al 9, pero solamente aquellos que son pares. Luego mostrar la cadena.
function arrayNumbersPair() {
  console.clear()
  let end = 9;
  let array = [];

  for (start = 0; start <= end; start++) {
    if (start % 2 == 0) {
      array.push(start)
    };
  };
  console.log(array)
};

// Construir la cadena del ejercicio anterior, pero colocando todos los números separados por un guión (2-4-6-8). Luego mostrar esa cadena.
function arrayNumbersPairScript() {
  console.clear()
  let end = 9;
  let array = [];

  for (start = 0; start <= end; start++) {
    if (start % 2 == 0) {
      array.push(start)
    };
  };
  console.log(array.join('-'))
};

// Multiplicar por 7 un número creciente, comenzando por el 1, (1x7, 2x7, 3x7...) y mostrar el resultado de esa multiplicación. Parar cuando el valor valor de la multiplicación sea mayor que 1000.
function multiplyBySeven() {
  console.clear()
  let start = 1;
  let end = 1000;

  for (seven = 7; start <= end; start++) {
    console.log(start * 7)
  };
};

// ************************************ Ejercicios While y do-While

//Multiplicar un número por él mismo (el cuadrado) hasta que el resultado supere 349.
function multiplyUntil() {
  console.clear()
  let number = prompt("Ingresa un número:")
  let end = 349

  do {
    number = number ** number;
    console.log(number)
  } while (number < end);
}

// Fibonacci
// Crear un programa que genere una sucesión de Fibonacci. Ej:0,1,1,2,3,5,8,13,...

function Fibonacci(){
  let inicio = 0;
  let final = 20;
  let fibonacci = [];
  
  do {
    inicio++;
    fibonacci.push(inicio);
  } while (inicio <= final);
  console.log(inicio)
}



/*/
Entradas:
Valor de a y b. Array vacio de resultado.

Desarrollo:
Sumar a más b, al resultado sumarle b.
Al resultado de b más b

Salida:
Sucesión Fibonacci dentro de array "resultado"
/*/

// Pedirle al usuario que ingrese un numero hasta que acierte con el número pensado.
function askForANumber() {
  let number = parseInt(prompt("Ingresa un número del 1 al 1000:"));
  let limit = 1000;
  console.clear();

  if (number > 1000 || isNaN(number)) {
    alert("Ingresa un número válido")
  } else {
    for (start = 0; start <= limit; start++) {
      if (number == start) {
        alert(`Tu número es: ${start}`) 
      }
    }
  }
}

// 

function average() {
  const LIMITE_ALUMNOS = 3;
  const LIMITE_TRIMESTRES = 3;
  const arrAlumnos = [];
  let textAux = '';
  let nombreAlumno = '';
  let trimestreActual = 1;
  let promedioCurso = 0;
  let alumnoActual = 1;
  let notaAlumno = 0;

  alert(
    'Vamos a ingresar 3 alumnos como maximo y por cada alumno, las 3 notas correspondientes a cada trimestre'
  );

  // Recorremos el listado de alumnos e ingresamos cada uno con sus notas
  do {
    switch (alumnoActual) {
      case 1:
        textAux = 'primer';
        break;
      case 2:
        textAux = 'segundo';
        break;
      case 3:
        textAux = 'tercer';
        break;
    }
    nombreAlumno = prompt(`Ingrese el nombre del ${textAux} alumno`);

    // Ingresamos la nota del alumno correspondiente a cada trimestre
    do {
      switch (trimestreActual) {
        case 1:
          textAux = 'primer';
          break;
        case 2:
          textAux = 'segunda';
          break;
        case 3:
          textAux = 'tercer';
          break;
      }
      notaAlumno += parseInt(
        prompt(`Ingrese la ${textAux} nota de ${nombreAlumno}`)
      );
      trimestreActual = trimestreActual + 1;
    } while (trimestreActual <= LIMITE_TRIMESTRES);
    notaAlumno = parseFloat(notaAlumno / LIMITE_TRIMESTRES);

    
    if (notaAlumno >= 7) {
      estado = 'Aprobado';
      console.log(`${nombreAlumno} está aprobado.`)
    } else{
      estado = 'Desaprobado'
      console.log(`${nombreAlumno} está desaprobado.`)
    };
    arrAlumnos.push({
      Alumno: nombreAlumno,
      Promedio: notaAlumno,
      Estado: estado,
    });
    console.table(arrAlumnos);

    alumnoActual = alumnoActual + 1;
    notaAlumno = 0;
    trimestreActual = 1;

  } while (alumnoActual <= LIMITE_ALUMNOS);

  arrAlumnos.forEach((alumno) => {
    promedioCurso += alumno.Promedio;
  });
  promedioCurso = parseInt(promedioCurso / LIMITE_ALUMNOS);
  arrAlumnos.push({
    PromedioCurso: promedioCurso
  });
  console.table(arrAlumnos);

  console.log(promedioCurso);

  alert(`Resultado:promedio del curso: ${promedioCurso}`);
}
