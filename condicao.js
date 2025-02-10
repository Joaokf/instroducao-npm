function compararNumeros(num1, num2) {
    if (num1 < num2) {
        return "numero2 é maior";
    } else if (num1 == num2) {
        return "os numeros sao iguais";
    }
    else {
        return "numero1 é maior";
    }
}

function numberCheck(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "numero negativo"
    } else {
        return "zero"
    }
}

function dayOfWeek(dia) {
    switch (dia) {
        case 1:
            return "sunday"
        case 2:
            return "monday"
        case 3:
            return "tuesday"
        case 4:
            return "wednesday"
        case 5: 
            return "thursday"
        case 6: 
            return "friday"
        case 7: 
            return "saturday"

        default:
            return "dia da semana não encontrado"
    }
}

console.log(dayOfWeek(10))