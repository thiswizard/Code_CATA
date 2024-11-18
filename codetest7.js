// angle 값을 두개의 매개변수로 받아 해보기
let prompt = require('prompt-sync')();

let angle1 
let angle2 


while(true){

    angle1 =Number(prompt("값을 입력하세요:")) 
    angle2 =Number(prompt("값을 입력하세요:"))
    if (angle2 >= 0 && angle1 >= 0 && angle2 <= 180 && angle1 <= 180 && Number.isInteger(angle1) && Number.isInteger(angle2))
    {
        break
    }
    else
    {
        console.log("값을 범위에 맞게 입력하세요")
        continue
    }
}

let make = (a,b) => {
    let checkangel = (a) => {
    if (a>0 && a<90){
        return "1"
    }
    else if (a == 90){
        return "2"
    }
    else if (a>90 && a<180){
        return "3"
   }
    else if (a == 180){
        return "4"
   }
}
console.log(`angle1 값은 ${checkangel(a)} 입니다`)
console.log(`angle2 값은 ${checkangel(b)} 입니다`)
}

make(angle1,angle2)

