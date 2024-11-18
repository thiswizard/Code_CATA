import readlinesync from "readline-sync"

// 핸드폰 번호 가리기



let phone_number
while(true){
phone_number = readlinesync.question("원하는 핸드폰 번호를 입력하세요:")
if (phone_number.length>=4 && phone_number.length<=20){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

function solution() {
    let result = "*".repeat(phone_number.length-4) + phone_number.slice(-4)
    return result
}

let number = solution()
console.log(number)