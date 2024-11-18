import readlinesync from "readline-sync"

// 수박수박수박수박수박수?


let arr
while(true){
arr = readlinesync.questionInt("원하는 숫자를 넣으세요:")
if(arr<=10000){
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
    for(let i=0; i<arr; i++){
        if (i % 2 === 0){
            process.stdout.write("수")
        }
        else {
            process.stdout.write("박")
        }
    }
}

solution()