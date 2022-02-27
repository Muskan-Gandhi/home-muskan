
function age(){

    var dob=document.getElementById("dob").value;
    console.log(dob);
    var currentdate=new Date();
    var birthdate= new Date(dob);
    var year=currentdate.getFullYear()-birthdate.getFullYear();
    console.log(year);
    document.getElementById("result").innerHTML=Math.abs(year);
}