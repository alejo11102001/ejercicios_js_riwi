function logStyled(text, style = "default") {
    const styles = {
        default: "color: white;",
        title: "color: orange; font-weight: bold; font-size: 14px;",
        option: "color: black;",
        success: "color: green; font-weight: bold;",
        warning: "color: red; font-weight: bold;",
        state: "color: blue; font-weight: bold;",
        item: "color: purple;",
        line: "color: gray;"
    };
    console.log(`%c${text}`, styles[style] || styles.default);
}

let life = 5;
let members = 3;
let bag = [];

function state() {
    logStyled("ESTADO ACTUAL", "state");
    logStyled(`Vida: ${life}`, "warning");
    logStyled(`Miembros: ${members}`, "success");
    logStyled(`Mochila: ${bag.join(", ")}`, "item");
    logStyled("===============================", "line");
}

// BUSCAR COMIDA
logStyled("ESCENA: BÚSQUEDA DE COMIDA", "title");
logStyled("El hambre aprieta y la sed comienza a nublar el juicio del grupo...");
logStyled("Opción A: Ir al supermercado abandonado", "option");
logStyled("Opción B: Robar a un sobreviviente", "option");

let eatDecision = prompt("Escoje una opción").toLowerCase();
if (eatDecision === "a") {
    logStyled("Encuentras comida y agua. SE AGREGAN A TU MOCHILA", "item");
    logStyled("Encuentro leve con un saqueador. PIERDES UNA VIDA", "warning");
    bag.push("comida", "agua");
    life--;
} else if (eatDecision === "b") {
    logStyled("Obtienes una linterna. SE AGREGA A TU MOCHILA", "item");
    logStyled("Represalia. PIERDES UN MIEMBRO", "warning");
    bag.push("linterna");
    members--;
} else {
    logStyled("Opción inválida", "warning");
}
state();

// REFUGIO
logStyled("ESCENA: BUSCAR REFUGIO", "title");
logStyled("El grupo necesita un lugar seguro donde recuperarse...");
logStyled("Opción A: Farmacia", "option");
logStyled("Opción B: Estación de buses", "option");
logStyled("Opción C: Tienda de campaña abandonada", "option");

let shelterDecision = prompt("Escoje una opción:").toLowerCase();
if (shelterDecision === "a") {
    logStyled("Encuentras botiquín. SE AGREGA A LA MOCHILA", "item");
    logStyled("Descansas. GANAS UNA VIDA", "success");
    bag.push("botiquin");
    life++;
} else if (shelterDecision === "b") {
    logStyled("Hay escombros. PIERDES UNA VIDA", "warning");
    life--;
} else if (shelterDecision === "c") {
    logStyled("Encuentras batería, pero hay radiación. PIERDES UNA VIDA", "warning");
    bag.push("bateria-portatil");
    life--;
} else {
    logStyled("Opción inválida", "warning");
}
state();

// AYUDAR O IGNORAR
logStyled("ESCENA: AYUDAR O IGNORAR", "title");
logStyled("Escuchan gritos desde un callejón. ¿Qué harán?");
logStyled("Opción A: Ayudar a la familia", "option");
logStyled("Opción B: Ignorar", "option");
logStyled("Opción C: Distraer y liberar a distancia", "option");
logStyled("Opción D: Robar a la familia", "option");

let helpDecision = prompt("Escoje una opción:").toLowerCase();
if (helpDecision === "a") {
    logStyled("Ganas un miembro agradecido y un mapa", "item");
    bag.push("mapa");
    members++;
} else if (helpDecision === "b") {
    logStyled("Ignoras y pierdes un miembro", "warning");
    members--;
} else if (helpDecision === "c") {
    logStyled("Obtienes linterna, pero pierdes una vida", "warning");
    bag.push("linterna");
    life--;
} else if (helpDecision === "d") {
    logStyled("Robas comida, pero pierdes 2 miembros", "warning");
    bag.push("comida");
    members -= 2;
} else {
    logStyled("Opción inválida", "warning");
}
state();

// SEÑAL DE HUMO
logStyled("ESCENA: SEÑAL DE HUMO", "title");
logStyled("Desde un edificio, ves una columna de humo. ¿Qué harás?");
logStyled("Opción A: Investigar", "option");
logStyled("Opción B: Evitar la zona", "option");

let signalDecision = prompt("Escoje una opción:").toLowerCase();
if (signalDecision === "a") {
    logStyled("Encuentras gasolina y una llave", "item");
    bag.push("llave", "gasolina");
} else if (signalDecision === "b") {
    logStyled("Evitas una emboscada, pero no ganas nada", "default");
} else {
    logStyled("Opción inválida", "warning");
}
state();

// EXPLORACIÓN
logStyled("ESCENA: EXPLORACIÓN", "title");
logStyled("¿Buscar vista panorámica o seguir entre sombras?");
logStyled("Opción A: Subir a un edificio", "option");
logStyled("Opción B: Callejones", "option");
logStyled("Opción C: Alcantarilla", "option");

let explorationDecision = prompt("Escoje una opción:").toLowerCase();
if (explorationDecision === "a") {
    logStyled("Encuentras dron con información", "item");
    bag.push("intel");
} else if (explorationDecision === "b") {
    logStyled("Encuentras animales salvajes. Pierdes una vida", "warning");
    life--;
} else if (explorationDecision === "c") {
    logStyled("Encuentras tarjeta de acceso al metro", "item");
    bag.push("tarjeta-acceso");
} else {
    logStyled("Opción inválida", "warning");
}
state();

// MEDIO DE TRANSPORTE
logStyled("ESCENA: MEDIO DE TRANSPORTE", "title");
logStyled("Debes decidir cómo moverte rápido");
logStyled("Opción A: Reparar bicicleta", "option");
logStyled("Opción B: Ir a pie", "option");

let transportationDecision = prompt("Escoje una opción:").toLowerCase();
if (transportationDecision === "a") {
    logStyled("Encuentras mochila con medicinas y batería", "item");
    bag.push("medicinas", "bateria");
} else if (transportationDecision === "b") {
    logStyled("Te cansas mucho. Pierdes una vida", "warning");
    life--;
} else {
    logStyled("Opción inválida", "warning");
}
state();

// FINAL DEL JUEGO
logStyled("FINAL DEL JUEGO", "title");

if (life >= 3 && bag.length >= 2 && bag.includes("mapa")) {
    logStyled("Cumples con todas las condiciones. Puedes pasar al Túnel del Metro.", "success");
    logStyled("Fin del juego: GANASTE", "success");
} else {
    logStyled("No cumples los requisitos. Te quedaste atrapado en la ciudad", "warning");
    logStyled("Fin del juego: PERDISTE", "warning");
}
