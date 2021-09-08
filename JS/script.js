function displayBox(num){
    ipt.value+=num;
}

function evalExpr(){
    let val=ipt.value;
    let res=eval(val);
    ipt.value=res;
}


function clr(){
    
    ipt.value=" ";
}

