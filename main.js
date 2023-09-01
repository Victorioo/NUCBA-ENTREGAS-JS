function isPair(num) {
  num % 2 === 0 ? console.log("Es par") : console.log("Es impar");
}

function isHigher(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log("Son iguales");
  }
}

function isMultipleOfFive(num) {
  num % 5 === 0
    ? console.log("Es multiplo de 5")
    : console.log("No es multiplo de 5");
}

function printNumbers(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

function printWords(num, word) {
  console.log(word.repeat(num));
}

function iterateArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function iterateArrayOfNumbers(array, num) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
}

// crear una funcion que reciba un array de numeros como parametro y devuelva el numero mas chico y mas alto del array sumados

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5000];

const sumMinHigh = (array) => {
  let min = Math.min(...array);
  let max = Math.max(...array);
  console.log(min + max)
};

sumMinHigh(array)
