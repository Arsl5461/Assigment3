
function checkValue(){
let value=document.getElementById("input").value;
let print=document.getElementById("printvalue");
if(value>0){
print.innerHTML="The number is positive"
}
else if(value<0){
    print.innerHTML="The number is negative"
}
else{
    print.innerHTML="The number is zero";
}
}