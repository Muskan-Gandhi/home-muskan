

function check(){
    var word1=document.getElementById("word1").value;
    var Count = 0;
    for (var position = 0; position < word1.length; position++) 
    {
         Count += 1;
    }
     console.log(Count);
}