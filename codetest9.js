// 배열의 평균값

let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let arr = []

while(true){
  arr = prompt("값을 입력하세요:").split(",")
  arr = arr.map(value => Number(value))
  if (  (arr.length>=1 && arr.length<=100)  && (arr.every(item => item>=-10000 && item<=10000))){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

let sum = 0
let legth = arr.length
arr.forEach(value =>{
  sum += value
})

let result = sum / legth

console.log(`배열의 평균값은 ${result} 입니다`)