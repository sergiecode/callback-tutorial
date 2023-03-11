

let usuarios = ["Sergie Code", "Glottis", "Ricardo"]
let enviarNotificaciones = (nombre) => {
    console.log(`¿Cómo estás ${nombre}? Te enviamos una notificación!`)
}

function envioAUsuarios(lista, tipoDeAccion){
    lista.map(e => tipoDeAccion(e))
    console.log("La tarea ha sido ejecutada completamente.")
}

envioAUsuarios(usuarios,enviarNotificaciones);

// Salida esperada: 
//
// ¿Cómo estás Sergie Code? Te enviamos una notificación!
// ¿Cómo estás Glottis? Te enviamos una notificación!
// ¿Cómo estás Ricardo? Te enviamos una notificación!
// La tarea ha sido ejecutada completamente.

