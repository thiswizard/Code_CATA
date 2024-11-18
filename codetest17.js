// 정수 내림차순으로 배치하기
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n


while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=1 && n<=8000000000){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

number_n = n

change_n = Number(n.toString().split("").sort((a,b) => b - a).join(""))

console.log(`자연수 ${number_n}을 ${change_n}으로`)