function submit()
{ 
    var checkBox= document.getElementById("checkbox");

 if (checkBox.checked == true){


 var a =  document.getElementById("caddress").value;
 document.getElementById("paddress").innerHTML=a;
 }
 else{
     document.getElementById("paddress").value = "";
 }
}