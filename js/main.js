function verificarNumero(numero) {
        if (numero > 0) {
            return "el numero es positivo"
        }
        else if (numero < 0) {
            return "el numero es negativo"
        }
        else {
            return "el numero es 0"
        }
}
console.log(verificarNumero(0))

function puedeVotar(edad) {
    if(edad >= 18) {
        return "Si puede votar"
    }
    else {
        return "No puede votar"
    } 
}
console.log(puedeVotar(12))