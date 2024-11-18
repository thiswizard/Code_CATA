import readlinesync from "readline-sync"

// 가운데 글자 가져오기


let arr
while(true){
arr = readlinesync.question("원하는 문자를 넣으세요:")
if(arr.length>=1){
    console.log("값이 올바르게 입력 되었습니다")
    break
  }
  else 
  {
    console.log("값이 올바르지 않습니다.")
    continue
  }
}

let num , num2 , result
function solution() { // 1 2 3 4 5 , // 1 2 3 4 5 6 7 8 
    if(arr.length %2 === 0){
        num = arr.length/2-1 // 4
        num2 = arr.length/2 // 5
        result = (arr[num] + arr[num2])
        return result
    }
    else{
        num = Math.floor(arr.length/2)
        result = arr[num]
        return result
    }
    
}

let number = solution()
console.log(number)