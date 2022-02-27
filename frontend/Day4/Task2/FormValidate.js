


function submit()
{ 
    var fname=document.getElementById("validationDefault01").value;
    var lname=document.getElementById("validationDefault02").value;
    var username=document.getElementById("validationDefaultUsername").value;
    var city=document.getElementById("validationDefault03").value;
    var zip=document.getElementById("validationDefault05").value;
    var min=5;
    var max=15;

    if (isNaN(zip)){
        document.getElementById("zip").innerHTML="Enter Numeric value only";
      }else{
        return true;
        }

}