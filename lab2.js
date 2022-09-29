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
function Accumulator(startingValue){
  let object={
    value:startingValue,
    read(){
      let a = prompt('Какое число хотите прибавить ?');
      this.value=this.value+a;
    }
  }
}
function random(min,max){
  return Math.random() * (max - min) + min;
}
function extractCurrencyValue(str){
 let result = str.replace(/[^0-9]/g, '');
 return result;
}
extractCurrencyValue('$400')
