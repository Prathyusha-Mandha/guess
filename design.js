var c=0;
var a=Math.round(((Math.random()*100)+1));
document.getElementById("click").onclick=function(){
    var b=parseInt(document.getElementById("n1").value);
    if(a==b)
    {
        document.getElementById("result").textContent=("Congrats!! You have got the number in "+c+" tries");
    }
    else if(b<a){
        c++;
        document.getElementById("result").textContent=(c+" Try with greater number");
    }
    else{
        c++;
        document.getElementById("result").textContent=(c+" Try with lesser number");
    }
}