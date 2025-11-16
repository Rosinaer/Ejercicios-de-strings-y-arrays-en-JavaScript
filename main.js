// 1. Calcular el área de un rectángulo

function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

console.log(calcularAreaRectangulo(6, 3));

// 2. Contar palabras en una cadena

function contarPalabras(str) {
  // Quitamos espacios al inicio y al final
  str = str.trim();

  // Si la cadena está vacía, devolvemos 0
  if (str === "") return 0;

  let contador = 1;
  for (let i = 0; i < str.length; i++) {
    // Contamos espacios solo cuando hay una palabra después
    if (str[i] === " " && str[i + 1] !== " " && str[i + 1] !== undefined) {
      contador++;
    }
  }

  return contador;
}
let frase = "Hola qué tal";
console.log(
  `La frase ingresada es "${frase}" y tiene ${contarPalabras(frase)} palabras`
);

// 3. Contar vocales en una cadena

function contarVocales(str) {
  let contador = 0;
  const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  for (let i = 0; i < str.length; i++) {
    if (vocales.includes(str[i])) {
      contador++;
    }
  }
  return contador;
}

let frase1 = "Hola qué tal";
console.log(
  `La frase ingresada es "${frase1}" y tiene ${contarVocales(frase1)} vocales`
);

// 4. Encontrar el palíndromo

function esPalindromo(str) {
  // pasamos a minúsculas para evitar errores
  str = str.toLowerCase();

  // sacamos los espacios
  str = str.replace(/\s+/g, "");

  // Invertimos el string
  const invertido = str.split("").reverse().join("");

  // Comparamos el original con el invertido
  return str === invertido;
}

// Ejemplos
console.log(esPalindromo("neuquen"));
console.log(esPalindromo("Ana"));
console.log(esPalindromo("rallar"));
console.log(esPalindromo("hola"));

// 5. Crear un programa para convertir la edad de un perro a años humanos

function edadPerroAniosHumanos(edadPerro) {
  return edadPerro * 7;
}
console.log(`El perro tiene ${edadPerroAniosHumanos(5)} años humanos`); // Resultado: El perro tiene 35 años humanos

// 6. Convertir la primera letra de cada palabra en mayúscula

function convertirPrimeraLetraMayuscula(str) {
  const palabras = str.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] =
      palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
  }
  return palabras.join(" ");
}

let frase2 = "hola qué tal";
console.log(convertirPrimeraLetraMayuscula(frase2));

// 7. Generar los primeros N números de la sucesión de Fibonacci

function generarFibonacci(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n);
}

console.log(generarFibonacci(7));
console.log(generarFibonacci(9));
console.log(generarFibonacci(12));

// 8. Lista de Productos

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    stock: 15,
    categoria: "electrónica",
  },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
  { id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    stock: 20,
    categoria: "electrónica",
  },
  { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
productos.forEach((producto) =>
  console.log(`Artículo: ${producto.nombre}  $ ${producto.precio}`)
);

// 2. Usando map: Crear un array con solo los nombres de los productos
const productsNamesMap = productos.map((producto) => producto.nombre);
console.log(productsNamesMap);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
const electronicsBigStock = productos.filter(
  (producto) => producto.categoria === "electrónica" && producto.stock > 20
);
console.log(
  "Los artículos con stock mayor a 20 unidades son: ",
  electronicsBigStock
);

// 4. Usando find: Encontrar el producto con id 3
const producto3 = productos.find((producto) => producto.id === 3);
console.log("El producto con id 3 es: ", producto3);

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
const totalStockValue = productos.reduce((accumulator, producto) => {
  return accumulator + producto.precio * producto.stock;
}, 0);
console.log("El valor total del inventario es: $", totalStockValue);

// 9. Estudiantes y Calificaciones

const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
];

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
estudiantes.forEach((estudiante) =>
  console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`)
);

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
const studentsMap = estudiantes.map((estudiante) => {
  const suma = estudiante.calificaciones.reduce((acc, nota) => acc + nota, 0);
  const promedio = suma / estudiante.calificaciones.length;
  return {
    nombre: estudiante.nombre,
    promedio: promedio,
  };
});

console.log(studentsMap);

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
const bestGrades = studentsMap.filter((est) => est.promedio > 7.5);
console.log("Los alumnos con promedio mayor a 7.5 son: ", bestGrades);

// 4. Usando find: Encontrar estudiante llamado 'María'
const findStudent = estudiantes.find((student) => student.nombre === "María");
console.log(findStudent);

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
const ageMain =
  estudiantes.reduce((acum, stud) => acum + stud.edad, 0) / estudiantes.length;
console.log("El promedio de edad de los estudiantes es: ", ageMain, " años");

// 10. Películas
const peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    año: 1972,
    duracion: 175,
    genero: "drama",
    rating: 9.2,
  },
  {
    id: 2,
    titulo: "Pulp Fiction",
    año: 1994,
    duracion: 154,
    genero: "crimen",
    rating: 8.9,
  },
  {
    id: 3,
    titulo: "El Señor de los Anillos",
    año: 2001,
    duracion: 178,
    genero: "fantasía",
    rating: 8.8,
  },
  {
    id: 4,
    titulo: "Interestelar",
    año: 2014,
    duracion: 169,
    genero: "ciencia ficción",
    rating: 8.6,
  },
  {
    id: 5,
    titulo: "Parásitos",
    año: 2019,
    duracion: 132,
    genero: "drama",
    rating: 8.6,
  },
];

// 1. Usando forEach: Mostrar título y año de cada película
peliculas.forEach((movie) =>
  console.log(`Título: ${movie.titulo}, Año: ${movie.año} `)
);

// 2. Usando map: Crear array de títulos en mayúsculas
const titlesMap = peliculas.map((movie) => movie.titulo.toUpperCase());
console.log(titlesMap);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
const filteredBestDrama = peliculas.filter(
  (movie) => movie.genero === "drama" && movie.rating > 8.5
);
console.log("Los dramas con rating mayor a 8.5 son: ", filteredBestDrama);

// 4. Usando find: Encontrar película estrenada en 2014
const findMovie = peliculas.find((movie) => movie.año === 2014);
console.log(findMovie);

// 5. Usando reduce: Calcular la duración total de todas las películas
const moviesLength = peliculas.reduce(
  (accum, movie) => accum + movie.duracion,
  0
);
console.log(
  "La duración total de todas las peliculas es: ",
  moviesLength,
  " minutos"
);
