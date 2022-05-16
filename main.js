let questions= {
    cuestionario: [
    {
        pregunta: "Es para...",
        opciones: [
            {
                texto: "Tu Negocio",
                valor: 1
            },
            {
                texto: "Donde Trabajas",
                valor: 2
            }
        ]
    },
    {
        pregunta: "Estas en...",
        opciones: [
            {
                texto: "Chile",
                valor: 1
            },
            {
                texto: "Colombia",
                valor: 2
            }
        ] 
    },
    {
        pregunta: "N° Empleados: Tienes...",
        opciones: [
            {
                texto: "Menos de 10",
                valor: "1"
            },
            {
                texto: "Entre 11 y 50",
                valor: "2"
            },
            {
                texto: "Entre 51 y 150",
                valor: "3"
            },
            {
                texto: "Mas de 151",
                valor: "4"
            }
        ]
    },
    {
        pregunta: "La empresa es de...",
        opciones: [
            {
                texto: "Productos",
                valor: 1
            },
            {
                texto: "Servicios",
                valor: 2
            }
        ]
    },
    {
        pregunta: "La empresa ofrece y vende productos/servicios...",
        opciones: [
            {
                texto: "Presencial",
                valor: 1
            },
            {
                texto: "Online",
                valor: 2
            },
            {
                texto: "Otro",
                valor: 3
            }
        ]
    },
    {
        pregunta: "¿Tu marca tiene redes sociales?...",
        opciones: [
            {
                texto: "Si",
                valor: 1
            },
            {
                texto: "No",
                valor: 2
            }
        ]
    },
    {
        pregunta: "Respondes comentarios de tus publicaciones",
        opciones: [
            {
                texto: "Si",
                valor: 1
            },
            {
                texto: "No",
                valor: 2
            }
        ]
    },
    {
        pregunta: "Conoces la efectividad de tus interacciones en redes",
        opciones: [
            {
                texto: "Si",
                valor: 1
            },
            {
                texto: "No",
                valor: 2
            }
        ]
    },
    {
        pregunta: "¿Tu marca tiene pagina web propia?...",
        opciones: [
            {
                texto: "Si",
                valor: 1
            },
            {
                texto: "No",
                valor: 2
            }
        ]
    },
    {
        pregunta: "La empresa busca con DKM...",
        opciones: [
            {
                texto: "Aumentar ventas",
                valor: 1
            },
            {
                texto: "Mejorar exposicion de marca",
                valor: 2
            },
            {
                texto: "Otro",
                valor: 2
            }
        ]
    },
    ],
    respuestas:[]
}

let indice = 0




let email = document.getElementById("email")
let tel = document.getElementById("telefono")

function plan () {
    let tipo = parseInt(document.getElementById("tipo").value)
    let lugar = parseInt(document.getElementById("lugar").value)
    let tamano = parseInt(document.getElementById("tamano").value)
    let te = parseInt(document.getElementById("te").value)
    let pl = parseInt(document.getElementById("pl").value)
    let rs = parseInt(document.getElementById("rs").value)
    let rc = parseInt(document.getElementById("rc").value)
    let ep = parseInt(document.getElementById("ep").value)
    let wb = parseInt(document.getElementById("wb").value)
    let pg = parseInt(document.getElementById("pg").value)
    numplan(tipo + tamano, te, pl, rs + rc + ep, wb, pg)
}

console.group("Datos generales")
let nombre = document.getElementById("nombre")
console.log(nombre)
let correo = document.getElementById("email")
console.log(correo)
let telefono = document.getElementById("telefono")
console.log("+57" + telefono)
console.groupEnd

function numplan (gempresa, gte, gpl, gredes, gweb, ggoal){
    let total = gempresa + gte + gpl + gredes + gweb + ggoal
    let resultado = document.getElementById("resultado")
    if (total <= 8) {
        resultado.innerHTML = "Tu plan ideal es Basic"
    } else if (total >= 9 && total <= 14) {
        resultado.innerHTML = "Tu plan ideal es Social"
    } else {
        resultado.innerHTML = "Tu plan ideal es Dev"
    }
}

sessionStorage.setItem('Email', email)
sessionStorage.setItem('Email', tel)


