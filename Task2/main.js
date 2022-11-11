var numbers = [1,-1,0,-3,5];

var sum = 0;

for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
        sum += numbers[i];
    }
}

var printResult=document.getElementById("printresult");
printResult.innerHTML=sum;