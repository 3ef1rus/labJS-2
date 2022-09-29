let calculator = {
  first: null,
  second: null,
  read() {
    this.first = prompt("Введите первое значение")
    this.second = prompt("Введите второе значение")
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  }
}

function Accumulator(startingValue) {
  let object = {
    value: startingValue,
    read() {
      let a = prompt('Какое число хотите прибавить ?');
      this.value = this.value + a;
    }
  }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function extractCurrencyValue(str) {
  let result = str.replace(/[^0-9]/g, '');
  return result;
}

function sumInput() {
  let mas = [];
  while (true) {
    let value = prompt('Введите чиселo');
    if (value == "" || value == undefined) break;
    mas.push(+value);
  }
  let sum = 0;
  for (let i of mas) {
    sum += i;
  }
  return sum;
}
let salaries={
"Jon":400,
"Ivan":200,
"Vova":100,
}
function sumSalaries(salaries){
  salaries.values
}