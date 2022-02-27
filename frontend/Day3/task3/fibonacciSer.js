

function fabser(){
  var a=0;
  var b=1;
  var num1=document.getElementById("num").value;
  for(var i=0;i<=num1;i++){
    console.log(a);
    fab=a+b;
    a=b;
    b=fab;
  }
}
