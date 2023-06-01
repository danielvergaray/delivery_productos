// DELIVERY

alert("Bienvenido al servicio de Delivery de Mr. Snack")

// DECLARACION VARIABLES //

let distritoCliente
let norte = true
escogerZona ()


// DECLARACION FUNCIONES //

function escogerZona (){
    let seleccionCliente = Number(prompt("Seleccionar zona:\n 1- Norte \n 2- Sur"))

    if (seleccionCliente === 1) {
        zonaNorte()
    }
    else if (seleccionCliente === 2) {
        zonaSur()
    } else {
        alert("Ingresar un numero  valido entre 1 y 2")
        escogerZona()
    }
}
function zonaNorte() {


    do {
        let distritoCliente = Number(prompt("Seleccionar distrito:\n 1- Los olivos \n 2- Independencia \n 3- SMP \n 4 - Regresar al menu anterior"))

        if (distritoCliente === 1) {
            olivos()
            return false
        }
        else if (distritoCliente === 2) {
            independencia()
            return false
        }
        else if (distritoCliente === 3) {
            smp()
            return false
        }
        else if (distritoCliente === 4) {
            escogerZona()
            return false
        }else {
            alert("Ingresar una opcion valida")
            zonaNorte()
        }

    } while (norte = true)



}
function zonaSur() {


    do {
        let distritoCliente = Number(prompt("Seleccionar distrito:\n 1- Miraflores \n 2- Surco \n 3- Regresar al menu anterior"))

        if (distritoCliente === 1) {
            miraflores()
            return false
        }
        else if (distritoCliente === 2) {
            surco()
            return false
        }
        else if (distritoCliente === 3) {
            escogerZona()
            
        }
        else {
            alert("Ingresar una opcion valida")
            zonaSur()
        }

    } while (norte = true)


}
function olivos() {
    let ubicacionOlivos = Number(prompt("El costo del delivery para Los Olivos es de 10$ \n 1- Confirmar \n 2- Volver al menu anterior "))


    switch (ubicacionOlivos) {
        case 1:
            alert("Gracias por la confirmacion, el pedido estará llegando dentro de las proximas 24 horas")
            break;
        case 2:
            zonaNorte()
            break;
        default:
            alert("Opcion invalida.")
            zonaNorte()
            break;
    }
    
}
function independencia() {
    let ubicacionIndependencia = Number(prompt("El costo del delivery para Independencia es de 15$ \n 1- Confirmar \n 2- Volver al menu anterior "))


    switch (ubicacionIndependencia) {
        case 1:
            alert("Gracias por la confirmacion, el pedido estará llegando dentro de las proximas 24 horas")
            break;
        case 2:
            zonaNorte()
            break;
        default:
            alert("Opcion invalida.")
            zonaNorte()
            break;
    }
}
function smp() {
    let ubicacionSmp = Number(prompt("El costo del delivery para SMP es de 17$ \n 1- Confirmar \n 2- Volver al menu anterior "))


    switch (ubicacionSmp) {
        case 1:
            alert("Gracias por la confirmacion, el pedido estará llegando dentro de las proximas 24 horas")
            break;
        case 2:
            zonaNorte()
            break;
        default:
            alert("Opcion invalida.")
            zonaNorte()
            break;
    }
}
function miraflores() {
    let ubicacionMiraflores = Number(prompt("El costo del delivery para Miraflores es de 5$ \n 1- Confirmar \n 2- Volver al menu anterior "))

    switch (ubicacionMiraflores) {
        case 1:
            alert("Gracias por la confirmacion, el pedido estará llegando dentro de las proximas 24 horas")
            break;
        case 2:
            zonaSur()
            break;
        default:
            alert("Opcion invalida.")
            zonaSur()
            break;
    }


}
function surco() {
    let ubicacionSurco = Number(prompt("El costo del delivery para Surco es de 8$ \n 1- Confirmar \n 2- Volver al menu anterior "))

    switch (ubicacionSurco) {
        case 1:
            alert("Gracias por la confirmacion, el pedido estará llegando dentro de las proximas 24 horas")
            break;
        case 2:
            zonaSur()
            break;
        default:
            alert("Opcion invalida.")
            zonaSur()
            break;
    }


}
