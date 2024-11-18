// 문자열을 정수로 바꾸기
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n = "12345"
console.log(n.charAt(0))

while(true){
  n = prompt("값을 입력하세요:")
  if ( n.length>=1 && n.length<=5 && n.charAt(0) !== "0"){
    console.log("값이 올바르게 입력 되었습니다")
    console.log(typeof n)
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}


change_n = Number(n)
console.log(change_n)
console.log("타입이 변경되었습니다")
console.log(typeof change_n)