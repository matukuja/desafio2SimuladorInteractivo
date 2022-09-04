//Inicio de código - Simulador Interactivo
//0 - Explicación del algoritmo: Simulará a un ecommerce, interactuando con el usuario a través de 'alerts' y de 'prompts'. El ecommerce será de imanes y llaveros de fútbol de los 5 equipos denominados "grandes" del fútbol argentino. El usuario deberá elegir, por iteración y hasta que quiera salir del programa, el tipo de accesorio que va a llevar y de qué equipo. Finalmente, elegirá las cuotas en las que quiere pagar y el sistema calculará cuanto deberá pagar por mes.
//1 - Declaración e inicialización de variables a utilizar
//1.a - variables vinculadas con: (i) cantidad de productos a llevar por tipo (llavero/iman) y equipo + subtotales de la compra + constantes necesarias para el cálculo del valor final de la compra (precios unitarios por llavero e iman + porcentaje de aumento seleccionando las distintas cuotas ofrecidas)
let llaverosCASLA = 0
let imanesCASLA = 0
let llaverosCABJ = 0
let imanesCABJ = 0
let llaverosCARP = 0
let imanesCARP = 0
let llaverosCAI = 0
let imanesCAI = 0
let llaverosRC = 0
let imanesRC = 0
let subtotal = 0
let subtotalImanes = 0
let subtotalLlaveros = 0
const VALOR_UNIDAD_LLAVERO = 170
const VALOR_UNIDAD_IMAN = 200
const PORCENTAJE_AUMENTO_3CUOTAS = 5
const PORCENTAJE_AUMENTO_6CUOTAS = 10
const PORCENTAJE_AUMENTO_12CUOTAS = 15
    //1.b - Datos de envio del cliente
let dniUsuario = ""
let direccionUsuario = ""
let telContactoUsuario = ""
    //2 - Declaración de funciones a utilizar en el algoritmo
function saludarUsuario() {
    const NOMBRE_USUARIO = prompt("Bienvenido. Ingrese su nombre por favor")
    alert("Hola " + NOMBRE_USUARIO + "! ¿Cómo estás? Bienvenido al simulador de ecommerce de imanes y llaveros de los equipos de fútbol más grandes de Argentina.")
    return NOMBRE_USUARIO
}

function consultarDatosEnvioUsuario() {
    alert("Para finalizar, te tomaremos un par de datos para realizar el envío correctamente:")
    dniUsuario = prompt("¿Cómo es tu número de documento?")
    direccionUsuario = prompt("¿Cómo es tu dirección de entrega?")
    telContactoUsuario = prompt("¿Cúal es tu número telefónico de contacto?")
}

function calcularValorFinal(subtotal, cuotas) {
    let valorFinal
    let montoAgregado
    switch (cuotas) {
        case "1":
            valorFinal = subtotal
            return valorFinal
        case "3":
            montoAgregado = (subtotal * PORCENTAJE_AUMENTO_3CUOTAS) / 100
            valorFinal = subtotal + montoAgregado
            return valorFinal
        case "6":
            montoAgregado = (subtotal * PORCENTAJE_AUMENTO_6CUOTAS) / 100
            valorFinal = subtotal + montoAgregado
            return valorFinal
        case "12":
            montoAgregado = (subtotal * PORCENTAJE_AUMENTO_12CUOTAS) / 100
            valorFinal = subtotal + montoAgregado
            return valorFinal
    }
}

function calcularValorPorCuota(valorFinal, cuotas) {
    return (valorFinal / parseInt(cuotas))
}

function elegirEquipo() {
    const EQUIPO_ELEGIDO = prompt("Elija un número según el equipo del que quiere comprar algún producto en esta iteración (ingrese cualquier otra cosa para salir del ecommerce): " + "\n" + "1: Boca" + "\n" + "2: River" + "\n" + "3: San Lorenzo" + "\n" + "4: Independiente" + "\n" + "5: Racing")
    return EQUIPO_ELEGIDO
}

function elegirTipoProducto() {
    const TIPO_PRODUCTO = prompt("Elija un número según el tipo de producto que sea adquirir en esta iteración (ingrese cualquier otra cosa para para cancelar esta iteración): " + "\n" + "1: Imanes" + "\n" + "2: Llaveros")
    return TIPO_PRODUCTO
}

function sumarUnidadesPorEquipoYProducto(equipo, producto, unidades) {
    switch (equipo) {
        case "1":
            if (producto == "1") {
                imanesCABJ = imanesCABJ + unidades
            } else {
                llaverosCABJ = llaverosCABJ + unidades
            }
            break
        case "2":
            if (producto == "1") {
                imanesCARP = imanesCARP + unidades
            } else {
                llaverosCARP = llaverosCARP + unidades
            }
            break
        case "3":
            if (producto == "1") {
                imanesCASLA = imanesCASLA + unidades
            } else {
                llaverosCASLA = llaverosCASLA + unidades
            }
            break
        case "4":
            if (producto == "1") {
                imanesCAI = imanesCAI + unidades
            } else {
                llaverosCAI = llaverosCAI + unidades
            }
            break
        case "5":
            if (producto == "1") {
                imanesRC = imanesRC + unidades
            } else {
                llaverosRC = llaverosRC + unidades
            }
            break
        default:
            break
    }

}

function usuarioCompro() {
    return ((imanesCABJ + imanesCAI + imanesCARP + imanesCASLA + imanesRC + llaverosCABJ + llaverosCAI + llaverosCARP + llaverosCASLA + llaverosRC) > 0)
}

//3 - Inicio del algoritmo en si
const NOMBRECLIENTE = saludarUsuario()
let equipoElegido = elegirEquipo()
while ((equipoElegido == "1") || (equipoElegido == "2") || (equipoElegido == "3") || (equipoElegido == "4") || (equipoElegido == "5")) {
    const tipoProducto = elegirTipoProducto()
    if ((tipoProducto == "1") || (tipoProducto == "2")) {
        let cantidadUnidades = parseInt(prompt("Ingrese las unidades a llevar en esta iteración (ingrese '0' si se arrepintió en esta tanda)"))
        sumarUnidadesPorEquipoYProducto(equipoElegido, tipoProducto, cantidadUnidades)
    } else {
        alert("iteración cancelada, los datos de esta iteración no contarán para el total de la compra por no haber elegido un tipo de producto correcto")
    }
    equipoElegido = elegirEquipo()
}
if (usuarioCompro()) {
    subtotalImanes = (imanesCABJ + imanesCAI + imanesCARP + imanesCASLA + imanesRC) * VALOR_UNIDAD_IMAN
    subtotalLlaveros = (llaverosCABJ + llaverosCAI + llaverosCARP + llaverosCASLA + llaverosRC) * VALOR_UNIDAD_LLAVERO
    subtotal = subtotalImanes + subtotalLlaveros
    alert("Resumen del pedido: " + "\n\n" + "1. Productos de Boca:" + "\n" + "1.a. Imanes: " + imanesCABJ + " unidades." + "\n" + "1.b. Llaveros: " + llaverosCABJ + " unidades." + "\n\n" + "2. Productos de River:" + "\n" + "2.a. Imanes: " + imanesCARP + " unidades." + "\n" + "2.b. Llaveros: " + llaverosCARP + " unidades." + "\n\n" + "3. Productos de San Lorenzo:" + "\n" + "3.a. Imanes: " + imanesCASLA + " unidades." + "\n" + "3.b. Llaveros: " + llaverosCASLA + " unidades." + "\n\n" + "4. Productos de Independiente:" + "\n" + "4.a. Imanes: " + imanesCAI + " unidades." + "\n" + "4.b. Llaveros: " + llaverosCAI + " unidades." + "\n\n" + "5. Productos de Racing:" + "\n" + "5.a. Imanes: " + imanesRC + " unidades." + "\n" + "5.b. Llaveros: " + llaverosRC + " unidades.")
    alert("Resumen de lo que ud. tiene que pagar en función de su pedido:" + "\n" + "Cantidad de imanes: " + (imanesCABJ + imanesCAI + imanesCARP + imanesCASLA + imanesRC) + " x $" + VALOR_UNIDAD_IMAN + " (precio unitario) = " + "$" + subtotalImanes + "\n" + "Cantidad de llaveros: " + (llaverosCABJ + llaverosCAI + llaverosCARP + llaverosCASLA + llaverosRC) + " x $" + VALOR_UNIDAD_LLAVERO + " (precio unitario) = " + "$" + subtotalLlaveros + "\n" + "Total a abonar: $" + subtotal)
    let cuotasElegidas = prompt("Elija la cantidad de cuotas con las que desea abonar el pedido." + "\n" + "1 cuota: 0% de interés" + "\n" + "3 cuotas: " + PORCENTAJE_AUMENTO_3CUOTAS + "% de interés" + "\n" + "6 cuotas: " + PORCENTAJE_AUMENTO_6CUOTAS + "% de interés" + "\n" + "12 cuotas: " + PORCENTAJE_AUMENTO_12CUOTAS + "% de interés")
    while ((cuotasElegidas != "1") && (cuotasElegidas != "3") && (cuotasElegidas != "6") && (cuotasElegidas != "12")) {
        alert("valor incorrecto, ingrese cantidad de cuotas nuevamente (1, 3, 6 o 12)")
        cuotasElegidas = prompt("Elija la cantidad de cuotas con las que desea abonar el pedido." + "\n" + "1 cuota: 0% de interés" + "\n" + "3 cuotas: " + PORCENTAJE_AUMENTO_3CUOTAS + "% de interés" + "\n" + "6 cuotas: " + PORCENTAJE_AUMENTO_6CUOTAS + "% de interés" + "\n" + "12 cuotas: " + PORCENTAJE_AUMENTO_12CUOTAS + "% de interés")
    }
    //agregar lo que falta con la cantidad de cuotas ingresadas por el usuario (si llegó hasta aca, es porque ya eligió las cuotas y eligió con un número bien)
    const VALOR_FINAL_A_PAGAR = calcularValorFinal(subtotal, cuotasElegidas)
    const VALOR_FINAL_POR_CUOTA = calcularValorPorCuota(VALOR_FINAL_A_PAGAR, cuotasElegidas)
    alert("Pedido realizado con éxito. Usted pagará un total de $" + VALOR_FINAL_A_PAGAR + " en " + cuotasElegidas + " cuotas, y tendrá que abonar un total de $" + VALOR_FINAL_POR_CUOTA + " por cuota.")
    consultarDatosEnvioUsuario()
    alert(NOMBRECLIENTE + "(Doc. N° " + dniUsuario + "), muchas gracias por su compra. Su pedido será despachado en las próximas semanas a la dirección '" + direccionUsuario + "'. En breve le llegará el link de seguimiento.")
} else {
    alert("Usted no compró nada, hasta luego!")
}