// 자릿수 더하기
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let N

while(true){
  N = Number(prompt("값을 입력하세요:"))
  if (N<=100000000 && N>=1){
    console.log("조건에 맞게 입력하셨습니다")
    break
  }
  else {
    console.log("조건에 맞지 않습니다")
    continue
  }
}
// N 123

N = N.toString() // 숫자를 문자열로
N = N.split("") // 문자열을 배열로
let allsum = 0
let change = 0

N.forEach( value => {
    change = Number(value)
    allsum += change
})

console.log(`모든 값은 : ${allsum}`)







