var prime=true;
function check(){
    var picknum=document.getElementById("number1").value;
    for (var i = 2; i < picknum; i++) {
        if (picknum % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime== true){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }
}