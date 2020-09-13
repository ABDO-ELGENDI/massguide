function calc(){
    var weight=parseFloat(document.getElementById("weight").value);
    var length=parseFloat(document.getElementById("length").value)/100;
    var result=weight/Math.pow(length,2);
    document.getElementById("resultnum").innerText=result;
    if(result<15){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText=" نقص حاد جدا";
        resulttext.style.color="red";
    }
    else if(result>15 && result<16){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText="نقص حاد";
        resulttext.style.color="red";
    }
    else if(result>16 && result<18.5){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText="نقص فى الوزن";
        resulttext.style.color="yellow";
    }
    else if(result>18.5 && result<25){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText="وزن طبيعى";
        resulttext.style.color="greenyellow";
    }
    else if(result>25 && result<30){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText="زيادة فى الوزن";
        resulttext.style.color="greenyellow";
    }
    else if(result>30 && result<35){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText=" سمنة خفيفة";
        resulttext.style.color="yellow";
    }
    else if(result>35 && result<40){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText="سمنة متوسطة";
        resulttext.style.color="red";
    }
    else if(result>40){
        var resulttext=document.getElementById("resulttext");
        resulttext.innerText="سمنة مفرطة";
        resulttext.style.color="red";
    }
}