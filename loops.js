let array = [10, "test", "palavra", false, 42]
let x = 0

// do {

//     console.log("numero de x é: " + x)
//     console.log("----------------")
//     console.log(array[x])
//     console.log("----------------")
//     x = x + 1
// }while (x < array.length)

for(let index = 0 ; index < array.length; index++) {
    console.log("numero de x é: " + index)
    console.log("----------------")
    console.log("Valor da Posição é: " + array[index])
    console.log("----------------")

}