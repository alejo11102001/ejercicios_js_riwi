// 1

// const name = 'diego';
// let age = parseInt(prompt("Ingresa tu edad"));
// let stature = 1.72;
// let city = 'Medellín';
// let pet = true;

// 2

// console.log(typeof name, typeof age, typeof stature, typeof city, typeof pet);

// 3

// let friendsFacebook = 500;
// let friendsInstragram = 200;
// let totalFriends = friendsFacebook + friendsInstragram;
// console.log(`You have ${totalFriends} friends`);

// 4

// if (age >= 18){
//     console.log("You can enter in the bar");
// } else{
//     console.warn("You can not enter in the bar");
// }

// 5

// let countProducts = parseInt(prompt("Ingresa la cantidad de productos a comprar"));

// if (countProducts >= 3){
//     console.log("Aplica descuento");
// } else{
//     console.warn("No aplica descuento");
// }

// 6

// let note = parseFloat(prompt("Ingrese su nota"));

// if (note >= 0 && note < 3){
//     console.error("Perdiste amiguito");
// } else if (note >= 3 && note < 4){
//     console.warn("Pasaste muy raspado");
// } else if (note >= 4 && note < 4.8){
//     console.log("Aprobaste con buena calificacion");
// } else if (note >= 4.8 && note <= 5){
//     console.log("Aprobaste con excelente calificacion");
// } else{
//     console.error("Nota invalida");
// }

// 7

// let trafficColor = prompt("Digite el color del semaforo").toLowerCase();

// if (trafficColor === "rojo"){
//     console.log("Detenerse");
// } else if (trafficColor === "amarillo"){
//     console.log("Esperar");
// } else if (trafficColor === "verde"){
//     console.log("Avance");
// } else{
//     console.error("Color invalido");
// }

// 8

// let ageTournament = parseInt(prompt("Digite su edad"));
// let resident = prompt("Digite su residencia").toLowerCase();

// if (ageTournament >= 15 && ageTournament <= 35 && resident == "colombia"){
//     console.log("Puedes participar en el torneo");
// } else{
//     console.log("No puedes participar en el torneo");
// }

// 9

// let account = parseInt(prompt("Digite el total de su cuenta"));
// let card = prompt("¿Tiene tarjeta de premium? (si/no)").toLowerCase();

// if (account < 10000){
//     console.log("Saldo insuficiente");
// } else if (account >= 10000 && account <= 1000000){
//     console.log("Saldo moderado");
// } else if (account > 1000000 || card === "si"){
//     console.log("Cliente preferencial");
// }

// 10

// let day = prompt("¿Qué día de la semana es hoy?").toLowerCase();
// let menu = "";

// switch (day) {
//     case "lunes":
//         menu = "Lunes: Sopa de verduras y arroz con pollo";
//         break;
//     case "martes":
//         menu = "Martes: Ensalada César y lasaña de carne";
//         break;
//     case "miércoles":
//         menu = "Miércoles: Sancocho y jugo natural";
//         break;
//     case "jueves":
//         menu = "Jueves: Frijoles con chicharrón y arroz";
//         break;
//     case "viernes":
//         menu = "Viernes: Pescado frito con patacones";
//         break;
//     case "sábado":
//         menu = "Sábado: Hamburguesa artesanal con papas fritas";
//         break;
//     case "domingo":
//         menu = "Domingo: Paella y postre sorpresa";
//         break;
//     default:
//         menu = "Día no válido. Por favor ingresa un día de la semana válido.";
// }
// console.log(menu);

// 11

// let session = prompt("¿Iniciaste sesion? (si/no)").toLowerCase();
// let reports = prompt("¿Tienes reportes negativos (si/no)?").toLowerCase();
// let ageUser = parseInt(prompt("Digita tu edad"));
// let membresy = prompt("¿Tienes membresia premium? (si/no)").toLowerCase();

// if (session === "si" && reports === "no" && (ageUser > 21 || membresy == "si")){
//     console.log("Puedes acceder a la oferta")
// } else{
//     console.log("No puedes acceder a la oferta")
// }

// 12

// let timeOfDay = prompt("¿Qué hora del día es? (mañana, tarde, noche)").toLowerCase();
// let weather = prompt("¿Cómo está el clima? (soleado, lluvioso, nublado)").toLowerCase();
// let hasUmbrella = prompt("¿Tienes paraguas? (si/no)").toLowerCase();

// if (weather === "soleado") {
//     console.log("Recomendación: Puedes caminar.");
// } else if (weather === "lluvioso" && hasUmbrella === "si") {
//     console.log("Recomendación: Puedes caminar, pero lleva el paraguas.");
// } else if (weather === "lluvioso" && hasUmbrella === "no") {
//     console.log("Recomendación: Toma el bus o espera que pare.");
// } else {
//     console.log("Recomendación: Según la hora (" + timeOfDay + "), podrías caminar o tomar el bus.");
// }

// 13

// let attempts = 0;
// const validUsername = "admin";
// const validPassword = "1234";
// let isAdmin = false;

// while (attempts < 3) {
//     let inputUsername = prompt("Ingrese su usuario:");
//     let inputPassword = prompt("Ingrese su contraseña:");

//     if (inputUsername === validUsername && inputPassword === validPassword) {
//         console.log("Acceso permitido");
//         break;
//     } else if (inputUsername === "admin") {
//             console.log("Bienvenido administrador, acceso permitido con error.");
//             isAdmin = true;
//             break;
//         }
//         attempts++;
//         if (attempts < 3) {
//             console.log(`Acceso denegado. Intentos restantes: ${3 - attempts}`);
//         }
// }

// if (attempts === 3 && !isAdmin) {
//     console.log("Acceso bloqueado por demasiados intentos.");
// }

// 14

// let validUsers = 0;

// for (let i = 1; i <= 5; i++) {
//     let username = prompt(`Ingrese el nombre del usuario ${i}:`).toLowerCase();
//     if (username.length > 3) {
//         validUsers++;
//         console.log(`${username} registrado correctamente.`);
//     } else {
//         console.log("Error: El nombre debe tener más de 3 caracteres.");
//     }
// }

// console.log(`Total de usuarios válidos registrados: ${validUsers}`);

// 15

// let passwords = ["abc123", "segura2021", "1234", "claveSegura9"];
// let numberRegex = /\d/;

// for (let i = 0; i < passwords.length; i++) {
//     let password = passwords[i];
//     if (password.length >= 8 && numberRegex.test(password)) {
//         console.log("Contraseña válida:", password);
//         break;
//     } else {
//         console.log(`La contraseña "${password}" no es válida. Debes cambiarla.`);
//     }
// }

// 16

// let rating;

// do {
//     rating = parseInt(prompt("Califica el servicio (1 a 5):"));
// } while (rating !== 5);

// console.log("¡Gracias por tu calificación perfecta!");

// 17

// const correctUsername = "usuario";
// const correctPassword = "clave123";
// let loginAttempts = 0;

// while (loginAttempts < 3) {
//     let inputUsername = prompt("Usuario:").toLowerCase();
//     let inputPassword = prompt("Contraseña:").toLowerCase();

//     if (inputUsername === correctUsername && inputPassword === correctPassword) {
//         console.log("Bienvenido");
//         break;
//     } else {
//         loginAttempts++;
//         if (loginAttempts < 3) {
//             console.log(`Datos incorrectos. Te quedan ${3 - loginAttempts} intentos.`);
//         }
//     }
// }

// if (loginAttempts === 3) {
//     console.log("Cuenta bloqueada.");
// }

// 18

// let menuOption;

// do {
//     menuOption = prompt("Menú:\n1. Ver perfil\n2. Editar perfil\n3. Cerrar sesión\n4. Salir");
//     switch (menuOption) {
//         case "1":
//             console.log("Perfil: Nombre Pedrito, Edad 25");
//             break;
//         case "2":
//             console.log("Editando perfil...");
//             break;
//         case "3":
//             console.log("Sesión cerrada.");
//             break;
//         case "4":
//             console.log("Saliendo del sistema...");
//             break;
//         default:
//             console.log("Opción no válida.");
//     }
// } while (menuOption !== "4");

// 19

// let totalAmount = 0;
// let userChoice;

// do {
//     userChoice = prompt("¿Qué desea hacer?\n1. Agregar producto\n2. Finalizar compra");
//     if (userChoice === "1") {
//         let productPrice = parseFloat(prompt("Ingrese el precio del producto:"));
//         totalAmount += productPrice;
//         console.log(`Producto agregado. Total actual: $${totalAmount}`);
//     }
// } while (userChoice !== "2");

// console.log(`Compra finalizada. Total a pagar: $${totalAmount}`);

// 20

// let totalGrades = 0;
// let atRiskStudents = 0;
// let highestGrade = 0;
// let lowestGrade = 5;

// for (let i = 1; i <= 5; i++) {
//     let grade = parseFloat(prompt(`Ingrese la nota del estudiante ${i}:`));
//     totalGrades += grade;

//     if (grade < 3) {
//         console.log(`Estudiante ${i} está en riesgo.`);
//         atRiskStudents++;
//     }

//     if (grade > highestGrade) highestGrade = grade;
//     if (grade < lowestGrade) lowestGrade = grade;
// }

// let averageGrade = totalGrades / 5;

// console.log(`Promedio general: ${averageGrade.toFixed(2)}`);
// console.log(`Estudiantes en riesgo: ${atRiskStudents}`);
// console.log(`Mayor nota: ${highestGrade}`);
// console.log(`Menor nota: ${lowestGrade}`);
