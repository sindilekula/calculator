let sum = "";

function buildSum(char){
    sum += char;
    document.getElementById("sum").innerHTML = sum;
}

function evaluateSum(){
    sum = eval(sum);
    document.getElementById("sum").innerHTML = sum;
}

function reset(){
    sum="";
    document.getElementById("sum").innerHTML = sum;
}