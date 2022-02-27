
function login(){

    var nuser=document.getElementById("user").value;
    var npass=document.getElementById("pass").value;
    if(nuser=="xyz" && npass=="101"){
        console.log("Successful login");
    }
    else{
        console.log("Invalid");
    }
}