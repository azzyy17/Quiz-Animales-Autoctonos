
"use strict";

// =====================================================
// CORRENTINAPP — EXPEDICIÓN DE FAUNA
// Laboratorio de Aplicaciones II · 2026
// =====================================================

// =====================================================
// 1. DATOS DE LOS ANIMALES
// =====================================================

const pools = {
    terrestre: {
        nombre: "🌿 HÁBITAT TERRESTRE",
        tema: "Habitantes de la tierra",
        pregunta:
            "¿Cuál de estos animales pertenece a la fauna autóctona de Corrientes?",
        animales: [
            {
                nombre: "Aguará guazú",
                cientifico: "Chrysocyon brachyurus",
                region: "Sudamérica; presente en Corrientes",
                local: true,
                imagen: "imagenes/aguara-guazu.jpg",
                alimentacion: "Omnívoro",
                habitatDetalle:
                    "Pastizales, sabanas, malezales y humedales.",
                estado: "Autóctono y amenazado en Argentina",
                invasor: "No. Es una especie nativa de la región.",
                caracteristicas:
                    "Es el cánido silvestre más grande de Sudamérica. Tiene patas muy largas, pelaje rojizo, grandes orejas y una crin oscura en el cuello.",
                dato:
                    "Su dieta incluye frutos silvestres, roedores, insectos, aves y otros animales pequeños. Su alimentación varía según el ambiente.",
                curiosidad:
                    "Aunque pertenece al orden de los carnívoros, también consume frutos y contribuye a dispersar semillas.",
                amenazas:
                    "La pérdida de hábitat, los atropellamientos en rutas, la caza y la captura ilegal."
            },
            {
                nombre: "Canguro rojo",
                region: "Australia",
                local: false
            },
            {
                nombre: "Panda gigante",
                region: "China",
                local: false
            },
            {
                nombre: "León africano",
                region: "África",
                local: false
            },
            {
                nombre: "Tigre de Bengala",
                region: "Asia",
                local: false
            },
            {
                nombre: "Camello bactriano",
                region: "Asia central",
                local: false
            },
            {
                nombre: "Koala",
                region: "Australia",
                local: false
            },
            {
                nombre: "Lémur de cola anillada",
                region: "Madagascar",
                local: false
            },
            {
                nombre: "Oso polar",
                region: "Ártico",
                local: false
            },
            {
                nombre: "Jirafa",
                region: "África",
                local: false
            }
        ]
    },

    aereo: {
        nombre: "🪽 HÁBITAT AÉREO",
        tema: "Habitantes del cielo",
        pregunta:
            "¿Cuál de estas aves forma parte de la fauna autóctona de Corrientes?",
        animales: [
            {
                nombre: "Yetapá de collar",
                cientifico: "Alectrurus risora",
                region:
                    "Pastizales del noreste argentino y regiones vecinas",
                local: true,
                imagen: "imagenes/yetapa-collar.jpg",
                alimentacion: "Principalmente insectívoro",
                habitatDetalle:
                    "Pastizales naturales con vegetación adecuada.",
                estado: "Autóctono y amenazado",
                invasor: "No. Es una especie nativa de Sudamérica.",
                caracteristicas:
                    "Es un ave de pastizal. El macho se distingue por su collar oscuro y su cola con plumas alargadas.",
                dato:
                    "Se alimenta principalmente de insectos y depende de los pastizales naturales para encontrar alimento, refugio y lugares de reproducción.",
                curiosidad:
                    "La transformación de los pastizales por cultivos y forestaciones constituye una amenaza para sus poblaciones.",
                amenazas:
                    "La pérdida y fragmentación de pastizales y las modificaciones del ambiente."
            },
            {
                nombre: "Kiwi",
                region: "Nueva Zelanda",
                local: false
            },
            {
                nombre: "Pingüino emperador",
                region: "Antártida",
                local: false
            },
            {
                nombre: "Casuario",
                region: "Oceanía",
                local: false
            },
            {
                nombre: "Ave del paraíso",
                region: "Nueva Guinea",
                local: false
            },
            {
                nombre: "Cóndor de California",
                region: "América del Norte",
                local: false
            },
            {
                nombre: "Avestruz",
                region: "África",
                local: false
            },
            {
                nombre: "Kakapo",
                region: "Nueva Zelanda",
                local: false
            },
            {
                nombre: "Pavo real",
                region: "Asia",
                local: false
            },
            {
                nombre: "Águila calva",
                region: "América del Norte",
                local: false
            }
        ]
    },

    acuatico: {
        nombre: "🐟 HÁBITAT ACUÁTICO",
        tema: "Habitantes del agua",
        pregunta:
            "¿Cuál de estos peces pertenece a la fauna autóctona de los ríos correntinos?",
        animales: [
            {
                nombre: "Dorado",
                cientifico: "Salminus brasiliensis",
                region:
                    "Cuenca del Plata, incluidos los ríos Paraná y Uruguay",
                local: true,
                imagen: "imagenes/dorado.jpg",
                alimentacion: "Carnívoro, principalmente ictiófago",
                habitatDetalle:
                    "Ríos y ambientes de agua dulce, especialmente sectores con corriente.",
                estado:
                    "Autóctono de las cuencas fluviales regionales",
                invasor:
                    "No. Es un pez nativo de la cuenca del Plata.",
                caracteristicas:
                    "Tiene un cuerpo robusto, escamas doradas, una cabeza fuerte y una boca grande.",
                dato:
                    "Es un depredador que consume otros peces. Se desplaza por diferentes sectores del río según sus necesidades.",
                curiosidad:
                    "Realiza desplazamientos migratorios relacionados con la alimentación y la reproducción.",
                amenazas:
                    "La degradación de los ambientes acuáticos, las alteraciones de los ríos y la presión pesquera."
            },
            {
                nombre: "Pez payaso",
                region: "Océanos Índico y Pacífico",
                local: false
            },
            {
                nombre: "Atún rojo",
                region: "Atlántico y Mediterráneo",
                local: false
            },
            {
                nombre: "Pez espada",
                region: "Océanos tropicales y templados",
                local: false
            },
            {
                nombre: "Pez globo",
                region: "Principalmente mares tropicales",
                local: false
            },
            {
                nombre: "Tiburón blanco",
                region: "Mares de distintas regiones",
                local: false
            },
            {
                nombre: "Pez león",
                region: "Indo-Pacífico",
                local: false
            },
            {
                nombre: "Pez cirujano azul",
                region: "Indo-Pacífico",
                local: false
            },
            {
                nombre: "Caballito de mar",
                region: "Diversos mares",
                local: false
            },
            {
                nombre: "Pez luna oceánico",
                region: "Océanos del mundo",
                local: false
            }
        ]
    },

    semiacuatico: {
        nombre: "🐊 HÁBITAT SEMIACUÁTICO",
        tema: "Entre el agua y la tierra",
        pregunta:
            "¿Cuál de estos animales es propio de los humedales y ambientes acuáticos de Corrientes?",
        animales: [
            {
                nombre: "Carpincho",
                cientifico: "Hydrochoerus hydrochaeris",
                region: "Gran parte de Sudamérica, incluida Corrientes",
                local: true,
                imagen: "imagenes/carpincho.jpg",
                alimentacion: "Herbívoro",
                habitatDetalle:
                    "Esteros, lagunas, bañados, ríos y orillas con vegetación.",
                estado: "Autóctono y ampliamente distribuido",
                invasor: "No. Es una especie nativa de Corrientes.",
                caracteristicas:
                    "Es el roedor viviente más grande del mundo. Tiene cuerpo robusto, patas parcialmente palmeadas y gran capacidad para nadar.",
                dato:
                    "Come principalmente gramíneas, hierbas y plantas acuáticas. Suele vivir en grupos y utiliza el agua para desplazarse y protegerse.",
                curiosidad:
                    "Sus ojos, orejas y narinas están ubicados en la parte superior de la cabeza, lo que le permite permanecer parcialmente sumergido.",
                amenazas:
                    "En algunas regiones enfrenta presión de caza, enfermedades y alteraciones de los ambientes acuáticos."
            },
            {
                nombre: "Castor canadiense",
                region: "América del Norte",
                local: false
            },
            {
                nombre: "Ornitorrinco",
                region: "Australia",
                local: false
            },
            {
                nombre: "Hipopótamo",
                region: "África",
                local: false
            },
            {
                nombre: "Cocodrilo del Nilo",
                region: "África",
                local: false
            },
            {
                nombre: "Nutria marina",
                region: "Costas del Pacífico",
                local: false
            },
            {
                nombre: "Morsa",
                region: "Ártico",
                local: false
            },
            {
                nombre: "Foca leopardo",
                region: "Antártida",
                local: false
            },
            {
                nombre: "Dragón de Komodo",
                region: "Indonesia",
                local: false
            },
            {
                nombre: "Caimán de anteojos",
                region: "América Central y del Sur",
                local: false
            }
        ]
    }
};


// =====================================================
// 2. VARIABLES DEL JUEGO
// =====================================================

let puntaje = 0;
let cantidadPreguntas = 0;
let aciertos = 0;

let preguntaActual = null;
let rotacionActual = 0;
let girando = false;
let respondida = false;


// =====================================================
// 3. ELEMENTOS DEL HTML
// =====================================================

const ruleta = document.getElementById("ruleta");
const botonGirar = document.getElementById("botonGirar");

const tarjetaPregunta =
    document.getElementById("tarjetaPregunta");

const categoria = document.getElementById("categoria");
const tema = document.getElementById("tema");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");

const panelResultado =
    document.getElementById("panelResultado");

const resultado = document.getElementById("resultado");
const explicacion = document.getElementById("explicacion");

const botonContinuar =
    document.getElementById("botonContinuar");

const marcadorPuntaje = document.getElementById("puntaje");
const contador = document.getElementById("contador");
const marcadorAciertos = document.getElementById("aciertos");

const etiquetas = [
    ...document.querySelectorAll(".etiqueta")
];


// =====================================================
// 4. ORDEN DE LOS SECTORES DE LA RULETA
// =====================================================

const habitats = [
    { clave: "terrestre" },
    { clave: "aereo" },
    { clave: "acuatico" },
    { clave: "semiacuatico" }
];


// =====================================================
// 5. EVENTOS
// =====================================================

botonGirar.addEventListener("click", girarRuleta);

botonContinuar.addEventListener("click", () => {
    tarjetaPregunta.classList.add("oculto");
    panelResultado.classList.add("oculto");

    opciones.replaceChildren();

    preguntaActual = null;
    respondida = false;

    botonGirar.disabled = false;
    botonGirar.focus();
});


// =====================================================
// 6. MEZCLAR ELEMENTOS ALEATORIAMENTE
// =====================================================

function mezclar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}


// =====================================================
// 7. CREAR UNA PREGUNTA
// =====================================================

function crearPregunta(habitat) {
    const pool = pools[habitat];

    if (!pool) {
        throw new Error(`El hábitat "${habitat}" no existe.`);
    }

    const locales = pool.animales.filter(
        animal => animal.local === true
    );

    const distractores = pool.animales.filter(
        animal => animal.local === false
    );

    if (locales.length !== 1 || distractores.length < 3) {
        throw new Error(
            `La categoría "${habitat}" debe tener exactamente un animal local y al menos tres distractores.`
        );
    }

    const animalCorrecto = locales[0];

    const animalesIncorrectos =
        mezclar(distractores).slice(0, 3);

    const animales = mezclar([
        animalCorrecto,
        ...animalesIncorrectos
    ]);

    return {
        habitat,
        nombre: pool.nombre,
        tema: pool.tema,
        pregunta: pool.pregunta,
        animales,
        correcta: animalCorrecto.nombre,
        especie: animalCorrecto
    };
}


// =====================================================
// 8. GIRAR LA RULETA
// =====================================================

function girarRuleta() {
    if (girando) return;

    girando = true;
    botonGirar.disabled = true;

    tarjetaPregunta.classList.add("oculto");
    panelResultado.classList.add("oculto");

    resultado.textContent = "";
    explicacion.replaceChildren();

    const gradosAleatorios =
        Math.floor(Math.random() * 360);

    rotacionActual += 1440 + gradosAleatorios;

    ruleta.style.transform =
        `translateX(-50%) rotate(${rotacionActual}deg)`;

    etiquetas.forEach(etiqueta => {
        etiqueta.style.setProperty(
            "--contra-rotacion",
            `${-rotacionActual}deg`
        );
    });

    setTimeout(() => {
        try {
            seleccionarHabitat();
        } catch (error) {
            console.error("Error al generar la pregunta:", error);

            botonGirar.disabled = false;
        } finally {
            girando = false;
        }
    }, 4100);
}


// =====================================================
// 9. IDENTIFICAR EL HÁBITAT GANADOR
// =====================================================

function seleccionarHabitat() {
    const anguloFinal =
        ((rotacionActual % 360) + 360) % 360;

    const anguloPuntero =
        (360 - anguloFinal) % 360;

    const indice =
        Math.floor(anguloPuntero / 90);

    const habitat = habitats[indice].clave;

    preguntaActual = crearPregunta(habitat);

    mostrarPregunta();
}


// =====================================================
// 10. MOSTRAR PREGUNTA Y OPCIONES
// =====================================================

function mostrarPregunta() {
    respondida = false;

    categoria.textContent = preguntaActual.nombre;
    tema.textContent = preguntaActual.tema;
    pregunta.textContent = preguntaActual.pregunta;

    opciones.replaceChildren();

    resultado.textContent = "";
    explicacion.replaceChildren();

    panelResultado.classList.add("oculto");
    tarjetaPregunta.classList.remove("oculto");

    preguntaActual.animales.forEach((animal, indice) => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "opcion";

        boton.textContent =
            `${String.fromCharCode(65 + indice)}. ${animal.nombre}`;

        boton.addEventListener("click", () => {
            comprobarRespuesta(animal, boton);
        });

        opciones.appendChild(boton);
    });

    botonGirar.disabled = true;

    tarjetaPregunta.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =====================================================
// 11. COMPROBAR LA RESPUESTA
// =====================================================

function comprobarRespuesta(
    animalSeleccionado,
    botonSeleccionado
) {
    if (respondida || !preguntaActual) return;

    respondida = true;
    cantidadPreguntas++;

    const esCorrecta = animalSeleccionado.local === true;
    const especie = preguntaActual.especie;

    if (esCorrecta) {
        puntaje += 100;
        aciertos++;

        resultado.textContent = "¡EXCELENTE! +100 PUNTOS";
        resultado.style.color = "#286b3c";
    } else {
        resultado.textContent =
            `¡A SEGUIR EXPLORANDO! La respuesta era ${especie.nombre}.`;

        resultado.style.color = "#a34c36";

        botonSeleccionado.classList.add("incorrecta");
    }

    document.querySelectorAll(".opcion").forEach(boton => {
        boton.disabled = true;

        const nombreBoton = boton.textContent.slice(3);

        if (nombreBoton === preguntaActual.correcta) {
            boton.classList.add("correcta");
        }
    });

    mostrarFichaAnimal(especie);
    actualizarMarcador();

    panelResultado.classList.remove("oculto");

    botonContinuar.focus();
}


// =====================================================
// 12. MOSTRAR LA FICHA EDUCATIVA DEL ANIMAL
// =====================================================

function mostrarFichaAnimal(animal) {
    explicacion.replaceChildren();

    const ficha = document.createElement("article");
    ficha.className = "ficha-animal";

    function agregarTexto(etiqueta, texto, clase = "") {
        if (!texto) return;

        const parrafo = document.createElement("p");

        if (clase) {
            parrafo.className = clase;
        }

        const negrita = document.createElement("strong");

        negrita.textContent = `${etiqueta}: `;

        parrafo.appendChild(negrita);
        parrafo.appendChild(
            document.createTextNode(texto)
        );

        ficha.appendChild(parrafo);
    }

    const titulo = document.createElement("h3");

    titulo.className = "ficha-titulo";
    titulo.textContent = `🌿 Conocé al ${animal.nombre}`;

    ficha.appendChild(titulo);

    if (animal.imagen) {
        const imagen = document.createElement("img");

        imagen.src = animal.imagen;
        imagen.alt = `Fotografía de ${animal.nombre}`;
        imagen.className = "imagen-animal";
        imagen.loading = "lazy";

        imagen.onerror = function () {
            imagen.onerror = null;
            imagen.classList.add("imagen-error");

            imagen.alt =
                `No se pudo cargar la imagen de ${animal.nombre}. ` +
                `Revisá la ruta: ${animal.imagen}`;
        };

        ficha.appendChild(imagen);
    }

    agregarTexto("Nombre científico", animal.cientifico);
    agregarTexto("Distribución", animal.region);
    agregarTexto("Hábitat", animal.habitatDetalle);
    agregarTexto("Alimentación", animal.alimentacion);
    agregarTexto("Origen", animal.estado);
    agregarTexto("¿Es invasor?", animal.invasor);
    agregarTexto("Características", animal.caracteristicas);
    agregarTexto("Información", animal.dato);

    agregarTexto(
        "Dato curioso",
        animal.curiosidad,
        "curiosidad-animal"
    );

    agregarTexto("Amenazas", animal.amenazas);

    explicacion.appendChild(ficha);
}


// =====================================================
// 13. ACTUALIZAR LOS MARCADORES
// =====================================================

function actualizarMarcador() {
    marcadorPuntaje.textContent =
        String(puntaje).padStart(3, "0");

    contador.textContent =
        String(cantidadPreguntas).padStart(2, "0");

    marcadorAciertos.textContent =
        String(aciertos).padStart(2, "0");
}
