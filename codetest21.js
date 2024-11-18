import readlinesync from "readline-sync"

// 나누어 떨어지는 숫자 배열



let arr
let divisor
while(true){
arr = readlinesync.question("원하는 숫자를 넣으세요:").split(",").map(value=> Number(value))
divisor = readlinesync.questionInt("나누어 떨어지는 숫자를 입력하세요:")  
if (typeof divisor == 'number' && arr.length>=1 && arr.every(value => typeof value == 'number')){
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
let result = []
arr = arr.sort((a,b) => a-b)
for(let i=0; i<arr.length; i++){
    if(arr[i] % divisor == 0 ){
        result.push(arr[i])
    }
}
if(result.length === 0){
    result.push(-1)    
}

    return result.sort((a,b) => a-b)    
}


let result = solution()
console.log("반환값은:",result)



