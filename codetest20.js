import readlinesync from "readline-sync"

// 서울에서 김서방 찾기


let Max = 1000
let Min = 1
let Max_elements = 20
let Min_elements = 1

let seoul
while(true){
seoul = readlinesync.question("원하는 이름을 넣으세요:").split(",")
  if ( seoul.length>=Min && seoul.length<=Max && 
    seoul.every(value => value.length<=Max_elements) && seoul.every(value => value.length>=Min_elements) && seoul.some(value => value === "Kim")){
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
    for(let i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            return `김서방은 ${i}에 있다`
            
        }
    }
}




let result = solution()
console.log(result)