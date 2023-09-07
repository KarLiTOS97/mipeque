let imagenes = [
    {
        "url": "./img/gato2.jpeg",
        "nombre": "¿De qué manera llegue a su vida?",
        "descripcion": "Fue un día en el cual miraba mis redes sociales, yo nunca hago caso a las sugerencias que me aparecen en las redes, pero al ver ese nombre hermoso María Carcache, posterior esa foto de perfil, ay no, ver esa foto fue el inició de todo al enviarte la solicitud."

    },
    {
        "url": "./img/pico1.jpeg",
        "nombre": "¿Cuándo empezaste a gustarme?",
        "descripcion": "De inmediato amor, señorita Carcache, usted me empezó a gustar desde que le vi su perfil, esa sonrisa, esos ojitos, esas cejas, esos labios, esos lunares divinos, y eso fue a simple vista."

    },
    {
        "url": "./img/pico2.jpeg",
        "nombre": "¿Qué sucedió cuando me aceptaste la solicitud?",
        "descripcion": "No te voy a mentir mi tesoro, me emocioné como no te imaginas, cuando respondiste mi primer mensaje del famoso “hola”, mediante conversábamos, iba conociendo una persona que con el tiempo se volvía mi persona favorita, con tu primer audio que me enviaste, esa voz me encantó desde que empezó a reproducirse el audio decía “que tienes casa propia, pero de vez en cuando te quedas con tus padres”, una voz hermosa, q pudieras tu misma decir que es fea o lo contrario bonita, me gusta demasiado."

    },
    {
        "url": "./img/lengua1.jpeg",
        "nombre": "¿Por qué me quedo en silencio la mayor parte del tiempo cuando tenemos nuestras llamadas?",
        "descripcion": "Esto tiene que ver mucho con la pregunta anterior mi cielo, ya que su voz me encanta, y me fascina escucharte, cuando me cuentas de ti, tu piensas que no te doy atención es cuando más estoy pendiente a cada palabra que surge de tus preciosos labios y hacen eco en tu hermosa boca, y se ha vuelto mi actividad favorita más esperada del día, nuestra llamada, ya que cuando estoy desanimado con una llamada tuya, un audio se me reinicia mi estado de ánimo, con tan solo escucharte, saber de ti, haces que se me acelere mi corazoncito por ti."

    },
    {
        "url": "./img/lengua2.jpeg",
        "nombre": "¿Cómo supe que te quiero?",
        "descripcion": "Usted es mi persona favorita, es lo mejor que me ha pasado en cada instante, daría todo por ti, desde que me di cuenta de que no puedo verte molesta, triste o incómoda me preocupa mucho, amorcito yo por nadie soy así de atento, más que por mis padres, si están bien, si ya comieron, si descansaron, etc. Y descubrí que por ti me preocupo demasiad, me importa que haces, donde estás, si ya comiste, si estás bien, si estás cómoda, si dormiste bien, si descansaste, si soñaste bonito, es que todo lo que te envuelva me importa, me interesa, y procuraré velar por ti mi muñequita, mediante se va acercando el sábado el día más importante para mí, me hace sentir ansioso por primera vez en mi vida, me encuentro nerviosisisisisisisismo por que se llegue ese día y tenerte entre mis brazos saber lo real que eres, poder tomarte de la mano y a partir de ese momento jamás soltarte cariño."

    },
    {
        "url": "./img/gato1.jpeg",
        "nombre": "¿Por qué te elegí/elegiré?",
        "descripcion": "En ti encontré una persona a quien confiarle mis penas, mis alegrías, mis secretos, en fin, encontré a la mujer ideal, la mujer con la que quiero construir un futuro, con quien tener una familia, en serio, quiero estar contigo, me haces muy feliz y espero corresponder de la mejor manera con mucha gratitud esta oportunidad que me brinda el Dios para poder estar con la mujer que él mismo colocó en mi camino, y lo cruzó con el suyo mi princesa, usted para mi es lo mejor de lo mejor, es perfecta, cada parte de usted, cada personalidad me encanta, estoy leyendo y nutriendo de información para entenderle mejor, saber cómo actuar y reaccionar de la mejor manera ante alguna situación emergente, ahora que te conocí no te quiero perderte, no quiero estar distante a ti mi niña, quiero todo contigo y sano."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}