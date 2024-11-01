let BMIweight = "";
let BMIweightChanged = 0;

function changeValueOfBMI(BMIweightChangedfun,i){

            console.log(i);
            console.log(BMIweightChangedfun);
            if(BMIweightChangedfun==1){
                BMIweight = BMIweight.concat(i)
                console.log("weight : "  + BMIweight);
                document.getElementById("unit1value").innerHTML = BMIweight
            }
            else{
                BMIheight = BMIheight.concat(i)
                console.log("height : " + BMIheight);
                document.getElementById("unit2value").innerHTML = BMIheight    
            }

}
let temp;
BMIweightChanged = 1;

document.getElementById("BMI1").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,1))
document.getElementById("BMI2").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,2))
document.getElementById("BMI3").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,3))
document.getElementById("BMI4").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,4))
document.getElementById("BMI5").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,5))
document.getElementById("BMI6").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,6))
document.getElementById("BMI7").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,7))
document.getElementById("BMI8").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,8))
document.getElementById("BMI9").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,9))
document.getElementById("BMI10").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,10))

document.getElementById("unit1value").addEventListener("click",unit1Valuefun)

function unit1Valuefun(){
    document.getElementById("unit1value").style.color = "#ec6b21"
    document.getElementById("unit2value").style.color = "#f1f1f1"
    BMIweightChanged = 1;
    // if(BMIweightChanged==1){
    //     changeValueOfBMI(BMIweightChanged);
    // }
    // document.getElementById("BMI1").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,1))
    // document.getElementById("BMI2").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,2))
    // document.getElementById("BMI3").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,3))
    // document.getElementById("BMI4").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,4))
    // document.getElementById("BMI5").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,5))
    // document.getElementById("BMI6").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,6))
    // document.getElementById("BMI7").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,7))
    // document.getElementById("BMI8").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,8))
    // document.getElementById("BMI9").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,9))
    // document.getElementById("BMI10").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,10))

    // if(BMIweightChanged==1){
    // console.log("commming in weight");
    // // for(let i=0;i<=10;i++){
    // //     document.getElementById("BMI"+`${i}`).addEventListener("click",()=>{
    // //         console.log(i);
    // //         BMIweight = BMIweight.concat(i)
    // //         console.log("weight : "  + BMIweight);
    // //         document.getElementById("unit1value").innerHTML = BMIweight

    // //     })
    // // }

    // }
}

let BMIheight = "";
document.getElementById("unit2value").addEventListener("click",unit2Valuefun);
function unit2Valuefun(){
    document.getElementById("unit2value").style.color = "#ec6b21"
    document.getElementById("unit1value").style.color = "#f1f1f1"
    temp = BMIweight
    BMIweightChanged = 0;
    // if(BMIweightChanged==0){
    //     changeValueOfBMI(BMIweightChanged);
    // }
    document.getElementById("BMI1").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,1))
    document.getElementById("BMI2").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,2))
    document.getElementById("BMI3").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,3))
    document.getElementById("BMI4").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,4))
    document.getElementById("BMI5").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,5))
    document.getElementById("BMI6").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,6))
    document.getElementById("BMI7").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,7))
    document.getElementById("BMI8").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,8))
    document.getElementById("BMI9").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,9))
    document.getElementById("BMI10").addEventListener("click",changeValueOfBMI.bind(this,BMIweightChanged,10))

//    if(BMIweightChanged==0){ 
//     console.log("commming in height");
//         for(let i=0;i<=10;i++){
//         document.getElementById("BMI"+`${i}`).addEventListener("click",()=>{
//             console.log(i);
//             // BMIheight = BMIheight.concat(i)
//             // console.log("height : " + BMIheight);
//             // document.getElementById("unit2value").innerHTML = BMIheight

//             })
//         }
//     }
}