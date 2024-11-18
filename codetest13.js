// x만큼 간격이 있는 n개의 숫자 
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let num1 // x
let num2  // n
let answer = [] 
let reuslt = 0


while(true){

    num1 =Number(prompt("값을 입력하세요:")) 
    num2 =Number(prompt("값을 입력하세요:"))
    if (num2 >= 1 && num1 >= -10000000 && num2 <= 1000 && num1 <=10000000)
    {
        console.log("올바른 값을 입력했습니다.")
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}

let soltuion = (x,n) => {
  for(let i = 0; i<n; i++){
    answer.push(x)
    x += answer[0]
  }
  return answer
}
// 함수부분을 클로저를 통해 만들기


console.log(soltuion(num1,num2))
