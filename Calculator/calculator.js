let userInput = ""
let operation = ""
let flag=0;
ans = 0 
for(let i=0;i<=9;i++){
    document.getElementById(`${i}`).addEventListener("click",()=>{
            operation = i
            console.log(i)
            console.log(userInput)
            document.getElementById("currentOutput").innerHTML = userInput
         
        userInput = userInput.concat(operation)
        console.log(userInput)

        if(userInput.length==1 && userInput=="*"){
            userInput = "0x"
        }

        if(userInput.length==1 && userInput=="/"){
            userInput = "0/"
        }

        if(userInput.length==5 && userInput=="*0.01"){
            userInput = ""
        }

        if(userInput.length==1 && userInput=="."){
            userInput = "0."
        }

        if(userInput.length==1 && userInput=="-"){
            userInput = "0-"
        }

        if(userInput.length==1 && userInput=="+"){
            userInput = "0+"
        }

        document.getElementById("currentOutput").innerHTML = userInput
        // toDisplay = evaluate() only when userInput is not an Empty 
        if(userInput.length > 0){
            evaluate();
        }

        // clickToGray()
        
        setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById(`${i}`).style.background  = "none";
        }
        
        document.getElementById(`${i}`).style.backgroundColor = "#898989";

    })

}


document.getElementById("decimal").addEventListener("click",()=>{
    operation = '.'
    console.log(".")

    if(flag==1){
        creatingDiv();
    }

    userInput = userInput.concat(operation)
    console.log(userInput)
    document.getElementById("currentOutput").innerHTML = userInput

    setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById("decimal").style.background  = "none";
        }
        
        document.getElementById("decimal").style.backgroundColor = "#898989";

})

document.getElementById("percentage").addEventListener("click",()=>{
    operation = '*0.01'
    console.log("%")

    if(flag==1){
        creatingDiv();
    }

    console.log(ans);
    if(ans!=0){
        ans = ans.toString();
        userInput = ""
        userInput = ans.concat(operation)
        console.log(userInput);
        document.getElementById("currentOutput").style.fontSize = "35px";
        document.getElementById("evalOutput").style.fontSize= "25px";
        document.getElementById("evalOutput").style.color = "gray";
    }
    else{
        userInput = userInput.concat(operation)
        console.log(userInput)  
    }
    
    document.getElementById("currentOutput").innerHTML = userInput

    setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById("percentage").style.background  = "none";
        }
        
        document.getElementById("percentage").style.backgroundColor = "#898989";

})

document.getElementById("divide").addEventListener("click",()=>{

    console.log("/")

    if(flag==1){
        creatingDiv();
    }

    if(userInput[userInput.length-1]=="+" || userInput[userInput.length-1]=="-" || userInput[userInput.length-1]=="*" || userInput[userInput.length -1]=="/"){
        userInput = userInput.slice(0,-1);
       console.log(userInput)
        operation = '/'
    }
    else{
        operation = '/'
    }

    console.log(ans);
    if(ans!=0){
        ans = ans.toString();
        userInput = ""
        userInput = ans.concat(operation)
        console.log(userInput);
        document.getElementById("currentOutput").style.fontSize = "35px";
        document.getElementById("evalOutput").style.fontSize= "25px";
        document.getElementById("evalOutput").style.color = "gray";
    }
    else{
        userInput = userInput.concat(operation)
        console.log(userInput)
        
    }

    document.getElementById("currentOutput").innerHTML = userInput

    setTimeout(clickToGray,100)
    function clickToGray(){
        document.getElementById("divide").style.background  = "none";
    }
    
    document.getElementById("divide").style.backgroundColor = "#898989";



})

document.getElementById("multiple").addEventListener("click",()=>{

    console.log("*")

    if(flag==1){
        creatingDiv();
    }

    if(userInput[userInput.length - 1]=="+" || userInput[userInput.length -1]=="-" || userInput[userInput.length -1]=="*" || userInput[userInput.length - 1]=="/"){
        userInput = userInput.slice(0,-1);
        operation = '*'
    }
    else{
        operation = '*'
    }

    console.log(ans);
    if(ans!=0){
        ans = ans.toString();
        userInput = ""
        userInput = ans.concat(operation)
        console.log(userInput);
        document.getElementById("currentOutput").style.fontSize = "35px";
        document.getElementById("evalOutput").style.fontSize= "25px";
        document.getElementById("evalOutput").style.color = "gray";
    }
    else{
        userInput = userInput.concat(operation)
        console.log(userInput)
        
    }

    document.getElementById("currentOutput").innerHTML = userInput

    setTimeout(clickToGray,100)
    function clickToGray(){
        document.getElementById("multiple").style.background  = "none";
    }
    
    document.getElementById("multiple").style.backgroundColor = "#898989";


})

document.getElementById("subtract").addEventListener("click",()=>{

    console.log("-")

    if(flag==1){
        creatingDiv();
    }

    if(userInput[userInput.length - 1]=="+" || userInput[userInput.length - 1]=="-" || userInput[userInput.length - 1]=="*" || userInput[userInput.length - 1]=="/"){
        userInput = userInput.slice(0,-1);
        operation ='-'
    }
    else{
        operation = '-'
    }

    console.log(ans);
    if(ans!=0){
        ans = ans.toString();
        userInput = ""
        userInput = ans.concat(operation)
        console.log(userInput);
        document.getElementById("currentOutput").style.fontSize = "35px";
        document.getElementById("evalOutput").style.fontSize= "25px";
        document.getElementById("evalOutput").style.color = "gray";
    }
    else{
        userInput = userInput.concat(operation)
        console.log(userInput)
        
    }

    document.getElementById("currentOutput").innerHTML = userInput

    setTimeout(clickToGray,100)
    function clickToGray(){
        document.getElementById("subtract").style.background  = "none";
    }
    
    document.getElementById("subtract").style.backgroundColor = "#898989";


})
document.getElementById("add").addEventListener("click",()=>{

    console.log("+");
    
    if(flag==1){
        creatingDiv();
    }

    if(userInput[userInput.length - 1]=="+" || userInput[userInput.length - 1]=="-" || userInput[userInput.length - 1]=="*" || userInput[userInput.length - 1]=="/"){
        userInput = userInput.slice(0,-1);
        operation = '+'
    }
    else{
        operation = '+'
    }

    console.log(ans);
    if(ans!=0){
        ans = ans.toString();
        userInput = ""
        userInput = ans.concat(operation)
        console.log(userInput);
        document.getElementById("currentOutput").style.fontSize = "35px";
        document.getElementById("evalOutput").style.fontSize= "25px";
        document.getElementById("evalOutput").style.color = "gray";
    }
    else{
        userInput = userInput.concat(operation)
        console.log(userInput)
        
    }
    
    document.getElementById("currentOutput").innerHTML = userInput

    setTimeout(clickToGray,100)
    function clickToGray(){
        document.getElementById("add").style.background  = "none";
    }
    
    document.getElementById("add").style.backgroundColor = "#898989";


})

noOfCreatedDiv = 1;

function creatingDiv(){

    if(flag==1){
        flag = 0;
       let div1 = document.createElement("div");
       let div2 = document.createElement("div");
       div1.classList.add("currentOutputCreate");
       div2.classList.add("evalOutputCreate");
       div1.id = "currentOutputCreateId"+`${noOfCreatedDiv}` ;
       div2.id = "evalOutputCreateId"+`${noOfCreatedDiv}`;
       document.getElementById("scroolarea").appendChild(div1)
       document.getElementById("scroolarea").appendChild(div2)
       console.log("Created Div");
      
    }
    ans = eval(userInput)
    console.log(ans);
    console.log("In Crreating Div Fun");
    document.getElementById("currentOutputCreateId" +`${noOfCreatedDiv}`).innerHTML = userInput
    document.getElementById("evalOutputCreateId" +`${noOfCreatedDiv}`).innerHTML = "=" + ans

    noOfCreatedDiv++;
}


document.getElementById('delete').addEventListener("click",()=>{
    userInput = userInput.slice(0,-1)
    document.getElementById("currentOutput").innerHTML = userInput
    document.getElementById("evalOutput").innerHTML = userInput
    if(userInput.length == 0){
    document.getElementById("evalOutput").innerHTML = "0"
    document.getElementById("evalOutput").style.color = "white"
    document.getElementById("evalOutput").style.fontSize = "35px"
    }

    setTimeout(clickToGray,100)
    function clickToGray(){
        document.getElementById("delete").style.background  = "none";
    }
    
    document.getElementById("delete").style.backgroundColor = "#898989";


})

document.getElementById('ac').addEventListener("click",()=>{
    userInput = ""
    document.getElementById("evalOutput").innerHTML = "0"
    document.getElementById("currentOutput").innerHTML = ""
    document.getElementById("evalOutput").style.fontSize= "35px";
    document.getElementById("evalOutput").style.color = "white";

    setTimeout(clickToGray,100)
    function clickToGray(){
        document.getElementById("acContainer").style.background  = "none";
    }
    
    document.getElementById("acContainer").style.backgroundColor = "#898989";

})


document.getElementById('equal').addEventListener("click",evaluatel);

// document.getElementById('equal').addEventListener("click",creatingDiv);
 


function evaluate(){

    // flag = 1;
    console.log(eval(userInput))
    document.getElementById("evalOutput").innerHTML = "=" + eval(userInput)
    document.getElementById("evalOutput").style.fontSize= "25px";
    document.getElementById("evalOutput").style.color = "gray";
}

function evaluatel(){

    flag=1;
    if(userInput[userInput.length - 1]=="+" || userInput[userInput.length - 1]=="-" || userInput[userInput.length - 1]=="*" || userInput[userInput.length - 1]=="/"){        
        userInput = userInput.slice(0,-1);
    }
    console.log(userInput);
    console.log("evaluate1 function");

    document.getElementById("evalOutput").innerHTML = "=" + eval(userInput)
    document.getElementById("evalOutput").style.color = "white";
    document.getElementById("evalOutput").style.fontSize= "35px";
    document.getElementById("currentOutput").style.fontSize= "20px";
    document.getElementById("currentOutput").style.color = "white";


}
 




document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
    
    console.log(userInput)
    if(0<=name && name<=9){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput
        changeValueOfBMI(name)
        changeValueOfData(name)
        changeValueOfNumsys(name)
        changeValueOfTemp(name)
        changeValueOfdiscount(name)
        changeValueOfTime(name)
    }
    else if(name == '.'){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput
        changeValueOfBMI(name)
        changeValueOfData(name)
        changeValueOfTemp(name)
        changeValueOfdiscount(name)
        changeValueOfTime(name)
    }
    else if(name == '+'){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput

    }
    else if(name == '-'){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput
    }
    else if(name == '*'){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput
    }
    else if(name == '/'){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput
    }
    else if(name == '%'){
        userInput = userInput.concat(name)
        document.getElementById("currentOutput").innerHTML = userInput
    }
    else if(name == "Enter"){
        console.log("entered");
        evaluatel();
        evaluateBMI()
    }
    else if(name == "a"){
        changeValueOfNumsys("A")
    }
    else if(name == "b"){
        changeValueOfNumsys("B")
    }
    else if(name == "c"){
        changeValueOfNumsys("C")
    }
    else if(name == "d"){
        changeValueOfNumsys("D")
    }
    else if(name == "e"){
        changeValueOfNumsys("E")
    }
    else if(name == "f"){
        changeValueOfNumsys("F")
    }

    evaluate()

  }, false);

//   Conversion Page

document.getElementById("more").addEventListener("click",()=>{
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "#939393"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("mainCalculator").style.display = "none"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden"

})

document.getElementById("calculatePage").addEventListener("click",()=>{
    document.getElementById("calculatePage").style.color = "#ec6b21"
    document.getElementById("more").style.color = "#939393"
    document.getElementById("conversion").style.display = "none"
    document.getElementById("mainCalculator").style.display = "grid"
    document.getElementById("minimize").style.visibility = "visible"
    document.getElementById("history").style.visibility = "visible"


})

document.getElementById("bmi").addEventListener("click",()=>{
    document.getElementById("conversion").style.display = "none"
    document.getElementById("mainCalculator").style.display = "none"
    document.getElementById("bmiconvertor").style.display = "grid"
    document.getElementById("topOptions").style.display = "none"

})

// BMI conversion 

document.getElementById("weightText").addEventListener("click",()=>{
    document.getElementById("weightOption").style.display = "flex"
    document.getElementById("weightOption").classList.add('displayWeightCard')
    document.getElementById("weightText").style.color = "#ec6b21"
    document.getElementById("heightText").style.color = "#f1f1f1"
    document.getElementById("heightOption").style.display = "none"
    document.getElementById("transparent").style.display = "flex"
})

document.getElementById("heightText").addEventListener("click",()=>{
    document.getElementById("heightText").style.color = "#ec6b21"
    document.getElementById("weightText").style.color = "#f1f1f1"
    document.getElementById("heightOption").style.display = "flex"
    document.getElementById("heightOption").classList.add('displayWeightCard')
    document.getElementById("weightOption").style.display = "none"
    document.getElementById("transparent").style.display = "flex"
})

document.getElementById("transparent").addEventListener("click",()=>{
    document.getElementById("heightOption").style.display = "none"
    document.getElementById("weightOption").style.display = "none"
    document.getElementById("transparent").style.display = "none"
})

for(let i=0;i<=10;i++){
    document.getElementById("BMI"+`${i}`).addEventListener("click",()=>{
        // console.log(i);
        setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("BMI"+`${i}`).style.background  = "none";
        }
        document.getElementById("BMI"+`${i}`).style.backgroundColor = "#898989";

    })
}

enteredInHeight = 0;
BMIweight = ""
BMIheight = ""
if(enteredInHeight==0){
    document.getElementById("BMI0").addEventListener("click",changeValueOfBMI.bind(this,0))
    document.getElementById("BMI1").addEventListener("click",changeValueOfBMI.bind(this,1))
    document.getElementById("BMI2").addEventListener("click",changeValueOfBMI.bind(this,2))
    document.getElementById("BMI3").addEventListener("click",changeValueOfBMI.bind(this,3))
    document.getElementById("BMI4").addEventListener("click",changeValueOfBMI.bind(this,4))
    document.getElementById("BMI5").addEventListener("click",changeValueOfBMI.bind(this,5))
    document.getElementById("BMI6").addEventListener("click",changeValueOfBMI.bind(this,6))
    document.getElementById("BMI7").addEventListener("click",changeValueOfBMI.bind(this,7))
    document.getElementById("BMI8").addEventListener("click",changeValueOfBMI.bind(this,8))
    document.getElementById("BMI9").addEventListener("click",changeValueOfBMI.bind(this,9))
    document.getElementById("BMI10").addEventListener("click",changeValueOfBMI.bind(this,"."))
}
function changeValueOfBMI(weiVal){
    console.log(weiVal);
    if(enteredInHeight==0){
        BMIweight = BMIweight.concat(weiVal)
        console.log("weight : " + BMIweight);
        document.getElementById("unit1value").innerHTML = BMIweight
    }
    else{
        BMIheight = BMIheight.concat(weiVal)
        console.log("height : " + BMIheight);
        document.getElementById("unit2value").innerHTML = BMIheight
    }
    console.log(BMIweight);
}

document.getElementById("unit1value").addEventListener("click",()=>{
    document.getElementById("unit1value").style.color = "#ec6b21"
    document.getElementById("unit2value").style.color = "#f1f1f1"
    enteredInHeight = 0 ;
})
    
document.getElementById("unit2value").addEventListener("click",()=>{
    enteredInHeight = 1;
    document.getElementById("unit2value").style.color = "#ec6b21"
    document.getElementById("unit1value").style.color = "#f1f1f1"

})

document.getElementById("BMIacContainer").addEventListener("click",()=>{
    setTimeout(clickToGray,100)

    function clickToGray(){
        document.getElementById("BMIacContainer").style.background  = "#2d2d2d";
    }
    document.getElementById("BMIacContainer").style.backgroundColor = "#898989";

    if(enteredInHeight==0){
        BMIweight = ""
        document.getElementById("unit1value").innerHTML = "0";
    }
    else{
        BMIheight = ""
        document.getElementById("unit2value").innerHTML = "0";
    }

})

document.getElementById("BMIdelete").addEventListener("click",()=>{
    setTimeout(clickToGray,100)

    function clickToGray(){
        document.getElementById("BMIdelete").style.background  = "#2d2d2d";
    }
    document.getElementById("BMIdelete").style.backgroundColor = "#898989";
    removeFromBMI();
    if(BMIweight=="" && enteredInHeight==0){
        document.getElementById("unit1value").innerHTML = "0";
    }
    if(BMIheight=="" && enteredInHeight==1){
        document.getElementById("unit2value").innerHTML = "0";
    }

})

function removeFromBMI(){
    if(enteredInHeight==0){
        BMIweight = BMIweight.slice(0,-1)
        console.log(BMIweight);
        document.getElementById("unit1value").innerHTML = BMIweight
    }
    else{
        BMIheight = BMIheight.slice(0,-1);
        console.log(BMIheight);
        document.getElementById("unit2value").innerHTML = BMIheight

    }
}
let BMI; 
document.getElementById("BMIGo").addEventListener("click",evaluateBMI);

function evaluateBMI(){
    setTimeout(clickToGray,100)

    function clickToGray(){
        document.getElementById("BMIGo").style.background  = "#2d2d2d";
    }
    document.getElementById("BMIGo").style.backgroundColor = "#898989";

    if(poundschanged==1){
        pounds = BMIweight * 0.453;
        BMIweight = pounds
        console.log(pounds);
    }

    if(feetChange==1){
        console.log(BMIheight);
        BMIheight = BMIheight * 0.3048;
        console.log("feetChange" + BMIheight);
    }
    else if(inchesChanged==1){
        BMIheight = BMIheight * 0.0254;
        console.log("inchesChanged" + BMIheight);
    }
    else if(centimeterChanged==0 || centimeterChanged == 1){
       BMIheight = BMIheight * 0.01;
       console.log("centimeterChanged" + BMIheight);
    }

        let BMI = BMIweight/(BMIheight*BMIheight)
        BMI = BMI.toPrecision(3)
        console.log(BMI);
        document.getElementById("BMIanswer").innerHTML = BMI
    
    if(BMIheight=="0" || BMIweight=="0"){
        document.getElementById("outputCard").style.display = "none"

        document.getElementById("invalidMsg").style.display = "flex"
        setTimeout(DisplayBMIinvalid,1000)
    }
    else{
        if(1<=BMI && BMI<=18.5){
            document.getElementById("BMIlevelAns").innerHTML = "Underweight"
            document.getElementById("BMIlevelAns").style.color = "blue"
            document.getElementById("outputCard").style.display = "flex";
            document.getElementById("bMIinput").style.display = "none";
            document.getElementById("BMIback").style.display = "flex";
        }
        else if(18.5<BMI && BMI<=25){
            document.getElementById("BMIlevelAns").innerHTML = "Normal"
            document.getElementById("BMIlevelAns").style.color = "green"
            document.getElementById("outputCard").style.display = "flex";
            document.getElementById("bMIinput").style.display = "none";
            document.getElementById("BMIback").style.display = "flex";
        }
        else if(25<BMI && BMI<=40){
            document.getElementById("BMIlevelAns").innerHTML = "Overweight"
            document.getElementById("BMIlevelAns").style.color = "red"
            document.getElementById("outputCard").style.display = "flex";
            document.getElementById("bMIinput").style.display = "none";
            document.getElementById("BMIback").style.display = "flex";
        }
        else{
            console.log("Not Valid");
            document.getElementById("outputCard").style.display = "none"
            document.getElementById("invalidMsg").style.display = "flex"
            setTimeout(DisplayBMIinvalid,1000)
        }
    }

   
}

function DisplayBMIinvalid(){
    document.getElementById("invalidMsg").style.display = "none"
}
document.getElementById("BMIback").addEventListener("click",()=>{
    document.getElementById("outputCard").style.display = "none";
    document.getElementById("bMIinput").style.display = "flex";
    document.getElementById("BMIback").style.display = "none";
    BMIheight = ""
    BMIweight = ""

})

document.getElementById("kilogram").addEventListener("click",()=>{
    document.getElementById("unit1").innerHTML = "Kilogram"
    document.getElementById("weightOption").style.display = "none"
})
let poundschanged = 0;
document.getElementById("pounds").addEventListener("click",()=>{
    document.getElementById("unit1").innerHTML = "pounds"
    document.getElementById("weightOption").style.display = "none"
    poundschanged = 1;
})

let centimeterChanged = 0
document.getElementById("centimeter").addEventListener("click",()=>{
    document.getElementById("unit2").innerHTML = "Centimeter"
    document.getElementById("heightOption").style.display = "none"
    centimeterChanged = 1
})
let meterChange = 0
document.getElementById("meter").addEventListener("click",()=>{
    meterChange = 1
    document.getElementById("unit2").innerHTML = "Meter"
    document.getElementById("heightOption").style.display = "none"
})
let feetChange = 0
document.getElementById("feet").addEventListener("click",()=>{
    feetChange = 1
    document.getElementById("unit2").innerHTML = "Feet"
    document.getElementById("heightOption").style.display = "none"
})
let inchesChanged = 0
document.getElementById("inches").addEventListener("click",()=>{
    inchesChanged = 1
    document.getElementById("unit2").innerHTML = "Inches"
    document.getElementById("heightOption").style.display = "none"
})

document.getElementById("BMIbackArrow").addEventListener("click",()=>{
    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden"    
})

// Data convertor

document.getElementById("dataFromText").addEventListener("click",()=>{
    document.getElementById("DataOptionFrom").style.display = "flex"
    document.getElementById("DataOptionFrom").classList.add('displayDataCard')
    document.getElementById("dataFrom").style.color = "#ec6b21"
    document.getElementById("DataTo").style.color = "#f1f1f1"
    document.getElementById("DataOptionTo").style.display = "none"
})

document.getElementById("DataToText").addEventListener("click",()=>{
    document.getElementById("DataTo").style.color = "#ec6b21"
    document.getElementById("dataFrom").style.color = "#f1f1f1"
    document.getElementById("DataOptionTo").style.display = "flex"
    document.getElementById("DataOptionTo").classList.add('displayDataCard')
    document.getElementById("DataOptionFrom").style.display = "none"
})

// document.getElementById("transparent").addEventListener("click",()=>{
//     document.getElementById("heightOption").style.display = "none"
//     document.getElementById("DataOptionFrom").style.display = "none"
//     document.getElementById("transparent").style.display = "none"
// })

for(let i=0;i<=10;i++){
    document.getElementById("Data"+`${i}`).addEventListener("click",()=>{
        // console.log(i);
        setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("Data"+`${i}`).style.background  = "none";
        }
        document.getElementById("Data"+`${i}`).style.backgroundColor = "#898989";

    })
}

let byteFromEntered = 1
let kilobyteFromEntered = 0
let megabyteFromEntered = 0
let gigabyteFromEntered = 0
let terabyteFromEntered = 0
let petaByteFromEntered = 0
let byteToEntered = 0
let kilobyteToEntered = 0
let megabyteToEntered = 1
let gigabyteToEntered = 0
let terabyteToEntered = 0
let petaByteToEntered = 0
document.getElementById("byteFrom").addEventListener("click",()=>{
    document.getElementById("unit1Data").innerHTML = "Byte"
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").innerHTML = "B"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteFromEntered = 1
    kilobyteFromEntered = 0
    megabyteFromEntered = 0
    gigabyteFromEntered = 0
    terabyteFromEntered = 0
    petaByteFromEntered = 0
    evaluateData()
})
document.getElementById("kilobyteFrom").addEventListener("click",()=>{
    document.getElementById("unit1Data").innerHTML = "Kilobyte"
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").innerHTML = "KB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteFromEntered = 0
    kilobyteFromEntered = 1
    megabyteFromEntered = 0
    gigabyteFromEntered = 0
    terabyteFromEntered = 0
    petaByteFromEntered = 0
    evaluateData()
})
document.getElementById("megabyteFrom").addEventListener("click",()=>{
    document.getElementById("unit1Data").innerHTML = "Megabyte"
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").innerHTML = "MB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    megabyteFromEntered = 1
    kilobyteFromEntered = 0
    byteFromEntered = 0
    gigabyteFromEntered = 0
    terabyteFromEntered = 0
    petaByteFromEntered = 0
    evaluateData()
})
document.getElementById("gigabyteFrom").addEventListener("click",()=>{
    document.getElementById("unit1Data").innerHTML = "Gigabyte"
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").innerHTML = "GB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    gigabyteFromEntered = 1
    megabyteFromEntered = 0
    kilobyteFromEntered = 0
    byteFromEntered = 0
    terabyteFromEntered = 0
    petaByteFromEntered = 0
    evaluateData()
})
document.getElementById("terabyteFrom").addEventListener("click",()=>{
    document.getElementById("unit1Data").innerHTML = "Terabyte"
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").innerHTML = "TB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    terabyteFromEntered = 1
    gigabyteFromEntered = 0
    megabyteFromEntered = 0
    kilobyteFromEntered = 0
    byteFromEntered = 0
    petaByteFromEntered = 0
    evaluateData()
})
document.getElementById("petaByteFrom").addEventListener("click",()=>{
    document.getElementById("unit1Data").innerHTML = "PetaByte"
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").innerHTML = "PB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    petaByteFromEntered = 1
    terabyteFromEntered = 0
    gigabyteFromEntered = 0
    megabyteFromEntered = 0
    kilobyteFromEntered = 0
    byteFromEntered = 0
    evaluateData()
})
document.getElementById("cancelFrom").addEventListener("click",()=>{
    document.getElementById("DataOptionFrom").style.display = "none"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
})

document.getElementById("byteTo").addEventListener("click",()=>{
    document.getElementById("unit2Data").innerHTML = "Byte"
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("DataToText").innerHTML = "B"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteToEntered = 1
    kilobyteToEntered = 0
    megabyteToEntered = 0
    gigabyteToEntered = 0
    terabyteToEntered = 0
    petaByteToEntered = 0
    evaluateData()
})
document.getElementById("kilobyteTo").addEventListener("click",()=>{
    document.getElementById("unit2Data").innerHTML = "Kilobyte"
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("DataToText").innerHTML = "KB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteToEntered = 0
    kilobyteToEntered = 1
    megabyteToEntered = 0
    gigabyteToEntered = 0
    terabyteToEntered = 0
    petaByteToEntered = 0
    evaluateData()
})
document.getElementById("megabyteTo").addEventListener("click",()=>{
    document.getElementById("unit2Data").innerHTML = "Megabyte"
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("DataToText").innerHTML = "MB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteToEntered = 0
    kilobyteToEntered = 0
    megabyteToEntered = 1
    gigabyteToEntered = 0
    terabyteToEntered = 0
    petaByteToEntered = 0
    evaluateData()
})
document.getElementById("gigabyteTo").addEventListener("click",()=>{
    document.getElementById("unit2Data").innerHTML = "Gigabyte"
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("DataToText").innerHTML = "GB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteToEntered = 0
    kilobyteToEntered = 0
    megabyteToEntered = 0
    gigabyteToEntered = 1
    terabyteToEntered = 0
    petaByteToEntered = 0
    evaluateData()
})
document.getElementById("terabyteTo").addEventListener("click",()=>{
    document.getElementById("unit2Data").innerHTML = "Terabyte"
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("DataToText").innerHTML = "TB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteToEntered = 0
    kilobyteToEntered = 0
    megabyteToEntered = 0
    gigabyteToEntered = 0
    terabyteToEntered = 1
    petaByteToEntered = 0
    evaluateData()
})
document.getElementById("petaByteTo").addEventListener("click",()=>{
    document.getElementById("unit2Data").innerHTML = "PetaByte"
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("DataToText").innerHTML = "PB"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
    byteToEntered = 0
    kilobyteToEntered = 0
    megabyteToEntered = 0
    gigabyteToEntered = 0
    terabyteToEntered = 0
    petaByteToEntered = 1
    evaluateData()
})
document.getElementById("cancelTo").addEventListener("click",()=>{
    document.getElementById("DataOptionTo").style.display = "none"
    document.getElementById("dataFromText").style.color = "#f1f1f1"
    document.getElementById("DataToText").style.color = "#f1f1f1"
})

let DataTopAns = ""
let DataBottomAns = ""
let valAtBottom 
function evaluateData(){

    if(byteFromEntered == 1 && byteToEntered == 1){
        valAtTop = document.getElementById("Dataunit1value").textContent;
        DataBottomAns = valAtTop
        document.getElementById("Dataunit2value").innerHTML = DataBottomAns

    }
    else if(kilobyteFromEntered == 1 && kilobyteToEntered == 1){
        valAtTop = document.getElementById("Dataunit1value").textContent;
        DataBottomAns = valAtTop
        document.getElementById("Dataunit2value").innerHTML = DataBottomAns
    }
    else if(megabyteFromEntered == 1 && megabyteToEntered == 1){
        valAtTop = document.getElementById("Dataunit1value").textContent;
        DataBottomAns = valAtTop
        document.getElementById("Dataunit2value").innerHTML = DataBottomAns
    }
    else if(gigabyteFromEntered == 1 && gigabyteToEntered == 1){
        valAtTop = document.getElementById("Dataunit1value").textContent;
        DataBottomAns = valAtTop
        document.getElementById("Dataunit2value").innerHTML = DataBottomAns
    }
    else if(terabyteFromEntered == 1 && terabyteToEntered == 1){
        valAtTop = document.getElementById("Dataunit1value").textContent;
        DataBottomAns = valAtTop
        document.getElementById("Dataunit2value").innerHTML = DataBottomAns
    }
    else if(petaByteFromEntered == 1 && petaByteToEntered == 1){
        valAtTop = document.getElementById("Dataunit1value").textContent;
        DataBottomAns = valAtTop
        document.getElementById("Dataunit2value").innerHTML = DataBottomAns
    }
    else if(byteFromEntered == 1 && kilobyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            DataTopAns = eval(valAtBottom + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(byteFromEntered == 1 && megabyteToEntered == 1){

        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
            // console.log(" length :" + DataBottomAns.length);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(byteFromEntered == 1 && gigabyteToEntered == 1){

        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.31322575e-10").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1.073774182e9").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);/
        }
        
    }
    else if(byteFromEntered == 1 && terabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.0949470e-13").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1.09951163e12").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(byteFromEntered == 1 && petaByteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "8.8817842e-16").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1.12589991e15").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(kilobyteFromEntered ==1 && byteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(kilobyteFromEntered == 1 && megabyteToEntered == 1){
        
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(kilobyteFromEntered == 1 && gigabyteToEntered == 1){

        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
      
    }
    else if(kilobyteFromEntered == 1 && terabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.31322575e-10").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1.07374182e9").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
 
    }
    else if(kilobyteFromEntered == 1 && petaByteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.0949470e-13").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1.09951163e12").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(megabyteFromEntered == 1 && byteToEntered == 1){

        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            console.log(valAtTop);
            DataBottomAns = eval(valAtTop + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(megabyteFromEntered == 1 && kilobyteToEntered == 1){

        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(megabyteFromEntered == 1 && gigabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(megabyteFromEntered == 1 && terabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(megabyteFromEntered == 1 && petaByteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.31322575e-10").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1.07374182e9").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(gigabyteFromEntered == 1 && byteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1.07374182e+9").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.31322575e-10").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
     
    }
    else if(gigabyteFromEntered == 1 && kilobyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

        
    }
    else if(gigabyteFromEntered == 1 && megabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
    }
    else if(gigabyteFromEntered == 1 && terabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(gigabyteFromEntered == 1 && petaByteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(terabyteFromEntered == 1 && byteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1.09951163e12").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.09494702e-13").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
    }
    else if(terabyteFromEntered == 1 && kilobyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1.07374182e+9").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.31322575e-10").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(terabyteFromEntered == 1 && megabyteToEntered == 1){

        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
       
    }
    else if(terabyteFromEntered == 1 && gigabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(terabyteFromEntered == 1 && petaByteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
    else if(petaByteFromEntered == 1 && byteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1.12589991e+15").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "8.8817842e-16").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(petaByteFromEntered == 1 && kilobyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1.09951163e12").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.09494702e-13").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(petaByteFromEntered == 1 && megabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1.07374182e+9").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.31322575e-10").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(petaByteFromEntered == 1 && gigabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1048576").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "9.53674316e-7").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }
        
    }
    else if(petaByteFromEntered == 1 && terabyteToEntered == 1){
        if(enteredInDataTo == 0){
            valAtTop = document.getElementById("Dataunit1value").textContent;
            DataBottomAns = eval(valAtTop + "*" + "1024").toExponential(7)
            document.getElementById("Dataunit2value").innerHTML = DataBottomAns
            // console.log(DataBottomAns);
        }
        else{
            valAtBottom = document.getElementById("Dataunit2value").textContent;
            console.log(valAtBottom);
            DataTopAns = eval(valAtBottom + "*" + "0.0009765625").toExponential(7)
            document.getElementById("Dataunit1value").innerHTML = DataTopAns
            // console.log(DataTopAns);
        }

    }
  
}

enteredInDataTo = 0;
DataFrom = ""
DataTo = ""
if(enteredInDataTo==0){
    document.getElementById("Data0").addEventListener("click",changeValueOfData.bind(this,0))
    document.getElementById("Data1").addEventListener("click",changeValueOfData.bind(this,1))
    document.getElementById("Data2").addEventListener("click",changeValueOfData.bind(this,2))
    document.getElementById("Data3").addEventListener("click",changeValueOfData.bind(this,3))
    document.getElementById("Data4").addEventListener("click",changeValueOfData.bind(this,4))
    document.getElementById("Data5").addEventListener("click",changeValueOfData.bind(this,5))
    document.getElementById("Data6").addEventListener("click",changeValueOfData.bind(this,6))
    document.getElementById("Data7").addEventListener("click",changeValueOfData.bind(this,7))
    document.getElementById("Data8").addEventListener("click",changeValueOfData.bind(this,8))
    document.getElementById("Data9").addEventListener("click",changeValueOfData.bind(this,9))
    document.getElementById("Data10").addEventListener("click",changeValueOfData.bind(this,"."))
}
function changeValueOfData(Dataval){
    // console.log(Dataval);
    evaluateData()
    if(enteredInDataTo==0){  
        DataFrom = DataFrom.concat(Dataval)
        // console.log("Top : " + DataFrom);
        document.getElementById("Dataunit1value").innerHTML = DataFrom
        evaluateData()
    }
    else{
        DataTo = DataTo.concat(Dataval)
        // console.log("Bottom : " + DataTo);
        document.getElementById("Dataunit2value").innerHTML = DataTo
        evaluateData()
    }
    
}

document.getElementById("Dataunit2value").addEventListener("click",()=>{
    enteredInDataTo = 1;
    document.getElementById("Dataunit1value").style.color = "#f1f1f1"
    document.getElementById("Dataunit2value").style.color  = "#ec6b21"
})

document.getElementById("Dataunit1value").addEventListener("click",()=>{
    enteredInDataTo = 0;
    document.getElementById("Dataunit2value").style.color = "#f1f1f1"
    document.getElementById("Dataunit1value").style.color  = "#ec6b21"
})

document.getElementById("DataAcContainer").addEventListener("click",()=>{
    document.getElementById("Dataunit1value").innerHTML = "0"
    document.getElementById("Dataunit2value").innerHTML = "0"
    DataFrom = ""
    DataTo = ""

})

document.getElementById("Datadelete").addEventListener("click",()=>{
    DataFrom = DataFrom.slice(0,-1);
    DataTo = DataTo.slice(0,-1);
    console.log("Length of DataFrom : " + DataFrom.length);
    console.log("Length of DataTo : " + DataTo.length);
    if(DataFrom.length == 0 && DataTo.length == 0){
        document.getElementById("Dataunit1value").innerHTML = "0"
        document.getElementById("Dataunit2value").innerHTML = "0"
    }
    else{
        document.getElementById("Dataunit1value").innerHTML  = DataFrom
        document.getElementById("Dataunit2value").innerHTML  = DataTo
        evaluateData()
    }

})

document.getElementById("databackArrow").addEventListener("click",()=>{
    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"  

})

document.getElementById("data").addEventListener("click",()=>{
    document.getElementById("conversion").style.display = "none"
    document.getElementById("mainCalculator").style.display = "none"
    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "none"
    document.getElementById("dataconvertor").style.display = "grid"  
})

// NumberSystem Conversion





document.getElementById("NumsysFromText").addEventListener("click",()=>{
    document.getElementById("NumsysOptionFrom").style.display = "flex"
    document.getElementById("NumsysOptionFrom").classList.add('displayNumsysCard')
    document.getElementById("NumsysFromText").style.color = "#ec6b21"
    document.getElementById("NumsysToText").style.color = "#f1f1f1"
    document.getElementById("NumsysOptionTo").style.display = "none"
})

document.getElementById("NumsysToText").addEventListener("click",()=>{
    document.getElementById("NumsysToText").style.color = "#ec6b21"
    document.getElementById("NumsysFromText").style.color = "#f1f1f1"
    document.getElementById("NumsysOptionTo").style.display = "flex"
    document.getElementById("NumsysOptionTo").classList.add('displayNumsysCard')
    document.getElementById("NumsysOptionFrom").style.display = "none"
})

// document.getElementById("transparent").addEventListener("click",()=>{
//     document.getElementById("heightOption").style.display = "none"
//     document.getElementById("NumsysOptionFrom").style.display = "none"
//     document.getElementById("transparent").style.display = "none"
// })



for(let i=0;i<=10;i++){
    document.getElementById("Numsys"+`${i}`).addEventListener("click",()=>{
        // console.log(i);
        setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("Numsys"+`${i}`).style.background  = "none";
        }
        document.getElementById("Numsys"+`${i}`).style.backgroundColor = "#898989";
        evaluateNumsys()
    })
}
let enteredInNumsysTo = 0 ;
let binFromEntered = 0
let octFromEntered = 0
let hexFromEntered = 1
let decFromEntered = 0 
let binToEntered = 0
let octToEntered = 0
let hexToEntered = 1
let decToEntered = 0 
document.getElementById("binFrom").addEventListener("click",()=>{

    binFromEntered = 1
    octFromEntered = 0
    hexFromEntered = 0
    decFromEntered = 0
    document.getElementById("NumsysFromText").innerHTML = "BIN"
    document.getElementById("NumsysOptionFrom").style.display = "none"
    document.getElementById("NumsysFromText").style.color = "#f1f1f1"
    binTypingBoard();
    evaluateNumsys()

})

function binTypingBoard(){
    if((binFromEntered == 1 && enteredInNumsysTo == 0) || (binToEntered==1 && enteredInNumsysTo==1)){
        document.getElementById("Numsys2").style.pointerEvents = "none"
        document.getElementById("Numsys3").style.pointerEvents = "none"
        document.getElementById("Numsys4").style.pointerEvents = "none"
        document.getElementById("Numsys5").style.pointerEvents = "none"
        document.getElementById("Numsys6").style.pointerEvents = "none"
        document.getElementById("Numsys7").style.pointerEvents = "none"
        document.getElementById("Numsys8").style.pointerEvents = "none"
        document.getElementById("Numsys9").style.pointerEvents = "none"
        document.getElementById("NumsysA").style.pointerEvents = "none"
        document.getElementById("NumsysB").style.pointerEvents = "none"
        document.getElementById("NumsysC").style.pointerEvents = "none"
        document.getElementById("NumsysD").style.pointerEvents = "none"
        document.getElementById("NumsysE").style.pointerEvents = "none"
        document.getElementById("NumsysF").style.pointerEvents = "none"
        document.getElementById("Numsys2").style.color = "#2d2d2d"
        document.getElementById("Numsys3").style.color = "#2d2d2d"
        document.getElementById("Numsys4").style.color = "#2d2d2d"
        document.getElementById("Numsys5").style.color = "#2d2d2d"
        document.getElementById("Numsys6").style.color = "#2d2d2d"
        document.getElementById("Numsys7").style.color = "#2d2d2d"
        document.getElementById("Numsys8").style.color = "#2d2d2d"
        document.getElementById("Numsys9").style.color = "#2d2d2d"
        document.getElementById("NumsysA").style.color = "#2d2d2d"
        document.getElementById("NumsysB").style.color = "#2d2d2d"
        document.getElementById("NumsysC").style.color = "#2d2d2d"
        document.getElementById("NumsysD").style.color = "#2d2d2d"
        document.getElementById("NumsysE").style.color = "#2d2d2d"
        document.getElementById("NumsysF").style.color = "#2d2d2d"
    }
}
document.getElementById("octFrom").addEventListener("click",()=>{

    binFromEntered = 0
    octFromEntered = 1
    hexFromEntered = 0
    decFromEntered = 0
    console.log("OctFrom == "+ octFromEntered + "enteredInNumsysTo" + enteredInNumsysTo);
    document.getElementById("NumsysFromText").innerHTML = "OCT"
    document.getElementById("NumsysOptionFrom").style.display = "none"
    document.getElementById("NumsysFromText").style.color = "#f1f1f1"
    octTypingBoard();
    evaluateNumsys()

})

function octTypingBoard(){
    if((octFromEntered == 1 && enteredInNumsysTo == 0) || (octToEntered==1 && enteredInNumsysTo==1)){
            console.log("vanthu tan");
            document.getElementById("Numsys2").style.pointerEvents = "visible"
            document.getElementById("Numsys3").style.pointerEvents = "visible"
            document.getElementById("Numsys4").style.pointerEvents = "visible"
            document.getElementById("Numsys5").style.pointerEvents = "visible"
            document.getElementById("Numsys6").style.pointerEvents = "visible"
            document.getElementById("Numsys7").style.pointerEvents = "visible"
            document.getElementById("Numsys8").style.pointerEvents = "none"
            document.getElementById("Numsys9").style.pointerEvents = "none"
            document.getElementById("NumsysA").style.pointerEvents = "none"
            document.getElementById("NumsysB").style.pointerEvents = "none"
            document.getElementById("NumsysC").style.pointerEvents = "none"
            document.getElementById("NumsysD").style.pointerEvents = "none"
            document.getElementById("NumsysE").style.pointerEvents = "none"
            document.getElementById("NumsysF").style.pointerEvents = "none"
            document.getElementById("Numsys2").style.color = "white"
            document.getElementById("Numsys3").style.color = "white"
            document.getElementById("Numsys4").style.color = "white"
            document.getElementById("Numsys5").style.color = "white"
            document.getElementById("Numsys6").style.color = "white"
            document.getElementById("Numsys7").style.color = "white"
            document.getElementById("Numsys8").style.color = "#2d2d2d"
            document.getElementById("Numsys9").style.color = "#2d2d2d"
            document.getElementById("NumsysA").style.color = "#2d2d2d"
            document.getElementById("NumsysB").style.color = "#2d2d2d"
            document.getElementById("NumsysC").style.color = "#2d2d2d"
            document.getElementById("NumsysD").style.color = "#2d2d2d"
            document.getElementById("NumsysE").style.color = "#2d2d2d"
            document.getElementById("NumsysF").style.color = "#2d2d2d"
    }
}
document.getElementById("decFrom").addEventListener("click",()=>{

    binFromEntered = 0
    octFromEntered = 0
    hexFromEntered = 0
    decFromEntered = 1
    document.getElementById("NumsysFromText").innerHTML = "DEC"
    document.getElementById("NumsysOptionFrom").style.display = "none"
    document.getElementById("NumsysFromText").style.color = "#f1f1f1"
    decTypingBoard();
    evaluateNumsys()
})
function decTypingBoard(){

    if((decFromEntered == 1 && enteredInNumsysTo == 0) || (decToEntered==1 && enteredInNumsysTo==1)){
        document.getElementById("Numsys2").style.pointerEvents = "visible"
        document.getElementById("Numsys3").style.pointerEvents = "visible"
        document.getElementById("Numsys4").style.pointerEvents = "visible"
        document.getElementById("Numsys5").style.pointerEvents = "visible"
        document.getElementById("Numsys6").style.pointerEvents = "visible"
        document.getElementById("Numsys7").style.pointerEvents = "visible"
        document.getElementById("Numsys8").style.pointerEvents = "visible"
        document.getElementById("Numsys9").style.pointerEvents = "visible"
        document.getElementById("NumsysA").style.pointerEvents = "none"
        document.getElementById("NumsysB").style.pointerEvents = "none"
        document.getElementById("NumsysC").style.pointerEvents = "none"
        document.getElementById("NumsysD").style.pointerEvents = "none"
        document.getElementById("NumsysE").style.pointerEvents = "none"
        document.getElementById("NumsysF").style.pointerEvents = "none"
        document.getElementById("Numsys2").style.color = "white"
        document.getElementById("Numsys3").style.color = "white"
        document.getElementById("Numsys4").style.color = "white"
        document.getElementById("Numsys5").style.color = "white"
        document.getElementById("Numsys6").style.color = "white"
        document.getElementById("Numsys7").style.color = "white"
        document.getElementById("Numsys8").style.color = "white"
        document.getElementById("Numsys9").style.color = "white"
        document.getElementById("NumsysA").style.color = "#2d2d2d"
        document.getElementById("NumsysB").style.color = "#2d2d2d"
        document.getElementById("NumsysC").style.color = "#2d2d2d"
        document.getElementById("NumsysD").style.color = "#2d2d2d"
        document.getElementById("NumsysE").style.color = "#2d2d2d"
        document.getElementById("NumsysF").style.color = "#2d2d2d"
    }
}
document.getElementById("hexFrom").addEventListener("click",()=>{

    binFromEntered = 0
    octFromEntered = 0
    hexFromEntered = 1
    decFromEntered = 0
   
    document.getElementById("NumsysFromText").innerHTML = "HEX"
    document.getElementById("NumsysOptionFrom").style.display = "none"
    document.getElementById("NumsysFromText").style.color = "#f1f1f1"
    hexTypingBoard();
    evaluateNumsys()

})

function hexTypingBoard(){

    if((hexFromEntered == 1 && enteredInNumsysTo == 0) || (hexToEntered==1 && enteredInNumsysTo==1)){
        document.getElementById("Numsys2").style.pointerEvents = "visible"
        document.getElementById("Numsys3").style.pointerEvents = "visible"
        document.getElementById("Numsys4").style.pointerEvents = "visible"
        document.getElementById("Numsys5").style.pointerEvents = "visible"
        document.getElementById("Numsys6").style.pointerEvents = "visible"
        document.getElementById("Numsys7").style.pointerEvents = "visible"
        document.getElementById("Numsys8").style.pointerEvents = "visible"
        document.getElementById("Numsys9").style.pointerEvents = "visible"
        document.getElementById("NumsysA").style.pointerEvents = "visible"
        document.getElementById("NumsysB").style.pointerEvents = "visible"
        document.getElementById("NumsysC").style.pointerEvents = "visible"
        document.getElementById("NumsysD").style.pointerEvents = "visible"
        document.getElementById("NumsysE").style.pointerEvents = "visible"
        document.getElementById("NumsysF").style.pointerEvents = "visible"
        document.getElementById("Numsys2").style.color = "white"
        document.getElementById("Numsys3").style.color = "white"
        document.getElementById("Numsys4").style.color = "white"
        document.getElementById("Numsys5").style.color = "white"
        document.getElementById("Numsys6").style.color = "white"
        document.getElementById("Numsys7").style.color = "white"
        document.getElementById("Numsys8").style.color = "white"
        document.getElementById("Numsys9").style.color = "white"
        document.getElementById("NumsysA").style.color = "white"
        document.getElementById("NumsysB").style.color = "white"
        document.getElementById("NumsysC").style.color = "white"
        document.getElementById("NumsysD").style.color = "white"
        document.getElementById("NumsysE").style.color = "white"
        document.getElementById("NumsysF").style.color = "white"
    }
}
document.getElementById("binTo").addEventListener("click",()=>{

    binToEntered = 1
    octToEntered = 0
    hexToEntered = 0
    decToEntered = 0
    document.getElementById("NumsysToText").innerHTML = "BIN"
    document.getElementById("NumsysOptionTo").style.display = "none"
    document.getElementById("NumsysToText").style.color = "#f1f1f1"
    binTypingBoard();
    evaluateNumsys()

})
document.getElementById("octTo").addEventListener("click",()=>{

    binToEntered = 0
    octToEntered = 1
    hexToEntered = 0
    decToEntered = 0
    octTypingBoard();
    document.getElementById("NumsysToText").innerHTML = "OCT"
    document.getElementById("NumsysOptionTo").style.display = "none"
    document.getElementById("NumsysToText").style.color = "#f1f1f1"
    evaluateNumsys()

})
document.getElementById("decTo").addEventListener("click",()=>{

    binToEntered = 0
    octToEntered = 0
    hexToEntered = 0
    decToEntered = 1
    document.getElementById("NumsysToText").innerHTML = "DEC"
    document.getElementById("NumsysOptionTo").style.display = "none"
    document.getElementById("NumsysToText").style.color = "#f1f1f1"
    decTypingBoard();
    evaluateNumsys()

})
document.getElementById("hexTo").addEventListener("click",()=>{

    binToEntered = 0
    octToEntered = 0
    hexToEntered = 1
    decToEntered = 0
    document.getElementById("NumsysToText").innerHTML = "HEX"
    document.getElementById("NumsysOptionTo").style.display = "none"
    document.getElementById("NumsysToText").style.color = "#f1f1f1"
    hexTypingBoard();
    evaluateNumsys()

})

    document.getElementById("Numsys0").addEventListener("click",changeValueOfNumsys.bind(this,0))
    document.getElementById("Numsys1").addEventListener("click",changeValueOfNumsys.bind(this,1))
    document.getElementById("Numsys2").addEventListener("click",changeValueOfNumsys.bind(this,2))
    document.getElementById("Numsys3").addEventListener("click",changeValueOfNumsys.bind(this,3))
    document.getElementById("Numsys4").addEventListener("click",changeValueOfNumsys.bind(this,4))
    document.getElementById("Numsys5").addEventListener("click",changeValueOfNumsys.bind(this,5))
    document.getElementById("Numsys6").addEventListener("click",changeValueOfNumsys.bind(this,6))
    document.getElementById("Numsys7").addEventListener("click",changeValueOfNumsys.bind(this,7))
    document.getElementById("Numsys8").addEventListener("click",changeValueOfNumsys.bind(this,8))
    document.getElementById("Numsys9").addEventListener("click",changeValueOfNumsys.bind(this,9))
    document.getElementById("Numsys10").addEventListener("click",changeValueOfNumsys.bind(this,"."))
    document.getElementById("NumsysA").addEventListener("click",changeValueOfNumsys.bind(this,'A'))
    document.getElementById("NumsysB").addEventListener("click",changeValueOfNumsys.bind(this,'B'))
    document.getElementById("NumsysC").addEventListener("click",changeValueOfNumsys.bind(this,'C'))
    document.getElementById("NumsysD").addEventListener("click",changeValueOfNumsys.bind(this,'D'))
    document.getElementById("NumsysE").addEventListener("click",changeValueOfNumsys.bind(this,'E'))
    document.getElementById("NumsysF").addEventListener("click",changeValueOfNumsys.bind(this,'F'))

let NumsysFrom = ""
let NumsysTo = ""
let binTopValue 
let octTopValue
let hexTopValue
let decTopValue
let binBottomValue 
let octBottomValue
let hexBottomValue
let decBottomValue

function evaluateNumsys(){

    if(binFromEntered == 1 && binToEntered == 1){
        if(enteredInNumsysTo == 0){
            binTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(binTopValue);
            document.getElementById("Numsysunit2value").innerHTML = parseInt(binTopValue,10)
        }
        else{
            binBottomValue = document.getElementById("Numsysunit2value").textContent
            console.log(binBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =parseInt(binBottomValue,10)
        }

    }
    else if(octFromEntered == 1 && octToEntered == 1){
        if(enteredInNumsysTo == 0){
            octTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(octTopValue);
            document.getElementById("Numsysunit2value").innerHTML = octTopValue
        }
        else{
            octBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(octBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = octBottomValue
        }
    }
    else if(hexFromEntered == 1 && hexToEntered == 1){
        if(enteredInNumsysTo == 0){
            hexTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(hexTopValue);
            document.getElementById("Numsysunit2value").innerHTML = hexTopValue         
        }
        else{
            hexBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(hexBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = hexBottomValue         
        }

    }
    else if(decFromEntered == 1 && decToEntered == 1){
        if(enteredInNumsysTo == 0){
            decTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(decTopValue);
            document.getElementById("Numsysunit2value").innerHTML = decTopValue
        }
        else{
            decBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(decBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = decBottomValue
        }
        
    }
    else if(binFromEntered == 1 && octToEntered == 1){
        if(enteredInNumsysTo == 0){
            binTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(binTopValue);
            octal = parseInt(binTopValue,2).toString(8);
            console.log(octal)
            document.getElementById("Numsysunit2value").innerHTML = octal
        }
        else{
            octBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(octBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =parseInt(OctToBin(octBottomValue),10)
        }
    }
    else if(binFromEntered == 1 && decToEntered == 1){
        if(enteredInNumsysTo == 0){
            binTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(binTopValue);
            decimal = parseInt(binTopValue,2);
            document.getElementById("Numsysunit2value").innerHTML = decimal
        }
        else{
            decBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(decBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = parseInt((decBottomValue >>> 0).toString(2),10)
        }

    }
    else if(binFromEntered == 1 && hexToEntered == 1){

        if(enteredInNumsysTo == 0){
            binTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(binTopValue);
            hexadecimal = parseInt(binTopValue,2).toString(16);
            document.getElementById("Numsysunit2value").innerHTML = hexadecimal 
        }
        else{
            hexBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(hexBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =  parseInt(("00000000" + (parseInt(hexBottomValue, 16)).toString(2)),10)
        }

    }
    else if(octFromEntered == 1 && binToEntered == 1){
        if(enteredInNumsysTo == 0){
            octTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(octTopValue);
            document.getElementById("Numsysunit2value").innerHTML = parseInt(OctToBin(octTopValue),10)
        }
        else{
            binBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(binBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =  parseInt(binBottomValue,2).toString(8);
        }

    }
    else if(octFromEntered == 1 && decToEntered == 1){

        if(enteredInNumsysTo == 0){
            octTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(octTopValue);
            document.getElementById("Numsysunit2value").innerHTML = octalToDecimal(octTopValue)
        }
        else{
            decBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(decBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = parseInt(decBottomValue).toString(8)
        }
        
    }
    else if(octFromEntered == 1 && hexToEntered == 1){

        if(enteredInNumsysTo == 0){
            octTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(octTopValue);
            document.getElementById("Numsysunit2value").innerHTML = OctalToHexadecimal(octTopValue.trim())
        }
        else{
            hexBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(hexBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =  hex_to_oct(hexBottomValue)
        }

    }
    else if(decFromEntered == 1 && binToEntered == 1){

        if(enteredInNumsysTo == 0){
            decTopValue = document.getElementById("Numsysunit1value").textContent;
            decTopValue = (decTopValue >>> 0).toString(2)
            console.log(decTopValue);
            document.getElementById("Numsysunit2value").innerHTML = parseInt(decTopValue,10)
        }
        else{
            binBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(binBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =  parseInt(binBottomValue,2);
        }

    }
    else if(decFromEntered == 1 && octToEntered == 1){
        if(enteredInNumsysTo == 0){
            decTopValue = document.getElementById("Numsysunit1value").textContent;
            decTopValue =parseInt(decTopValue).toString(8)
            console.log(decTopValue);
            document.getElementById("Numsysunit2value").innerHTML = decTopValue
        }
        else{
            octBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(octBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =  octalToDecimal(octBottomValue)
        }

    }
    else if(decFromEntered == 1 && hexToEntered == 1){

        if(enteredInNumsysTo == 0){
            decTopValue = document.getElementById("Numsysunit1value").textContent;
            decTopValue = parseInt(decTopValue).toString(16)
            console.log(decTopValue);
            document.getElementById("Numsysunit2value").innerHTML = decTopValue
        }
        else{
            hexBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(hexBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = parseInt(hexBottomValue, 16);
        }

    }
    else if(hexFromEntered == 1 && binToEntered == 1){
        
        if(enteredInNumsysTo == 0){
            hexTopValue = document.getElementById("Numsysunit1value").textContent;
            hexTopValue = ("00000000" + (parseInt(hexTopValue, 16)).toString(2))
            console.log(hexTopValue);
            document.getElementById("Numsysunit2value").innerHTML = parseInt(hexTopValue,10)
        }
        else{
            binBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(binBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = parseInt(binBottomValue,2).toString(16)
        }

    }
    else if(hexFromEntered == 1 && octToEntered == 1){
        if(enteredInNumsysTo == 0){
            hexTopValue = document.getElementById("Numsysunit1value").textContent;
            console.log(hexTopValue);
            document.getElementById("Numsysunit2value").innerHTML = hex_to_oct(hexTopValue)
        }
        else{
            octBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(octBottomValue);
            document.getElementById("Numsysunit1value").innerHTML =  OctalToHexadecimal(octBottomValue)
        }

    }
    else if(hexFromEntered == 1 && decToEntered == 1){

        if(enteredInNumsysTo == 0){
            hexTopValue = document.getElementById("Numsysunit1value").textContent;
            hexTopValue = parseInt(hexTopValue, 16);
            console.log(hexTopValue);
            document.getElementById("Numsysunit2value").innerHTML = hexTopValue
        }
        else{
            decBottomValue = document.getElementById("Numsysunit2value").textContent;
            console.log(decBottomValue);
            document.getElementById("Numsysunit1value").innerHTML = parseInt(decBottomValue).toString(16)
        }
        
    }

}

function hex_to_oct(hex_num) {
    // Dictionary containing hexadecimal to decimal conversion
    if(hex_num==0){
        return 0;
    }
    const hex_to_dec_dict = {
        '0': 0, '1': 1, '2': 2, '3': 3,
        '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9, 'A': 10, 'B': 11,
        'C': 12, 'D': 13, 'E': 14, 'F': 15
    };
    // Converting hexadecimal number to decimal
    let decimal_num = 0;
    for (let i = 0; i < hex_num.length; i++) {
        decimal_num = decimal_num * 16 + hex_to_dec_dict[hex_num[i]];
    }
    // Converting decimal number to octal
    let octal_num = '';
    while (decimal_num > 0) {
        let octal_digit = decimal_num % 8;
        octal_num = octal_digit.toString() + octal_num;
        decimal_num = Math.floor(decimal_num / 8);
    }
    return octal_num;
}
 

function OctToBin(octnum)
{
    let i = 0;
   
    let binary = "";
      
    while (i<octnum.length) {
          
        let c=octnum[i];
        switch (c) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "001";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        default:
            // document.write( "<br>Invalid Octal Digit "+ octnum[i]);
            break;
        }
        i++;
    }
    
    return binary;
}

function octalToDecimal(n)  
{  
    let num = n;  
    let dec_value = 0;  
    // Initializing base value to 1, i.e 8^0  
    let base = 1;  
  
    let temp = num;  
    while (temp) {  
  
        // Extracting last digit  
        let last_digit = temp % 10;  
        temp = Math.floor(temp / 10);  
  
        // Multiplying last digit with appropriate  
        // base value and adding it to dec_value  
        dec_value += last_digit * base;  
  
        base = base * 8;  
    }  
  
    return dec_value;  
} 

function OctalToHexadecimal(n) {
    // Lookup table for hexadecimal values
    console.log(n);
    if(n==0){
        return 0;
    }
    const hexLookupTable = {
        0: '0', 1: '1', 2: '2', 3: '3',
        4: '4', 5: '5', 6: '6', 7: '7',
        8: '8', 9: '9', 10: 'A', 11: 'B',
        12: 'C', 13: 'D', 14: 'E', 15: 'F'
    };
 
    // Convert octal to decimal
    let decimalNum = 0;
    let baseVal = 1;
    while (n > 0) {
        let rem = n % 10;
        decimalNum += rem * baseVal;
        n = Math.floor(n / 10);
        baseVal *= 8;
    }
 
    // Convert decimal to hexadecimal
    let hexadecimal = "";
    while (decimalNum > 0) {
        let rem = decimalNum % 16;
        hexadecimal = hexLookupTable[rem] + hexadecimal;
        decimalNum = Math.floor(decimalNum / 16);
    }
    console.log(hexadecimal);
    return hexadecimal;
}

function changeValueOfNumsys(NumVal){
    console.log(NumVal);
    evaluateNumsys()
    if(enteredInNumsysTo==0){  
        NumsysFrom = NumsysFrom.concat(NumVal)
        console.log("Top : " + NumsysFrom);
        document.getElementById("Numsysunit1value").innerHTML = NumsysFrom
        evaluateNumsys()
    }
    else{
        NumsysTo = NumsysTo.concat(NumVal)
        console.log("Bottom : " + NumsysTo);
        document.getElementById("Numsysunit2value").innerHTML = NumsysTo
        evaluateNumsys()
    }

}

document.getElementById("Numsysunit1value").addEventListener("click",()=>{
    enteredInNumsysTo = 0;
    document.getElementById("Numsysunit2value").style.color = "#f1f1f1"
    document.getElementById("Numsysunit1value").style.color = "#ec6b21"
})

document.getElementById("Numsysunit2value").addEventListener("click",()=>{
    enteredInNumsysTo = 1;
    octTypingBoard()
    binTypingBoard()
    decTypingBoard();
    hexTypingBoard();

    document.getElementById("Numsysunit1value").style.color = "#f1f1f1"
    document.getElementById("Numsysunit2value").style.color = "#ec6b21"
})

document.getElementById("NumsysAcContainer").addEventListener("click",()=>{

    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysAcContainer").style.background  = "none";
        }
        document.getElementById("NumsysAcContainer").style.backgroundColor = "#898989";
        document.getElementById("Numsysunit1value").innerHTML = "0"
        document.getElementById("Numsysunit2value").innerHTML = "0"
        NumsysFrom = ""
        NumsysTo = ""
})

document.getElementById("Numsysdelete").addEventListener("click",()=>{

    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("Numsysdelete").style.background  = "none";
        }
        document.getElementById("Numsysdelete").style.backgroundColor = "#898989";

        
            NumsysFrom = NumsysFrom.slice(0,-1);
            NumsysTo = NumsysTo.slice(0,-1);
            if(NumsysFrom == "" && NumsysTo == ""){
                document.getElementById("Numsysunit1value").innerHTML = "0"
            document.getElementById("Numsysunit2value").innerHTML = "0"
            }
            else{
                document.getElementById("Numsysunit1value").innerHTML = NumsysFrom
                document.getElementById("Numsysunit2value").innerHTML = NumsysTo
            }
            evaluateNumsys()
})

document.getElementById("NumsysF").addEventListener("click",()=>{

    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysF").style.background  = "none";
        }
        document.getElementById("NumsysF").style.backgroundColor = "#898989";
    evaluateNumsys();


})

document.getElementById("NumsysA").addEventListener("click",()=>{

    evaluateNumsys();
    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysA").style.background  = "none";
        }
        document.getElementById("NumsysA").style.backgroundColor = "#898989";

})

document.getElementById("NumsysB").addEventListener("click",()=>{

    evaluateNumsys()
    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysB").style.background  = "none";
        }
        document.getElementById("NumsysB").style.backgroundColor = "#898989";
})

document.getElementById("NumsysC").addEventListener("click",()=>{
    evaluateNumsys()
    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysC").style.background  = "none";
        }
        document.getElementById("NumsysC").style.backgroundColor = "#898989";
})

document.getElementById("NumsysD").addEventListener("click",()=>{

    evaluateNumsys()
    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysD").style.background  = "none";
        }
        document.getElementById("NumsysD").style.backgroundColor = "#898989";
})

document.getElementById("NumsysE").addEventListener("click",()=>{

    evaluateNumsys()
    setTimeout(clickToGray,100)

        function clickToGray(){
            document.getElementById("NumsysE").style.background  = "none";
        }
        document.getElementById("NumsysE").style.backgroundColor = "#898989";
})

document.getElementById("NumSysbackArrow").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("NumberalSystemconvertor").style.display = "none"

})

document.getElementById("numeralSystem").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "none"
    document.getElementById("topOptions").style.display = "none"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("NumberalSystemconvertor").style.display = "grid"

})

// Temperature Conversions 

document.getElementById("TempFrom").addEventListener("click",()=>{

    document.getElementById("TempOptionFrom").style.display = "flex"
    document.getElementById("TempOptionFrom").classList.add('displayTempCard')
    document.getElementById("TempFromText").style.color = "#ec6b21"
    document.getElementById("TempdegreeFrom").style.color = "#ec6b21"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdownArrow1").style.color = "#f1f1f1"
    document.getElementById("TempOptionTo").style.display = "none"
})

document.getElementById("TempTo").addEventListener("click",()=>{
    
    document.getElementById("TempOptionTo").style.display = "flex"
    document.getElementById("TempOptionTo").classList.add('displayTempCard')
    document.getElementById("TempToText").style.color = "#ec6b21"
    document.getElementById("TempdegreeTo").style.color = "#ec6b21"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempdownArrow2").style.color = "#f1f1f1"

})

// document.getElementById("transparent").addEventListener("click",()=>{
//     document.getElementById("heightOption").style.display = "none"
//     document.getElementById("TempOptionTo").style.display = "none"
//     document.getElementById("transparent").style.display = "none"
// })

document.getElementById("Tempunit2value").addEventListener("click",()=>{
    enteredInTempTo = 1
    document.getElementById("Tempunit2value").style.color = "#ec6b21"
    document.getElementById("Tempunit1value").style.color = "#f1f1f1"
})

document.getElementById("Tempunit1value").addEventListener("click",()=>{
    enteredInTempTo = 0
    document.getElementById("Tempunit1value").style.color = "#ec6b21"
    document.getElementById("Tempunit2value").style.color = "#f1f1f1"
})

let enteredInTempTo = 0

let CelsiusFromEntered = 1
let FahrenheitFromEntered = 0;
let KelvinFromEntered = 0
let RankineFromEntered = 0
let ReaumurFromEntered = 0
let CelsiusToEntered = 0
let FahrenheitToEntered = 1
let KelvinToEntered = 0
let RankineToEntered = 0
let ReaumurToEntered = 0

document.getElementById("CelsiusFrom").addEventListener("click",()=>{
    CelsiusFromEntered = 1
    FahrenheitFromEntered = 0
    KelvinFromEntered = 0
    RankineFromEntered = 0
    ReaumurFromEntered = 0
    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("unit1Temp").innerHTML = "Celsius"
    document.getElementById("TempFromText").innerHTML = "C"
    document.getElementById("TempdegreeFrom").innerHTML = "o"
    document.getElementById("TempdegreeFrom").style.color = "#f1f1f1"

    evaluateTemp()


})

document.getElementById("FahrenheitFrom").addEventListener("click",()=>{

    CelsiusFromEntered = 0
    FahrenheitFromEntered = 1;
    KelvinFromEntered = 0
    RankineFromEntered = 0
    ReaumurFromEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("unit1Temp").innerHTML = "Fahrenheit"
    document.getElementById("TempdegreeFrom").style.color = "#f1f1f1"
    document.getElementById("TempFromText").innerHTML = "F"
    document.getElementById("TempdegreeFrom").innerHTML = "o"

    evaluateTemp()
})

document.getElementById("KelvinFrom").addEventListener("click",()=>{

    CelsiusFromEntered = 0
    FahrenheitFromEntered = 0;
    KelvinFromEntered = 1
    RankineFromEntered = 0
    ReaumurFromEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("unit1Temp").innerHTML = "Kelvin"
    document.getElementById("TempdegreeFrom").style.color = "#f1f1f1"
    document.getElementById("TempFromText").innerHTML = "K"
    document.getElementById("TempdegreeFrom").innerHTML = ""

    evaluateTemp()
})

document.getElementById("RankineFrom").addEventListener("click",()=>{

    CelsiusFromEntered = 0
    FahrenheitFromEntered = 0;
    KelvinFromEntered = 0
    RankineFromEntered = 1
    ReaumurFromEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("unit1Temp").innerHTML = "Rankine"
    document.getElementById("TempdegreeFrom").style.color = "#f1f1f1"
    document.getElementById("TempFromText").innerHTML = "R"
    document.getElementById("TempdegreeFrom").innerHTML = "o"

    evaluateTemp()
})
document.getElementById("ReaumurFrom").addEventListener("click",()=>{

    CelsiusFromEntered = 0
    FahrenheitFromEntered = 0;
    KelvinFromEntered = 0
    RankineFromEntered = 0
    ReaumurFromEntered = 1

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("unit1Temp").innerHTML = "Reaumur"
    document.getElementById("TempdegreeFrom").style.color = "#f1f1f1"
    document.getElementById("TempFromText").innerHTML = "Re"
    document.getElementById("TempdegreeFrom").innerHTML = "o"

    evaluateTemp()

})
document.getElementById("tempcancelFrom").addEventListener("click",()=>{
    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempFromText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeFrom").style.color = "#f1f1f1"
})

document.getElementById("CelsiusTo").addEventListener("click",()=>{

    CelsiusToEntered = 1
    FahrenheitToEntered = 0
    KelvinToEntered = 0
    RankineToEntered = 0
    ReaumurToEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeTo").style.color = "#f1f1f1"
    document.getElementById("unit2Temp").innerHTML = "Celsius"
    document.getElementById("TempToText").innerHTML = "C"
    document.getElementById("TempdegreeTo").innerHTML = "o"

    evaluateTemp()
})

document.getElementById("FahrenheitTo").addEventListener("click",()=>{

    CelsiusToEntered = 0
    FahrenheitToEntered = 1
    KelvinToEntered = 0
    RankineToEntered = 0
    ReaumurToEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeTo").style.color = "#f1f1f1"
    document.getElementById("unit2Temp").innerHTML = "Fahrenheit"
    document.getElementById("TempToText").innerHTML = "F"
    document.getElementById("TempdegreeTo").innerHTML = "o"
    evaluateTemp()

})

document.getElementById("KelvinTo").addEventListener("click",()=>{

    CelsiusToEntered = 0
    FahrenheitToEntered = 0
    KelvinToEntered = 1
    RankineToEntered = 0
    ReaumurToEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeTo").style.color = "#f1f1f1"
    document.getElementById("unit2Temp").innerHTML = "Kelvin"
    document.getElementById("TempToText").innerHTML = "K"
    document.getElementById("TempdegreeTo").innerHTML = ""
    evaluateTemp()

})

document.getElementById("RankineTo").addEventListener("click",()=>{

    CelsiusToEntered = 0
    FahrenheitToEntered = 0
    KelvinToEntered = 0
    RankineToEntered = 1
    ReaumurToEntered = 0

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeTo").style.color = "#f1f1f1"
    document.getElementById("unit2Temp").innerHTML = "Rankine"
    document.getElementById("TempToText").innerHTML = "R"
    document.getElementById("TempdegreeTo").innerHTML = "o"

    evaluateTemp()

})
document.getElementById("ReaumurTo").addEventListener("click",()=>{

    CelsiusToEntered = 0
    FahrenheitToEntered = 0
    KelvinToEntered = 0
    RankineToEntered = 0
    ReaumurToEntered = 1

    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeTo").style.color = "#f1f1f1"
    document.getElementById("unit2Temp").innerHTML = "Reaumur"
    document.getElementById("TempToText").innerHTML = "Re"
    document.getElementById("TempdegreeTo").innerHTML = "o"
    evaluateTemp()

})
document.getElementById("tempcancelTo").addEventListener("click",()=>{
    document.getElementById("TempOptionFrom").style.display = "none"
    document.getElementById("TempOptionTo").style.display = "none"
    document.getElementById("TempToText").style.color = "#f1f1f1"
    document.getElementById("TempdegreeTo").style.color = "#f1f1f1"
    
})

// TempPlusOrMinusEntered = 0;

document.getElementById("TempPlusOrMinus").addEventListener("click",()=>{
    // TempPlusOrMinusEntered = 1;
    console.log("yes im in");
    if(enteredInTempTo == 0){

        verifySign1 = document.getElementById("Tempunit1value").textContent;
        console.log(verifySign1);

        if(verifySign1 == 0){
            document.getElementById("Tempunit1value").innerHTML = "0"
        }
        else if(verifySign1 > 0){
            minusSign = "-";
            TempFrom = minusSign.concat(TempFrom);
            document.getElementById("Tempunit1value").innerHTML = TempFrom
        }
        else{
            TempFrom = TempFrom.slice(1,TempFrom.length+1);
            document.getElementById("Tempunit1value").innerHTML = TempFrom
        }
        evaluateTemp()

    }
    else{

        verifySign2 = document.getElementById("Tempunit2value").textContent;
        console.log(verifySign2);
        
        if(verifySign2 == 0){
            console.log("vaaaaa.......");
            document.getElementById("Tempunit2value").innerHTML = 0
        }
        else if(verifySign2 > 0){
            minusSign = "-";
            TempTo = minusSign.concat(TempTo);
            document.getElementById("Tempunit2value").innerHTML = TempTo
        }
        else{
            TempTo = TempTo.slice(1,TempTo.length+1);
            document.getElementById("Tempunit2value").innerHTML = TempTo
        }
        evaluateTemp()
    }

})

    document.getElementById("Temp0").addEventListener("click",changeValueOfTemp.bind(this,0))
    document.getElementById("Temp1").addEventListener("click",changeValueOfTemp.bind(this,1))
    document.getElementById("Temp2").addEventListener("click",changeValueOfTemp.bind(this,2))
    document.getElementById("Temp3").addEventListener("click",changeValueOfTemp.bind(this,3))
    document.getElementById("Temp4").addEventListener("click",changeValueOfTemp.bind(this,4))
    document.getElementById("Temp5").addEventListener("click",changeValueOfTemp.bind(this,5))
    document.getElementById("Temp6").addEventListener("click",changeValueOfTemp.bind(this,6))
    document.getElementById("Temp7").addEventListener("click",changeValueOfTemp.bind(this,7))
    document.getElementById("Temp8").addEventListener("click",changeValueOfTemp.bind(this,8))
    document.getElementById("Temp9").addEventListener("click",changeValueOfTemp.bind(this,9))
    document.getElementById("Temp10").addEventListener("click",changeValueOfTemp.bind(this,"."))

function changeValueOfTemp(TempVal){
    console.log(TempVal);
    evaluateTemp()
   if(enteredInTempTo==0){  
        TempFrom = TempFrom.concat(TempVal)
        console.log("Top : " + TempFrom);
        document.getElementById("Tempunit1value").innerHTML = TempFrom
        evaluateTemp()
    }
    else{
        TempTo = TempTo.concat(TempVal)
        console.log("Bottom : " + TempTo);
        document.getElementById("Tempunit2value").innerHTML = TempTo
        evaluateTemp()
    }
}

let TempFrom = ""
let TempTo = ""
let TempTopAns = ""
let TempBottomAns = ""
let valAtTopTemp = ""
let valAtBottomTemp = ""

function evaluateTemp(){

    if(CelsiusFromEntered ==  1 && CelsiusToEntered == 1){
        valAtTopTemp = document.getElementById("Tempunit1value").textContent;
        TempBottomAns = valAtTopTemp
        document.getElementById("Tempunit2value").innerHTML = TempBottomAns
    }
    else if(FahrenheitFromEntered ==  1 && FahrenheitToEntered == 1){
        valAtTopTemp = document.getElementById("Tempunit1value").textContent;
        TempBottomAns = valAtTopTemp
        document.getElementById("Tempunit2value").innerHTML = TempBottomAns    
    }
    else if(KelvinFromEntered ==  1 && KelvinToEntered == 1){
        valAtTopTemp = document.getElementById("Tempunit1value").textContent;
        TempBottomAns = valAtTopTemp
        document.getElementById("Tempunit2value").innerHTML = TempBottomAns    
    }
    else if(RankineFromEntered ==  1 && RankineToEntered == 1){
        valAtTopTemp = document.getElementById("Tempunit1value").textContent;
        TempBottomAns = valAtTopTemp
        document.getElementById("Tempunit2value").innerHTML = TempBottomAns    
    }
    else if(ReaumurFromEntered ==  1 && ReaumurToEntered == 1){
        valAtTopTemp = document.getElementById("Tempunit1value").textContent;
        TempBottomAns = valAtTopTemp
        document.getElementById("Tempunit2value").innerHTML = TempBottomAns    
    }
    else if(CelsiusFromEntered == 1 && FahrenheitToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(((valAtTopTemp * 9.0 / 5.0) + 32.0))
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = (parseFloat((valAtBottomTemp - 32) * 5/9)).toPrecision(5);
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(CelsiusFromEntered == 1 && KelvinToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(parseInt(valAtTopTemp) + 273.15 )
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(parseInt(valAtBottomTemp) - 273.15 ).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
    }
    else if(CelsiusFromEntered == 1 && RankineToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp * (9/5)) + 491.67);
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(((valAtBottomTemp - 491.67) * 5/9)).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
    }
        
    else if(CelsiusFromEntered == 1 && ReaumurToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp*4)/5);
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp * 1.25) ).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    } 
    else if(FahrenheitFromEntered == 1 && CelsiusToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = (parseFloat((valAtTopTemp - 32) * 5/9)).toPrecision(5);
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(((valAtBottomTemp * 9.0 / 5.0) + 32.0))
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(FahrenheitFromEntered ==  1 && KelvinToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = (parseFloat((valAtTopTemp - 32) * 5 / 9 + 273.15)).toPrecision(5);
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp - 273.15) * 9/5 + 32).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(FahrenheitFromEntered == 1 && RankineToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(parseInt(valAtTopTemp) + 459.67).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(parseInt(valAtBottomTemp) - 459.67).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(FahrenheitFromEntered == 1 && ReaumurToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp - 32) * 4/9).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(parseInt(valAtBottomTemp) - 459.67).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(KelvinFromEntered == 1 && CelsiusToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(parseInt(valAtTopTemp) - 273.15 ).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(parseInt(valAtBottomTemp) + 273.15 )
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(KelvinFromEntered == 1 && FahrenheitToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat( (valAtTopTemp - 273.15) * 9/5 + 32).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(parseInt(valAtBottomTemp) + 273.15 )
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(KelvinFromEntered == 1 && RankineToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat( (valAtTopTemp* 9/5)).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(valAtBottomTemp * 5 /9).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(KelvinFromEntered == 1 && ReaumurToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp - 273.15) / 1.25).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp * 1.25) + 273.15).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(RankineFromEntered == 1 && CelsiusToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(((valAtTopTemp - 491.67) * 5/9)).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp * (9/5)) + 491.67);
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(RankineFromEntered == 1 && FahrenheitToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(parseInt(valAtTopTemp) - 459.67).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat(parseInt(valAtBottomTemp) + 459.67).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(RankineFromEntered == 1 && KelvinToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat(valAtTopTemp * 5 /9).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat( (valAtBottomTemp* 9/5)).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(RankineFromEntered == 1 && ReaumurToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp - 491.67) / 2.25000002).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp* 2.25) + 491.67).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(ReaumurFromEntered == 1 && CelsiusToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp * 1.25)).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp*4)/5);
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(ReaumurFromEntered == 1 && FahrenheitToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat( (valAtTopTemp * 2.25) + 32).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp - 32) * 4/9).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(ReaumurFromEntered == 1 && KelvinToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp * 1.25) + 273.15).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp - 273.15) / 1.25).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }
    else if(ReaumurFromEntered == 1 && RankineToEntered == 1){

        if(enteredInTempTo == 0){
            valAtTopTemp = document.getElementById("Tempunit1value").textContent;
            TempBottomAns = parseFloat((valAtTopTemp* 2.25) + 491.67).toPrecision(5)
            console.log(TempBottomAns);
            document.getElementById("Tempunit2value").innerHTML = TempBottomAns
        }
        else{
            valAtBottomTemp = document.getElementById("Tempunit2value").textContent;
            TempTopAns = parseFloat((valAtBottomTemp - 491.67) / 2.25000002).toPrecision(5)
            console.log(TempTopAns);
            document.getElementById("Tempunit1value").innerHTML = TempTopAns
        }
        
    }


}

for(let i=0;i<=10;i++){

    document.getElementById(`Temp${i}`).addEventListener("click",()=>{
        setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById(`Temp${i}`).style.background  = "none";
        }
        document.getElementById(`Temp${i}`).style.backgroundColor = "#898989";
    })

}

document.getElementById("TempAc").addEventListener("click",()=>{

    if(enteredInTempTo == 0){
        document.getElementById("Tempunit1value").innerHTML = "0"
        TempFrom = ""
    }
    else{
        document.getElementById("Tempunit2value").innerHTML = "0"
        TempTo = ""
    }
    evaluateTemp()

})

document.getElementById("Tempdelete").addEventListener("click",()=>{
    
    TempFrom = TempFrom.slice(0,-1);
    TempTo = TempTo.slice(0,-1);
    if(TempFrom.length == 0 && TempTo.length == 0){
        document.getElementById("Tempunit1value").innerHTML = "0"
        document.getElementById("Tempunit2value").innerHTML = "0"
    }
    else{
        document.getElementById("Tempunit1value").innerHTML  = TempFrom
        document.getElementById("Tempunit2value").innerHTML  = TempTo
    }
    evaluateTemp()

})
 

document.getElementById("TempbackArrow").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"
    document.getElementById("Tempconvertor").style.display = "none"
     
})

document.getElementById("temperature").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "none"
    document.getElementById("Tempconvertor").style.display = "grid"
    document.getElementById("mainCalculator").style.display = "none"
    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "none"
})

// discount conversion

let enteredInDiscount = 0
let originalprice = ""
let discountPercencentageValue  = ""

document.getElementById("discountOriganlPriceValue").addEventListener("click",()=>{
    enteredInDiscount = 0
    document.getElementById("discountOriganlPriceValue").style.color  = "#ec6b21"
    document.getElementById("discountPercencentage").style.color = "#f1f1f1"

})

document.getElementById("discountPercencentage").addEventListener("click",()=>{
    enteredInDiscount = 1
    document.getElementById("discountPercencentage").style.color  = "#ec6b21"
    document.getElementById("discountOriganlPriceValue").style.color = "#f1f1f1"

})

document.getElementById("discount0").addEventListener("click",changeValueOfdiscount.bind(this,0))
document.getElementById("discount1").addEventListener("click",changeValueOfdiscount.bind(this,1))
document.getElementById("discount2").addEventListener("click",changeValueOfdiscount.bind(this,2))
document.getElementById("discount3").addEventListener("click",changeValueOfdiscount.bind(this,3))
document.getElementById("discount4").addEventListener("click",changeValueOfdiscount.bind(this,4))
document.getElementById("discount5").addEventListener("click",changeValueOfdiscount.bind(this,5))
document.getElementById("discount6").addEventListener("click",changeValueOfdiscount.bind(this,6))
document.getElementById("discount7").addEventListener("click",changeValueOfdiscount.bind(this,7))
document.getElementById("discount8").addEventListener("click",changeValueOfdiscount.bind(this,8))
document.getElementById("discount9").addEventListener("click",changeValueOfdiscount.bind(this,9))
document.getElementById("discount10").addEventListener("click",changeValueOfdiscount.bind(this,"."))


function changeValueOfdiscount(discountVal){
    console.log(discountVal);
    
    if(enteredInDiscount == 0){
        originalprice = originalprice.concat(discountVal)
        document.getElementById("discountOriganlPriceValue").innerHTML = originalprice
        // evaluateDiscount()
    }
    else{
        discountPercencentageValue = discountPercencentageValue.concat(discountVal)

        if(discountPercencentageValue < 100){
            document.getElementById("discountPercencentage").innerHTML = discountPercencentageValue
        }
        else{
            discountPercencentageValue = discountPercencentageValue.slice(1,discountPercencentageValue.length)
            document.getElementById("discountPercencentage").innerHTML = discountPercencentageValue
        }

        // evaluateDiscount()
    }
    evaluateDiscount()
}

let finalPriceAns = 0;
let discountSave = 0;
let originalpriceInput ;
function evaluateDiscount(){

    originalpriceInput = (document.getElementById("discountOriganlPriceValue").textContent).trim();
    discountPercencentageValueInput = (document.getElementById("discountPercencentage").textContent).trim();
    console.log(originalpriceInput);
    console.log(discountPercencentageValueInput);
    console.log(discountPercencentageValueInput/100);
    discountSave = parseInt(originalpriceInput) * (discountPercencentageValueInput/100)
    document.getElementById("discountsaveval").innerHTML = discountSave.toFixed(1)
    document.getElementById("discountFinalPrice").innerHTML = parseInt(originalpriceInput) - discountSave

}

document.getElementById("discountAcContainer").addEventListener('click',()=>{

    setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById("discountAcContainer").style.background  = "#2d2d2d";
        }
        
        document.getElementById("discountAcContainer").style.backgroundColor = "#898989";
        

    if(enteredInDiscount == 0){
        document.getElementById("discountOriganlPriceValue").innerHTML = "0"
        originalprice = ""
    }
    else{
        document.getElementById("discountPercencentage").innerHTML = "0"
        discountPercencentageValue = ""
    }

    evaluateDiscount()
})

document.getElementById("discountdelete").addEventListener("click",()=>{
    
    setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById("discountdelete").style.background  = "#2d2d2d";
        }
        
        document.getElementById("discountdelete").style.backgroundColor = "#898989";
        
    if(enteredInDiscount == 0){
        originalprice = originalprice.slice(0,-1);
        if(originalprice.length == 0){
            document.getElementById("discountOriganlPriceValue").innerHTML = "0"
        }
        else{
            document.getElementById("discountOriganlPriceValue").innerHTML = originalprice
        }
    }
    else{
        discountPercencentageValue = discountPercencentageValue.slice(0,-1)
        if(discountPercencentageValue.length == 0){
            document.getElementById("discountPercencentage").innerHTML = "0"
        }
        else{
            document.getElementById("discountPercencentage").innerHTML = discountPercencentageValue
        }
    }
     evaluateTemp()

})

for(let i=0;i<=10;i++){

    document.getElementById(`discount${i}`).addEventListener("click",()=>{
        setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById(`discount${i}`).style.background  = "none";
        }
        document.getElementById(`discount${i}`).style.backgroundColor = "#898989";
    })

}

document.getElementById("discountbackArrow").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"
    document.getElementById("Tempconvertor").style.display = "none"
    document.getElementById("discountConvertor").style.display = "none"
    
})

document.getElementById("discount").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "none"
    document.getElementById("Tempconvertor").style.display = "none"
    document.getElementById("mainCalculator").style.display = "none"
    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "none"
    document.getElementById("discountConvertor").style.display = "grid"

})

// Time Conversion

enteredInTime = 0
 
document.getElementById("Timeunit1value").addEventListener("click",()=>{
    enteredInTime = 0
    document.getElementById("Timeunit1value").style.color = "#ec6b21";
    document.getElementById("Timeunit2value").style.color = "#f1f1f1";
    
})

document.getElementById("Timeunit2value").addEventListener("click",()=>{
    enteredInTime = 1
    document.getElementById("Timeunit2value").style.color = "#ec6b21";
    document.getElementById("Timeunit1value").style.color = "#f1f1f1";
    
})

let yearFromEntered = 1;
let weekFromEntered = 0;
let dayFromEntered = 0;
let hourFromEntered = 0;
let minuteFromEntered = 0;
let secondFromEntered = 0;
let milliSecondFromEntered = 0;
let microSecondFromEntered = 0;
let picoSecondFromEntered = 0;
let yearToEntered = 0;
let weekToEntered = 0;
let dayToEntered = 0;
let hourToEntered = 0;
let minuteToEntered = 0;
let secondToEntered = 1;
let milliSecondToEntered = 0;
let microSecondToEntered = 0;
let picoSecondToEntered  = 0;

document.getElementById("TimeFrom").addEventListener("click",()=>{

    document.getElementById("TimeOptionFrom").style.display = "flex"
    document.getElementById("TimeOptionFrom").classList.add('displayTimeCard')
    document.getElementById("TimeFrom").style.color = "#ec6b21"
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeOptionTo").style.display = "none"
    evaluateTime()
})

document.getElementById("TimeTo").addEventListener("click",()=>{

    document.getElementById("TimeOptionTo").style.display = "flex"
    document.getElementById("TimeOptionTo").classList.add('displayTimeCard')
    document.getElementById("TimeTo").style.color = "#ec6b21"
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeOptionFrom").style.display = "none"
    evaluateTime()

})

document.getElementById("TimeyearFrom").addEventListener("click",()=>{
    yearFromEntered = 1;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1";
    document.getElementById("TimeFromText").innerHTML = "y"
    document.getElementById("unit1Time").innerHTML = "Year"
    evaluateTime()

})

document.getElementById("TimeweekFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 1;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "wk"
    document.getElementById("unit1Time").innerHTML = "Week"
    evaluateTime()

})

document.getElementById("TimedayFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 1;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "d"
    document.getElementById("unit1Time").innerHTML = "Day"
    evaluateTime()

})

document.getElementById("TimehourFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 1;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "h"
    document.getElementById("unit1Time").innerHTML = "Hour"
    evaluateTime()

})

document.getElementById("TimeminuteFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 1;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "min"
    document.getElementById("unit1Time").innerHTML = "Minutes"
    evaluateTime()

})

document.getElementById("TimesecondFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 1;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "s"
    document.getElementById("unit1Time").innerHTML = "Second"
    evaluateTime()

})

document.getElementById("TimemillisecondFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 1;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "ms"
    document.getElementById("unit1Time").innerHTML = "Millisecond"
    evaluateTime()

})

document.getElementById("TimemicrosecondFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 1;
    picoSecondFromEntered = 0;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "&#181;s"
    document.getElementById("unit1Time").innerHTML = "Microsecond"
    evaluateTime()

})

document.getElementById("TimepicosecondFrom").addEventListener("click",()=>{
    yearFromEntered = 0;
    weekFromEntered = 0;
    dayFromEntered = 0;
    hourFromEntered = 0;
    minuteFromEntered = 0;
    secondFromEntered = 0;
    milliSecondFromEntered = 0;
    microSecondFromEntered = 0;
    picoSecondFromEntered = 1;
    document.getElementById("TimeOptionFrom").style.display = "none";
    document.getElementById("TimeFrom").style.color = "#f1f1f1"
    document.getElementById("TimeFromText").innerHTML = "ps"
    document.getElementById("unit1Time").innerHTML = "Picosecond"
    evaluateTime()

    
})

document.getElementById("TimeyearTo").addEventListener("click",()=>{
    yearToEntered = 1;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "y"
    document.getElementById("unit2Time").innerHTML = "Year"
    evaluateTime()

})

document.getElementById("TimeweekTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 1;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "wk"
    document.getElementById("unit2Time").innerHTML = "Week"
    evaluateTime()

})

document.getElementById("TimedayTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 1;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "d"
    document.getElementById("unit2Time").innerHTML = "Day"
    evaluateTime()

})

document.getElementById("TimehourTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 1;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "h"
    document.getElementById("unit2Time").innerHTML = "Hour"
    evaluateTime()

})

document.getElementById("TimeminuteTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 1;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "min"
    document.getElementById("unit2Time").innerHTML = "Minutes"
    evaluateTime()

})

document.getElementById("TimesecondTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 1;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "s"
    document.getElementById("unit2Time").innerHTML = "Second"
    evaluateTime()

})

document.getElementById("TimemillisecondTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 1;
    microSecondToEntered = 0;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "ms"
    document.getElementById("unit2Time").innerHTML = "Millisecond"
    evaluateTime()

})

document.getElementById("TimemicrosecondTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 1;
    picoSecondToEntered  = 0;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "&#181;s"
    document.getElementById("unit2Time").innerHTML = "Microsecond"
    evaluateTime()

})

document.getElementById("TimepicosecondTo").addEventListener("click",()=>{
    yearToEntered = 0;
    weekToEntered = 0;
    dayToEntered = 0;
    hourToEntered = 0;
    minuteToEntered = 0;
    secondToEntered = 0;
    milliSecondToEntered = 0;
    microSecondToEntered = 0;
    picoSecondToEntered  = 1;
    document.getElementById("TimeOptionTo").style.display = "none";
    document.getElementById("TimeTo").style.color = "#f1f1f1"
    document.getElementById("TimeToText").innerHTML = "ps"
    document.getElementById("unit2Time").innerHTML = "Picosecond"
    evaluateTime()

})


document.getElementById("Time0").addEventListener("click",changeValueOfTime.bind(this,0))
document.getElementById("Time1").addEventListener("click",changeValueOfTime.bind(this,1))
document.getElementById("Time2").addEventListener("click",changeValueOfTime.bind(this,2))
document.getElementById("Time3").addEventListener("click",changeValueOfTime.bind(this,3))
document.getElementById("Time4").addEventListener("click",changeValueOfTime.bind(this,4))
document.getElementById("Time5").addEventListener("click",changeValueOfTime.bind(this,5))
document.getElementById("Time6").addEventListener("click",changeValueOfTime.bind(this,6))
document.getElementById("Time7").addEventListener("click",changeValueOfTime.bind(this,7))
document.getElementById("Time8").addEventListener("click",changeValueOfTime.bind(this,8))
document.getElementById("Time9").addEventListener("click",changeValueOfTime.bind(this,9))
document.getElementById("Time10").addEventListener("click",changeValueOfTime.bind(this,"."))

TimeFrom = "";
TimeTo = "";
function changeValueOfTime(Timeval){
    console.log(Timeval);
    evaluateTime()
    if(enteredInTime ==0){  
        TimeFrom = TimeFrom.concat(Timeval)
        console.log("Top : " + TimeFrom);
        document.getElementById("Timeunit1value").innerHTML = TimeFrom
        evaluateTime()
    }
    else{
        TimeTo = TimeTo.concat(Timeval)
        console.log("Bottom : " + TimeTo);
        document.getElementById("Timeunit2value").innerHTML = TimeTo
        evaluateTime()
    }
    
}

timeTopValue = ""
timeBottomValue = ""

function evaluateTime(){

    if(yearFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }

    }
    else if(weekFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(dayFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }

    }
    else if(hourFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(minuteFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(secondFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(milliSecondFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(microSecondFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(picoSecondFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = timeTopValue
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = timeBottomValue
        }
    }
    else if(yearFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 52.1428571).toFixed(4)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.0191780822 <= 191780822){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "0.0191780822").toFixed(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "0.0191780822").toExponential(4)
            }
        }
    }
    else if(yearFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(parseInt(timeTopValue * 365) < 14322600){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 365)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 365).toExponential(4)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.00273972603 <= 2739726){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "0.00273972603").toFixed(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "0.00273972603").toExponential(3)
            }
        }
        
    }
    else if(yearFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if((timeTopValue * 8760) <= 87600000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 8760)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 8760).toExponential(4)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.000114155252  < 114155252){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.000114155252).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.000114155252).toExponential(3)
            }
        }
    }
    else if(yearFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if((timeTopValue * 525600) <= 5256000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 525600)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 525600).toExponential(4)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 55){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.90258752e-6).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.90258752e-6).toExponential(3)
            }
        }

    }
    else if(yearFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if((timeTopValue * 31536000) <= 31536000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 31536000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 31536000).toExponential(4)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 100000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3.1709792e-8).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3.1709792e-8).toExponential(3)
            }
        }

    }
    else if(yearFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "3.1536e10").toExponential(4)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 1000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3.1709792e-11).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3.1709792e-11).toExponential(3)
            }
        }
    }
    else if(yearFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "3.1536e13").toExponential(4)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 1000000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3.1709792e-14).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3.1709792e-14).toExponential(3)
            }
        }
    }
    else if(yearFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "3.1536e19").toExponential(4)
        }
        else{
            timeTopValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeTopValue  * 3.1709792e-20).toExponential(3)
        }
    }
    else if(weekFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.0191780822 <= 191780822){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "0.0191780822").toFixed(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "0.0191780822").toExponential(4)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 52.1428571).toFixed(4)
        }
    }
    else if(weekFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 7 <= 700000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "7")
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "7").toExponential(0)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.142857143 <= 142857143){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.142857143).toFixed(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.142857143).toExponential(3)
            }
        }
    }
    else if(weekFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 168 <= 168000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "168")
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "168").toExponential(2)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.00595238095  < 595238000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.00595238095).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.00595238095).toExponential(3)
            }
        }

    }
    else if(weekFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 10080 <= 100800000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "10080")
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "10080").toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue == 1){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * "9.92063492e-5").toExponential(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * "9.92063492e-5").toPrecision(3)
            }
        }

    }
    else if(weekFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 604800 <= 6048000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "604800")
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "604800").toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 100){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.65343915e-6).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.65343915e-6).toExponential(3)
            }
        }

    }
    else if(weekFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 60480000 <= 604800000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "604800000")
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "604800000").toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 100000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * "1.65343915e-9").toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * "1.65343915e-9").toExponential(3)
            }
        }
    }
    else if(weekFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "6.048e11").toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 100000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * "1.65343915e-9").toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * "1.65343915e-9").toExponential(3)
            }
        }
    }
    else if(weekFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "6.048e17").toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.65343915e-18).toExponential(3)
        }
    }
    else if(dayFromEntered == 1 && yearToEntered ==1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.00273972603 <= 2739726){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "0.00273972603").toFixed(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "0.00273972603").toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(parseInt(timeBottomValue * 365) < 14322600){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 365)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 365).toExponential(4)
            }
        }
    } 
    else if(dayFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.142857143 <= 142857143){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.142857143).toFixed(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.142857143).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 7 <= 700000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "7")
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "7").toExponential(0)
            }
        }
    }  
    else if(dayFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 24  <= 240000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 24)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 24).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.041666667  < 416666670){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.041666667).toFixed(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 0.041666667).toExponential(3)
            }
        }
    }
    else if(dayFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 1440  <= 1440000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 1440).toFixed(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 1440).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.000694444 < 0.000694444444e8){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.000694444).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.000694444).toExponential(3)
            }
        }
    }
    else if(dayFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 86400  <= 864000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 86400)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 86400).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 10){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.15740741e-5).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.15740741e-5).toExponential(3)
            }
        }
    }
    else if(dayFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 86400000  <= 8640000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 86400000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 86400000).toExponential(3)
            }
        }
        else{
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 10000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-8).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-8).toExponential(3)
            }
        }
    }
    else if(dayFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "8.64e10").toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 1000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.15740741e-11).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.15740741e-11).toExponential(3)
            }
        }
    }
    else if(dayFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue * "8.64e16").toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.15740741e-17).toExponential(3)
        }
    }
    else if(hourFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.000114155252  < 114155252){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.000114155252).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.000114155252).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if((timeBottomValue * 8760) <= 87600000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 8760)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 8760).toExponential(4)
            }
        }
    }
    else if(hourFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.00595238095  < 595238000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.00595238095).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.00595238095).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 168 <= 168000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "168")
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "168").toExponential(2)
            }
        }
    }
    else if(hourFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.041666667  < 416666670){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.041666667).toFixed(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 0.041666667).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 24  <= 240000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 24)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 24).toExponential(3)
            }
        }
    }
    else if(hourFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 60  <= 6000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 60 )
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 60).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.016666667 < 0.016666667e8){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.016666667).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.016666667).toExponential(3)
            }
        }

    }
    else if(hourFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 3600  <= 36000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 3600)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3600).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue < 1000000000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.00027777778).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.00027777778).toExponential(3)
            }
        }

    }
    else if(hourFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 3600000  <= 36000000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue * 3600000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3600000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 1000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 2.77777778e-7).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 2.77777778e-7).toExponential(3)
            }
        }
    }
    else if(hourFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3600000000).toExponential(3) 
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 1000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 2.77777778e-10).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 2.77777778e-10).toExponential(3)
            }
        }
    }
    else if(hourFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3600000000000000).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 2.777777778e-16).toExponential(3)
        }
    }
    else if(minuteFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 55){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.90258752e-6).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.90258752e-6).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if((timeBottomValue * 525600) <= 5256000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 525600)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 525600).toExponential(4)
            }
        }

    }
    else if(minuteFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue == 1){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * "9.92063492e-5").toExponential(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * "9.92063492e-5").toPrecision(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 10080 <= 100800000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "10080")
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "10080").toExponential(3)
            }
        }
    }
    else if(minuteFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.000694444 < 0.000694444444e8){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.000694444).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.000694444).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 1440  <= 1440000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 1440)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 1440).toExponential(3)
            }
        }
    }
    else if(minuteFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.016666667 < 0.016666667e8){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.016666667).toPrecision(3)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.016666667).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 60  <= 6000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 60 )
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 60).toExponential(3)
            }
        }
    }
    else if(minuteFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 60 < 6e9){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 60)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 60).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue < 1000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.0166666667).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.0166666667).toExponential(3)
            }
        }
    }
    else if(minuteFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 60000 < 6e9){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 60000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 60000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 5){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.666666667e-5).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.666666667e-5).toExponential(3)
            }
        }
    }
    else if(minuteFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 60000000 < 6e9){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 60000000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 60000000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 10000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.666666667e-8).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.666666667e-8).toExponential(3)
            }
        }
    }
    else if(minuteFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 6e13).toExponential(2)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1.66666667e-14).toExponential(3)
        }
    }
    else if(secondFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 100000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-8).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-8).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if((timeBottomValue * 31536000) <= 31536000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 31536000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 31536000).toExponential(4)
            }
        }
    }
    else if(secondFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 100){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.65343915e-6).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.65343915e-6).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 604800 <= 6048000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "604800")
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "604800").toExponential(3)
            }
        }
    }
    else if(secondFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 10){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-5).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-5).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 86400  <= 864000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 86400)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 86400).toExponential(3)
            }
        }
    }
    else if(secondFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue < 1000000000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.00027777778).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.00027777778).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 3600  <= 36000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 3600)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3600).toExponential(3)
            }
        }
    }
    else if(secondFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue < 1000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.0166666667).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.0166666667).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 60 < 6e9){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 60)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 60).toExponential(3)
            }
        }

    }
    else if(secondFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue < 1000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 0.001 < 1e9){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.001).toFixed(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.001).toExponential(3)
            }
        }
    }
    else if(secondFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue < 1000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue > 100){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1e-6).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1e-6).toExponential(3)
            }
        }
    }
    else if(secondFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000000000000).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1e-12).toExponential(2)
        }
    }
    else if(milliSecondFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 1000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-11).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-11).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "3.1536e10").toExponential(4)
        }
    }
    else if(milliSecondFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 100000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * "1.65343915e-9").toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * "1.65343915e-9").toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 60480000 <= 604800000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "604800000")
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "604800000").toExponential(3)
            }
        }

    }
    else if(milliSecondFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 10000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-8).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-8).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 86400000  <= 8640000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 86400000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 86400000).toExponential(3)
            }
        }
    }
    else if(milliSecondFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 1000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 2.77777778e-7).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 2.77777778e-7).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 3600000  <= 36000000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * 3600000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3600000).toExponential(3)
            }
        }
    }
    else if(milliSecondFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 5){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.666666667e-5).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.666666667e-5).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 60000000 < 6e9){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 60000000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 60000000).toExponential(3)
            }
        }

    }
    else if(milliSecondFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 0.001 < 1e9){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.001).toPrecision(1)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.001).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue < 1000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000).toExponential(3)
            }
        }

    }
    else if(milliSecondFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue * 1000 < 1e9){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue < 100000000000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.001)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 0.001).toExponential(3)
            }
        }

    }
    else if(milliSecondFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1e9).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1e-9).toExponential(2)
        }
    }
    else if(microSecondFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 1000000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-14).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-14).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "3.1536e13").toExponential(4)
        }
    }
    else if(microSecondFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 100000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.65343915e-12).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.65343915e-12).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "6.048e11").toExponential(3)
        }

    }
    else if(microSecondFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 1000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-11).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-11).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "8.64e10").toExponential(3)
        }
    }
    else if(microSecondFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 1000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 2.77777778e-10).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 2.77777778e-10).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3600000000).toExponential(3) 
        }
    }
    else if(microSecondFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 10000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.666666667e-8).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.666666667e-8).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 60000000 < 6e9){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 60000000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 60000000).toExponential(3)
            }
        }

    }
    else if(microSecondFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue > 100){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1e-6).toPrecision(2)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1e-6).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue < 1000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000000).toExponential(3)
            }
        }
    }
    else if(microSecondFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue < 100000000000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.001)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 0.001).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue * 1000 < 1e9){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000).toExponential(3)
            }
        }
    }
    else if(microSecondFromEntered == 1 && picoSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            if(timeTopValue < 1000){
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000000)
            }
            else{
                document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1000000).toExponential(3)
            }
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1e-6).toExponential(3)
        }
    }
    else if(picoSecondFromEntered == 1 && yearToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 3.1709792e-20).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "3.1536e19").toExponential(4)
        }
    }
    else if(picoSecondFromEntered == 1 && weekToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.65343915e-18).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "6.048e17").toExponential(3)
        }
    }
    else if(picoSecondFromEntered == 1 && dayToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.15740741e-17).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue * "8.64e16").toExponential(3)
        }
    }
    else if(picoSecondFromEntered == 1 && hourToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 2.777777778e-16).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 3600000000000000).toExponential(3)
        }
    }
    else if(picoSecondFromEntered == 1 && minuteToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1.66666667e-14).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 6e13).toExponential(2)
        }
    }
    else if(picoSecondFromEntered == 1 && secondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1e-12).toExponential(2)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000000000000).toExponential(3)
        }
    }
    else if(picoSecondFromEntered == 1 && milliSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1e-9).toExponential(2)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1e9).toExponential(3)
        }
    }
    else if(picoSecondFromEntered == 1 && microSecondToEntered == 1){
        if(enteredInTime == 0){
            timeTopValue = document.getElementById("Timeunit1value").textContent;
            document.getElementById("Timeunit2value").innerHTML = (timeTopValue  * 1e-6).toExponential(3)
        }
        else{
            timeBottomValue = document.getElementById("Timeunit2value").textContent;
            if(timeBottomValue < 1000){
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000000)
            }
            else{
                document.getElementById("Timeunit1value").innerHTML = (timeBottomValue  * 1000000).toExponential(3)
            }
        }

    }

}

document.getElementById("TimeAcContainer").addEventListener("click",()=>{

    if(enteredInTime == 0){
        document.getElementById("Timeunit1value").innerHTML = 0
        document.getElementById("Timeunit2value").innerHTML = 0
        TimeFrom = ""
    }
    else{
        document.getElementById("Timeunit1value").innerHTML = 0
        document.getElementById("Timeunit2value").innerHTML = 0
        TimeTo = ""
    }
    // evaluateTime()
})

document.getElementById("Timedelete").addEventListener("click",()=>{
    TimeFrom = TimeFrom.slice(0,-1);
    TimeTo = TimeTo.slice(0,-1);
    if(TimeFrom.length == 0 && TimeTo.length == 0){
        document.getElementById("Timeunit1value").innerHTML = "0"
        document.getElementById("Timeunit2value").innerHTML = "0"
        evaluateTime()
    }
    else{
        document.getElementById("Timeunit1value").innerHTML  = TimeFrom
        document.getElementById("Timeunit2value").innerHTML  = TimeTo
        evaluateTime()
    }
    
})

for(let i=0;i<=10;i++){

    document.getElementById(`Time${i}`).addEventListener("click",()=>{
        setTimeout(clickToGray,100)
        function clickToGray(){
            document.getElementById(`Time${i}`).style.background  = "none";
        }
        document.getElementById(`Time${i}`).style.backgroundColor = "#898989";
    })

}

document.getElementById("TimebackArrow").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "grid"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"
    document.getElementById("Tempconvertor").style.display = "none"
    document.getElementById("discountConvertor").style.display = "none"
    document.getElementById("TimeConvertor").style.display = "none"
    
})

document.getElementById("time").addEventListener("click",()=>{

    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "grid"
    document.getElementById("more").style.color = "#ec6b21"
    document.getElementById("calculatePage").style.color = "white"
    document.getElementById("minimize").style.visibility = "hidden"
    document.getElementById("history").style.visibility = "hidden" 
    document.getElementById("dataconvertor").style.display = "none"
    document.getElementById("conversion").style.display = "none"
    document.getElementById("Tempconvertor").style.display = "none"
    document.getElementById("mainCalculator").style.display = "none"
    document.getElementById("bmiconvertor").style.display = "none"
    document.getElementById("topOptions").style.display = "none"
    document.getElementById("discountConvertor").style.display = "none"
    document.getElementById("TimeConvertor").style.display = "grid"

})

