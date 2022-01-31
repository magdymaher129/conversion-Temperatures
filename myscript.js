var result=document.getElementById("result")
var temCel=document.getElementById("cel")
var radio1 =document.getElementById("cel2")
var radio2 =document.getElementById("feh")



var btn =document.getElementById("btn")
btn.addEventListener('click',function(){
    var c=(( parseInt ( temCel.value)*9/5)+32)
    var f= (( parseInt ( temCel.value) -32)*5)/9
     if (radio2.checked ){

         result.innerHTML="Temperature in Celsius= "+f.toFixed(1)
     }
     else if (radio1.checked ){

        result.innerHTML="Temperature in Fehrenhite= "+c.toFixed(1)
    }

     
})