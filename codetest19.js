// 콜라즈 추측
let prompt = require('prompt-sync')(); // prompt-sync 설치 필요

let n 
let Max,Min

Max =8000000
Min =1


while(true){
  n = Number(prompt("값을 입력하세요:"))
  if ( n>=Min && n<Max){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}
let result = 0
while( n != 1 ){
    if(n%2 == 0){
        n = n/2
        result++ 
    }
    else if(n%2 != 0){
        n = n*3+1
        result++
    }

    if( result == 500 ){
        console.log("카운터가 500이 되었습니다")
        result = -1
        break
    }
}


console.log(`카운터의 수는 ${result}`)