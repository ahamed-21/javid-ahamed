var value;

function clicked0() {
    value = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = value + 0;

}

function clicked1() {
    value = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = value + 1;
}

function clickedClr() {
    document.getElementById("res").innerHTML = "";
}

function clickedSum() {
        value = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = value + "+";
   
}

function clickedSub() {
     value = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = value + "-";

}

function clickedMul() {
      value = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = value + "*";
}

function clickedDiv() {
      value = document.getElementById("res").innerHTML;
    document.getElementById("res").innerHTML = value + "/";
}
function clickedEql() {
     value = document.getElementById("res").innerHTML;
     var arr = value.split("");
     var indexOfOperator;
     var operatortype;
     var str1 = "";
     var str2 = "";
     var operator = arr.map((ar, index)=>{
         if(ar === "+" | ar === "-" | ar === "*" | ar === "/")
         {
             indexOfOperator = index;
             operatortype = ar;
         }
     })
     for(i=0;i<indexOfOperator;i++){
         
     str1 = str1+arr[i];
     }

     for(i=indexOfOperator+1;i<arr.length;i++){
         str2 = str2+arr[i];
     }
     var decimal1 = parseInt(str1, 2);
     var decimal2 = parseInt(str2, 2);
    if(operatortype == "+"){
            var resultdecimal = decimal1+decimal2;

    }
    else if(operatortype == "-"){
        var resultdecimal = decimal1-decimal2;

    }
    else if(operatortype == "*"){
        var resultdecimal = decimal1*decimal2;

    }
      else if(operatortype == "/"){
        var resultdecimal = decimal1/decimal2;

    }
    var finalresult = parseInt(resultdecimal,10).toString(2);
    document.getElementById("res").innerHTML = finalresult;


}
      