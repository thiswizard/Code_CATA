// 자연수 뒤집어 배열로 만들기
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n
let arr = []

while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=1 && n<=10000000000 ){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}


let result = n.toString().split("").reverse().map(Number) // 이 부분 다시 해보기
console.log(result)