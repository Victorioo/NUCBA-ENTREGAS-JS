function isPair(num){
    num % 2 === 0 ? console.log("Es par") : console.log("Es impar");
}

function isHigher(num1, num2){k
    if (num1 > num2){
        console.log(`${num1} es mayor que ${num2}`)
    } else if (num1 < num2){
        console.log(`${num2} es mayor que ${num1}`)
    } else {
        console.log("Son iguales")
    }
}

function isMultipleOfFive(num){
    num % 5 === 0 ? console.log("Es multiplo de 5") : console.log("No es multiplo de 5");
}

function printNumbers(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}


function printWords(num, word){
    console.log(word.repeat(num))
}

function iterateArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

function iterateArrayOfNumbers(array, num){
    for(let i = 0; i < array.length; i++){
        console.log(array[i] * num)
    }
}
